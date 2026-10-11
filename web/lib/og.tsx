import { ImageResponse } from "next/og";
import { SIGNET_BODY_PATH, SIGNET_COLORS, SIGNET_FACETS, SIGNET_VIEWBOX } from "@/lib/brand";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Shared 1200×630 social card, single-sourced from the brand SVG paths so the
// English (/) and German (/de) Open Graph images stay visually identical. The
// mark is the Atlas Auditor signet in its dark-surface colours.
export function renderOgImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#10b981",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <svg width="56" height="56" viewBox={SIGNET_VIEWBOX}>
            <path fillRule="evenodd" fill={SIGNET_COLORS.dark.body} d={SIGNET_BODY_PATH} />
            {SIGNET_FACETS.map((points) => (
              <polygon key={points} fill={SIGNET_COLORS.dark.facet} points={points} />
            ))}
          </svg>
          auditor
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            marginTop: 28,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#a3a3a3" }}>
          {subtitle}
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
