"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/ui";
import { ArtefactFrame } from "./ArtefactFrame";
import { ExecutiveDashboard } from "./artefacts/ExecutiveDashboard";
import { RaidRegister } from "./artefacts/RaidRegister";
import { IntegratedPlan } from "./artefacts/IntegratedPlan";
import { FinancialView } from "./artefacts/FinancialView";
import { GovernanceCalendar } from "./artefacts/GovernanceCalendar";
import { SteeringPack } from "./artefacts/SteeringPack";
import s from "./EvidenceGallery.module.scss";

export type Artefact = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  cta: string;
  answers: string[];
  componentsLabel: string;
  components: { name: string; desc: string }[];
  experience: string[];
};

export const artefacts: Artefact[] = [
  {
    id: "executive-dashboard",
    index: "01",
    title: "Executive Portfolio Dashboard",
    subtitle: "Turning portfolio data into a leadership view.",
    cta: "View sample dashboard",
    answers: [
      "Are we on track?",
      "Where are the exceptions?",
      "Which areas require intervention?",
      "What decisions are outstanding?",
    ],
    componentsLabel: "Example components",
    components: [
      { name: "Portfolio health", desc: "Overall portfolio status and movement." },
      { name: "Milestones", desc: "Key upcoming, completed and delayed milestones." },
      { name: "Financial position", desc: "Budget, forecast and variance visibility." },
      { name: "Top risks", desc: "Highest-impact portfolio risks requiring management attention." },
      { name: "Critical dependencies", desc: "Dependencies affecting multiple initiatives or teams." },
      { name: "Resource pressure", desc: "Where delivery demand and available capacity require attention." },
      { name: "Decisions required", desc: "Items requiring leadership approval, direction or escalation." },
    ],
    experience: [
      "At Pharmacity, I developed portfolio dashboards that consolidated more than 50 delivery, budget, risk and resource measures into a focused set of executive KPIs and recommendations for CEO and CFO reviews.",
    ],
  },
  {
    id: "raid-dependency-view",
    index: "02",
    title: "RAID & Dependency View",
    subtitle: "Making delivery risk and cross-team dependencies actionable.",
    cta: "View sample RAID & dependency register",
    answers: [
      "What could disrupt delivery?",
      "Who owns the response?",
      "Which teams or initiatives are affected?",
      "When is action required?",
    ],
    componentsLabel: "Example fields",
    components: [
      { name: "Risk / issue / dependency", desc: "Item type, classified consistently across teams." },
      { name: "Description & impact", desc: "What it is and what it affects if unresolved." },
      { name: "Owner", desc: "A named individual, never a team inbox." },
      { name: "Affected workstream", desc: "Which initiatives and squads are exposed." },
      { name: "Due date & status", desc: "Committed date and current state of the response." },
      { name: "Mitigation & corrective action", desc: "The specific action being taken." },
      { name: "Escalation required", desc: "Whether the item needs a decision above delivery level." },
    ],
    experience: [
      "At Timo Digital Bank, I maintained integrated schedules and dependency maps across six squads and more than 30 Product, Technology and Data contributors.",
      "The governance approach contributed to a 90% reduction in overdue cross-team dependencies.",
    ],
  },
  {
    id: "integrated-portfolio-plan",
    index: "03",
    title: "Integrated Portfolio Plan",
    subtitle: "Connecting individual initiatives into one delivery perspective.",
    cta: "View sample integrated plan",
    answers: [
      "How do initiatives interact across the year?",
      "Where has delivery moved from baseline?",
      "Which dependencies sit on the critical path?",
      "Where are the decision points?",
    ],
    componentsLabel: "Designed to show",
    components: [
      { name: "Portfolio milestones", desc: "Committed dates across the reporting year." },
      { name: "Initiative timelines", desc: "Start, finish and progress for each initiative." },
      { name: "Baseline versus actual", desc: "Movement against the approved plan." },
      { name: "Cross-project dependencies", desc: "Links between initiatives and owning teams." },
      { name: "Key risks", desc: "Risks attached to specific initiatives and dates." },
      { name: "Corrective actions", desc: "What is being done where delivery has moved." },
      { name: "Decision points", desc: "Where leadership input is required and by when." },
      { name: "Governance events", desc: "Reviews and approvals falling within the window." },
    ],
    experience: [
      "At Pharmacity, I built integrated portfolio plans and dependency views across approximately 45–50 quarterly initiatives.",
      "At Timo Digital Bank, I supported integrated scheduling across six Agile squads.",
    ],
  },
  {
    id: "portfolio-financial-view",
    index: "04",
    title: "Portfolio Financial View",
    subtitle: "Connecting delivery activity with financial visibility.",
    cta: "View sample financial view",
    answers: [
      "Where is funding allocated?",
      "What is forecast versus current position?",
      "Where are material variances emerging?",
      "What resources and benefits are associated with the portfolio?",
    ],
    componentsLabel: "Example components",
    components: [
      { name: "Budget", desc: "Approved envelope by workstream." },
      { name: "Forecast", desc: "Latest full-year position and movement." },
      { name: "CAPEX / OPEX", desc: "Split and capitalisation treatment." },
      { name: "Variance", desc: "Material movements with the driver named." },
      { name: "Resource allocation", desc: "Where contributor capacity is committed." },
      { name: "Capitalisation", desc: "Share of spend eligible for capitalisation." },
      { name: "Benefits tracking", desc: "Expected value against business cases." },
    ],
    experience: [
      "At Pharmacity, I consolidated resource allocation, budgets, forecasts, CAPEX/OPEX and benefits tracking into portfolio-level views covering €5–10M in funding and more than 100 contributors.",
      "At POSCO International, I supported financial and resource planning across a €1–5M financial scope.",
    ],
  },
  {
    id: "governance-calendar",
    index: "05",
    title: "Governance Calendar",
    subtitle: "Making governance cadence predictable.",
    cta: "View sample governance calendar",
    answers: [
      "What must be submitted?",
      "When is information required?",
      "Who reviews it?",
      "Where are decisions made, and what evidence must be kept?",
    ],
    componentsLabel: "Example governance events",
    components: [
      { name: "Portfolio review", desc: "Fortnightly status, exceptions and dependencies." },
      { name: "Executive review", desc: "Monthly decisions, financials and escalations." },
      { name: "Financial review", desc: "Monthly forecast, accruals and variance." },
      { name: "Risk review", desc: "Monthly risk position and mitigation progress." },
      { name: "Change approval", desc: "Weekly scope, baseline and funding changes." },
      { name: "Benefits review", desc: "Quarterly realisation against business cases." },
      { name: "Project closure review", desc: "Evidence, handover and lessons on completion." },
    ],
    experience: [
      "At Pharmacity, stronger governance standards contributed to an improvement in on-time governance submissions from 33% to 100%.",
    ],
  },
  {
    id: "executive-steering-pack",
    index: "06",
    title: "Executive Steering Pack",
    subtitle: "Decisions and exceptions before detail.",
    cta: "View sample executive steering pack",
    answers: [
      "What has changed since the last review?",
      "What needs a decision today?",
      "What is being escalated, and by whom?",
      "What actions carry forward, and when are they due?",
    ],
    componentsLabel: "Example structure",
    components: [
      { name: "01 — Executive summary", desc: "Overall portfolio position and major changes." },
      { name: "02 — Portfolio health", desc: "Delivery, financial and resource indicators." },
      { name: "03 — Key changes", desc: "Material developments since the previous review." },
      { name: "04 — Critical risks & dependencies", desc: "Items requiring management attention." },
      { name: "05 — Financial position", desc: "Budget, forecast and relevant variances." },
      { name: "06 — Decisions required", desc: "Specific management decisions or approvals." },
      { name: "07 — Actions & owners", desc: "Clear follow-up responsibilities and due dates." },
    ],
    experience: [
      "Across Pharmacity, Timo Digital Bank and POSCO International, I translated delivery and financial information into concise reporting for senior stakeholders including CEO, CFO and cross-functional leadership audiences.",
    ],
  },
];

const views: Record<string, () => React.JSX.Element> = {
  "executive-dashboard": ExecutiveDashboard,
  "raid-dependency-view": RaidRegister,
  "integrated-portfolio-plan": IntegratedPlan,
  "portfolio-financial-view": FinancialView,
  "governance-calendar": GovernanceCalendar,
  "executive-steering-pack": SteeringPack,
};

export function EvidenceGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) {
      returnRef.current?.focus();
      returnRef.current = null;
      return;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    // Freeze the page behind the dialog
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openId, close]);

  const open = artefacts.find((x) => x.id === openId) ?? null;
  const OpenView = open ? views[open.id] : null;

  return (
    <>
      <div className={s.list}>
        {artefacts.map((art) => {
          const View = views[art.id];
          return (
            <button
              key={art.id}
              type="button"
              className={s.item}
              aria-haspopup="dialog"
              onClick={(e) => {
                returnRef.current = e.currentTarget;
                setOpenId(art.id);
              }}
            >
              <div className={s.thumb} aria-hidden="true">
                <ArtefactFrame maxScale={1} align="top">
                  <View />
                </ArtefactFrame>
                <span className={s.thumbFade} />
                <span className={s.zoom}>Enlarge</span>
              </div>
              <div className={s.itemBody}>
                <span className={s.itemIndex}>{art.index}</span>
                <h3 className={s.itemTitle}>{art.title}</h3>
                <p className={s.itemSub}>{art.subtitle}</p>
                <p className={s.answersLabel}>Designed to answer</p>
                <ul className={s.answers}>
                  {art.answers.map((q) => (
                    <li key={q} className={s.answer}>
                      {q}
                    </li>
                  ))}
                </ul>
                <span className={s.itemFoot}>
                  {art.cta}
                  <ArrowRight />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {open && OpenView && (
        <div
          className={s.overlay}
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className={s.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="artefact-title"
          >
            <div className={s.dialogHead}>
              <div>
                <p className={s.dialogIndex}>PMO evidence {open.index}</p>
                <h2 className={s.dialogTitle} id="artefact-title">
                  {open.title}
                </h2>
                <p className={s.dialogSub}>{open.subtitle}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className={s.close}
                onClick={close}
                aria-label="Close"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 2.5l10 10M12.5 2.5l-10 10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            <div className={s.dialogBody}>
              <div className={s.stage}>
                <ArtefactFrame maxScale={1} minScale={0.58} align="top">
                  <OpenView />
                </ArtefactFrame>
              </div>
              <p className={s.stageHint}>Scroll horizontally to read the full artefact.</p>

              <div className={s.explain}>
                <div className={s.explainCard}>
                  <p className={s.explainLabel}>{open.componentsLabel}</p>
                  <div className={s.componentGrid}>
                    {open.components.map((c) => (
                      <div key={c.name} className={s.component}>
                        <p className={s.componentName}>{c.name}</p>
                        <p className={s.componentDesc}>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={s.explainCard}>
                  <p className={s.explainLabel}>My relevant experience</p>
                  <div className={s.explainText}>
                    {open.experience.map((e) => (
                      <p key={e}>{e}</p>
                    ))}
                  </div>
                  <p className={s.explainLabel} style={{ marginTop: "1.25rem" }}>
                    Confidentiality
                  </p>
                  <div className={s.explainText}>
                    <p>
                      This artefact is an anonymised recreation built with illustrative data. It
                      contains no confidential information, proprietary datasets or internal
                      documents from previous employers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
