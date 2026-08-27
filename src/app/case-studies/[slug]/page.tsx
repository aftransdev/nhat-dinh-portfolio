import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/content";
import {
  ArrowRight,
  Bullets,
  Checklist,
  OutcomeGrid,
  Section,
  TagRow,
} from "@/components/ui";
import s from "../case-studies.module.scss";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: `${study.subtitle} ${study.company} — ${study.role}, ${study.period}.`,
  };
}

/* Every case renders the same spine so cases stay comparable:
   Context → Challenge → Contribution → Actions → Outcomes. */
function Step({
  step,
  name,
  children,
}: {
  step: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.section}>
      <div className={s.sectionLabel}>
        <p className={s.sectionStep}>{step}</p>
        <h2 className={s.sectionName}>{name}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;

  return (
    <>
      <div className={s.detailHead}>
        <div className="shell">
          <Link href="/case-studies" className={s.back}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
              <ArrowRight />
            </span>
            All case studies
          </Link>
          <p className={s.detailIndex}>Case study {study.index}</p>
          <h1 className={s.detailTitle}>{study.title}</h1>
          <p className={s.detailSubtitle}>{study.subtitle}</p>
          <div className={s.meta}>
            <div className={s.metaItem}>
              <p className={s.metaLabel}>Organisation</p>
              <p className={s.metaValue}>{study.company}</p>
            </div>
            <div className={s.metaItem}>
              <p className={s.metaLabel}>Role</p>
              <p className={s.metaValue}>{study.role}</p>
            </div>
            <div className={s.metaItem}>
              <p className={s.metaLabel}>Period</p>
              <p className={s.metaValue}>{study.period}</p>
            </div>
          </div>
        </div>
      </div>

      <Section tight>
        <Step step="01" name="Context">
          {study.context.map((p, i) => (
            <p key={p} className={i === 0 ? `${s.text} ${s.textLead}` : s.text}>
              {p}
            </p>
          ))}
        </Step>

        <Step step="02" name="Challenge">
          <p className={`${s.text} ${s.textLead}`}>{study.challenge.intro}</p>
          {study.challenge.items && (
            <div className={s.spaced}>
              <Checklist items={study.challenge.items} />
            </div>
          )}
          {study.challenge.closing && (
            <p className={`${s.text} ${s.spaced}`}>{study.challenge.closing}</p>
          )}
        </Step>

        <Step step="03" name="My Contribution">
          <p className={`${s.text} ${s.textLead}`}>{study.contribution.intro}</p>
          {study.contribution.items && (
            <div className={s.spaced}>
              <Bullets items={study.contribution.items} />
            </div>
          )}
          {study.contribution.closing && (
            <p className={`${s.text} ${s.spaced}`}>{study.contribution.closing}</p>
          )}
        </Step>

        {study.actions.length > 0 && (
          <Step step="04" name="Key Actions">
            {study.actions.map((a) => (
              <div key={a.title} className={s.action}>
                <h3 className={s.actionTitle}>{a.title}</h3>
                {a.intro && <p className={s.text}>{a.intro}</p>}
                {a.items && (
                  <div className={s.spaced}>
                    <Checklist items={a.items} />
                  </div>
                )}
                {a.closing && <p className={`${s.text} ${s.spaced}`}>{a.closing}</p>}
              </div>
            ))}
          </Step>
        )}
      </Section>

      <Section tone="grey" tight>
        <p className="eyebrow">{study.outcomesLabel ?? "Outcomes"}</p>
        <h2
          style={{
            marginTop: "0.75rem",
            marginBottom: "2rem",
            fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2rem)",
          }}
        >
          Quantified results
        </h2>
        <OutcomeGrid items={study.outcomes} />

        <div style={{ marginTop: "3rem" }}>
          <p className={s.capsHead}>Capabilities demonstrated</p>
          <TagRow items={study.capabilities} />
        </div>

        <div style={{ marginTop: "3.5rem" }}>
          <div className={s.pager}>
            {prev ? (
              <Link href={`/case-studies/${prev.slug}`} className={s.pagerLink}>
                <span className={s.pagerLabel}>Previous</span>
                <span className={s.pagerTitle}>{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/case-studies/${next.slug}`}
                className={`${s.pagerLink} ${s.pagerNext}`}
              >
                <span className={s.pagerLabel}>Next</span>
                <span className={s.pagerTitle}>{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
