import type { ReactNode } from "react";
import a from "./artefact.module.scss";

export const CANVAS_W = 1160;
export const CANVAS_H = 720;

/* Palette used inside artefact charts. Kept as literals rather than CSS
   variables so SVG fills stay stable when the canvas is transform-scaled. */
export const C = {
  navy: "#0a1b32",
  navy2: "#183754",
  navy3: "#22496b",
  accent: "#2a6aab",
  accent2: "#4585c4",
  accent3: "#a9c6e2",
  accentPale: "#dbe7f4",
  ok: "#1a6f52",
  okPale: "#a8cfbe",
  warn: "#c58a12",
  warnPale: "#e6d4a8",
  risk: "#a82e28",
  riskPale: "#eccdc9",
  grid: "#e8ecf1",
  gridStrong: "#dde3ea",
  axis: "#c9d1db",
  ink: "#0d1826",
  ink3: "#6a7889",
  ink4: "#8d99a8",
  grey: "#f0f3f6",
  white: "#ffffff",
} as const;

export function Canvas({
  title,
  subtitle,
  fields,
  footLeft,
  footRight,
  children,
}: {
  title: string;
  subtitle: string;
  fields?: { label: string; value: string }[];
  footLeft?: string;
  footRight?: string;
  children: ReactNode;
}) {
  return (
    <div className={a.canvas}>
      <div className={a.bar}>
        <div>
          <p className={a.barTitle}>{title}</p>
          <p className={a.barSub}>{subtitle}</p>
        </div>
        <div className={a.barMeta}>
          {fields?.map((f) => (
            <div key={f.label} className={a.barField}>
              <p className={a.barFieldLabel}>{f.label}</p>
              <p className={a.barFieldValue}>{f.value}</p>
            </div>
          ))}
          <span className={a.illustrative}>Illustrative data</span>
        </div>
      </div>
      <div className={a.body}>{children}</div>
      <div className={a.foot}>
        <span>{footLeft ?? "Anonymised recreation · no client data"}</span>
        <span>{footRight ?? "Prepared by PMO"}</span>
      </div>
    </div>
  );
}

export function Panel({
  title,
  note,
  children,
  flush,
  style,
}: {
  title: string;
  note?: string;
  children: ReactNode;
  flush?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div className={a.panel} style={style}>
      <div className={a.panelHead}>
        <p className={a.panelTitle}>{title}</p>
        {note && <p className={a.panelNote}>{note}</p>}
      </div>
      <div className={flush ? a.panelBodyFlush : a.panelBody}>{children}</div>
    </div>
  );
}

type Tone = "ok" | "warn" | "risk" | "info" | "neutral";

const pillClass: Record<Tone, string> = {
  ok: a.pillOk,
  warn: a.pillWarn,
  risk: a.pillRisk,
  info: a.pillInfo,
  neutral: a.pillNeutral,
};

export const Pill = ({ tone, children }: { tone: Tone; children: ReactNode }) => (
  <span className={`${a.pill} ${pillClass[tone]}`}>{children}</span>
);

const kpiClass: Record<Tone, string> = {
  ok: a.kpiOk,
  warn: a.kpiWarn,
  risk: a.kpiRisk,
  info: a.kpiInfo,
  neutral: "",
};

export function Kpi({
  label,
  value,
  delta,
  deltaTone = "flat",
  tone = "info",
  small,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down" | "flat";
  tone?: Tone;
  small?: boolean;
}) {
  const dc =
    deltaTone === "up" ? a.deltaUp : deltaTone === "down" ? a.deltaDown : a.deltaFlat;
  return (
    <div className={`${a.kpi} ${kpiClass[tone]}`}>
      <p className={a.kpiLabel}>{label}</p>
      <p className={`${a.kpiValue} ${small ? a.kpiValueSm : ""}`}>{value}</p>
      {delta && (
        <p className={a.kpiDelta}>
          <span className={dc}>{delta}</span>
        </p>
      )}
    </div>
  );
}

export const Legend = ({ items }: { items: { color: string; label: string }[] }) => (
  <div className={a.legend}>
    {items.map((i) => (
      <span key={i.label} className={a.legendItem}>
        <span className={a.swatch} style={{ background: i.color }} />
        {i.label}
      </span>
    ))}
  </div>
);

export { a as styles };
