import type { Metadata } from "next";
import {
  certifications,
  education,
  hero,
  languages,
  roles,
  selectedImpact,
  toolkit,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Button, Section } from "@/components/ui";
import { PrintButton } from "./PrintButton";
import s from "./cv.module.scss";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `Curriculum vitae for ${siteConfig.name} — ${siteConfig.role}.`,
  robots: { index: false, follow: true },
};

/* Professional roles only — the study/relocation entry belongs under
   education on a CV, not in the employment history. */
const professional = roles.filter((r) => !r.current);

export default function CvPage() {
  return (
    <Section tight>
      <div className={s.wrap}>
        <div className={`${s.toolbar} no-print`}>
          <p className={s.toolbarNote}>
            A print-optimised version of this CV. Use <strong>Save as PDF</strong> to download a
            copy, or get in touch by email for a tailored version.
          </p>
          <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
            <PrintButton />
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Email me
            </Button>
          </div>
        </div>

        <article className={s.sheet}>
          <header className={s.head}>
            <h1 className={s.name}>{hero.name}</h1>
            <p className={s.role}>{hero.role}</p>
            <div className={s.contactLine}>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer noopener">
                linkedin.com/in/dtmnhat
              </a>
              <span>{siteConfig.location}</span>
              <span>{siteConfig.availability}</span>
            </div>
          </header>

          <section className={s.block}>
            <p className={s.blockLabel}>Profile</p>
            <p className={s.summary}>
              {hero.lede} {hero.body}
            </p>
          </section>

          <section className={s.block}>
            <p className={s.blockLabel}>Selected impact</p>
            <div className={s.twoCol}>
              {selectedImpact.map((k) => (
                <p key={k.label} className={s.point}>
                  <strong style={{ color: "var(--navy-900)" }}>{k.value}</strong> — {k.label}
                </p>
              ))}
            </div>
          </section>

          <section className={s.block}>
            <p className={s.blockLabel}>Professional experience</p>
            {professional.map((r) => (
              <div key={`${r.company}-${r.period}`} className={s.entry}>
                <div className={s.entryHead}>
                  <p className={s.entryRole}>{r.title}</p>
                  <span className={s.entryPeriod}>{r.period}</span>
                </div>
                <p className={s.entryCompany}>
                  {r.company}
                  {(r.descriptor || r.formalTitle) && (
                    <span className={s.entryMeta}>
                      {r.descriptor ? ` · ${r.descriptor}` : ""}
                      {r.formalTitle ? ` · formal title: ${r.formalTitle}` : ""}
                    </span>
                  )}
                </p>
                <p className={s.entryScope}>{r.scopeLine}</p>
                <div className={s.entryPoints}>
                  {r.metrics.map((m) => (
                    <p key={m.label} className={s.point}>
                      <strong style={{ color: "var(--navy-900)" }}>{m.value}</strong> — {m.label}
                    </p>
                  ))}
                  {r.notes?.map((n) => (
                    <p key={n} className={s.point}>
                      {n}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className={s.block}>
            <p className={s.blockLabel}>Education</p>
            {education.map((e) => (
              <div key={e.qualification} className={s.credRow}>
                <span className={s.credName}>
                  {e.qualification}
                  <span className={s.credSub}>
                    {e.field} · {e.institution}, {e.location}
                  </span>
                </span>
                <span className={s.credYear}>{e.period}</span>
              </div>
            ))}
            <div className={s.credRow}>
              <span className={s.credName}>
                Postgraduate study &amp; international relocation
                <span className={s.credSub}>{roles.find((r) => r.current)?.scopeLine}</span>
              </span>
              <span className={s.credYear}>2024–present</span>
            </div>
          </section>

          <section className={s.block}>
            <p className={s.blockLabel}>Professional development</p>
            {certifications.map((d) => (
              <div key={d.name} className={s.credRow}>
                <span className={s.credName}>
                  {d.name}
                  <span className={s.credSub}>
                    {d.issuer}
                    {d.platform ? ` · ${d.platform}` : ""}
                    {d.courses ? ` · ${d.courses}` : ""}
                  </span>
                </span>
                <span className={s.credYear}>{d.year}</span>
              </div>
            ))}
          </section>

          <section className={s.block}>
            <p className={s.blockLabel}>Toolkit</p>
            <div className={s.twoCol}>
              {toolkit.map((t) => (
                <p key={t.group} className={s.point}>
                  <strong style={{ color: "var(--navy-900)" }}>{t.group}</strong> —{" "}
                  {t.items.join(", ")}
                </p>
              ))}
            </div>
          </section>

          <section className={s.block}>
            <p className={s.blockLabel}>Languages</p>
            <div className={s.twoCol}>
              {languages.map((l) => (
                <p key={l.name} className={s.point}>
                  <strong style={{ color: "var(--navy-900)" }}>{l.name}</strong> — {l.level}
                </p>
              ))}
            </div>
          </section>
        </article>
      </div>
    </Section>
  );
}
