import type { ReactNode } from "react";
import { C, Canvas, Panel, Pill, styles as a } from "./chrome";

/* Contact sheet of a seven section executive pack. Each thumbnail is a
   miniature of the real slide layout rather than a grey placeholder. */

const SLIDE_W = 233;
const SLIDE_H = 168;

function Slide({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        width: SLIDE_W,
        height: SLIDE_H,
        flex: "none",
        background: "#fff",
        border: `1px solid ${C.gridStrong}`,
        borderTop: `2px solid ${C.navy}`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "6px 8px 5px",
          borderBottom: `1px solid ${C.grey}`,
          display: "flex",
          alignItems: "baseline",
          gap: 5,
        }}
      >
        <span
          className={a.mono}
          style={{ fontSize: 7, color: C.accent, fontWeight: 600, letterSpacing: "0.08em" }}
        >
          {n}
        </span>
        <span style={{ fontSize: 8.5, fontWeight: 600, color: C.ink, letterSpacing: "-0.01em" }}>
          {title}
        </span>
      </div>
      <div style={{ flex: 1, padding: "7px 8px", minHeight: 0 }}>{children}</div>
    </div>
  );
}

const TextLine = ({ w, dark }: { w: number; dark?: boolean }) => (
  <div
    style={{
      height: 3,
      width: `${w}%`,
      background: dark ? C.ink4 : C.grid,
      borderRadius: 1,
      marginBottom: 4,
    }}
  />
);

const MiniTile = ({ v, l, tone }: { v: string; l: string; tone?: string }) => (
  <div style={{ flex: 1, border: `1px solid ${C.grid}`, borderTop: `2px solid ${tone ?? C.accent}`, padding: "4px 5px" }}>
    <div style={{ fontSize: 11, fontWeight: 600, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1 }}>
      {v}
    </div>
    <div style={{ fontSize: 5.5, color: C.ink4, marginTop: 3, letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {l}
    </div>
  </div>
);

const MiniRow = ({ label, tone, w }: { label: string; tone: string; w: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3.5 }}>
    <span style={{ fontSize: 6, color: C.ink3, width: 44, whiteSpace: "nowrap", overflow: "hidden" }}>
      {label}
    </span>
    <div style={{ flex: 1, height: 4, background: C.grid, borderRadius: 1, overflow: "hidden" }}>
      <div style={{ width: `${w}%`, height: "100%", background: tone }} />
    </div>
  </div>
);

export function SteeringPack() {
  return (
    <Canvas
      title="Executive Steering Pack"
      subtitle="Decisions and exceptions before detail, in seven sections held in a fixed order for every portfolio review"
      fields={[
        { label: "Review", value: "Portfolio Board" },
        { label: "Sections", value: "7" },
        { label: "Period", value: "FY24 · P09" },
      ]}
      footRight="Circulated 2 days before, decisions logged the next day"
    >
      <div className={a.row} style={{ flex: 1 }}>
        <Panel title="Pack structure, section thumbnails" note="7 sections" style={{ flex: "2.3" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Slide n="01" title="Executive Summary">
              <div style={{ marginBottom: 8 }}>
                <TextLine w={96} dark />
                <TextLine w={88} />
                <TextLine w={92} />
                <TextLine w={85} />
                <TextLine w={90} />
                <TextLine w={64} />
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Pill tone="warn">Portfolio amber</Pill>
                <Pill tone="risk">5 decisions</Pill>
                <Pill tone="ok">Governance 100%</Pill>
              </div>
              <div style={{ marginTop: 8, paddingTop: 6, borderTop: `1px solid ${C.grey}` }}>
                <TextLine w={82} />
                <TextLine w={74} />
              </div>
            </Slide>

            <Slide n="02" title="Portfolio Health">
              <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                <MiniTile v="152" l="Projects" />
                <MiniTile v="86%" l="On plan" tone={C.warn} />
                <MiniTile v="78%" l="Budget" tone={C.ok} />
              </div>
              <MiniRow label="Delivery" tone={C.ok} w={78} />
              <MiniRow label="Financial" tone={C.warn} w={62} />
              <MiniRow label="Resource" tone={C.risk} w={44} />
              <MiniRow label="Governance" tone={C.ok} w={92} />
              <div style={{ marginTop: 6, paddingTop: 5, borderTop: `1px solid ${C.grey}` }}>
                <span style={{ fontSize: 6, color: C.ink4 }}>
                  Indicators against tolerance · P09
                </span>
              </div>
            </Slide>

            <Slide n="03" title="Key Changes">
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[
                  { t: "WMS cutover moved to Oct", tone: "risk" as const },
                  { t: "ERP UAT extended 2 weeks", tone: "warn" as const },
                  { t: "Data squad capacity reduced", tone: "warn" as const },
                  { t: "Loyalty scope reduced", tone: "info" as const },
                  { t: "Baseline v3.1 published", tone: "info" as const },
                  { t: "Pricing programme approved", tone: "ok" as const },
                  { t: "Capitalisation model closed", tone: "ok" as const },
                  { t: "POS wave 3 delivered", tone: "ok" as const },
                ].map((c) => (
                  <div key={c.t} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        flex: "none",
                        background:
                          c.tone === "risk" ? C.risk : c.tone === "warn" ? C.warn : c.tone === "ok" ? C.ok : C.accent,
                      }}
                    />
                    <span style={{ fontSize: 6.5, color: C.ink3 }}>{c.t}</span>
                  </div>
                ))}
              </div>
            </Slide>

            <Slide n="04" title="Critical Risks and Dependencies">
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { id: "R014", w: 90, tone: C.risk },
                  { id: "R022", w: 76, tone: C.risk },
                  { id: "R031", w: 58, tone: C.warn },
                  { id: "R008", w: 55, tone: C.warn },
                  { id: "DEP052", w: 52, tone: C.warn },
                  { id: "DEP038", w: 40, tone: C.accent },
                  { id: "DEP041", w: 34, tone: C.accent },
                ].map((r) => (
                  <MiniRow key={r.id} label={r.id} tone={r.tone} w={r.w} />
                ))}
              </div>
            </Slide>

            <Slide n="05" title="Financial Position">
              <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                <MiniTile v="€8.4M" l="Budget" />
                <MiniTile v="€8.7M" l="Forecast" tone={C.warn} />
                <MiniTile v="+3.6%" l="Variance" tone={C.risk} />
              </div>
              <svg width="100%" height="50" viewBox="0 0 200 62" aria-hidden="true">
                {[14, 30, 46].map((y) => (
                  <line key={y} x1="2" x2="198" y1={y} y2={y} stroke={C.grey} strokeWidth="1" />
                ))}
                <polyline points="2,56 26,48 50,41 74,34 98,27 122,21 146,15 170,9 194,4" fill="none" stroke={C.accent3} strokeWidth="1.4" />
                <polyline points="2,57 26,50 50,44 74,37 98,31 122,24 146,19" fill="none" stroke={C.navy} strokeWidth="1.8" />
                <line x1="146" x2="146" y1="2" y2="60" stroke={C.risk} strokeWidth="0.8" strokeDasharray="2 2" />
              </svg>
              <div style={{ marginTop: 5, paddingTop: 4, borderTop: `1px solid ${C.grey}` }}>
                <span style={{ fontSize: 6, color: C.ink4 }}>
                  Two variances above €100k tolerance · both with treatment agreed
                </span>
              </div>
            </Slide>

            <Slide n="06" title="Decisions Required">
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[
                  { t: "Approve €420k WMS change", d: "04 Oct" },
                  { t: "Reprioritise Data intake", d: "09 Oct" },
                  { t: "Confirm benefits baseline", d: "16 Oct" },
                  { t: "Release ERP contingency", d: "18 Oct" },
                  { t: "Approve baseline v3.2", d: "31 Oct" },
                ].map((d) => (
                  <div
                    key={d.t}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 4,
                      paddingBottom: 3,
                      borderBottom: `1px solid ${C.grey}`,
                    }}
                  >
                    <span style={{ fontSize: 6.5, color: C.ink }}>{d.t}</span>
                    <span className={a.mono} style={{ fontSize: 6, color: C.risk, fontWeight: 600 }}>
                      {d.d}
                    </span>
                  </div>
                ))}
              </div>
            </Slide>

            <Slide n="07" title="Actions and Owners">
              <div style={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                {[
                  { o: "D. Bui", t: "Replan ERP exit", d: "26 Sep" },
                  { o: "T. Ngo", t: "WMS contingency", d: "03 Oct" },
                  { o: "L. Tran", t: "Q4 capacity options", d: "07 Oct" },
                  { o: "H. Le", t: "Refresh forecast", d: "10 Oct" },
                  { o: "K. Do", t: "Confirm content freeze", d: "12 Oct" },
                  { o: "R. Ha", t: "Close POS wave 3", d: "14 Oct" },
                  { o: "PMO", t: "Log board decisions", d: "T+1" },
                ].map((r) => (
                  <div key={r.t} style={{ display: "flex", gap: 4, alignItems: "baseline" }}>
                    <span style={{ fontSize: 6, color: C.accent, width: 26, fontWeight: 600 }}>{r.o}</span>
                    <span style={{ fontSize: 6.5, color: C.ink3, flex: 1 }}>{r.t}</span>
                    <span className={a.mono} style={{ fontSize: 6, color: C.ink4 }}>
                      {r.d}
                    </span>
                  </div>
                ))}
              </div>
            </Slide>

            {/* The two empty slots are the point: detail is available, not presented */}
            <div
              style={{
                width: SLIDE_W * 2 + 10,
                height: SLIDE_H,
                flex: "none",
                border: `1px dashed ${C.gridStrong}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 16px",
                background: "#fcfdfe",
              }}
            >
              <p
                style={{
                  fontSize: 8.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.ink4,
                }}
              >
                Appendix, not presented
              </p>
              <p style={{ fontSize: 8, color: C.ink3, marginTop: 6, lineHeight: 1.5 }}>
                Detailed project reports, the full RAID register, the financial workbook and the
                integrated plan are circulated with the pack and available on request. The
                in the room pack stays at seven sections.
              </p>
            </div>
          </div>
        </Panel>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: "1" }}>
          <Panel title="Design rules" style={{ flex: "0.85" }} flush>
            {[
              "Fixed section order every cycle",
              "Exceptions and decisions before detail",
              "One page per section, no appendices in the room",
              "Every number traceable to a defined measure",
              "Every action carries an owner and a date",
              "Detail available on request, not by default",
            ].map((r, i) => (
              <div key={r} className={a.listRow}>
                <span
                  className={a.mono}
                  style={{
                    width: 15,
                    height: 15,
                    display: "grid",
                    placeItems: "center",
                    background: C.grey,
                    color: C.ink3,
                    fontSize: 8,
                    borderRadius: 2,
                    flex: "none",
                  }}
                >
                  {i + 1}
                </span>
                <span className={a.listLabel} style={{ whiteSpace: "normal" }}>
                  {r}
                </span>
              </div>
            ))}
          </Panel>

          <Panel title="Audience and circulation" style={{ flex: "0.62" }} flush>
            {[
              { r: "CEO", s: "Chair · decisions and escalations" },
              { r: "CFO", s: "Financial position and variances" },
              { r: "Function heads", s: "Delivery status and actions" },
              { r: "PMO", s: "Author · evidence and follow through" },
            ].map((x) => (
              <div key={x.r} className={a.listRow}>
                <span className={a.listLabel} style={{ flex: "0 0 88px" }}>
                  {x.r}
                </span>
                <span className={a.listMeta} style={{ flex: 1, textAlign: "right" }}>
                  {x.s}
                </span>
              </div>
            ))}
          </Panel>

          <Panel title="Pack cycle" note="monthly" style={{ flex: "0.8" }} flush>
            {[
              { d: "5 days", s: "Submissions close", tone: "warn" as const },
              { d: "4 days", s: "Consolidation and QA", tone: "info" as const },
              { d: "2 days", s: "Pack circulated", tone: "info" as const },
              { d: "Review", s: "Board review", tone: "ok" as const },
              { d: "Next day", s: "Decisions and actions logged", tone: "ok" as const },
            ].map((c) => (
              <div key={c.d} className={a.listRow}>
                <span className={a.mono} style={{ width: 24, fontSize: 9, color: C.ink4, flex: "none" }}>
                  {c.d}
                </span>
                <span className={a.listLabel}>{c.s}</span>
                <Pill tone={c.tone}>{c.tone === "ok" ? "Done" : c.tone === "warn" ? "Gate" : "Prep"}</Pill>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </Canvas>
  );
}
