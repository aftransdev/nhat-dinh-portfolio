import type { Metadata } from "next";
import Link from "next/link";
import { roles } from "@/lib/content";
import { ArrowRight, PageIntro, Section, TagRow } from "@/components/ui";
import s from "./experience.module.scss";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "7+ years across PMO, portfolio governance, delivery coordination and international operations — retail transformation, digital banking, global trading and international operations.",
};

const slug = (r: (typeof roles)[number]) =>
  r.company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* Career totals for the supporting column — kept here rather than in content
   because they only mean anything alongside this page's timeline. */
const careerStats = [
  { value: "7+", label: "Years across PMO and governance" },
  { value: "4", label: "Organisations, three sectors" },
  { value: "150+", label: "Concurrent projects at peak" },
  { value: "€5–10M", label: "Largest portfolio funding governed" },
  { value: "CEO / CFO", label: "Reporting audiences supported" },
];

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="7+ years across PMO, portfolio governance, delivery coordination and international operations."
        lede="My experience spans retail transformation, digital banking, global trading and international operations, with increasing focus on portfolio governance, integrated planning, financial oversight and executive reporting."
      />

      <Section>
        <div className={s.layout}>
          {/* ------------------------- career timeline ------------------------ */}
          <nav className={s.rail} aria-label="Career timeline">
            <p className={s.railLabel}>Career timeline</p>
            <div className={s.railList}>
              {roles.map((r) => (
                <Link
                  key={slug(r)}
                  href={`#${slug(r)}`}
                  className={`${s.railItem} ${r.current ? s.railCurrent : ""}`}
                >
                  <span className={s.railPeriod}>{r.period}</span>
                  <span className={s.railCompany}>{r.company}</span>
                  <span className={s.railRole}>{r.title}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* --------------------------- role detail -------------------------- */}
          <div className={s.roles}>
            {roles.map((r) => (
              <article
                key={slug(r)}
                id={slug(r)}
                className={`${s.card} ${r.current ? s.cardCurrent : ""}`}
              >
                <div className={s.cardHead}>
                  <p className={s.company}>{r.company}</p>
                  <span className={s.period}>{r.period}</span>
                </div>
                <h2 className={s.role}>{r.title}</h2>
                {(r.descriptor || r.formalTitle) && (
                  <p className={s.descriptor}>
                    {r.descriptor && <span>{r.descriptor}</span>}
                    {r.formalTitle && (
                      <span className={s.formal}>Formal title: {r.formalTitle}</span>
                    )}
                  </p>
                )}
                <p className={s.scopeLine}>{r.scopeLine}</p>

                <p className={s.blockLabel}>Scope of responsibility</p>
                <TagRow items={r.scope} />

                {r.metrics.length > 0 && (
                  <>
                    <p className={s.blockLabel}>Measurable impact</p>
                    <div className={s.metrics}>
                      {r.metrics.map((m) => (
                        <div key={m.label} className={s.metric}>
                          <p className={s.metricValue}>{m.value}</p>
                          <p className={s.metricLabel}>{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {r.notes && (
                  <>
                    <p className={s.blockLabel}>Also delivered</p>
                    <div className={s.notes}>
                      {r.notes.map((n) => (
                        <p key={n} className={s.note}>
                          {n}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>

          {/* ------------------------ supporting column ----------------------- */}
          <aside className={s.support}>
            <div className={s.panel}>
              <p className={s.panelLabel}>Career at a glance</p>
              {careerStats.map((c) => (
                <div key={c.label} className={s.statRow}>
                  <span className={s.statLabel}>{c.label}</span>
                  <span className={s.statValue}>{c.value}</span>
                </div>
              ))}
            </div>

            <Link href="/qualifications" className={s.qualLink}>
              <span className={s.qualLabel}>Qualifications</span>
              <span className={s.qualTitle}>Education &amp; certifications</span>
              <span className={s.qualBody}>
                MSc Business Administration, plus verifiable certification in programme
                management, agile tooling and portfolio analytics.
              </span>
              <span className={s.qualCta}>
                View qualifications
                <ArrowRight />
              </span>
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
