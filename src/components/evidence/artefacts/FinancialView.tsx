import { C, Canvas, Kpi, Legend, Panel, Pill, styles as a } from "./chrome";

const workstreams = [
  { ws: "Technology", budget: 2850, forecast: 3020, actual: 2140, capex: 68, benefits: "€1.9M" },
  { ws: "Retail Operations", budget: 1620, forecast: 1580, actual: 1210, capex: 54, benefits: "€2.4M" },
  { ws: "Supply Chain", budget: 1340, forecast: 1495, actual: 890, capex: 61, benefits: "€1.1M" },
  { ws: "Data & Analytics", budget: 880, forecast: 905, actual: 640, capex: 47, benefits: "€0.7M" },
  { ws: "Commercial", budget: 720, forecast: 690, actual: 505, capex: 22, benefits: "€1.3M" },
  { ws: "Finance", budget: 540, forecast: 525, actual: 415, capex: 31, benefits: "€0.6M" },
];

const totals = workstreams.reduce(
  (t, w) => ({
    budget: t.budget + w.budget,
    forecast: t.forecast + w.forecast,
    actual: t.actual + w.actual,
  }),
  { budget: 0, forecast: 0, actual: 0 },
);

const fmt = (n: number) => `€${(n / 1000).toFixed(2)}M`;
const pct = (a: number, b: number) => ((a - b) / b) * 100;

/* Cumulative spend S-curve: plan vs forecast vs actual, €m */
const plan = [0.4, 0.9, 1.5, 2.2, 2.9, 3.7, 4.5, 5.3, 6.0, 6.8, 7.6, 8.4];
const fcast = [0.4, 0.9, 1.4, 2.1, 2.9, 3.8, 4.7, 5.6, 6.4, 7.2, 8.1, 8.7];
const act = [0.3, 0.8, 1.3, 2.0, 2.8, 3.6, 4.4, 5.2, 6.1];

function SCurve() {
  const W = 340;
  const H = 150;
  const padL = 26;
  const padB = 17;
  const max = 9;
  const step = (W - padL - 6) / 11;
  const y = (v: number) => H - padB - (v / max) * (H - padB - 10);
  const line = (arr: number[]) => arr.map((v, i) => `${padL + i * step},${y(v)}`).join(" ");
  const mo = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  return (
    <div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        {[0, 3, 6, 9].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W} y1={y(t)} y2={y(t)} stroke={C.grid} strokeWidth="1" />
            <text x={padL - 5} y={y(t) + 3} textAnchor="end" fontSize="7.5" fill={C.ink4}>
              {t}
            </text>
          </g>
        ))}
        {mo.map((m, i) => (
          <text
            key={`${m}-${i}`}
            x={padL + i * step}
            y={H - 5}
            textAnchor="middle"
            fontSize="7.5"
            fill={C.ink4}
          >
            {m}
          </text>
        ))}
        <line x1={padL} x2={W} y1={H - padB} y2={H - padB} stroke={C.axis} strokeWidth="1" />
        <polyline points={line(plan)} fill="none" stroke={C.accent3} strokeWidth="1.6" />
        <polyline
          points={line(fcast)}
          fill="none"
          stroke={C.accent}
          strokeWidth="1.6"
          strokeDasharray="3.5 2.5"
        />
        <polyline points={line(act)} fill="none" stroke={C.navy} strokeWidth="2.2" />
        {act.map((v, i) => (
          <circle key={i} cx={padL + i * step} cy={y(v)} r="1.9" fill={C.navy} />
        ))}
        {/* Reporting date marker */}
        <line
          x1={padL + 8 * step}
          x2={padL + 8 * step}
          y1={8}
          y2={H - padB}
          stroke={C.risk}
          strokeWidth="1"
          strokeDasharray="3 2"
        />
      </svg>
      <div style={{ marginTop: 4 }}>
        <Legend
          items={[
            { color: C.accent3, label: "Plan" },
            { color: C.accent, label: "Forecast" },
            { color: C.navy, label: "Actual" },
          ]}
        />
      </div>
    </div>
  );
}

/* CAPEX and OPEX split by workstream, stacked horizontal bars */
function CapexOpex() {
  return (
    <div>
      {workstreams.slice(0, 4).map((w) => (
        <div key={w.ws} style={{ marginBottom: 8 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 3,
              fontSize: 9.5,
            }}
          >
            <span className={a.gridLabel}>{w.ws}</span>
            <span className={a.listMeta}>
              {w.capex}% / {100 - w.capex}%
            </span>
          </div>
          <div className={a.barTrack} style={{ height: 8 }}>
            <div className={a.barSeg} style={{ width: `${w.capex}%`, background: C.navy }} />
            <div className={a.barSeg} style={{ width: `${100 - w.capex}%`, background: C.accent3 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 10 }}>
        <Legend
          items={[
            { color: C.navy, label: "CAPEX (capitalised)" },
            { color: C.accent3, label: "OPEX" },
          ]}
        />
      </div>
    </div>
  );
}

export function FinancialView() {
  const variance = pct(totals.forecast, totals.budget);

  return (
    <Canvas
      title="Portfolio Financial View"
      subtitle="Budget, forecast, actual, CAPEX/OPEX split, variance, resource allocation and benefits tracking"
      fields={[
        { label: "Period", value: "FY24 · P09" },
        { label: "Currency", value: "EUR '000" },
        { label: "Source", value: "GL + portfolio" },
      ]}
      footRight="Financial review · monthly with Finance"
    >
      <div className={a.kpiRow} style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <Kpi label="Approved budget" value={fmt(totals.budget)} delta="FY24 envelope" deltaTone="flat" tone="info" />
        <Kpi label="Full year forecast" value={fmt(totals.forecast)} delta={`${variance > 0 ? "up " : "down "}${Math.abs(variance).toFixed(1)}% on budget`} deltaTone="down" tone="warn" />
        <Kpi label="Actual YTD" value={fmt(totals.actual)} delta="73% of budget" deltaTone="flat" tone="ok" />
        <Kpi label="Capitalised" value="56%" delta="CAPEX share of spend" deltaTone="flat" tone="info" />
        <Kpi label="Contributors" value="104" delta="Across 6 workstreams" deltaTone="flat" tone="info" />
        <Kpi label="Benefits tracked" value="€8.0M" delta="Against business cases" deltaTone="up" tone="ok" />
      </div>

      <div className={a.row} style={{ flex: 1 }}>
        <Panel
          title="Budget, forecast and actual by workstream"
          note="EUR '000"
          style={{ flex: "1.7" }}
          flush
        >
          <table className={a.table}>
            <thead>
              <tr>
                <th>Workstream</th>
                <th style={{ textAlign: "right" }}>Budget</th>
                <th style={{ textAlign: "right" }}>Forecast</th>
                <th style={{ textAlign: "right" }}>Actual YTD</th>
                <th style={{ textAlign: "right" }}>Variance</th>
                <th style={{ textAlign: "right" }}>CAPEX</th>
                <th style={{ textAlign: "right" }}>Benefits</th>
                <th style={{ textAlign: "center" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {workstreams.map((w) => {
                const v = pct(w.forecast, w.budget);
                const tone = v > 5 ? "risk" : v > 1 ? "warn" : "ok";
                return (
                  <tr key={w.ws}>
                    <td className={a.tdStrong}>{w.ws}</td>
                    <td className={a.tdNum}>{w.budget.toLocaleString("en-GB")}</td>
                    <td className={a.tdNum}>{w.forecast.toLocaleString("en-GB")}</td>
                    <td className={a.tdNum}>{w.actual.toLocaleString("en-GB")}</td>
                    <td className={v > 0.5 ? a.tdNumNeg : a.tdNumPos}>
                      {/* Parentheses for a favourable variance, the way a
                          finance pack shows it, so no minus sign is needed */}
                      {v > 0 ? `+${v.toFixed(1)}%` : `(${Math.abs(v).toFixed(1)}%)`}
                    </td>
                    <td className={a.tdNum}>{w.capex}%</td>
                    <td className={a.tdNum}>{w.benefits}</td>
                    <td style={{ textAlign: "center" }}>
                      <Pill tone={tone}>{tone === "ok" ? "In tol." : tone === "warn" ? "Watch" : "Breach"}</Pill>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className={a.tfoot}>
              <tr>
                <td>Portfolio total</td>
                <td className={a.tdNum}>{totals.budget.toLocaleString("en-GB")}</td>
                <td className={a.tdNum}>{totals.forecast.toLocaleString("en-GB")}</td>
                <td className={a.tdNum}>{totals.actual.toLocaleString("en-GB")}</td>
                <td className={a.tdNumNeg}>+{variance.toFixed(1)}%</td>
                <td className={a.tdNum}>56%</td>
                <td className={a.tdNum}>€8.0M</td>
                <td style={{ textAlign: "center" }}>
                  <Pill tone="warn">Watch</Pill>
                </td>
              </tr>
            </tfoot>
          </table>
        </Panel>

        <Panel title="Cumulative spend versus plan" note="€m · FY24" style={{ flex: "1" }}>
          <SCurve />
        </Panel>
      </div>

      <div className={a.row} style={{ flex: "0.68" }}>
        <Panel title="CAPEX / OPEX split by workstream" style={{ flex: "1.15" }}>
          <CapexOpex />
        </Panel>

        <Panel title="Material variances requiring decision" note="> €100k or > 5%" style={{ flex: "1.5" }} flush>
          <table className={a.table}>
            <thead>
              <tr>
                <th>Driver</th>
                <th>Workstream</th>
                <th style={{ textAlign: "right" }}>Impact</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={a.tdStrong}>WMS integrator scope</td>
                <td>Supply Chain</td>
                <td className={a.tdNumNeg}>+155</td>
                <td>Change request to board</td>
              </tr>
              <tr>
                <td className={a.tdStrong}>ERP extended UAT cycle</td>
                <td>Technology</td>
                <td className={a.tdNumNeg}>+170</td>
                <td>From contingency</td>
              </tr>
              <tr>
                <td className={a.tdStrong}>POS hardware price movement</td>
                <td>Retail Ops</td>
                <td className={a.tdNumPos}>(40)</td>
                <td>Released to contingency</td>
              </tr>
              <tr>
                <td className={a.tdStrong}>Data contractor rates</td>
                <td>Data</td>
                <td className={a.tdNumNeg}>+25</td>
                <td>Absorbed in workstream</td>
              </tr>
            </tbody>
          </table>
        </Panel>

        <Panel title="Resource allocation" note="104 contributors" style={{ flex: "0.95" }} flush>
          {[
            { t: "Technology", n: 34 },
            { t: "Retail Operations", n: 21 },
            { t: "Supply Chain", n: 16 },
            { t: "Data & Analytics", n: 13 },
            { t: "Commercial", n: 10 },
            { t: "Finance & Corporate", n: 10 },
          ].map((r) => (
            <div key={r.t} className={a.listRow}>
              <span className={a.listLabel} style={{ flex: "0 0 108px" }}>
                {r.t}
              </span>
              <div className={a.barTrack} style={{ flex: 1, height: 6 }}>
                <div
                  className={a.barSeg}
                  style={{ width: `${(r.n / 36) * 100}%`, background: C.accent }}
                />
              </div>
              <span className={a.listMeta} style={{ width: 20, textAlign: "right" }}>
                {r.n}
              </span>
            </div>
          ))}
        </Panel>
      </div>
    </Canvas>
  );
}
