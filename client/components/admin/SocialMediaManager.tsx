import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SocialMediaLink } from "@shared/api";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Edit2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PLATFORM_ICONS: Record<string, string> = {
  twitter: "𝕏",
  instagram: "📷",
  facebook: "f",
  tiktok: "♪",
  youtube: "▶",
  linkedin: "in",
};

type Platform = "twitter" | "instagram" | "facebook" | "tiktok" | "youtube" | "linkedin";

export function SocialMediaManager() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    platform: "twitter" as Platform,
    url: "",
  });

  // Fetch social media links
  const { data: socialResponse, isLoading } = useQuery({
    queryKey: ["social-media"],
    queryFn: async () => {
      const res = await fetch("/api/social-media");
      if (!res.ok) throw new Error("Failed to fetch social media links");
      return res.json();
    },
  });

  const socialLinks = socialResponse?.data || [];

  // Create social media link mutation
  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/social-media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to create link");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["social-media"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "Social media link added successfully" });
    },
    onError: (error: Error) => {
      toast({ title: error.message || "Failed to add link", variant: "destructive" });
    },
  });

  // Update social media link mutation
  const updateMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch(`/api/social-media/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to update link");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["social-media"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "Social media link updated successfully" });
    },
    onError: (error: Error) => {
      toast({ title: error.message || "Failed to update link", variant: "destructive" });
    },
  });

  // Delete social media link mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/social-media/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete link");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["social-media"] });
      toast({ title: "Social media link deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete link", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      platform: "twitter",
      url: "",
    });
    setEditingId(null);
  };

  const handleEdit = (link: SocialMediaLink) => {
    setEditingId(link.id);
    setFormData({
      platform: link.platform,
      url: link.url,
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

  const existingPlatforms = new Set(socialLinks.map((link: SocialMediaLink) => link.platform));
  const availablePlatforms = Object.keys(PLATFORM_ICONS).filter(
    (p) => !existingPlatforms.has(p) || (editingId && socialLinks.find((l: SocialMediaLink) => l.id === editingId)?.platform === p),
  ) as Platform[];

  if (isLoading) {
    return <div className="text-center text-foreground/50">Loading social media links...</div>;
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
            Add Social Media Link
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Link" : "Add Social Media Link"}</DialogTitle>
            <DialogDescription>
              {editingId ? "Update social media link" : "Add a new social media profile link"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Platform
              </label>
              <Select
                value={formData.platform}
                onValueChange={(value: Platform) =>
                  setFormData({ ...formData, platform: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availablePlatforms.map((platform) => (
                    <SelectItem key={platform} value={platform}>
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Profile URL
              </label>
              <Input
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://..."
                type="url"
                required
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
              <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                {editingId ? "Update Link" : "Add Link"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Social Media Links Table */}
      {socialLinks.length === 0 ? (
        <div className="text-center py-8 text-foreground/50">
          No social media links yet. Add your first profile.
        </div>
      ) : (
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Icon</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {socialLinks.map((link: SocialMediaLink) => (
                <TableRow key={link.id}>
                  <TableCell className="text-xl">{PLATFORM_ICONS[link.platform]}</TableCell>
                  <TableCell className="font-medium capitalize">{link.platform}</TableCell>
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
    </div>
  );
}
