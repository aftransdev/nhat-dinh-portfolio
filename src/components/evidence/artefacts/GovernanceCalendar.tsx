import { C, Canvas, Kpi, Legend, Panel, Pill, styles as a } from "./chrome";

type Mark = "review" | "submission" | "decision" | "none";

/* Cadence matrix: governance forums down, calendar weeks across */
const weeks = ["W36", "W37", "W38", "W39", "W40", "W41", "W42", "W43", "W44", "W45", "W46", "W47"];

const forums: {
  name: string;
  cadence: string;
  chair: string;
  inputsDue: string;
  marks: Mark[];
}[] = [
  {
    name: "Portfolio Review",
    cadence: "Fortnightly",
    chair: "Head of PMO",
    inputsDue: "T−3 days",
    marks: ["review", "none", "review", "none", "review", "none", "review", "none", "review", "none", "review", "none"],
  },
  {
    name: "Executive Review",
    cadence: "Monthly",
    chair: "CEO",
    inputsDue: "T−5 days",
    marks: ["none", "submission", "none", "decision", "none", "submission", "none", "decision", "none", "submission", "none", "decision"],
  },
  {
    name: "Financial Review",
    cadence: "Monthly",
    chair: "CFO",
    inputsDue: "T−4 days",
    marks: ["none", "review", "none", "none", "submission", "review", "none", "none", "submission", "review", "none", "none"],
  },
  {
    name: "Risk Review",
    cadence: "Monthly",
    chair: "Head of Risk",
    inputsDue: "T−3 days",
    marks: ["review", "none", "none", "submission", "none", "review", "none", "submission", "none", "review", "none", "submission"],
  },
  {
    name: "Change Approval Board",
    cadence: "Weekly",
    chair: "Head of PMO",
    inputsDue: "T−2 days",
    marks: ["decision", "review", "review", "decision", "review", "review", "decision", "review", "review", "decision", "review", "review"],
  },
  {
    name: "Benefits Review",
    cadence: "Quarterly",
    chair: "CFO",
    inputsDue: "T−7 days",
    marks: ["none", "none", "none", "none", "none", "none", "submission", "decision", "none", "none", "none", "none"],
  },
  {
    name: "Project Closure Review",
    cadence: "On completion",
    chair: "Head of PMO",
    inputsDue: "T−5 days",
    marks: ["none", "review", "none", "none", "review", "none", "none", "review", "none", "none", "review", "none"],
  },
];

const markStyle: Record<Exclude<Mark, "none">, { bg: string; label: string }> = {
  review: { bg: C.accent, label: "Review held" },
  submission: { bg: C.warn, label: "Submission due" },
  decision: { bg: C.navy, label: "Decision point" },
};

function Matrix() {
  const cellW = 41;
  return (
    <div style={{ overflow: "hidden" }}>
      <table className={a.table} style={{ tableLayout: "fixed", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: 148 }}>Governance forum</th>
            <th style={{ width: 78 }}>Cadence</th>
            <th style={{ width: 92 }}>Chair</th>
            <th style={{ width: 66 }}>Inputs due</th>
            {weeks.map((w) => (
              <th key={w} style={{ width: cellW, textAlign: "center" }}>
                {w}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {forums.map((f) => (
            <tr key={f.name}>
              <td className={a.tdStrong}>{f.name}</td>
              <td>{f.cadence}</td>
              <td>{f.chair}</td>
              <td className={a.mono} style={{ fontSize: 9 }}>
                {f.inputsDue}
              </td>
              {f.marks.map((m, i) => (
                <td key={`${f.name}-${i}`} style={{ textAlign: "center", padding: "6px 2px" }}>
                  {m === "none" ? (
                    <span style={{ color: C.grid }}>·</span>
                  ) : m === "decision" ? (
                    <span
                      style={{
                        display: "inline-block",
                        width: 9,
                        height: 9,
                        background: markStyle[m].bg,
                        transform: "rotate(45deg)",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: markStyle[m].bg,
                      }}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* On-time submission compliance: the 33% → 100% climb */
const compliance = [
  { m: "Jan", v: 33 },
  { m: "Feb", v: 41 },
  { m: "Mar", v: 52 },
  { m: "Apr", v: 61 },
  { m: "May", v: 70 },
  { m: "Jun", v: 78 },
  { m: "Jul", v: 85 },
  { m: "Aug", v: 92 },
  { m: "Sep", v: 96 },
  { m: "Oct", v: 100 },
  { m: "Nov", v: 100 },
  { m: "Dec", v: 100 },
];

function ComplianceChart() {
  const W = 350;
  const H = 122;
  const padL = 24;
  const padB = 16;
  const bw = (W - padL - 4) / compliance.length;
  const y = (v: number) => H - padB - (v / 100) * (H - padB - 8);

  return (
    <div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        {[0, 25, 50, 75, 100].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W} y1={y(t)} y2={y(t)} stroke={C.grid} strokeWidth="1" />
            <text x={padL - 4} y={y(t) + 3} textAnchor="end" fontSize="7.5" fill={C.ink4}>
              {t}
            </text>
          </g>
        ))}
        {/* Target line */}
        <line x1={padL} x2={W} y1={y(95)} y2={y(95)} stroke={C.ok} strokeWidth="1" strokeDasharray="3 2" />
        <text x={W - 2} y={y(95) - 3} textAnchor="end" fontSize="7" fill={C.ok} fontWeight="600">
          TARGET 95%
        </text>
        {compliance.map((c, i) => (
          <g key={c.m}>
            <rect
              x={padL + i * bw + 2}
              y={y(c.v)}
              width={bw - 5}
              height={H - padB - y(c.v)}
              fill={c.v >= 95 ? C.ok : c.v >= 60 ? C.accent : C.warn}
            />
            <text
              x={padL + i * bw + bw / 2}
              y={H - 4}
              textAnchor="middle"
              fontSize="7"
              fill={C.ink4}
            >
              {c.m}
            </text>
          </g>
        ))}
        <line x1={padL} x2={W} y1={H - padB} y2={H - padB} stroke={C.axis} strokeWidth="1" />
      </svg>
      <p style={{ fontSize: 9, color: C.ink3, marginTop: 3 }}>
        On-time governance submissions — 33% to 100% over twelve reporting periods
      </p>
    </div>
  );
}

const requirements = [
  { i: "Status report", w: "All initiatives", d: "T−3 days", who: "Project lead" },
  { i: "RAID update", w: "All initiatives", d: "T−3 days", who: "Project lead" },
  { i: "Milestone confirmation", w: "All initiatives", d: "T−3 days", who: "Project lead" },
  { i: "Forecast & accruals", w: "Finance", d: "T−4 days", who: "Finance partner" },
  { i: "Change requests", w: "Change Board", d: "T−2 days", who: "Requesting lead" },
];

export function GovernanceCalendar() {
  return (
    <Canvas
      title="Portfolio Governance Calendar"
      subtitle="Forum cadence, submission deadlines, decision points and evidence requirements across the reporting year"
      fields={[
        { label: "Cycle", value: "FY24" },
        { label: "Forums", value: "7" },
        { label: "On-time rate", value: "100%" },
      ]}
      footRight="Governance standards · owned by PMO"
    >
      <div className={a.kpiRow} style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        <Kpi label="Governance forums" value="7" delta="Weekly to quarterly" deltaTone="flat" tone="info" />
        <Kpi label="Scheduled events / yr" value="94" delta="Published 12 months ahead" deltaTone="flat" tone="info" />
        <Kpi label="On-time submissions" value="100%" delta="From 33% baseline" deltaTone="up" tone="ok" />
        <Kpi label="Decisions recorded" value="118" delta="All with owner and date" deltaTone="flat" tone="ok" />
        <Kpi label="Evidence completeness" value="98%" delta="Audit sample" deltaTone="up" tone="ok" />
      </div>

      <Panel
        title="Governance cadence — weeks 36 to 47"
        note="rolling 12-week window"
        style={{ flex: 1 }}
        flush
      >
        <Matrix />
        <div style={{ padding: "9px 12px", borderTop: `1px solid ${C.grey}` }}>
          <Legend
            items={[
              { color: C.accent, label: "Review held" },
              { color: C.warn, label: "Submission due" },
              { color: C.navy, label: "Decision point" },
            ]}
          />
        </div>
      </Panel>

      <div className={a.row} style={{ flex: "0.85" }}>
        <Panel title="Submission compliance trend" note="FY24" style={{ flex: "1.15" }}>
          <ComplianceChart />
        </Panel>

        <Panel title="What must be submitted, when and by whom" style={{ flex: "1.35" }} flush>
          <table className={a.table}>
            <thead>
              <tr>
                <th>Required input</th>
                <th>Applies to</th>
                <th>Deadline</th>
                <th>Accountable</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((r) => (
                <tr key={r.i}>
                  <td className={a.tdStrong}>{r.i}</td>
                  <td>{r.w}</td>
                  <td className={a.mono}>{r.d}</td>
                  <td>{r.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        <Panel title="Exception handling" style={{ flex: "0.85" }} flush>
          {[
            { l: "Late submission", d: "Flagged to forum chair", tone: "warn" as const },
            { l: "Missing evidence", d: "Item deferred to next cycle", tone: "warn" as const },
            { l: "Unapproved change", d: "Escalated to Change Board", tone: "risk" as const },
            { l: "Overdue action", d: "Escalated to Executive Review", tone: "risk" as const },
            { l: "Closure not evidenced", d: "Project remains open", tone: "neutral" as const },
          ].map((e) => (
            <div key={e.l} className={a.listRowStack}>
              <span className={a.stackText}>
                <span className={a.stackLabel} style={{ display: "block" }}>
                  {e.l}
                </span>
                <span className={a.stackMeta} style={{ display: "block" }}>
                  {e.d}
                </span>
              </span>
              <Pill tone={e.tone}>{e.tone === "risk" ? "Escalate" : e.tone === "warn" ? "Flag" : "Hold"}</Pill>
            </div>
          ))}
        </Panel>
      </div>
    </Canvas>
  );
}
