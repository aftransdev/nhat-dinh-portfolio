import { Button, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <div style={{ maxWidth: "34rem", paddingBlock: "clamp(2rem, 5vw, 5rem)" }}>
        <p className="eyebrow">Error 404</p>
        <h1
          style={{
            marginTop: "1rem",
            fontSize: "clamp(1.875rem, 1.5rem + 2vw, 2.75rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Page not found
        </h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
          <Button href="/">Return home</Button>
          <Button href="/case-studies" variant="secondary">
            Case studies
          </Button>
        </div>
      </div>
    </Section>
  );
}
