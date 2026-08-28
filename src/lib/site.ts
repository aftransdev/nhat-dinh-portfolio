export const siteConfig = {
  name: "Nhat Dinh",
  role: "Project Delivery | Portfolio Governance | Business Operations | Transformation",
  shortRole: "Project Delivery & Portfolio Governance",
  baseURL: "https://nhatdinh.netlify.app",
  email: "dtmnhat.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/dtmnhat",
  /* No generic CV is published. A tailored one goes to each employer. */
  location: "Netherlands",
  availability: "Open to London opportunities",
} as const;

/* Drives the header, the mobile panel, the footer and the sitemap. The one
   place to add or hide a tab. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/experience" },
  { label: "Qualifications", href: "/qualifications" },
] as const;

/* Built and reachable at its URL, but deliberately kept out of the
   navigation. Move the entry back into `nav` above to surface it again. */
export const unlistedRoutes = [{ label: "PMO Evidence", href: "/pmo-evidence" }] as const;

export const media = {
  portrait: "/media/nhat-dinh-portrait.jpg",
  portraitSmall: "/media/nhat-dinh-portrait-sm.jpg",
  graduation: "/media/graduation-vu-amsterdam.jpg",
  graduationSmall: "/media/graduation-vu-amsterdam-sm.jpg",
} as const;
