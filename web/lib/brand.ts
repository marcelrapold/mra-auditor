// Single source for the Auditor signet: the approved product mark from Atlas,
// the Rapold design system (https://atlas.rapold.io, brand `rapold`, product
// `auditor`, viewBox 0 0 256 256). Geometry and colours are copied unchanged
// from brands/rapold/assets/logos/auditor.svg; do not redraw it here.
//
// The static favicons (app/icon.svg, app/favicon.ico, app/apple-icon.png and
// public/icons/*) are the byte-identical Atlas exports for the same mark.
export const ATLAS_URL = "https://atlas.rapold.io";

export const SIGNET_VIEWBOX = "0 0 256 256";
export const SIGNET_BODY_PATH =
  "M 112 26 L 42 52 L 42 114 L 112 198 L 112 154 L 72 104 L 72 73 L 112 58 Z M 84 107 L 96 95 L 107 106 L 128 85 L 140 97 L 107 130 Z M 156.68 138.048 L 219.82 190.364 L 207.06 205.764 L 143.92 153.448 Z";
export const SIGNET_FACETS = [
  "112,26 182,52 182,114 112,198 112,154 152,104 152,73 112,58",
  "143.92,153.448 207.06,205.764 194.3,221.164 131.16,168.848",
] as const;

/** Atlas palette for the signet: `dark` for dark surfaces, `light` for light ones. */
export const SIGNET_COLORS = {
  dark: { body: "#009DFF", facet: "#A8EDFF" },
  light: { body: "#0066B3", facet: "#2B89B5" },
} as const;
