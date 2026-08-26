import Link from "next/link";
import { about, capabilities, caseStudies, hero, selectedImpact } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import {
  ArrowRight,
  Button,
  Card,
  CardBody,
  CardIndex,
  CardTitle,
  Grid,
  IconDownload,
  KpiBand,
  MetricRow,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui";
import s from "./home.module.scss";

const featured = caseStudies.filter((c) => c.featured);

export default function HomePage() {
  return (
    <>
      {/* ------------------------------- hero ------------------------------ */}
      <section className={s.hero}>
        <div className="shell">
          <div className={`${s.heroGrid} rise`}>
            <div>
              <h1 className={s.name}>{hero.name}</h1>
              <div className={s.roleLine}>
                {["PMO", "Portfolio Governance", "Transformation"].map((r, i) => (
                  <span key={r} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
                    {i > 0 && <span className={s.roleDiv} aria-hidden="true" />}
                    <span className={s.roleItem}>{r}</span>
                  </span>
                ))}
              </div>
              <p className={s.headline}>{hero.headline}</p>
              <div className={s.heroBody}>
                <p>{hero.lede}</p>
                <p>{hero.body}</p>
              </div>
              <p className={s.locationLine}>
                <span>Based in the {siteConfig.location}</span>
                <span className={s.roleDiv} aria-hidden="true" />
                <span>{siteConfig.availability}</span>
              </p>
              <div className={s.heroActions}>
                <Button href="/case-studies">
                  View case studies
                  <ArrowRight />
                </Button>
                <Button href="/pmo-evidence" variant="secondary">
                  View PMO evidence
                </Button>
                <Button href={siteConfig.cvHref} variant="secondary">
                  <IconDownload size={13} />
                  Download CV
                </Button>
              </div>
            </div>

            <aside className={s.glance} aria-label="Profile at a glance">
              <div className={s.glanceHead}>
                <p className="eyebrow eyebrow--muted">At a glance</p>
              </div>
              {hero.glance.map((row) => (
                <div key={row.label} className={s.glanceRow}>
                  <p className={s.glanceLabel}>{row.label}</p>
                  <p className={s.glanceValue}>{row.value}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* --------------------------- impact strip -------------------------- */}
      <KpiBand eyebrow="Selected impact" items={selectedImpact} />

      {/* ----------------------------- expertise --------------------------- */}
      <Section>
        <SectionHead
          eyebrow="What I do"
          title="Six capability areas across portfolio governance"
          sub="The disciplines required to keep a complex portfolio governed, funded and delivery-ready."
          aside={<TextLink href="/expertise">All expertise</TextLink>}
        />
        <Grid cols={3}>
          {capabilities.map((c) => (
            <Card key={c.id} href={`/expertise#${c.id}`} className={s.expertiseCard}>
              <CardIndex>{c.index}</CardIndex>
              <CardTitle>{c.title}</CardTitle>
              <CardBody>{c.summary}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* --------------------------- case studies -------------------------- */}
      <Section tone="grey">
        <SectionHead
          eyebrow="Featured case studies"
          title="Governance applied in complex delivery environments"
          sub="Each case follows the same structure: context, challenge, contribution, actions and quantified outcomes."
          aside={<TextLink href="/case-studies">All case studies</TextLink>}
        />
        <Grid cols={3}>
          {featured.map((c) => (
            <Card key={c.slug} href={`/case-studies/${c.slug}`} className={s.caseCard}>
              <p className={s.caseCompany}>{c.company}</p>
              <h3 className={s.caseTitle}>{c.title}</h3>
              <p className={s.caseSummary}>{c.cardSummary}</p>
              <MetricRow items={c.cardMetrics} stack />
              <span className={s.caseFoot}>
                View case study
                <ArrowRight />
              </span>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ------------------------------- about ----------------------------- */}
      <Section>
        <SectionHead eyebrow="About" title="Governance that supports decisions" />
        <div className={s.aboutGrid}>
          <p className={s.aboutQuote}>{about.quote}</p>
          <div className={s.aboutBody}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p style={{ marginTop: "1.25rem" }}>
              <Link
                href="/experience"
                style={{ color: "var(--accent-700)", fontWeight: 600, fontSize: "0.9375rem" }}
              >
                Full experience and credentials →
              </Link>
            </p>
          </div>
        </div>
        <div className={s.principles}>
          {about.principles.map((p) => (
            <div key={p.title} className={s.principle}>
              <p className={s.principleTitle}>{p.title}</p>
              <p className={s.principleBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
