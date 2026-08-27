export const siteConfig = {
  name: "Nhat Dinh",
  role: "PMO | Portfolio Governance | Transformation",
  shortRole: "PMO & Portfolio Governance",
  baseURL: "https://nhatdinh.netlify.app",
  email: "dtmnhat.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/dtmnhat",
  /* Swap this for "/nhat-dinh-cv.pdf" once a PDF is dropped into /public.
     Until then it points at the print-optimised CV route. */
  cvHref: "/cv",
  location: "Netherlands",
  availability: "Open to London opportunities",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "PMO Evidence", href: "/pmo-evidence" },
  { label: "Experience", href: "/experience" },
  { label: "Qualifications", href: "/qualifications" },
] as const;

export const media = {
  portrait: "/media/nhat-dinh-portrait.jpg",
  portraitSmall: "/media/nhat-dinh-portrait-sm.jpg",
  graduation: "/media/graduation-vu-amsterdam.jpg",
  graduationSmall: "/media/graduation-vu-amsterdam-sm.jpg",
} as const;
