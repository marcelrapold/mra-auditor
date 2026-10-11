import type { MetadataRoute } from "next";
import { DESCRIPTION } from "@/lib/site";

// Icons are the approved Auditor signet from Atlas, the Rapold design system
// (https://atlas.rapold.io/brands/rapold/exports/auditor/). Copied byte-identical;
// refresh them from there on a brand change instead of editing them here.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "auditor — multi-agent audit master prompts",
    short_name: "auditor",
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-icon-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
