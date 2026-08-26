import Link from "next/link";
import { contact } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Button, IconDownload, IconLinkedIn, IconMail, TagRow } from "@/components/ui";
import s from "./SiteFooter.module.scss";

/* Rendered at the bottom of every page so the contact route is always
   one scroll away, whichever tab the reader lands on. */
export function ContactSection() {
  return (
    <section className={s.contact} id="contact">
      <div className="shell">
        <div className={s.grid}>
          <div>
            <p className="eyebrow">Contact</p>
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
                <span className={s.rowLabel}>Email</span>
                <span className={s.rowValue}>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>LinkedIn</span>
                <span className={s.rowValue}>
                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer noopener">
                    /in/dtmnhat
                  </a>
                </span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>Location</span>
                <span className={s.rowValue}>{siteConfig.location}</span>
              </div>
              <div className={s.row}>
                <span className={s.rowLabel}>Relocation</span>
                <span className={s.rowValue}>Open to London</span>
              </div>
            </div>
            <div className={s.actions}>
              <Button href={siteConfig.linkedin} variant="primary">
                <IconLinkedIn size={13} />
                LinkedIn
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                <IconMail size={13} />
                Email
              </Button>
              <Button href={siteConfig.cvHref} variant="secondary">
                <IconDownload size={13} />
                Download CV
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
            <Link href="/expertise">Expertise</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/pmo-evidence">PMO Evidence</Link>
            <Link href="/experience">Experience</Link>
            <Link href={siteConfig.cvHref}>CV</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
