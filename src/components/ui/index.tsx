import Link from "next/link";
import type { ReactNode } from "react";
import type { Kpi } from "@/lib/content";
import s from "./ui.module.scss";

export { CapabilityIcon } from "./CapabilityIcon";

export const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");

/* --------------------------------- glyphs -------------------------------- */

export const ArrowRight = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M1 6h9M6.5 2.5 10 6l-3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
    />
  </svg>
);

export const IconLinkedIn = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.98 9.75h4v11.75h-4V9.75Zm7 0h3.83v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.1h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86v5.5h-4V9.75Z" />
  </svg>
);

export const IconMail = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" stroke="currentColor" strokeWidth="1.7" />
    <path d="m2.5 5.5 9.5 7 9.5-7" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

export const IconDownload = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v11m0 0 4.5-4.5M12 14l-4.5-4.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 17v3.5h17V17" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

/* --------------------------------- buttons ------------------------------- */

type ButtonVariant = "primary" | "secondary" | "onNavy" | "onNavySolid";

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}) {
  const cls = cx(s.btn, s[variant], className);
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        className={cls}
        href={href}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className={s.textLink} href={href}>
      {children}
      <ArrowRight />
    </Link>
  );
}

/* -------------------------------- structure ------------------------------ */

export function Section({
  children,
  tone = "white",
  tight,
  id,
  className,
}: {
  children: ReactNode;
  tone?: "white" | "grey" | "navy";
  tight?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        s.section,
        tight && s["section--tight"],
        tone === "grey" && s["section--grey"],
        tone === "navy" && s["section--navy"],
        className,
      )}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  aside,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  aside?: ReactNode;
}) {
  return (
    <div className={s.sectionHead}>
      <div className={s.sectionHeadMain}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className={s.sectionTitle}>{title}</h2>
        {sub && <p className={s.sectionSub}>{sub}</p>}
      </div>
      {aside}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  aside,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  aside?: ReactNode;
}) {
  return (
    <div className={s.intro}>
      <div className="shell">
        <div className={s.introInner}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className={s.introTitle}>{title}</h1>
          </div>
          {(lede || aside) && <div>{lede ? <p className={s.introLede}>{lede}</p> : aside}</div>}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- cards ------------------------------- */

export const Grid = ({
  cols = 3,
  children,
  className,
}: {
  cols?: 2 | 3;
  children: ReactNode;
  className?: string;
}) => <div className={cx(cols === 3 ? s.grid3 : s.grid2, className)}>{children}</div>;

export function Card({
  href,
  children,
  className,
  interactive,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  const cls = cx(s.card, interactive && s["card--interactive"], className);
  return href ? (
    <Link className={cls} href={href}>
      {children}
    </Link>
  ) : (
    <div className={cls}>{children}</div>
  );
}

export const CardIndex = ({ children }: { children: ReactNode }) => (
  <span className={s.cardIndex}>{children}</span>
);
export const CardTitle = ({ children }: { children: ReactNode }) => (
  <h3 className={s.cardTitle}>{children}</h3>
);
export const CardBody = ({ children }: { children: ReactNode }) => (
  <p className={s.cardBody}>{children}</p>
);

/* ----------------------------------- tags ------------------------------- */

export const TagRow = ({
  items,
  accent,
}: {
  items: readonly string[];
  accent?: boolean;
}) => (
  <ul className={s.tagRow}>
    {items.map((t) => (
      <li key={t} className={cx(s.tag, accent && s["tag--accent"])}>
        {t}
      </li>
    ))}
  </ul>
);

/* --------------------------------- metrics ------------------------------ */

export const MetricRow = ({ items, stack }: { items: Kpi[]; stack?: boolean }) => (
  <div className={cx(s.metricRow, stack && s["metricRow--stack"])}>
    {items.map((m) => (
      <div key={m.label} className={s.metricCell}>
        <span className={s.metricValue}>{m.value}</span>
        <span className={s.metricLabel}>{m.label}</span>
      </div>
    ))}
  </div>
);

export const OutcomeGrid = ({ items }: { items: Kpi[] }) => (
  <div className={s.outcomeGrid}>
    {items.map((m) => (
      <div key={m.label} className={s.outcomeCell}>
        <p className={s.outcomeValue}>{m.value}</p>
        <p className={s.outcomeLabel}>{m.label}</p>
      </div>
    ))}
  </div>
);

export function KpiBand({ eyebrow, items }: { eyebrow: string; items: Kpi[] }) {
  return (
    <section className={s.kpiBand}>
      <div className="shell" style={{ paddingBlock: "clamp(3rem, 5vw, 4.5rem)" }}>
        <div className={s.kpiHead}>
          <p className="eyebrow eyebrow--on-navy">{eyebrow}</p>
        </div>
        <div className={s.kpiGrid}>
          {items.map((k) => (
            <div key={k.label} className={s.kpiCell}>
              <p className={s.kpiValue}>{k.value}</p>
              <p className={s.kpiLabel}>{k.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- lists etc ----------------------------- */

export const Checklist = ({ items }: { items: readonly string[] }) => (
  <ul className={s.checklist}>
    {items.map((i) => (
      <li key={i} className={s.checklistItem}>
        {i}
      </li>
    ))}
  </ul>
);

export const Bullets = ({ items }: { items: readonly string[] }) => (
  <ul className={s.bullets}>
    {items.map((i) => (
      <li key={i} className={s.bullet}>
        {i}
      </li>
    ))}
  </ul>
);

export const Callout = ({
  label = "Applied experience",
  items,
}: {
  label?: string;
  items: readonly string[];
}) => (
  <div className={s.callout}>
    <p className={s.calloutLabel}>{label}</p>
    <div className={s.calloutBody}>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  </div>
);

export const Note = ({ children }: { children: ReactNode }) => (
  <div className={s.note}>{children}</div>
);
