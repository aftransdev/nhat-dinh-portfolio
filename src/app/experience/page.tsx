import type { Metadata } from "next";
import { development, education, languages, roles, toolkit } from "@/lib/content";
import { PageIntro, Section, SectionHead, TagRow } from "@/components/ui";
import s from "./experience.module.scss";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "7+ years across PMO, portfolio governance, delivery coordination and international operations — retail transformation, digital banking, global trading and international operations.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="7+ years across PMO, portfolio governance, delivery coordination and international operations."
        lede="My experience spans retail transformation, digital banking, global trading and international operations, with increasing focus on portfolio governance, integrated planning, financial oversight and executive reporting."
      />

      <Section>
        <div className={s.timeline}>
          {roles.map((r) => (
            <article key={`${r.company}-${r.period}`} className={s.entry}>
              <span
                className={r.current ? `${s.marker} ${s.markerCurrent}` : s.marker}
                aria-hidden="true"
              />
              <p className={s.period}>{r.period}</p>
              <div className={s.card}>
                <p className={s.company}>{r.company}</p>
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

                <p className={s.blockLabel}>Scope</p>
                <TagRow items={r.scope} />

                {r.metrics.length > 0 && (
                  <>
                    <p className={s.blockLabel}>Selected impact</p>
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
                  <div className={s.notes}>
                    {r.notes.map((n) => (
                      <p key={n} className={s.note}>
                        {n}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Credentials sit below professional experience at reduced weight */}
      <Section tone="grey" tight>
        <SectionHead
          eyebrow="Credentials"
          title="Education & professional development"
        />
        <div className={s.credGrid}>
          <div className={s.credCard}>
            <p className={s.credLabel}>Education</p>
            {education.map((e) => (
              <div key={e.qualification} className={s.credRow}>
                <div>
                  <p className={s.credName}>{e.qualification}</p>
                  <p className={s.credSub}>
                    {e.field} · {e.institution}, {e.location}
                  </p>
                </div>
                <span className={s.credYear}>{e.period}</span>
              </div>
            ))}
          </div>

          <div className={s.credCard}>
            <p className={s.credLabel}>Professional development</p>
            {development.map((d) => (
              <div key={d.name} className={s.credRow}>
                <div>
                  <p className={s.credName}>{d.name}</p>
                  <p className={s.credSub}>{d.issuer}</p>
                </div>
                <span className={s.credYear}>{d.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={s.smallGrid}>
          {toolkit.map((t) => (
            <div key={t.group} className={s.credCard}>
              <p className={s.credLabel}>{t.group}</p>
              <div style={{ marginTop: "0.875rem" }}>
                <TagRow items={t.items} />
              </div>
            </div>
          ))}
        </div>

        <div className={s.smallGrid} style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
          <div className={s.credCard}>
            <p className={s.credLabel}>Languages</p>
            {languages.map((l) => (
              <div key={l.name} className={s.credRow}>
                <p className={s.credName}>{l.name}</p>
                <span className={s.credYear}>{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
