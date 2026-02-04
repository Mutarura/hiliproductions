import { RequestHandler } from "express";
import {
  SocialMediaLink,
  ContentListResponse,
  ContentItemResponse,
} from "@shared/api";

// In-memory storage - Replace with database later
let socialMediaStore: SocialMediaLink[] = [
  {
    id: "1",
    platform: "twitter",
    url: "https://twitter.com/hiliproductions",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    platform: "instagram",
    url: "https://instagram.com/hiliproductions",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    platform: "youtube",
    url: "https://youtube.com/@hiliproductions",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Get all social media links
export const getSocialMediaLinks: RequestHandler = (req, res) => {
  const response: ContentListResponse<SocialMediaLink> = {
    data: socialMediaStore,
    total: socialMediaStore.length,
  };
  res.json(response);
};

// Get single social media link by ID
export const getSocialMediaLinkById: RequestHandler = (req, res) => {
  const { id } = req.params;
  const link = socialMediaStore.find((l) => l.id === id);

  if (!link) {
    return res.status(404).json({ error: "Social media link not found" });
  }

  const response: ContentItemResponse<SocialMediaLink> = { data: link };
  res.json(response);
};

// Create new social media link
export const createSocialMediaLink: RequestHandler = (req, res) => {
  const { platform, url } = req.body;

  if (!platform || !url) {
    return res
      .status(400)
      .json({ error: "Missing required fields: platform, url" });
  }

  const validPlatforms = [
    "twitter",
    "instagram",
    "facebook",
    "tiktok",
    "youtube",
    "linkedin",
  ];
  if (!validPlatforms.includes(platform)) {
    return res
      .status(400)
      .json({
        error: `Invalid platform. Must be one of: ${validPlatforms.join(", ")}`,
      });
  }

  // Check if platform already exists
  if (socialMediaStore.find((l) => l.platform === platform)) {
    return res
      .status(400)
      .json({ error: `Link for ${platform} already exists` });
  }

  const newLink: SocialMediaLink = {
    id: Date.now().toString(),
    platform,
    url,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  socialMediaStore.push(newLink);

  const response: ContentItemResponse<SocialMediaLink> = { data: newLink };
  res.status(201).json(response);
};

// Update social media link
export const updateSocialMediaLink: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { url, platform } = req.body;

  const linkIndex = socialMediaStore.findIndex((l) => l.id === id);

  if (linkIndex === -1) {
    return res.status(404).json({ error: "Social media link not found" });
  }

  // If updating platform, check for duplicates
  if (platform && platform !== socialMediaStore[linkIndex].platform) {
    if (socialMediaStore.find((l) => l.platform === platform)) {
      return res
        .status(400)
        .json({ error: `Link for ${platform} already exists` });
    }
  }

  const updatedLink: SocialMediaLink = {
    ...socialMediaStore[linkIndex],
    ...(url && { url }),
    ...(platform && { platform }),
    updatedAt: new Date().toISOString(),
  };

  socialMediaStore[linkIndex] = updatedLink;

  const response: ContentItemResponse<SocialMediaLink> = { data: updatedLink };
  res.json(response);
};

// Delete social media link
export const deleteSocialMediaLink: RequestHandler = (req, res) => {
  const { id } = req.params;

  const linkIndex = socialMediaStore.findIndex((l) => l.id === id);

  if (linkIndex === -1) {
    return res.status(404).json({ error: "Social media link not found" });
  }

  const deletedLink = socialMediaStore.splice(linkIndex, 1)[0];

  const response: ContentItemResponse<SocialMediaLink> = { data: deletedLink };
  res.json(response);
};
