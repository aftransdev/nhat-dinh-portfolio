import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { ArrowRight, MetricRow, PageIntro, Section } from "@/components/ui";
import s from "./case-studies.module.scss";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected examples of PMO and portfolio governance applied in complex delivery environments, structured around challenge, contribution and measurable outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case Studies"
        title="Selected examples of PMO and portfolio governance in complex delivery environments."
        lede="These case studies focus on the challenge, my contribution and measurable outcomes rather than simply listing responsibilities. Each follows the same structure: context, challenge, my contribution, key actions and outcomes."
      />

      <Section>
        <div className={s.list}>
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className={s.item}>
              <div className={s.itemHead}>
                <span className={s.itemIndex}>Case study {c.index}</span>
                <span className={s.itemPeriod}>{c.period}</span>
              </div>
              <p className={s.itemCompany}>{c.company}</p>
              <h2 className={s.itemTitle}>{c.title}</h2>
              <p className={s.itemSubtitle}>{c.subtitle}</p>
              <p className={s.itemSummary}>{c.cardSummary}</p>
              <p className={s.itemRole}>{c.role}</p>
              <MetricRow items={c.cardMetrics} />
              <span className={s.itemFoot}>
                View case study
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
