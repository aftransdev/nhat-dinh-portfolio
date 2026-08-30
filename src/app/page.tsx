import Link from "next/link";
import { about, capabilities, caseStudies, hero, selectedImpact } from "@/lib/content";
import { media, siteConfig } from "@/lib/site";
import {
  ArrowRight,
  Button,
  CapabilityIcon,
  Card,
  CardBody,
  CardIndex,
  CardTitle,
  Grid,
  KpiBand,
  MetricRow,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui";
import u from "@/components/ui/ui.module.scss";
import s from "./home.module.scss";

const featured = caseStudies.filter((c) => c.featured);

/* Four figures for the panel over the portrait. The fuller six figure strip
   follows immediately below in the navy band. */
const heroPanel = [
  { value: "150+", label: "Projects governed" },
  { value: "€5M+", label: "Portfolio funding" },
  { value: "7+ yrs", label: "Delivery experience" },
  { value: "6", label: "Agile squads" },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------- hero ------------------------------ */}
      <section className={s.hero}>
        <div className="shell">
          <div className={`${s.heroGrid} rise`}>
            <div>
              <p className={s.eyebrowRow}>
                {hero.pillars.map((r, i) => {
                  const last = i === hero.pillars.length - 1;
                  return (
                    <span key={r}>
                      {/* Separator glued inside the nowrap span; the break
                          opportunity is the plain space that follows it */}
                      <span className={s.roleItem}>
                        {r}
                        {last ? "" : "\u00A0\u00B7"}
                      </span>
                      {last ? "" : " "}
                    </span>
                  );
                })}
              </p>
              <h1 className={s.name}>{hero.name}</h1>
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
                <Button href="#contact" variant="secondary">
                  Contact me
                </Button>
              </div>
            </div>

            {/* Portrait with the headline figures overlapping its lower-left */}
            <div className={s.portraitWrap}>
              <span className={s.portraitRule} aria-hidden="true" />
              <div className={s.portraitFrame}>
                <img
                  className={s.portrait}
                  src={media.portrait}
                  alt={`${hero.name}, ${siteConfig.shortRole}`}
                  width={1100}
                  height={1375}
                />
              </div>
              <aside className={s.kpiPanel} aria-label="Portfolio scale at a glance">
                <p className={s.kpiPanelLabel}>Portfolio scale</p>
                {heroPanel.map((k) => (
                  <div key={k.label} className={s.kpiPanelRow}>
                    <span className={s.kpiPanelValue}>{k.value}</span>
                    <span className={s.kpiPanelLine}>{k.label}</span>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- impact strip -------------------------- */}
      <KpiBand eyebrow="Selected impact" items={selectedImpact} />

      {/* ----------------------------- expertise --------------------------- */}
      <Section>
        <SectionHead
          eyebrow="What I do"
          title="Seven capability areas across delivery and governance"
          sub="The disciplines required to keep a complex portfolio governed, funded and ready to deliver."
          aside={<TextLink href="/expertise">All expertise</TextLink>}
        />
        <Grid cols={3}>
          {capabilities.map((c) => (
            <Card key={c.id} href={`/expertise#${c.id}`} className={s.expertiseCard}>
              <span className={s.cardHead}>
                <span className={u.iconPlate}>
                  <CapabilityIcon id={c.id} size={21} />
                </span>
                <CardIndex>{c.index}</CardIndex>
              </span>
              <CardTitle>{c.title}</CardTitle>
              <CardBody>{c.summary}</CardBody>
              {c.principles && (
                <ul className={s.principleList}>
                  {c.principles.map((line) => (
                    <li key={line} className={s.principleLine}>
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </Grid>
      </Section>

      {/* --------------------------- case studies -------------------------- */}
      <Section tone="grey">
        <SectionHead
          eyebrow="Featured case studies"
          title="Governance applied in complex delivery environments"
          sub="Each case follows the same structure: context, challenge, my contribution, key actions and quantified outcomes."
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
                style={{ color: "var(--blue-600)", fontWeight: 600, fontSize: "0.9375rem" }}
              >
                Full experience and credentials
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
