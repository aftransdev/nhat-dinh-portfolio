"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { certifications } from "@/lib/content";
import { ArrowRight } from "@/components/ui";
import s from "./CertificateGallery.module.scss";

const withCertificate = certifications.filter((c) => c.image);
const withoutCertificate = certifications.filter((c) => !c.image);

export function CertificateGallery() {
  const [openName, setOpenName] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenName(null), []);

  useEffect(() => {
    if (!openName) {
      returnRef.current?.focus();
      returnRef.current = null;
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openName, close]);

  const open = withCertificate.find((c) => c.name === openName) ?? null;

  return (
    <>
      <div className={s.grid}>
        {withCertificate.map((c) => (
          <button
            key={c.name}
            type="button"
            className={s.card}
            aria-haspopup="dialog"
            onClick={(e) => {
              returnRef.current = e.currentTarget;
              setOpenName(c.name);
            }}
          >
            <span className={s.thumbWrap}>
              <img className={s.thumb} src={c.thumb} alt="" loading="lazy" />
              <span className={s.zoom}>Enlarge</span>
            </span>
            <span className={s.body}>
              <span className={s.meta}>
                <span className={s.issuer}>
                  {c.issuer}
                  {c.platform ? ` · ${c.platform}` : ""}
                </span>
                <span className={s.year}>{c.year}</span>
              </span>
              <span className={s.name} style={{ display: "block" }}>
                {c.name}
              </span>
              <span className={s.focus} style={{ display: "block" }}>
                {c.focus}
              </span>
              <span className={s.foot}>
                {c.courses && <span className={s.chip}>{c.courses}</span>}
                {c.awarded && <span className={s.chip}>Awarded {c.awarded}</span>}
                <span className={s.viewLink} style={{ marginLeft: "auto" }}>
                  View certificate
                  <ArrowRight />
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {withoutCertificate.length > 0 && (
        <div style={{ display: "grid", gap: "0.625rem", marginTop: "1.25rem" }}>
          {withoutCertificate.map((c) => (
            <div key={c.name} className={s.plain}>
              <div>
                <p className={s.plainName}>{c.name}</p>
                <p className={s.plainSub}>
                  {c.issuer} · {c.focus}
                </p>
              </div>
              <span className={s.year}>{c.year}</span>
            </div>
          ))}
        </div>
      )}

      {open && (
        <div
          className={s.overlay}
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className={s.dialog} role="dialog" aria-modal="true" aria-labelledby="cert-title">
            <div className={s.dialogHead}>
              <div>
                <p className={s.dialogIssuer}>
                  {open.issuer}
                  {open.platform ? ` · ${open.platform}` : ""}
                </p>
                <h2 className={s.dialogName} id="cert-title">
                  {open.name}
                </h2>
                <p className={s.dialogMeta}>
                  {open.awarded && <>Awarded {open.awarded}</>}
                  {open.courses && <> · {open.courses}</>}
                  {open.verify && (
                    <>
                      {" · "}
                      <a href={open.verify} target="_blank" rel="noreferrer noopener">
                        Verify credential
                      </a>
                    </>
                  )}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className={s.close}
                onClick={close}
                aria-label="Close"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 2.5l10 10M12.5 2.5l-10 10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <div className={s.dialogBody}>
              <img className={s.full} src={open.image} alt={`${open.name} certificate`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
