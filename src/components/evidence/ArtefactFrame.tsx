"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { CANVAS_H, CANVAS_W } from "./artefacts/chrome";

/* The artefacts are authored at a fixed 1160 x 720 so tables, charts and
   gantt geometry never reflow. This measures the available width and applies
   one transform so the same markup serves both thumbnail and full view. */
export function ArtefactFrame({
  children,
  maxScale = 1,
  minScale = 0,
  align = "center",
}: {
  children: ReactNode;
  maxScale?: number;
  /* Below this the dense tables stop being readable, so the frame stops
     shrinking and lets its scroll container take over instead. */
  minScale?: number;
  align?: "center" | "top";
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const measure = () => {
      const w = host.clientWidth;
      if (w > 0) setScale(Math.max(Math.min(w / CANVAS_W, maxScale), minScale));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => ro.disconnect();
  }, [maxScale, minScale]);

  const s = scale ?? 0;

  return (
    <div
      ref={hostRef}
      style={{
        width: "100%",
        height: scale === null ? undefined : CANVAS_H * s,
        aspectRatio: scale === null ? `${CANVAS_W} / ${CANVAS_H}` : undefined,
        // A floored scale can exceed the host; let the ancestor scroll
        overflow: minScale > 0 ? "visible" : "hidden",
        minWidth: scale === null ? undefined : CANVAS_W * s,
        display: "flex",
        justifyContent: align === "center" ? "center" : "flex-start",
      }}
    >
      <div
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          flex: "none",
          transform: `scale(${s})`,
          transformOrigin: "top left",
          // Keep the scaled canvas from claiming layout space at full size
          marginRight: CANVAS_W * (s - 1),
          marginBottom: CANVAS_H * (s - 1),
          visibility: scale === null ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
}
