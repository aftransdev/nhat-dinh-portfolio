import { ImageResponse } from "next/og";

// Native sizes so browsers never downscale a single source: 32 for tabs
// (64 physical on retina), 180 for iOS home-screen bookmarks.
const SIZES = [32, 180] as const;

export function generateImageMetadata() {
  return SIZES.map((s) => ({
    id: String(s),
    contentType: "image/png",
    size: { width: s, height: s },
  }));
}

// Geist Bold, matching the site's heading font. Falls back to the built-in
// sans if the fetch fails so the build never breaks on a network hiccup.
async function loadGeistBold() {
  try {
    const css = await (
      await fetch("https://fonts.googleapis.com/css2?family=Geist:wght@700")
    ).text();
    const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!resource) return null;
    const response = await fetch(resource[1]);
    if (response.status !== 200) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Icon({ id }: { id: Promise<string> }) {
  // Next 16 passes the metadata id as a Promise, not a bare string.
  const size = Number(await id);
  const geistBold = await loadGeistBold();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#049EE2",
        borderRadius: Math.round(size * 0.22),
        color: "#FFFFFF",
        fontSize: Math.round(size * 0.56),
        fontWeight: 700,
        letterSpacing: Math.round(size * -0.04),
        fontFamily: geistBold ? "Geist" : "sans-serif",
      }}
    >
      ND
    </div>,
    {
      width: size,
      height: size,
      fonts: geistBold
        ? [{ name: "Geist", data: geistBold, style: "normal" as const, weight: 700 as const }]
        : [],
    },
  );
}
