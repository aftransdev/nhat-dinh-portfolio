import type { Metadata } from "next";
import { EvidenceGallery } from "@/components/evidence/EvidenceGallery";
import { Note, PageIntro, Section, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "PMO Evidence",
  description:
    "A visual gallery of anonymised, recreated portfolio artefacts: executive dashboard, RAID register, integrated portfolio plan, financial view, governance calendar and executive steering pack.",
};

export default function PmoEvidencePage() {
  return (
    <>
      <PageIntro
        eyebrow="PMO Evidence"
        title="Governance should be visible."
        lede="A portfolio should not simply state that PMO capability exists. It should demonstrate how information can be structured to support better oversight and decisions."
      />

      <Section>
        <div style={{ marginBottom: "2.5rem" }}>
          <Note>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--ink-2)" }}>
              The examples presented here are anonymised and recreated portfolio artefacts based on
              the types of governance structures, reporting views and PMO processes I have worked
              with. They do not contain confidential information from previous employers, and all
              figures shown are illustrative.
            </p>
          </Note>
        </div>
        <SectionHead
          eyebrow="Artefact gallery"
          title="Six recreated governance artefacts"
          sub="Select any artefact to open the full view, its component structure and the experience behind it."
        />
        <EvidenceGallery />
      </Section>

      <Section tone="grey" tight>
        <SectionHead eyebrow="Note on confidentiality" title="What is and is not shown" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            {
              t: "Recreated, not extracted",
              b: "Every artefact was rebuilt from scratch for this portfolio. None is an export, screenshot or copy of a real system.",
            },
            {
              t: "Illustrative data only",
              b: "Project names, owners, figures and dates are invented and internally consistent — they represent shape and structure, not real performance.",
            },
            {
              t: "No proprietary material",
              b: "No confidential company information, proprietary datasets or internal documents from previous employers are displayed.",
            },
          ].map((c) => (
            <div
              key={c.t}
              style={{
                background: "var(--white)",
                border: "var(--border)",
                borderRadius: "var(--radius)",
                padding: "1.5rem",
              }}
            >
              <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy-900)" }}>
                {c.t}
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "var(--ink-2)",
                }}
              >
                {c.b}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
