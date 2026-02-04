import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventsManager } from "@/components/admin/EventsManager";
import { LinksManager } from "@/components/admin/LinksManager";
import { SocialMediaManager } from "@/components/admin/SocialMediaManager";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-foreground/70">
            Manage events, series, links, and social media content for HILI.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="events">Events & Series</TabsTrigger>
            <TabsTrigger value="links">Button Links</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Events & Series</CardTitle>
                <CardDescription>
                  Create, edit, and delete events and creator series. Mark
                  events with ticket links.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EventsManager />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Links Tab */}
          <TabsContent value="links" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Button Links</CardTitle>
                <CardDescription>
                  Create and manage navigation buttons and call-to-action links.
                  Reorder as needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LinksManager />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Social Media Links</CardTitle>
                <CardDescription>
                  Update social media profile links for all platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SocialMediaManager />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
