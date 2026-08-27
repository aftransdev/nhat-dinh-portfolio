import type { Metadata } from "next";
import { education, languages, toolkit } from "@/lib/content";
import { CertificateGallery } from "@/components/qualifications/CertificateGallery";
import { PageIntro, Section, SectionHead, TagRow } from "@/components/ui";
import s from "./qualifications.module.scss";

export const metadata: Metadata = {
  title: "Qualifications",
  description:
    "MSc Business Administration (Vrije Universiteit Amsterdam), Bachelor of Economics, and professional certifications in programme management, Jira, Power BI and AI-assisted delivery.",
};

const [msc, bachelor] = education;

export default function QualificationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Qualifications"
        title="Education and professional certification behind the delivery record."
        lede="A postgraduate grounding in leadership and change management, an economics degree, and current certification across programme management, agile delivery tooling and portfolio analytics."
      />

      {/* ------------------------------ education ----------------------------- */}
      <Section>
        <SectionHead eyebrow="Education" title="Postgraduate and undergraduate study" />

        <div className={s.mscGrid}>
          <figure className={s.figure}>
            <img
              className={s.photo}
              src={msc.image}
              alt={msc.imageAlt}
              width={1200}
              height={1600}
            />
            <figcaption className={s.caption}>
              Graduation, Vrije Universiteit Amsterdam — MSc Business Administration.
            </figcaption>
          </figure>

          <div>
            <p className={s.degreeLabel}>Master of Science</p>
            <h3 className={s.degree}>{msc.qualification}</h3>
            <p className={s.field}>{msc.field}</p>
            <div className={s.rows}>
              <div className={s.row}>
                <span className={s.rowLabel}>Institution</span>
                <span className={s.rowValue}>{msc.institution}</span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>Location</span>
                <span className={s.rowValue}>{msc.location}</span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>Period</span>
                <span className={s.rowValue}>{msc.period}</span>
              </div>
            </div>
            {msc.note && <p className={s.note}>{msc.note}</p>}
          </div>
        </div>

        <div className={s.bachelor}>
          <div>
            <p className={s.bachelorLabel}>Undergraduate</p>
            <p className={s.bachelorValue}>{bachelor.qualification}</p>
          </div>
          <div>
            <p className={s.bachelorLabel}>Field</p>
            <p className={s.bachelorValue}>{bachelor.field}</p>
          </div>
          <div>
            <p className={s.bachelorLabel}>Institution</p>
            <p className={s.bachelorValue}>
              {bachelor.institution}, {bachelor.location}
            </p>
          </div>
          <div>
            <p className={s.bachelorLabel}>Period</p>
            <p className={s.bachelorValue}>{bachelor.period}</p>
          </div>
        </div>
      </Section>

      {/* --------------------------- certifications --------------------------- */}
      <Section tone="grey">
        <SectionHead
          eyebrow="Professional certifications"
          title="Current, verifiable credentials"
          sub="Select any credential to open the full certificate. Each carries a verification link to the issuing platform."
        />
        <CertificateGallery />
      </Section>

      {/* ------------------------------ languages ---------------------------- */}
      <Section>
        <SectionHead eyebrow="Languages" title="Working languages" />
        <div className={s.langGrid}>
          {languages.map((l) => (
            <div key={l.name} className={s.lang}>
              <p className={s.langName}>{l.name}</p>
              <p className={s.langLevel}>{l.level}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <SectionHead eyebrow="Toolkit" title="Tools applied in practice" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1.25rem",
            }}
          >
            {toolkit.map((t) => (
              <div
                key={t.group}
                style={{
                  background: "var(--white)",
                  border: "var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    paddingBottom: "0.875rem",
                    borderBottom: "var(--border)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.11em",
                    textTransform: "uppercase",
                    color: "var(--ink-4)",
                  }}
                >
                  {t.group}
                </p>
                <div style={{ marginTop: "0.875rem" }}>
                  <TagRow items={t.items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
