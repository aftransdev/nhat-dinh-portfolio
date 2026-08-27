import { ImageResponse } from "next/og";
import { selectedImpact } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { loadInter } from "@/lib/og-font";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Institutional share card: navy ground, the positioning line, and three
   figures. Mirrors the home page so a shared link previews the same story. */
export default async function OpengraphImage() {
  const [regular, semibold] = await Promise.all([loadInter(400), loadInter(600)]);
  const fonts = [
    ...(regular
      ? [{ name: "Inter", data: regular, style: "normal" as const, weight: 400 as const }]
      : []),
    ...(semibold
      ? [{ name: "Inter", data: semibold, style: "normal" as const, weight: 600 as const }]
      : []),
  ];
  const headline = selectedImpact.slice(0, 3);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b1f33",
        color: "#ffffff",
        fontFamily: fonts.length ? "Inter" : "sans-serif",
        padding: "68px 76px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 4,
            background: "#ffffff",
            color: "#0a1b32",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 19,
            fontWeight: 600,
          }}
        >
          ND
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 21, fontWeight: 600, letterSpacing: 2.4 }}>NHAT DINH</div>
          <div style={{ fontSize: 14, color: "#2aa79e", letterSpacing: 2, marginTop: 3 }}>
            PMO · PORTFOLIO GOVERNANCE · TRANSFORMATION
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: -1.7,
            lineHeight: 1.16,
            maxWidth: 900,
          }}
        >
          Turning complex portfolios into clear decisions, stronger controls and more predictable
          delivery.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.18)" }} />
        <div style={{ display: "flex", gap: 76 }}>
          {headline.map((k) => (
            <div key={k.label} style={{ display: "flex", flexDirection: "column", width: 300 }}>
              <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1.4 }}>{k.value}</div>
              <div style={{ fontSize: 15, color: "#b9c6d2", marginTop: 8, lineHeight: 1.4 }}>
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
