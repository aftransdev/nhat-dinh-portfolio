import type { Metadata } from "next";
import { capabilities, toolkit } from "@/lib/content";
import {
  CapabilityIcon,
  Callout,
  Checklist,
  PageIntro,
  Section,
  SectionHead,
} from "@/components/ui";
import u from "@/components/ui/ui.module.scss";
import s from "./expertise.module.scss";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Seven capability areas across delivery and governance: portfolio governance, integrated planning, RAID and dependency management, financial and resource governance, executive reporting, PMO process improvement and AI governance.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageIntro
        eyebrow="Expertise"
        title="Delivery and governance that improve visibility, accountability and decision making."
        lede="My experience spans the core disciplines required to run complex delivery, portfolio and business operations environments, from governance and integrated planning through to financial oversight, delivery risk and executive reporting."
      />

      <Section tight>
        <div className={s.list}>
          {capabilities.map((c) => (
            <article key={c.id} id={c.id} className={s.block}>
              <div className={s.head}>
                <div className={s.headTop}>
                  <span className={u.iconPlate}>
                    <CapabilityIcon id={c.id} size={22} />
                  </span>
                  <p className={s.index}>{c.index}</p>
                </div>
                <h2 className={s.title}>{c.title}</h2>
                <p className={s.summary}>{c.summary}</p>
              </div>
              <div>
                <p className={s.intro}>{c.intro}</p>
                <div className={s.items}>
                  <Checklist items={c.items} />
                </div>
                {c.closing && <p className={s.closing}>{c.closing}</p>}
                {c.principles && (
                  <div className={s.evidence}>
                    <Callout label="How I work with AI" items={c.principles} />
                  </div>
                )}
                {c.evidence && (
                  <div className={s.evidence}>
                    <Callout items={c.evidence} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead
          eyebrow="Technology"
          title="Tools used to deliver governance and reporting"
          sub="Selected on the basis of what the governance environment needs, not as a capability display."
        />
        <div className={s.techGrid}>
          {toolkit.map((group) => (
            <div key={group.group} className={s.techCard}>
              <p className={s.techLabel}>{group.group}</p>
              <div className={s.techItems}>
                {group.items.map((i) => (
                  <p key={i} className={s.techItem}>
                    {i}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
