import { RequestHandler } from "express";
import { CreatorSeriesEvent, ContentListResponse, ContentItemResponse } from "@shared/api";

// In-memory storage - Replace with database later
let eventsStore: CreatorSeriesEvent[] = [
  {
    id: "1",
    title: "Creator Spotlight Live",
    type: "series",
    description: "Weekly live shows featuring East Africa's most talented creators bringing stories to life.",
    tags: ["Live", "Creator-Led", "Weekly"],
    gradient: "from-primary/30 to-secondary/20",
    icon: "🎬",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Festival Live Coverage",
    type: "event",
    description: "Real-time broadcast of major cultural festivals across East Africa with exclusive behind-the-scenes content.",
    tags: ["Live Event", "Cultural", "Exclusive"],
    gradient: "from-secondary/30 to-primary/20",
    icon: "🎉",
    ticketUrl: "https://example.com/tickets/festival",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Music & Motion Nights",
    type: "series",
    description: "A digital-first music and performance series celebrating African artists and emerging talent.",
    tags: ["Music", "Performance", "Digital"],
    gradient: "from-yellow-500/20 to-primary/20",
    icon: "🎵",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Community Conversations",
    type: "event",
    description: "Intimate roundtable discussions bringing creators, community leaders, and influencers together.",
    tags: ["Community", "Live", "Dialogue"],
    gradient: "from-primary/25 to-yellow-500/15",
    icon: "💬",
    ticketUrl: "https://example.com/tickets/community",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Digital Arts Showcase",
    type: "series",
    description: "Monthly exhibition of digital creations from animators, designers, and digital artists across Africa.",
    tags: ["Digital", "Arts", "Monthly"],
    gradient: "from-secondary/25 to-primary/20",
    icon: "🎨",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Get all events/series
export const getEvents: RequestHandler = (req, res) => {
  const response: ContentListResponse<CreatorSeriesEvent> = {
    data: eventsStore,
    total: eventsStore.length,
  };
  res.json(response);
};

// Get single event by ID
export const getEventById: RequestHandler = (req, res) => {
  const { id } = req.params;
  const event = eventsStore.find((e) => e.id === id);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  const response: ContentItemResponse<CreatorSeriesEvent> = { data: event };
  res.json(response);
};

// Create new event/series
export const createEvent: RequestHandler = (req, res) => {
  const { title, type, description, tags, gradient, icon, poster, ticketUrl } = req.body;

  if (!title || !type || !description) {
    return res.status(400).json({ error: "Missing required fields: title, type, description" });
  }

  const newEvent: CreatorSeriesEvent = {
    id: Date.now().toString(),
    title,
    type,
    description,
    tags: tags || [],
    gradient: gradient || "from-primary/30 to-secondary/20",
    icon: icon || "📺",
    poster,
    ticketUrl,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  eventsStore.push(newEvent);

  const response: ContentItemResponse<CreatorSeriesEvent> = { data: newEvent };
  res.status(201).json(response);
};

// Update event/series
export const updateEvent: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { title, type, description, tags, gradient, icon, poster, ticketUrl } = req.body;

  const eventIndex = eventsStore.findIndex((e) => e.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({ error: "Event not found" });
  }

  const updatedEvent: CreatorSeriesEvent = {
    ...eventsStore[eventIndex],
    ...(title && { title }),
    ...(type && { type }),
    ...(description && { description }),
    ...(tags !== undefined && { tags }),
    ...(gradient && { gradient }),
    ...(icon && { icon }),
    ...(poster !== undefined && { poster }),
    ...(ticketUrl !== undefined && { ticketUrl }),
    updatedAt: new Date().toISOString(),
  };

  eventsStore[eventIndex] = updatedEvent;

  const response: ContentItemResponse<CreatorSeriesEvent> = { data: updatedEvent };
  res.json(response);
};

// Delete event/series
export const deleteEvent: RequestHandler = (req, res) => {
  const { id } = req.params;

  const eventIndex = eventsStore.findIndex((e) => e.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({ error: "Event not found" });
  }

  const deletedEvent = eventsStore.splice(eventIndex, 1)[0];

  const response: ContentItemResponse<CreatorSeriesEvent> = { data: deletedEvent };
  res.json(response);
};
