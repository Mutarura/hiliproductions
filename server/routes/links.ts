import { RequestHandler } from "express";
import { ButtonLink, ContentListResponse, ContentItemResponse } from "@shared/api";

// In-memory storage - Replace with database later
let linksStore: ButtonLink[] = [
  {
    id: "1",
    label: "Watch Live",
    url: "https://example.com/live",
    icon: "📺",
    position: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    label: "Subscribe",
    url: "https://example.com/subscribe",
    icon: "🔔",
    position: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    label: "Learn More",
    url: "https://example.com/about",
    icon: "ℹ️",
    position: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Get all button links
export const getLinks: RequestHandler = (req, res) => {
  const sortedLinks = [...linksStore].sort((a, b) => a.position - b.position);
  const response: ContentListResponse<ButtonLink> = {
    data: sortedLinks,
    total: sortedLinks.length,
  };
  res.json(response);
};

// Get single link by ID
export const getLinkById: RequestHandler = (req, res) => {
  const { id } = req.params;
  const link = linksStore.find((l) => l.id === id);

  if (!link) {
    return res.status(404).json({ error: "Link not found" });
  }

  const response: ContentItemResponse<ButtonLink> = { data: link };
  res.json(response);
};

// Create new link
export const createLink: RequestHandler = (req, res) => {
  const { label, url, icon } = req.body;

  if (!label || !url) {
    return res.status(400).json({ error: "Missing required fields: label, url" });
  }

  const maxPosition = linksStore.length > 0 ? Math.max(...linksStore.map((l) => l.position)) : 0;

  const newLink: ButtonLink = {
    id: Date.now().toString(),
    label,
    url,
    icon: icon || "🔗",
    position: maxPosition + 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  linksStore.push(newLink);

  const response: ContentItemResponse<ButtonLink> = { data: newLink };
  res.status(201).json(response);
};

// Update link
export const updateLink: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { label, url, icon, position } = req.body;

  const linkIndex = linksStore.findIndex((l) => l.id === id);

  if (linkIndex === -1) {
    return res.status(404).json({ error: "Link not found" });
  }

  const updatedLink: ButtonLink = {
    ...linksStore[linkIndex],
    ...(label && { label }),
    ...(url && { url }),
    ...(icon !== undefined && { icon }),
    ...(position !== undefined && { position }),
    updatedAt: new Date().toISOString(),
  };

  linksStore[linkIndex] = updatedLink;

  const response: ContentItemResponse<ButtonLink> = { data: updatedLink };
  res.json(response);
};

// Delete link
export const deleteLink: RequestHandler = (req, res) => {
  const { id } = req.params;

  const linkIndex = linksStore.findIndex((l) => l.id === id);

  if (linkIndex === -1) {
    return res.status(404).json({ error: "Link not found" });
  }

  const deletedLink = linksStore.splice(linkIndex, 1)[0];

  const response: ContentItemResponse<ButtonLink> = { data: deletedLink };
  res.json(response);
};

// Reorder links
export const reorderLinks: RequestHandler = (req, res) => {
  const { links } = req.body;

  if (!Array.isArray(links)) {
    return res.status(400).json({ error: "Expected array of links with id and position" });
  }

  // Update positions
  links.forEach(({ id, position }: { id: string; position: number }) => {
    const link = linksStore.find((l) => l.id === id);
    if (link) {
      link.position = position;
      link.updatedAt = new Date().toISOString();
    }
  });

  const sortedLinks = [...linksStore].sort((a, b) => a.position - b.position);
  const response: ContentListResponse<ButtonLink> = {
    data: sortedLinks,
    total: sortedLinks.length,
  };
  res.json(response);
};
