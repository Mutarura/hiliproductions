import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ButtonLink } from "@shared/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Edit2, Plus, GripVertical } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LinksManager() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    label: "",
    url: "",
    icon: "🔗",
  });

  // Fetch links
  const { data: linksResponse, isLoading } = useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const res = await fetch("/api/links");
      if (!res.ok) throw new Error("Failed to fetch links");
      return res.json();
    },
  });

  const links = linksResponse?.data || [];

  // Create link mutation
  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create link");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "Link created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create link", variant: "destructive" });
    },
  });

  // Update link mutation
  const updateMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch(`/api/links/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update link");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "Link updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update link", variant: "destructive" });
    },
  });

  // Delete link mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/links/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete link");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      toast({ title: "Link deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete link", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      label: "",
      url: "",
      icon: "🔗",
    });
    setEditingId(null);
  };

  const handleEdit = (link: ButtonLink) => {
    setEditingId(link.id);
    setFormData({
      label: link.label,
      url: link.url,
      icon: link.icon || "🔗",
    });
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center text-foreground/50">Loading links...</div>
    );
  }

  return (
    <div className="space-y-4">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
            className="mb-4"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Link
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit Link" : "Create New Link"}
            </DialogTitle>
            <DialogDescription>
              {editingId ? "Update link details" : "Add a new button link"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Label
              </label>
              <Input
                value={formData.label}
                onChange={(e) =>
                  setFormData({ ...formData, label: e.target.value })
                }
                placeholder="Button label (e.g., Watch Live)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                URL
              </label>
              <Input
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
                placeholder="https://example.com"
                type="url"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Icon (emoji)
              </label>
              <Input
                value={formData.icon}
                onChange={(e) =>
                  setFormData({ ...formData, icon: e.target.value })
                }
                placeholder="📺"
                maxLength={2}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {editingId ? "Update Link" : "Create Link"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Links Table */}
      {links.length === 0 ? (
        <div className="text-center py-8 text-foreground/50">
          No links yet. Create one to get started.
        </div>
      ) : (
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Icon</TableHead>
                <TableHead>Label</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {links.map((link: ButtonLink) => (
                <TableRow key={link.id}>
                  <TableCell>
                    <GripVertical className="w-4 h-4 text-foreground/40" />
                  </TableCell>
                  <TableCell className="text-xl">{link.icon}</TableCell>
                  <TableCell className="font-medium">{link.label}</TableCell>
                  <TableCell className="text-foreground/70 truncate max-w-xs">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {link.url}
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(link)}
                      className="mr-2"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteMutation.mutate(link.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <p className="text-xs text-foreground/50 mt-4">
        Note: Drag-and-drop reordering will be implemented soon. Links are
        currently displayed in order of creation.
      </p>
    </div>
  );
}
