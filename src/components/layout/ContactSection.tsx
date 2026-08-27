import Link from "next/link";
import { contact } from "@/lib/content";
import { nav, siteConfig } from "@/lib/site";
import {
  Button,
  IconLinkedIn,
  IconMail,
  IconMapPin,
  IconPlane,
  TagRow,
} from "@/components/ui";
import s from "./SiteFooter.module.scss";

/* Rendered at the bottom of every page, and the target of the header's
   Contact Me action, so the contact route is always one click away. */
export function ContactSection() {
  return (
    <section className={s.contact} id="contact">
      <div className="shell">
        <div className={s.grid}>
          <div>
            <p className="eyebrow eyebrow--on-navy">Contact</p>
            <h2 className={s.title}>{contact.heading}</h2>
            <p className={s.body}>{contact.body}</p>
            <div className={s.interests}>
              <TagRow items={contact.interests} />
            </div>
            <p className={s.status}>
              <span className={s.dot} aria-hidden="true" />
              {siteConfig.availability}
            </p>
          </div>

          <div className={s.panel}>
            <div className={s.rows}>
              <div className={s.row}>
                <span className={s.rowLabel}>
                  <IconMail size={14} />
                  Email
                </span>
                <span className={s.rowValue}>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>
                  <IconLinkedIn size={14} />
                  LinkedIn
                </span>
                <span className={s.rowValue}>
                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer noopener">
                    /in/dtmnhat
                  </a>
                </span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>
                  <IconMapPin size={14} />
                  Location
                </span>
                <span className={s.rowValue}>{siteConfig.location}</span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>
                  <IconPlane size={14} />
                  Relocation
                </span>
                <span className={s.rowValue}>Open to London</span>
              </div>
            </div>
            <div className={s.actions}>
              <Button href={siteConfig.linkedin} variant="onNavySolid">
                <IconLinkedIn size={14} />
                LinkedIn
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="onNavy">
                <IconMail size={14} />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className="shell">
        <div className={s.footerInner}>
          <p className={s.copy}>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.role}
          </p>
          <nav className={s.footerNav} aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
