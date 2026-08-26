/* ------------------------------------------------------------------
   Single source of truth for portfolio copy. Pages read from here so
   figures stay consistent across Home, Case Studies and Experience.
   ------------------------------------------------------------------ */

export type Kpi = { value: string; label: string };

export const hero = {
  name: "Nhat Dinh",
  role: "PMO | Portfolio Governance | Transformation",
  headline:
    "Turning complex portfolios into clear decisions, stronger controls and more predictable delivery.",
  lede: "I help organisations bring structure, visibility and accountability to complex portfolios and transformation programmes.",
  body: "With 7+ years of experience across digital banking, retail, finance and international operations, I specialise in portfolio governance, integrated planning, RAID and dependency management, financial oversight and executive reporting.",
  glance: [
    { label: "Experience", value: "7+ years across PMO & governance" },
    { label: "Sectors", value: "Digital banking · Retail · Finance · Trading" },
    { label: "Portfolio scale", value: "150+ concurrent projects · €5–10M funding" },
    { label: "Based in", value: "Netherlands" },
    { label: "Availability", value: "Open to London relocation" },
  ],
};

export const selectedImpact: Kpi[] = [
  { value: "150+", label: "Concurrent projects governed across an enterprise portfolio." },
  { value: "€5–10M", label: "Portfolio funding consolidated into leadership-level views." },
  { value: "33% → 100%", label: "Improvement in on-time governance submissions." },
  { value: "80%", label: "Reduction in monthly portfolio reporting effort." },
  { value: "90%", label: "Reduction in overdue cross-team dependencies." },
  { value: "6", label: "Agile squads supported through integrated delivery governance." },
];

/* ------------------------------- expertise ------------------------------- */

export type Capability = {
  id: string;
  index: string;
  title: string;
  summary: string;
  intro: string;
  items: string[];
  closing?: string;
  evidence?: string[];
};

export const capabilities: Capability[] = [
  {
    id: "portfolio-governance",
    index: "01",
    title: "Portfolio Governance",
    summary:
      "Creating clear governance structures around decisions, approvals, actions, documentation and delivery accountability.",
    intro:
      "I support governance structures that provide clear oversight across project and portfolio activity.",
    items: [
      "Portfolio governance",
      "Governance standards",
      "Decision and approval tracking",
      "Documentation controls",
      "Governance review cycles",
      "Action tracking",
      "Scope and change control",
      "Portfolio assurance",
      "Governance evidence",
      "Closure and follow-through",
    ],
    closing:
      "The objective is not governance for its own sake. It is to make responsibilities, decisions, exceptions and required actions visible.",
  },
  {
    id: "integrated-planning",
    index: "02",
    title: "Integrated Portfolio Planning",
    summary:
      "Connecting milestones, dependencies, resources, risks and financial information into coherent portfolio views.",
    intro:
      "Individual project plans do not always show the full delivery picture. I build integrated views that connect:",
    items: [
      "Key milestones",
      "Cross-team dependencies",
      "Baseline versus actual delivery",
      "Risks and issues",
      "Corrective actions",
      "Resource requirements",
      "Financial information",
      "Delivery priorities",
    ],
    evidence: [
      "At Pharmacity, I developed integrated portfolio plans and dependency views covering approximately 45–50 quarterly initiatives.",
      "At Timo Digital Bank, I supported integrated scheduling across six Agile squads.",
    ],
  },
  {
    id: "raid-dependencies",
    index: "03",
    title: "RAID & Dependency Management",
    summary:
      "Creating visibility across risks, issues and cross-team dependencies, with clear ownership and escalation.",
    intro:
      "Dependencies often become visible only after they begin affecting delivery. I focus on identifying them earlier and making ownership explicit.",
    items: [
      "Risk identification",
      "Issue management",
      "Dependency mapping",
      "Impact assessment",
      "Ownership and due dates",
      "Mitigation tracking",
      "Corrective actions",
      "Escalation",
      "UAT readiness",
      "Release risk visibility",
    ],
    evidence: [
      "At Timo Digital Bank, this approach contributed to a 90% reduction in overdue cross-team dependencies.",
    ],
  },
  {
    id: "financial-governance",
    index: "04",
    title: "Financial & Resource Governance",
    summary:
      "Connecting delivery activity with budgets, forecasts, CAPEX/OPEX, resource allocation and benefits tracking.",
    intro:
      "Portfolio decisions require more than delivery status. Leadership also needs visibility across money, capacity and expected value.",
    items: [
      "Budget tracking",
      "Forecasting",
      "CAPEX / OPEX",
      "Resource allocation",
      "Capitalisation",
      "Benefits tracking",
      "Funding visibility",
      "Financial variance reporting",
    ],
    evidence: [
      "At Pharmacity, I consolidated delivery, resource and financial information into portfolio-level views covering €5–10M in funding and 100+ portfolio contributors.",
      "At POSCO International, I supported budgets, forecasts and resource planning across a €1–5M financial scope.",
    ],
  },
  {
    id: "executive-reporting",
    index: "05",
    title: "Executive Reporting",
    summary:
      "Turning complex portfolio information into concise KPIs, dashboards and decision-ready management narratives.",
    intro: "Good executive reporting should make the important things obvious. I focus reporting on:",
    items: [
      "Portfolio health",
      "Milestones",
      "Exceptions",
      "Risks and issues",
      "Critical dependencies",
      "Financial position",
      "Resource pressure",
      "Decisions required",
      "Corrective actions",
    ],
    evidence: [
      "At Pharmacity, I consolidated more than 50 delivery, budget, risk and resource measures into a focused set of executive KPIs and decision-ready recommendations for CEO and CFO reviews.",
    ],
  },
  {
    id: "process-improvement",
    index: "06",
    title: "PMO Process Improvement",
    summary:
      "Standardising governance artefacts, reporting routines and workflows to reduce administrative effort and improve delivery visibility.",
    intro:
      "PMO processes should create control without creating unnecessary administration.",
    items: [
      "Standardised templates",
      "Governance artefacts",
      "Reporting routines",
      "Data consolidation",
      "Jira workflows",
      "Confluence governance",
      "Jira Automation",
      "Dashboard development",
      "AI-assisted PMO workflows",
    ],
    evidence: [
      "At Pharmacity, standardisation and reporting improvements reduced monthly reporting effort from approximately 25 hours to 5 hours — an 80% reduction.",
      "At Timo Digital Bank, standardised PMO templates and routines reduced new-project onboarding to governance from 3 weeks to 1 week.",
    ],
  },
];

export const toolkit = [
  {
    group: "Governance & Delivery",
    items: ["Jira", "Confluence", "Jira Plans", "JQL", "MS Project"],
  },
  {
    group: "Reporting & Analytics",
    items: ["Power BI", "Advanced Excel", "PowerPoint", "SQL"],
  },
  {
    group: "Workflow & Automation",
    items: ["Jira Automation", "AI-assisted PMO workflows", "Notion", "Trello"],
  },
];

/* ------------------------------ case studies ----------------------------- */

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  period: string;
  featured: boolean;
  cardSummary: string;
  cardMetrics: Kpi[];
  context: string[];
  challenge: { intro: string; items?: string[]; closing?: string };
  contribution: { intro: string; items?: string[]; closing?: string };
  actions: { title: string; intro?: string; items?: string[]; closing?: string }[];
  outcomes: Kpi[];
  outcomesLabel?: string;
  capabilities: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-portfolio-governance",
    index: "01",
    title: "Enterprise Portfolio Governance",
    subtitle: "Bringing greater control and executive visibility to a 150+ project portfolio.",
    company: "Pharmacity",
    role: "PMO, Portfolio Governance & Transformation",
    period: "2022–2024",
    featured: true,
    cardSummary:
      "Strengthened governance and executive visibility across a portfolio of more than 150 concurrent projects.",
    cardMetrics: [
      { value: "150+", label: "Projects" },
      { value: "€5–10M", label: "Portfolio funding" },
      { value: "33% → 100%", label: "Governance submissions" },
    ],
    context: [
      "Pharmacity is a leading pharmacy retailer in Vietnam with approximately 1,000 stores.",
      "Its portfolio included more than 150 concurrent projects across functions including Finance, Retail Operations, Supply Chain, Commercial, Technology, Data, HR and other business areas.",
      "At this scale, individual project reporting alone was not sufficient. Leadership required portfolio-level visibility across delivery, governance, financials, resources and cross-functional dependencies.",
    ],
    challenge: {
      intro: "The governance environment required stronger consistency around:",
      items: [
        "Documentation",
        "Decisions",
        "Approvals",
        "Actions",
        "Milestones",
        "Dependencies",
        "Risks",
        "Financial information",
        "Resource allocation",
        "Governance submissions",
      ],
      closing:
        "Senior leadership also needed information to be consolidated into a manageable portfolio view rather than fragmented across individual initiatives.",
    },
    contribution: {
      intro:
        "I led portfolio governance across more than 150 concurrent projects using Jira and Confluence. My work included:",
      items: [
        "Enforcing documentation, decision, approval and action-tracking standards",
        "Developing integrated portfolio plans",
        "Building dependency views",
        "Tracking milestones, risks and corrective actions",
        "Consolidating budgets and forecasts",
        "Bringing CAPEX/OPEX information into portfolio views",
        "Supporting resource allocation visibility",
        "Tracking benefits",
        "Developing portfolio dashboards",
        "Preparing executive reporting for CEO and CFO reviews",
      ],
    },
    actions: [
      {
        title: "Integrated Planning",
        intro:
          "I developed portfolio-level planning and dependency views covering approximately 45–50 quarterly initiatives. These views brought together:",
        items: ["Milestones", "Dependencies", "Risks", "Corrective actions", "Delivery status"],
        closing:
          "The objective was to give leadership a clearer basis for prioritisation and change decisions.",
      },
      {
        title: "Financial & Resource Visibility",
        intro: "I consolidated the following into a single portfolio view:",
        items: [
          "Resource allocation",
          "Budgets",
          "Forecasts",
          "CAPEX / OPEX",
          "Benefits tracking",
        ],
        closing:
          "This provided leadership with visibility across €5–10M in portfolio funding and more than 100 portfolio contributors.",
      },
      {
        title: "Executive Reporting",
        intro:
          "More than 50 delivery, budget, risk and resource measures were consolidated into a smaller set of executive KPIs.",
        closing:
          "The reporting focused on information relevant to CEO and CFO portfolio reviews, including exceptions and areas requiring management attention.",
      },
    ],
    outcomes: [
      { value: "150+", label: "Concurrent projects governed." },
      { value: "€5–10M", label: "Portfolio funding represented in consolidated management views." },
      { value: "100+", label: "Portfolio contributors represented across resource and funding views." },
      { value: "33% → 100%", label: "Improvement in on-time governance submissions." },
      {
        value: "50+",
        label: "Delivery, financial, risk and resource measures consolidated into executive KPIs.",
      },
      { value: "25 hrs → 5 hrs", label: "Monthly reporting effort." },
      { value: "80%", label: "Reduction in reporting effort." },
    ],
    capabilities: [
      "Portfolio Governance",
      "Integrated Planning",
      "Financial Governance",
      "Resource Governance",
      "Executive Reporting",
      "Dashboard Development",
      "Governance Process Improvement",
      "Jira & Confluence",
    ],
  },
  {
    slug: "cross-squad-digital-delivery-governance",
    index: "02",
    title: "Cross-Squad Digital Delivery Governance",
    subtitle: "Reducing overdue dependencies by 90% across six Agile squads.",
    company: "Timo Digital Bank",
    role: "PMO, Product Delivery & Portfolio Operations",
    period: "2021–2022",
    featured: true,
    cardSummary:
      "Supported integrated delivery governance across six Agile squads spanning Product, Technology and Data.",
    cardMetrics: [
      { value: "6", label: "Agile squads" },
      { value: "100+", label: "Monthly work items" },
      { value: "90%", label: "Fewer overdue dependencies" },
    ],
    context: [
      "Timo operated in a digital banking environment with six Agile squads spanning Product, Technology and Data.",
      "The delivery environment included more than 100 monthly work items and required coordination across multiple teams in a two-week sprint environment.",
    ],
    challenge: {
      intro:
        "Individual squads could manage their own sprint activity, but cross-squad delivery required visibility beyond individual team backlogs. Leadership and delivery teams needed a coordinated view across:",
      items: [
        "Integrated schedules",
        "Dependencies",
        "RAID items",
        "UAT readiness",
        "Release risks",
        "Decisions",
        "Approvals",
        "Actions",
        "Governance evidence",
      ],
      closing:
        "Dependencies were particularly important because delays in one team could affect delivery elsewhere.",
    },
    contribution: {
      intro:
        "I supported delivery governance across all six squads while maintaining Jira and Confluence as a single source of truth for:",
      items: ["Documentation", "Decisions", "Approvals", "Actions", "Governance evidence"],
      closing:
        "I built integrated schedules and dependency maps across six squads and more than 30 Product, Technology and Data contributors.",
    },
    actions: [
      {
        title: "Dependency Management",
        intro: "I supported visibility across cross-team dependencies by tracking:",
        items: [
          "Owners",
          "Due dates",
          "Delivery impacts",
          "Risks",
          "Mitigating actions",
          "Escalations",
        ],
        closing: "This contributed to a 90% reduction in overdue cross-team dependencies.",
      },
      {
        title: "Delivery & Release Governance",
        intro: "My work also included:",
        items: [
          "RAID management",
          "UAT readiness",
          "Release risk visibility",
          "Planning activities",
          "Retrospectives",
          "Change-readiness support",
        ],
        closing:
          "I tailored portfolio narratives for more than 10 senior stakeholders across Product, Technology and Operations.",
      },
      {
        title: "Governance Standardisation",
        intro:
          "I helped standardise PMO templates and reporting routines, reducing the time required to bring new projects into governance from approximately three weeks to one week.",
      },
    ],
    outcomes: [
      { value: "6", label: "Agile squads supported." },
      { value: "100+", label: "Monthly work items governed." },
      {
        value: "30+",
        label: "Product, Technology and Data contributors represented across integrated delivery views.",
      },
      { value: "90%", label: "Reduction in overdue cross-team dependencies." },
      { value: "3 wks → 1 wk", label: "Reduction in new-project onboarding to governance." },
      { value: "10+", label: "Senior stakeholders supported through tailored portfolio reporting." },
    ],
    capabilities: [
      "Agile PMO",
      "Integrated Planning",
      "RAID Management",
      "Dependency Management",
      "UAT Readiness",
      "Delivery Governance",
      "Executive Reporting",
      "Jira & Confluence",
    ],
  },
  {
    slug: "portfolio-reporting-transformation",
    index: "03",
    title: "Portfolio Reporting Transformation",
    subtitle: "Reducing monthly reporting effort by 80%.",
    company: "Pharmacity",
    role: "Portfolio Reporting & Governance Improvement",
    period: "2022–2024",
    featured: true,
    cardSummary:
      "Simplified portfolio reporting by standardising governance artefacts, KPIs and data consolidation routines.",
    cardMetrics: [
      { value: "50+", label: "Measures consolidated" },
      { value: "25 hrs → 5 hrs", label: "Monthly effort" },
      { value: "80%", label: "Reduction in reporting effort" },
    ],
    context: [
      "Portfolio reporting can become highly administrative when information is spread across project updates, governance documents, spreadsheets and delivery systems.",
    ],
    challenge: {
      intro: "The challenge was not to generate more reporting. It was to make reporting:",
      items: [
        "More consistent",
        "Easier to consolidate",
        "More focused on exceptions",
        "More useful for leadership",
        "Less time-intensive to produce",
      ],
    },
    contribution: {
      intro: "I improved the reporting process around four principles.",
      items: [
        "Consistency — introduced standardised governance artefacts and reporting structures",
        "Consolidation — combined delivery, budget, risk and resource information into portfolio-level views",
        "Focus — reduced more than 50 underlying measures into a focused set of executive KPIs",
        "Repeatability — introduced structured data consolidation routines that reduced repeated manual effort",
      ],
    },
    actions: [
      {
        title: "What Changed",
        intro: "The reporting process combined:",
        items: [
          "Governance artefacts",
          "Portfolio dashboards",
          "KPI definitions",
          "Data consolidation routines",
          "Management narratives",
          "Decision-ready recommendations",
        ],
        closing:
          "The objective was to provide leadership with a more focused picture of portfolio performance while reducing the administrative burden of producing it.",
      },
    ],
    outcomes: [
      { value: "25 hrs → 5 hrs", label: "Monthly reporting effort." },
      { value: "80%", label: "Reduction in monthly reporting effort." },
      {
        value: "50+",
        label: "Delivery, budget, risk and resource measures consolidated into focused executive KPIs.",
      },
    ],
    outcomesLabel: "Outcome",
    capabilities: [
      "Executive Reporting",
      "Portfolio Analytics",
      "KPI Design",
      "Dashboard Development",
      "PMO Process Improvement",
      "Data Consolidation",
      "Decision Support",
    ],
  },
  {
    slug: "finance-and-project-governance",
    index: "04",
    title: "Finance & Project Governance",
    subtitle: "Connecting project delivery with financial oversight.",
    company: "POSCO International",
    role: "Finance PMO & Project Governance",
    period: "2017–2020",
    featured: false,
    cardSummary:
      "Governance across more than 50 finance and business initiatives, combining project controls with financial planning and CFO-level reporting.",
    cardMetrics: [
      { value: "50+", label: "Initiatives" },
      { value: "€1–5M", label: "Financial scope" },
      { value: "CFO", label: "Reporting audience" },
    ],
    context: [
      "At POSCO International, I supported governance across more than 50 finance and business initiatives.",
      "The role combined project controls with financial planning and CFO-level reporting.",
    ],
    challenge: {
      intro:
        "Finance and business initiatives were governed alongside budget and forecast cycles, which required project controls and financial planning to stay aligned rather than run as separate reporting tracks.",
    },
    contribution: {
      intro: "My responsibilities included:",
      items: [
        "Maintaining decision records",
        "Managing approvals",
        "Tracking actions",
        "Building integrated schedules",
        "Monitoring dependencies",
        "Tracking delivery against baseline plans",
        "Escalating risks and issues",
        "Supporting budgets and forecasts",
        "Supporting resource planning",
        "Translating project and financial information into concise management reporting",
      ],
    },
    actions: [],
    outcomes: [
      { value: "50+", label: "Finance and business initiatives." },
      {
        value: "€1–5M",
        label: "Financial scope covered through budget, forecast and resource-planning activity.",
      },
    ],
    outcomesLabel: "Scale",
    capabilities: [
      "Finance PMO",
      "Project Governance",
      "Project Controls",
      "Integrated Planning",
      "Budget & Forecast Support",
      "Resource Planning",
      "Executive Reporting",
    ],
  },
];

/* ------------------------------- experience ------------------------------ */

export type Role = {
  period: string;
  title: string;
  company: string;
  descriptor?: string;
  formalTitle?: string;
  location?: string;
  scopeLine: string;
  scope: string[];
  metrics: Kpi[];
  notes?: string[];
  current?: boolean;
};

export const roles: Role[] = [
  {
    period: "2024 — Present",
    title: "Postgraduate Study & International Relocation",
    company: "The Netherlands",
    scopeLine:
      "Relocated to the Netherlands and completed an MSc in Business Administration at Vrije Universiteit Amsterdam, alongside professional development in programme management, Jira, Power BI and AI-assisted PMO workflows.",
    scope: ["MSc Business Administration", "Programme Management", "Power BI", "AI-assisted PMO"],
    metrics: [],
    current: true,
  },
  {
    period: "2022 — 2024",
    title: "PMO, Portfolio Governance & Transformation",
    company: "Pharmacity",
    descriptor: "Leading pharmacy retailer · approximately 1,000 stores",
    formalTitle: "Assistant to the CFO",
    scopeLine:
      "Supported enterprise portfolio governance across more than 150 concurrent projects.",
    scope: [
      "Portfolio Governance",
      "Integrated Planning",
      "RAID & Dependencies",
      "Financial Governance",
      "Resource Visibility",
      "Executive Reporting",
      "Dashboard Development",
      "Process Improvement",
    ],
    metrics: [
      { value: "150+", label: "Concurrent projects governed" },
      { value: "€5–10M", label: "Portfolio funding visibility" },
      { value: "33% → 100%", label: "On-time governance submissions" },
      { value: "80%", label: "Reduction in reporting effort" },
    ],
    notes: [
      "100+ portfolio contributors represented in consolidated views",
      "50+ delivery, financial, risk and resource measures consolidated into executive KPIs",
      "Monthly reporting effort reduced from 25 hours to 5 hours",
    ],
  },
  {
    period: "2021 — 2022",
    title: "PMO, Product Delivery & Portfolio Operations",
    company: "Timo Digital Bank",
    descriptor: "Digital bank & fintech",
    formalTitle: "Assistant to the Deputy CEO",
    scopeLine:
      "Supported delivery governance across six Agile squads spanning Product, Technology and Data.",
    scope: [
      "Integrated Scheduling",
      "RAID Management",
      "Dependency Management",
      "UAT Readiness",
      "Release Risk",
      "Financial Tracking",
      "Portfolio Reporting",
      "Governance Standardisation",
    ],
    metrics: [
      { value: "6", label: "Agile squads supported" },
      { value: "100+", label: "Monthly work items" },
      { value: "90%", label: "Fewer overdue dependencies" },
      { value: "3 wks → 1 wk", label: "New-project onboarding" },
    ],
    notes: [
      "30+ Product, Technology and Data contributors",
      "10+ senior stakeholders supported through tailored portfolio narratives",
    ],
  },
  {
    period: "2017 — 2020",
    title: "Finance PMO & Project Governance",
    company: "POSCO International",
    descriptor: "POSCO Group · global trading & energy",
    formalTitle: "Assistant to the CFO",
    scopeLine: "Supported governance across more than 50 finance and business initiatives.",
    scope: [
      "Project Governance",
      "Integrated Scheduling",
      "Dependency Management",
      "Baseline Tracking",
      "Budget & Forecast Support",
      "Resource Planning",
      "CFO Reporting",
    ],
    metrics: [
      { value: "50+", label: "Finance and business initiatives" },
      { value: "€1–5M", label: "Financial scope" },
    ],
  },
  {
    period: "2016 — 2017",
    title: "Operations & Project Coordination",
    company: "Inter-Pacific",
    descriptor: "International trading & logistics",
    formalTitle: "Assistant to the CEO",
    scopeLine:
      "Coordinated schedules, dependencies, scope changes and stakeholder reporting across international logistics activity.",
    scope: [
      "Schedule Coordination",
      "Dependency Tracking",
      "Scope Change",
      "Action Tracking",
      "Risk Escalation",
      "Stakeholder Reporting",
    ],
    metrics: [
      { value: "50+", label: "Monthly shipments and logistics initiatives" },
      { value: "30+", label: "External partners" },
    ],
    notes: [
      "Customers and partners across Europe, United States, Japan, Korea, Australia and New Zealand",
    ],
  },
];

export const education = [
  {
    qualification: "MSc Business Administration",
    field: "Leadership & Change Management",
    institution: "Vrije Universiteit Amsterdam",
    location: "Amsterdam, Netherlands",
    period: "2024–2025",
  },
  {
    qualification: "Bachelor of Economics",
    field: "International Business Economics",
    institution: "Foreign Trade University",
    location: "Ho Chi Minh City, Vietnam",
    period: "2012–2016",
  },
];

export const development = [
  { name: "Agile with Atlassian Jira", issuer: "Atlassian", year: "2026" },
  {
    name: "Microsoft Program Management Professional Certificate",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    name: "Advanced Project Management: Asana, Jira, Confluence and AI",
    issuer: "Coursera",
    year: "2026",
  },
  {
    name: "Microsoft Power BI Data Analyst Professional Certificate",
    issuer: "Microsoft",
    year: "2025",
  },
  { name: "SQL for Data Analytics", issuer: "Udemy", year: "2022" },
];

export const languages = [
  { name: "English", level: "Professional proficiency" },
  { name: "Vietnamese", level: "Native" },
  { name: "Dutch", level: "Basic" },
];

export const about = {
  quote:
    "Governance should make delivery easier to understand — not harder to manage.",
  paragraphs: [
    "I am a PMO and portfolio governance professional with experience across digital banking, retail transformation, finance and international operations.",
    "My work sits between delivery teams and senior management: understanding enough operational detail to identify risks, dependencies and delivery constraints, while translating that information into concise portfolio views that support management action and decision-making.",
    "I have worked across Product, Technology, Finance, Operations and other business functions, supporting portfolio governance, integrated planning, financial oversight, executive reporting and delivery coordination.",
  ],
  principles: [
    { title: "Clear information", body: "One consolidated view, defined measures, no ambiguity." },
    { title: "Clear ownership", body: "Every risk, dependency and action has a named owner and a date." },
    { title: "Clear decisions", body: "Exceptions surfaced early, with the decision required stated plainly." },
  ],
};

export const contact = {
  heading: "Open to London opportunities.",
  body: "I am interested in roles across PMO, Portfolio Governance, Programme Governance, Business Operations and Transformation.",
  interests: [
    "PMO",
    "Portfolio Governance",
    "Programme Governance",
    "Business Operations",
    "Transformation",
  ],
};
