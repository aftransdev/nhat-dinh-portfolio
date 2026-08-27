/* One line-art glyph per capability area. Geometric and restrained — these
   read as document iconography, not app icons. */

const paths: Record<string, React.ReactNode> = {
  // Shield with a check: governance and assurance
  "portfolio-governance": (
    <>
      <path d="M12 2.5 20 5.2v6.1c0 4.6-3.2 8.4-8 10.2-4.8-1.8-8-5.6-8-10.2V5.2L12 2.5Z" />
      <path d="m8.4 11.9 2.7 2.7 4.6-5" />
    </>
  ),
  // Stacked schedule bars against a time axis: integrated planning
  "integrated-planning": (
    <>
      <path d="M3 3.5v17h18" />
      <path d="M6.5 7h9M6.5 11.5h13M6.5 16h6" />
      <path d="M15.5 7v4.5M12.5 11.5V16" />
    </>
  ),
  // Node graph with an alert: risks, issues and dependencies
  "raid-dependencies": (
    <>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <path d="M7.2 6.8 16.9 11M7.2 17.2 16.9 13" />
      <path d="M12 3.6v3.2M12 9.9v.1" />
    </>
  ),
  // Columns with a plotted line: budget, forecast and variance
  "financial-governance": (
    <>
      <path d="M3 20.5h18" />
      <path d="M6 20.5v-6M11 20.5v-9.5M16 20.5v-4M21 20.5v-11" />
      <path d="M3.5 9 8.5 5.5l4.5 3 5.5-5" />
    </>
  ),
  // Gauge on a panel: executive reporting
  "executive-reporting": (
    <>
      <rect x="2.5" y="3.5" width="19" height="17" rx="1.5" />
      <path d="M2.5 8h19" />
      <path d="M7 16.5a5 5 0 0 1 10 0" />
      <path d="m12 16.5 3-3" />
    </>
  ),
  // Closed loop with a step change: process improvement
  "process-improvement": (
    <>
      <path d="M20.5 12a8.5 8.5 0 0 1-14.6 5.9" />
      <path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9" />
      <path d="M18.1 2.6v3.5h-3.5M5.9 21.4v-3.5h3.5" />
      <path d="M9 13.5 11.5 11l1.9 1.9L16.5 9" />
    </>
  ),
};

export function CapabilityIcon({ id, size = 22 }: { id: string; size?: number }) {
  const glyph = paths[id];
  if (!glyph) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
