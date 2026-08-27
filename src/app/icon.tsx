import { ImageResponse } from "next/og";
import { loadInter } from "@/lib/og-font";

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

export default async function Icon({ id }: { id: Promise<string> }) {
  // Next 16 passes the metadata id as a Promise, not a bare string.
  const size = Number(await id);
  const interBold = await loadInter(700);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B1F33",
        borderRadius: Math.round(size * 0.22),
        color: "#FFFFFF",
        fontSize: Math.round(size * 0.56),
        fontWeight: 700,
        letterSpacing: Math.round(size * -0.04),
        fontFamily: interBold ? "Inter" : "sans-serif",
      }}
    >
      ND
    </div>,
    {
      width: size,
      height: size,
      fonts: interBold
        ? [{ name: "Inter", data: interBold, style: "normal" as const, weight: 700 as const }]
        : [],
    },
  );
}
