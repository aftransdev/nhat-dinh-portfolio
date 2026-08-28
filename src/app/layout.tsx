import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "@/styles/tokens.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection, SiteFooter } from "@/components/layout/ContactSection";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Reserved for tabular data inside the PMO evidence artefacts
const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-plex",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseURL),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Project delivery, portfolio governance, business operations and transformation. Integrated planning, RAID and dependency management, financial oversight and executive reporting across digital banking, retail, finance and international operations.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.baseURL,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Turning complex portfolios into clear decisions, stronger controls and more predictable delivery.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Project Delivery, Portfolio Governance, Business Operations & Transformation",
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.baseURL,
  sameAs: [siteConfig.linkedin],
  address: { "@type": "PostalAddress", addressCountry: "NL" },
  knowsAbout: [
    "Project delivery",
    "Portfolio governance",
    "Business operations",
    "Transformation",
    "Programme management office",
    "Integrated planning",
    "RAID management",
    "Executive reporting",
    "Financial governance",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <ContactSection />
        <SiteFooter />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
