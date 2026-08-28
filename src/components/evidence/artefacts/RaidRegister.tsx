import { C, Canvas, Kpi, Legend, Panel, Pill, styles as a } from "./chrome";

type Tone = "ok" | "warn" | "risk" | "info" | "neutral";

const rows: {
  id: string;
  type: string;
  typeTone: Tone;
  desc: string;
  impact: string;
  impactTone: Tone;
  owner: string;
  workstream: string;
  due: string;
  status: string;
  statusTone: Tone;
  action: string;
  esc: boolean;
}[] = [
  {
    id: "DEP041",
    type: "Dependency",
    typeTone: "info",
    desc: "Card tokenisation API required by Payments squad before onboarding release",
    impact: "High",
    impactTone: "risk",
    owner: "A. Nguyen",
    workstream: "Technology to Payments",
    due: "04 Oct",
    status: "On track",
    statusTone: "ok",
    action: "Interface contract agreed; staging endpoint available 27 Sep",
    esc: false,
  },
  {
    id: "RSK014",
    type: "Risk",
    typeTone: "risk",
    desc: "Data migration quality below UAT exit criteria for customer records",
    impact: "High",
    impactTone: "risk",
    owner: "L. Tran",
    workstream: "Data & Analytics",
    due: "26 Sep",
    status: "Mitigating",
    statusTone: "warn",
    action: "Second reconciliation cycle scheduled; exit criteria reagreed with Risk",
    esc: true,
  },
  {
    id: "DEP052",
    type: "Dependency",
    typeTone: "info",
    desc: "KYC vendor sandbox credentials pending for Onboarding squad regression",
    impact: "Medium",
    impactTone: "warn",
    owner: "M. Pham",
    workstream: "Product to Onboarding",
    due: "29 Sep",
    status: "Overdue",
    statusTone: "risk",
    action: "Escalated to vendor account manager; interim stub in place",
    esc: true,
  },
  {
    id: "ISS009",
    type: "Issue",
    typeTone: "warn",
    desc: "Regression suite runtime exceeds sprint window, delaying UAT sign off",
    impact: "Medium",
    impactTone: "warn",
    owner: "T. Vo",
    workstream: "Technology to QA",
    due: "02 Oct",
    status: "In progress",
    statusTone: "warn",
    action: "Test parallelisation in delivery; runtime target 40 min",
    esc: false,
  },
  {
    id: "DEP038",
    type: "Dependency",
    typeTone: "info",
    desc: "Finance reconciliation file format sign off for ledger integration",
    impact: "Medium",
    impactTone: "warn",
    owner: "H. Le",
    workstream: "Finance to Technology",
    due: "20 Sep",
    status: "Closed",
    statusTone: "ok",
    action: "Format v2.1 approved at Change Board 18 Sep",
    esc: false,
  },
  {
    id: "RSK022",
    type: "Risk",
    typeTone: "risk",
    desc: "Single vendor dependency for core integration layer limits contingency",
    impact: "High",
    impactTone: "risk",
    owner: "D. Bui",
    workstream: "Technology to Platform",
    due: "31 Oct",
    status: "Mitigating",
    statusTone: "warn",
    action: "Second supplier assessment underway; exit plan drafted",
    esc: true,
  },
];

/* Overdue dependency trend: the 90% reduction, sprint by sprint */
const trend = [17, 15, 12, 11, 8, 6, 5, 3, 2, 2, 1, 2];

function TrendChart() {
  const W = 300;
  const H = 78;
  const padL = 20;
  const padB = 15;
  const max = 18;
  const step = (W - padL - 4) / (trend.length - 1);
  const y = (v: number) => H - padB - (v / max) * (H - padB - 8);
  const pts = trend.map((v, i) => `${padL + i * step},${y(v)}`).join(" ");

  return (
    <div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        {[0, 6, 12, 18].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W} y1={y(t)} y2={y(t)} stroke={C.grid} strokeWidth="1" />
            <text x={padL - 4} y={y(t) + 3} textAnchor="end" fontSize="7.5" fill={C.ink4}>
              {t}
            </text>
          </g>
        ))}
        <polyline
          points={`${padL},${H - padB} ${pts} ${padL + (trend.length - 1) * step},${H - padB}`}
          fill={C.accentPale}
          stroke="none"
          opacity="0.7"
        />
        <polyline points={pts} fill="none" stroke={C.accent} strokeWidth="1.8" />
        {trend.map((v, i) => (
          <circle key={i} cx={padL + i * step} cy={y(v)} r="2" fill={C.navy} />
        ))}
        <line x1={padL} x2={W} y1={H - padB} y2={H - padB} stroke={C.axis} strokeWidth="1" />
        <text x={padL} y={H - 3} fontSize="7.5" fill={C.ink4}>
          S1
        </text>
        <text x={W - 12} y={H - 3} fontSize="7.5" fill={C.ink4}>
          S12
        </text>
      </svg>
      <p style={{ fontSize: 9, color: C.ink3, marginTop: 4 }}>
        Overdue cross team dependencies per sprint, falling from 17 to 2 across 12 sprints
      </p>
    </div>
  );
}

const byOwner = [
  { team: "Technology", open: 14, overdue: 1 },
  { team: "Product", open: 9, overdue: 1 },
  { team: "Data & Analytics", open: 8, overdue: 0 },
  { team: "Finance", open: 5, overdue: 0 },
  { team: "Commercial", open: 4, overdue: 0 },
  { team: "Operations", open: 3, overdue: 0 },
];

export function RaidRegister() {
  return (
    <Canvas
      title="RAID & Cross Team Dependency Register"
      subtitle="Risks, assumptions, issues and dependencies with named ownership, due dates and escalation state"
      fields={[
        { label: "Sprint", value: "S12 · wk 2" },
        { label: "Open items", value: "64" },
        { label: "Overdue", value: "2" },
      ]}
      footRight="Delivery governance · fortnightly"
    >
      <div className={a.kpiRow} style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        <Kpi label="Risks open" value="24" delta="6 high impact" deltaTone="flat" tone="risk" />
        <Kpi label="Issues open" value="9" delta="4 fewer than S11" deltaTone="up" tone="warn" />
        <Kpi label="Dependencies open" value="31" delta="Across 6 squads" deltaTone="flat" tone="info" />
        <Kpi label="Overdue dependencies" value="2" delta="down 90% on sprint 1" deltaTone="up" tone="ok" />
        <Kpi label="Escalated to board" value="4" delta="All with owners" deltaTone="flat" tone="warn" />
      </div>

      <Panel
        title="RAID register, open and recently closed"
        note="6 of 64 items shown"
        style={{ flex: 1.15 }}
        flush
      >
        <table className={a.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Description</th>
              <th>Impact</th>
              <th>Owner</th>
              <th>Affected workstream</th>
              <th>Due</th>
              <th>Status</th>
              <th>Mitigation / corrective action</th>
              <th style={{ textAlign: "center" }}>Esc.</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td className={a.tdId}>{r.id}</td>
                <td>
                  <Pill tone={r.typeTone}>{r.type}</Pill>
                </td>
                <td className={a.tdStrong} style={{ maxWidth: 250 }}>
                  {r.desc}
                </td>
                <td>
                  <Pill tone={r.impactTone}>{r.impact}</Pill>
                </td>
                <td style={{ whiteSpace: "nowrap" }}>{r.owner}</td>
                <td style={{ whiteSpace: "nowrap" }}>{r.workstream}</td>
                <td className={a.mono} style={{ whiteSpace: "nowrap" }}>
                  {r.due}
                </td>
                <td>
                  <Pill tone={r.statusTone}>{r.status}</Pill>
                </td>
                <td style={{ maxWidth: 210 }}>{r.action}</td>
                <td style={{ textAlign: "center", color: r.esc ? C.risk : C.ink4, fontWeight: 600 }}>
                  {r.esc ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <div className={a.row} style={{ flex: "0.62" }}>
        <Panel title="Overdue dependency trend" note="sprint 1 to sprint 12" style={{ flex: "1.1" }}>
          <TrendChart />
        </Panel>
        <Panel title="Open items by owning team" note="64 items" style={{ flex: "1" }} flush>
          {byOwner.slice(0, 5).map((t) => (
            <div key={t.team} className={a.listRow}>
              <span className={a.listLabel} style={{ flex: "0 0 110px" }}>
                {t.team}
              </span>
              <div className={a.barTrack} style={{ flex: 1 }}>
                <div
                  className={a.barSeg}
                  style={{ width: `${(t.open / 16) * 100}%`, background: C.accent }}
                />
              </div>
              <span className={a.listMeta} style={{ width: 18, textAlign: "right" }}>
                {t.open}
              </span>
              <span
                className={a.listMeta}
                style={{ width: 52, textAlign: "right", color: t.overdue ? C.risk : C.ink4 }}
              >
                {t.overdue} overdue
              </span>
            </div>
          ))}
        </Panel>
        <Panel title="Escalation route" style={{ flex: "0.85" }} flush>
          {[
            { l: "Squad standup", d: "Daily · owner and date confirmed" },
            { l: "Delivery sync", d: "Weekly · cross squad impacts" },
            { l: "Portfolio review", d: "Fortnightly · overdue and high impact" },
            { l: "Executive review", d: "Monthly · decisions and trade offs" },
          ].map((s, i) => (
            <div key={s.l} className={a.listRow}>
              <span
                className={a.mono}
                style={{
                  width: 16,
                  height: 16,
                  display: "grid",
                  placeItems: "center",
                  background: C.navy,
                  color: "#fff",
                  fontSize: 8,
                  borderRadius: 2,
                  flex: "none",
                }}
              >
                {i + 1}
              </span>
              <span className={a.listLabel}>{s.l}</span>
              <span className={a.listMeta}>{s.d}</span>
            </div>
          ))}
          <div style={{ padding: "8px 12px" }}>
            <Legend
              items={[
                { color: C.risk, label: "High impact" },
                { color: C.warn, label: "Medium" },
                { color: C.accent, label: "Dependency" },
              ]}
            />
          </div>
        </Panel>
      </div>
    </Canvas>
  );
}
