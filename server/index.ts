import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "./routes/events";
import {
  getLinks,
  getLinkById,
  createLink,
  updateLink,
  deleteLink,
  reorderLinks,
} from "./routes/links";
import {
  getSocialMediaLinks,
  getSocialMediaLinkById,
  createSocialMediaLink,
  updateSocialMediaLink,
  deleteSocialMediaLink,
} from "./routes/social-media";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // ===== Events/Series Routes =====
  app.get("/api/events", getEvents);
  app.get("/api/events/:id", getEventById);
  app.post("/api/events", createEvent);
  app.put("/api/events/:id", updateEvent);
  app.delete("/api/events/:id", deleteEvent);

  // ===== Button Links Routes =====
  app.get("/api/links", getLinks);
  app.get("/api/links/:id", getLinkById);
  app.post("/api/links", createLink);
  app.put("/api/links/:id", updateLink);
  app.delete("/api/links/:id", deleteLink);
  app.post("/api/links/reorder", reorderLinks);

  // ===== Social Media Links Routes =====
  app.get("/api/social-media", getSocialMediaLinks);
  app.get("/api/social-media/:id", getSocialMediaLinkById);
  app.post("/api/social-media", createSocialMediaLink);
  app.put("/api/social-media/:id", updateSocialMediaLink);
  app.delete("/api/social-media/:id", deleteSocialMediaLink);

  return app;
}
