import { C, Canvas, Kpi, Legend, Panel, Pill, styles as a } from "./chrome";

const functions = [
  { name: "Technology", green: 22, amber: 9, red: 3 },
  { name: "Retail Operations", green: 21, amber: 6, red: 1 },
  { name: "Supply Chain", green: 15, amber: 6, red: 2 },
  { name: "Finance", green: 18, amber: 3, red: 0 },
  { name: "Commercial", green: 14, amber: 4, red: 1 },
  { name: "Data & Analytics", green: 11, amber: 5, red: 3 },
];

const milestones = [
  { name: "Store replenishment rollout — wave 3", date: "12 Sep", tone: "ok" as const, s: "Complete" },
  { name: "ERP finance module — UAT exit", date: "26 Sep", tone: "warn" as const, s: "At risk" },
  { name: "Loyalty platform migration — go-live", date: "08 Oct", tone: "ok" as const, s: "On track" },
  { name: "Warehouse WMS cutover", date: "19 Oct", tone: "risk" as const, s: "Delayed" },
  { name: "Q4 portfolio re-baseline", date: "31 Oct", tone: "ok" as const, s: "On track" },
];

const risks = [
  { id: "R-014", desc: "ERP data migration quality below exit criteria", sc: "20", tone: "risk" as const, own: "Technology" },
  { id: "R-022", desc: "Single-vendor dependency on WMS integrator", sc: "16", tone: "risk" as const, own: "Supply Chain" },
  { id: "R-031", desc: "Q4 delivery capacity shortfall in Data squad", sc: "12", tone: "warn" as const, own: "Data" },
  { id: "R-008", desc: "Regulatory change to e-pharmacy licensing", sc: "12", tone: "warn" as const, own: "Legal" },
];

const decisions = [
  { desc: "Approve €420k WMS scope change", forum: "Portfolio Board", by: "04 Oct", tone: "risk" as const },
  { desc: "Re-prioritise Q4 Data squad intake", forum: "Exec Review", by: "09 Oct", tone: "warn" as const },
  { desc: "Confirm loyalty benefits baseline", forum: "Benefits Review", by: "16 Oct", tone: "warn" as const },
];

/* Budget vs forecast, €m, by quarter */
const quarters = [
  { q: "Q1", budget: 1.9, forecast: 1.8, actual: 1.8 },
  { q: "Q2", budget: 2.2, forecast: 2.3, actual: 2.3 },
  { q: "Q3", budget: 2.4, forecast: 2.6, actual: 1.5 },
  { q: "Q4", budget: 1.9, forecast: 2.2, actual: 0 },
];

function StatusBars() {
  const max = Math.max(...functions.map((f) => f.green + f.amber + f.red));
  return (
    <div>
      {functions.map((f) => {
        const total = f.green + f.amber + f.red;
        const w = (total / max) * 100;
        return (
          <div key={f.name} style={{ marginBottom: 5 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 2,
                fontSize: 9.5,
                lineHeight: 1.2,
              }}
            >
              <span className={a.gridLabel}>{f.name}</span>
              <span className={a.listMeta}>{total}</span>
            </div>
            <div className={a.barTrack} style={{ width: `${w}%`, height: 6 }}>
              <div
                className={a.barSeg}
                style={{ width: `${(f.green / total) * 100}%`, background: C.ok }}
              />
              <div
                className={a.barSeg}
                style={{ width: `${(f.amber / total) * 100}%`, background: C.warn }}
              />
              <div
                className={a.barSeg}
                style={{ width: `${(f.red / total) * 100}%`, background: C.risk }}
              />
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 7 }}>
        <Legend
          items={[
            { color: C.ok, label: "Green" },
            { color: C.warn, label: "Amber" },
            { color: C.risk, label: "Red" },
          ]}
        />
      </div>
    </div>
  );
}

/* Portfolio RAG donut — 152 projects */
function RagDonut() {
  const data = [
    { label: "Green", value: 101, color: C.ok },
    { label: "Amber", value: 33, color: C.warn },
    { label: "Red", value: 10, color: C.risk },
    { label: "Not started", value: 8, color: C.axis },
  ];
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = 46;
  const circ = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width="136" height="136" viewBox="0 0 120 120" aria-hidden="true">
        <g transform="rotate(-90 60 60)">
          {data.map((d) => {
            const len = (d.value / total) * circ;
            const el = (
              <circle
                key={d.label}
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke={d.color}
                strokeWidth="17"
                strokeDasharray={`${len} ${circ - len}`}
                strokeDashoffset={-offset}
              />
            );
            offset += len;
            return el;
          })}
        </g>
        <text
          x="60"
          y="56"
          textAnchor="middle"
          fontSize="22"
          fontWeight="600"
          fill={C.navy}
          letterSpacing="-0.5"
        >
          152
        </text>
        <text x="60" y="71" textAnchor="middle" fontSize="8.5" fill={C.ink4} letterSpacing="0.8">
          PROJECTS
        </text>
      </svg>
      <div style={{ flex: 1, minWidth: 0 }}>
        {data.map((d) => (
          <div
            key={d.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 0",
              borderBottom: `1px solid ${C.grey}`,
              fontSize: 10,
            }}
          >
            <span className={a.swatch} style={{ background: d.color }} />
            <span style={{ flex: 1, color: C.ink }}>{d.label}</span>
            <span className={a.mono} style={{ color: C.ink3, fontSize: 9.5 }}>
              {d.value}
            </span>
            <span className={a.mono} style={{ color: C.ink4, fontSize: 9, width: 30, textAlign: "right" }}>
              {Math.round((d.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Grouped columns: budget / forecast / actual by quarter (€m) */
function BudgetChart() {
  const W = 330;
  const H = 150;
  const padL = 26;
  const padB = 18;
  const max = 3;
  const bandW = (W - padL) / quarters.length;
  const barW = 15;
  const y = (v: number) => H - padB - (v / max) * (H - padB - 6);

  return (
    <div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        {[0, 1, 2, 3].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W} y1={y(t)} y2={y(t)} stroke={C.grid} strokeWidth="1" />
            <text x={padL - 5} y={y(t) + 3} textAnchor="end" fontSize="8" fill={C.ink4}>
              {t}
            </text>
          </g>
        ))}
        {quarters.map((q, i) => {
          const cx = padL + bandW * i + bandW / 2;
          return (
            <g key={q.q}>
              <rect x={cx - barW * 1.55} y={y(q.budget)} width={barW} height={H - padB - y(q.budget)} fill={C.accent3} />
              <rect x={cx - barW / 2} y={y(q.forecast)} width={barW} height={H - padB - y(q.forecast)} fill={C.accent} />
              {q.actual > 0 && (
                <rect x={cx + barW * 0.55} y={y(q.actual)} width={barW} height={H - padB - y(q.actual)} fill={C.navy} />
              )}
              <text x={cx} y={H - 4} textAnchor="middle" fontSize="8.5" fill={C.ink3}>
                {q.q}
              </text>
            </g>
          );
        })}
        <line x1={padL} x2={W} y1={H - padB} y2={H - padB} stroke={C.axis} strokeWidth="1" />
      </svg>
      <div style={{ marginTop: 6 }}>
        <Legend
          items={[
            { color: C.accent3, label: "Budget" },
            { color: C.accent, label: "Forecast" },
            { color: C.navy, label: "Actual" },
          ]}
        />
      </div>
    </div>
  );
}

export function ExecutiveDashboard() {
  return (
    <Canvas
      title="Enterprise Portfolio — Executive Dashboard"
      subtitle="Consolidated delivery, financial, risk and resource view for CEO / CFO portfolio review"
      fields={[
        { label: "Period", value: "FY24 · P09" },
        { label: "Portfolio health", value: "Amber" },
        { label: "Reporting date", value: "30 Sep" },
      ]}
      footRight="Portfolio Board · monthly"
    >
      <div className={a.kpiRow} style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <Kpi label="Projects in flight" value="152" delta="+7 vs P08" deltaTone="flat" tone="info" />
        <Kpi label="On-time governance" value="100%" delta="+9 pts" deltaTone="up" tone="ok" />
        <Kpi label="Milestones on plan" value="86%" delta="−3 pts" deltaTone="down" tone="warn" />
        <Kpi label="Budget utilisation" value="78%" delta="Within tolerance" deltaTone="flat" tone="ok" />
        <Kpi label="Critical risks open" value="4" delta="+1 vs P08" deltaTone="down" tone="risk" />
        <Kpi label="Decisions outstanding" value="3" delta="2 due this month" deltaTone="flat" tone="warn" />
      </div>

      <div className={a.row} style={{ flex: 1 }}>
        <Panel title="Delivery status by function" note="144 in delivery" style={{ flex: "1.35" }}>
          <StatusBars />
        </Panel>
        <Panel title="Portfolio RAG" note="P09" style={{ flex: "1.15" }}>
          <RagDonut />
        </Panel>
        <Panel title="Budget vs forecast vs actual" note="€m · FY24" style={{ flex: "1" }}>
          <BudgetChart />
        </Panel>
      </div>

      <div className={a.row} style={{ flex: "0.95" }}>
        <Panel title="Key milestones — next 45 days" style={{ flex: "1.1" }} flush>
          {milestones.map((m) => (
            <div key={m.name} className={a.listRow}>
              <span className={a.mono} style={{ fontSize: 9, color: C.ink4, width: 40 }}>
                {m.date}
              </span>
              <span className={a.listLabel}>{m.name}</span>
              <Pill tone={m.tone}>{m.s}</Pill>
            </div>
          ))}
        </Panel>

        <Panel title="Top risks requiring attention" note="score = impact × likelihood" style={{ flex: "1.25" }} flush>
          <table className={a.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Risk</th>
                <th>Owner</th>
                <th style={{ textAlign: "right" }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r) => (
                <tr key={r.id}>
                  <td className={a.tdId}>{r.id}</td>
                  <td className={a.tdStrong}>{r.desc}</td>
                  <td>{r.own}</td>
                  <td className={a.tdNum}>
                    <Pill tone={r.tone}>{r.sc}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        <Panel title="Decisions required" note="this cycle" style={{ flex: "1" }} flush>
          <table className={a.table}>
            <thead>
              <tr>
                <th>Decision</th>
                <th>Forum</th>
                <th>By</th>
              </tr>
            </thead>
            <tbody>
              {decisions.map((d) => (
                <tr key={d.desc}>
                  <td className={a.tdStrong}>{d.desc}</td>
                  <td>{d.forum}</td>
                  <td>
                    <Pill tone={d.tone}>{d.by}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </Canvas>
  );
}
