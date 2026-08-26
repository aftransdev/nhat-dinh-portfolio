"use client";

import { IconDownload } from "@/components/ui";
import s from "@/components/ui/ui.module.scss";

/* The browser print dialog doubles as "save as PDF" until a real PDF is
   dropped into /public and siteConfig.cvHref is repointed at it. */
export function PrintButton() {
  return (
    <button type="button" className={`${s.btn} ${s.primary}`} onClick={() => window.print()}>
      <IconDownload size={13} />
      Save as PDF
    </button>
  );
}
