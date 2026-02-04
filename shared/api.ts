/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// ===== Content Management Types =====

export interface CreatorSeriesEvent {
  id: string;
  title: string;
  type: "series" | "event";
  description: string;
  tags: string[];
  gradient: string;
  icon: string;
  poster?: string; // URL or base64
  ticketUrl?: string; // For events - link to buy tickets
  createdAt: string;
  updatedAt: string;
}

export interface ButtonLink {
  id: string;
  label: string;
  url: string;
  icon?: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface SocialMediaLink {
  id: string;
  platform: "twitter" | "instagram" | "facebook" | "tiktok" | "youtube" | "linkedin";
  url: string;
  createdAt: string;
  updatedAt: string;
}

// ===== API Response Types =====

export interface ContentListResponse<T> {
  data: T[];
  total: number;
}

export interface ContentItemResponse<T> {
  data: T;
}

export interface ContentErrorResponse {
  error: string;
  message?: string;
}
