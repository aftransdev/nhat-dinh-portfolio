import { C, Canvas, Kpi, Legend, Panel, Pill, styles as a } from "./chrome";

/* Timeline geometry: 12 months across a fixed plot width */
const PLOT_W = 772;
const MONTH_W = PLOT_W / 12;
const ROW_H = 30;
const LABEL_W = 236;
const HEAD_H = 22;
const TODAY = 8.6; // early September

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

type Bar = {
  ws: string;
  name: string;
  owner: string;
  baseStart: number;
  baseEnd: number;
  start: number;
  end: number;
  pct: number;
  status: "ok" | "warn" | "risk";
  milestone?: number;
  msLabel?: string;
};

const bars: Bar[] = [
  { ws: "Retail Ops", name: "Store replenishment rollout", owner: "R. Ha", baseStart: 0.2, baseEnd: 5.4, start: 0.2, end: 5.2, pct: 100, status: "ok", milestone: 5.2, msLabel: "M1" },
  { ws: "Retail Ops", name: "POS refresh across 320 stores", owner: "R. Ha", baseStart: 3.0, baseEnd: 9.0, start: 3.0, end: 9.6, pct: 72, status: "warn", milestone: 9.6, msLabel: "M4" },
  { ws: "Technology", name: "ERP finance module", owner: "D. Bui", baseStart: 1.0, baseEnd: 8.6, start: 1.0, end: 9.8, pct: 78, status: "risk", milestone: 9.8, msLabel: "M5" },
  { ws: "Technology", name: "Integration platform uplift", owner: "D. Bui", baseStart: 2.4, baseEnd: 7.8, start: 2.4, end: 7.8, pct: 88, status: "ok" },
  { ws: "Technology", name: "Loyalty platform migration", owner: "M. Pham", baseStart: 4.6, baseEnd: 9.3, start: 4.6, end: 9.3, pct: 64, status: "ok", milestone: 9.3, msLabel: "M3" },
  { ws: "Supply Chain", name: "WMS cutover at DC1", owner: "T. Ngo", baseStart: 3.8, baseEnd: 9.2, start: 4.4, end: 10.6, pct: 46, status: "risk", milestone: 10.6, msLabel: "M6" },
  { ws: "Finance", name: "Capitalisation model rebuild", owner: "H. Le", baseStart: 1.6, baseEnd: 6.2, start: 1.6, end: 6.2, pct: 100, status: "ok", milestone: 6.2, msLabel: "M2" },
  { ws: "Data", name: "Customer 360 foundation", owner: "L. Tran", baseStart: 6.0, baseEnd: 11.2, start: 6.6, end: 11.5, pct: 31, status: "warn", milestone: 11.5, msLabel: "M9" },
];

/* Cross project dependencies drawn as elbow connectors between rows */
const links: { from: number; to: number; at: number }[] = [
  { from: 2, to: 5, at: 8.6 },
  { from: 6, to: 3, at: 6.2 },
  { from: 4, to: 7, at: 9.3 },
];

const statusColor = { ok: C.ok, warn: C.warn, risk: C.risk } as const;

function Gantt() {
  const H = bars.length * ROW_H + HEAD_H;
  // One shared row geometry keeps the HTML label column and the SVG plot in step
  const rowTop = (i: number) => HEAD_H + i * ROW_H;
  const rowMid = (i: number) => rowTop(i) + ROW_H / 2;

  return (
    <div style={{ display: "flex" }}>
      {/* Row labels, same height and order as the plot rows */}
      <div style={{ flex: "none", width: LABEL_W, paddingTop: HEAD_H }}>
        {bars.map((b, i) => (
          <div
            key={b.name}
            style={{
              height: ROW_H,
              display: "flex",
              alignItems: "center",
              gap: 7,
              paddingRight: 12,
              overflow: "hidden",
              borderBottom: `1px solid ${C.gridStrong}`,
              background: i % 2 ? "#fafbfc" : "#fff",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: statusColor[b.status],
                flex: "none",
              }}
            />
            <span style={{ minWidth: 0, flex: 1 }}>
              <span className={a.gridLabel} style={{ display: "block", lineHeight: 1.25 }}>
                {b.name}
              </span>
              <span className={a.gridSub} style={{ display: "block", lineHeight: 1.25 }}>
                {b.ws} · {b.owner}
              </span>
            </span>
            <span className={a.mono} style={{ fontSize: 8.5, color: C.ink4, flex: "none" }}>
              {b.pct}%
            </span>
          </div>
        ))}
      </div>

      {/* Plot */}
      <svg width={PLOT_W} height={H} viewBox={`0 0 ${PLOT_W} ${H}`} aria-hidden="true">
        {/* Alternating quarter bands, then month gridlines */}
        {[0, 1, 2, 3].map((q) => (
          <rect
            key={q}
            x={q * MONTH_W * 3}
            y={0}
            width={MONTH_W * 3}
            height={H}
            fill={q % 2 ? "#fafbfc" : "#fff"}
          />
        ))}
        {months.map((m, i) => (
          <g key={`${m}-${i}`}>
            <line
              x1={i * MONTH_W}
              x2={i * MONTH_W}
              y1={16}
              y2={H}
              stroke={i % 3 === 0 ? C.gridStrong : C.grid}
              strokeWidth="1"
            />
            <text
              x={i * MONTH_W + MONTH_W / 2}
              y={12}
              textAnchor="middle"
              fontSize="8"
              fill={C.ink4}
            >
              {m}
            </text>
          </g>
        ))}
        {[0, 1, 2, 3].map((q) => (
          <text
            key={`q${q}`}
            x={q * MONTH_W * 3 + 4}
            y={12}
            fontSize="8"
            fontWeight="600"
            fill={C.navy}
            letterSpacing="0.6"
          >
            Q{q + 1}
          </text>
        ))}
        <line x1={0} x2={PLOT_W} y1={16} y2={16} stroke={C.axis} strokeWidth="1" />

        {/* Row separators, matched to the label column */}
        {bars.map((_, i) => (
          <line
            key={i}
            x1={0}
            x2={PLOT_W}
            y1={rowTop(i) + ROW_H}
            y2={rowTop(i) + ROW_H}
            stroke={C.gridStrong}
            strokeWidth="1"
          />
        ))}

        {/* Dependency connectors, under the bars */}
        {links.map((l, i) => {
          const y1 = rowMid(l.from) + 3;
          const y2 = rowMid(l.to) + 3;
          const x = l.at * MONTH_W;
          const xTo = Math.max(bars[l.to].start * MONTH_W, x + 12);
          return (
            <g key={i}>
              <path
                d={`M ${x} ${y1} L ${x + 7} ${y1} L ${x + 7} ${y2} L ${xTo} ${y2}`}
                fill="none"
                stroke={C.accent2}
                strokeWidth="1"
                strokeDasharray="2.5 2"
              />
              <circle cx={xTo} cy={y2} r="2" fill={C.accent2} />
            </g>
          );
        })}

        {/* Baseline above, actual below, the pair centred on the row */}
        {bars.map((b, i) => {
          const mid = rowMid(i);
          const bx = b.baseStart * MONTH_W;
          const bw = (b.baseEnd - b.baseStart) * MONTH_W;
          const x = b.start * MONTH_W;
          const w = (b.end - b.start) * MONTH_W;
          return (
            <g key={b.name}>
              <rect x={bx} y={mid - 7.5} width={bw} height={4} fill={C.accent3} rx="1" />
              <rect x={x} y={mid - 1.5} width={w} height={9} fill={C.accentPale} rx="1" />
              <rect
                x={x}
                y={mid - 1.5}
                width={(w * b.pct) / 100}
                height={9}
                fill={b.status === "risk" ? C.risk : b.status === "warn" ? C.warn : C.navy}
                rx="1"
              />
              {b.milestone !== undefined && (
                <g transform={`translate(${b.milestone * MONTH_W} ${mid + 3})`}>
                  <rect
                    x={-4.5}
                    y={-4.5}
                    width={9}
                    height={9}
                    transform="rotate(45)"
                    fill={C.navy}
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <text x={8} y={3} fontSize="7.5" fontWeight="600" fill={C.navy}>
                    {b.msLabel}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Reporting date */}
        <line
          x1={TODAY * MONTH_W}
          x2={TODAY * MONTH_W}
          y1={16}
          y2={H}
          stroke={C.risk}
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
        <rect x={TODAY * MONTH_W - 15} y={17} width={31} height={11} fill={C.risk} rx="1" />
        <text
          x={TODAY * MONTH_W}
          y={25}
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="600"
          fill="#fff"
          letterSpacing="0.4"
        >
          TODAY
        </text>
      </svg>
    </div>
  );
}

const decisions = [
  { d: "M5 · ERP UAT exit", when: "26 Sep", forum: "Change Board", tone: "risk" as const },
  { d: "M6 · WMS cutover go or no go", when: "12 Oct", forum: "Portfolio Board", tone: "risk" as const },
  { d: "M3 · Loyalty go live approval", when: "08 Oct", forum: "Exec Review", tone: "warn" as const },
  { d: "M8 · Q4 rebaseline sign off", when: "31 Oct", forum: "Portfolio Board", tone: "warn" as const },
];

const govEvents = [
  { e: "Portfolio review", when: "Wk 40", i: "Status, exceptions, dependencies" },
  { e: "Change Board", when: "Wk 40", i: "Scope changes, baseline moves" },
  { e: "Executive review", when: "Wk 41", i: "Decisions, financials, risks" },
  { e: "Benefits review", when: "Wk 42", i: "Realisation against business case" },
];

export function IntegratedPlan() {
  return (
    <Canvas
      title="Integrated Portfolio Plan, Quarterly View"
      subtitle="Initiative timelines, baseline versus actual, cross project dependencies, milestones and decision points"
      fields={[
        { label: "Cycle", value: "FY24 Q1 to Q4" },
        { label: "Initiatives", value: "48" },
        { label: "Baseline", value: "v3.1" },
      ]}
      footRight="Integrated planning · quarterly rebaseline"
    >
      <div className={a.kpiRow} style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        <Kpi label="Initiatives in plan" value="48" delta="8 shown" deltaTone="flat" tone="info" />
        <Kpi label="Milestones tracked" value="126" delta="86% on plan" deltaTone="flat" tone="ok" />
        <Kpi label="Cross project dependencies" value="31" delta="4 on critical path" deltaTone="flat" tone="warn" />
        <Kpi label="Baseline slippage" value="+2.4 wks" delta="Avg across portfolio" deltaTone="down" tone="warn" />
        <Kpi label="Decision points open" value="4" delta="2 this month" deltaTone="flat" tone="risk" />
      </div>

      <Panel
        title="Initiative timeline, baseline versus actual"
        note="8 of 48 initiatives"
        style={{ flex: 1 }}
      >
        <Gantt />
        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between" }}>
          <Legend
            items={[
              { color: C.accent3, label: "Baseline" },
              { color: C.navy, label: "Actual progress" },
              { color: C.warn, label: "At risk" },
              { color: C.risk, label: "Delayed" },
              { color: C.accent2, label: "Dependency link" },
            ]}
          />
          <span style={{ fontSize: 9, color: C.ink4 }}>
            ◆ Milestone · dashed red = reporting date
          </span>
        </div>
      </Panel>

      <div className={a.row} style={{ flex: "0.42" }}>
        <Panel title="Upcoming decision points" style={{ flex: 1 }} flush>
          {decisions.map((d) => (
            <div key={d.d} className={a.listRow}>
              <span className={a.listLabel}>{d.d}</span>
              <span className={a.listMeta}>{d.forum}</span>
              <Pill tone={d.tone}>{d.when}</Pill>
            </div>
          ))}
        </Panel>
        <Panel title="Governance events in window" style={{ flex: 1 }} flush>
          {govEvents.map((g) => (
            <div key={g.e} className={a.listRow}>
              <span className={a.listLabel} style={{ flex: "0 0 108px" }}>
                {g.e}
              </span>
              <span className={a.listMeta} style={{ flex: 1, textAlign: "left" }}>
                {g.i}
              </span>
              <span className={a.mono} style={{ fontSize: 9, color: C.ink3 }}>
                {g.when}
              </span>
            </div>
          ))}
        </Panel>
      </div>
    </Canvas>
  );
}
