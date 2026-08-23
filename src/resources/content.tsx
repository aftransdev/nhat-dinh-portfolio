import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nhat",
  lastName: "Dinh",
  name: `Nhat Dinh`,
  role: "PMO, Portfolio Governance & Transformation",
  avatar: "/images/avatar.jpg",
  email: "dtmnhat.uk@gmail.com",
  location: "Europe/Amsterdam",
  languages: ["English (B2 / IELTS 6.5)", "Vietnamese"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on PMO, portfolio governance, and delivery.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dtmnhat",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name} — PMO, portfolio governance and transformation`,
  headline: <>Keeping portfolios governed, funded and delivery-ready</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Portfolio governance</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/portfolio-governance-and-reporting",
  },
  subline: (
    <>
      I'm {person.firstName}, a PMO and portfolio governance professional based in Amsterdam with 7+
      years across digital banking, retail and international operations — seeking UK-based roles.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, PMO and portfolio governance professional based in Amsterdam`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        PMO and portfolio governance professional with 7+ years of experience across digital banking,
        retail and international operations. Experienced in integrated planning, RAID, change control,
        resource and financial tracking, and executive reporting across Product, Technology, Finance
        and Risk. Advanced user of Jira and Confluence, with experience embedding AI into PMO
        workflows.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Pharmacity Pharmacy",
        timeframe: "Jun 2022 – Jun 2024",
        role: "PMO, Portfolio Governance & Transformation",
        achievements: [
          <>
            Led portfolio governance across 150+ concurrent projects worth €1–5M in Jira and
            Confluence, enforcing documentation, decision, approval and action-tracking standards and
            raising on-time governance submission rates from 33% to 100%.
          </>,
          <>
            Built integrated portfolio plans and dependency views across 45–50 quarterly initiatives,
            tracking milestones, dependencies, risks and corrective actions to support executive
            prioritisation and change decisions.
          </>,
          <>
            Consolidated resource allocation, budgets, forecasts, CAPEX/OPEX and benefits tracking
            into a single portfolio view, providing leadership visibility of €1–5M funding and 100+
            FTE/contributors.
          </>,
          <>
            Produced portfolio, KPI, budget, risk and resource dashboards covering 50+ KPIs,
            translating delivery variance and risks into decision-ready recommendations for CEO, CFO
            and Deputy CEO reviews.
          </>,
          <>
            Transformed portfolio reporting processes with standardised governance artefacts, KPI
            dashboards and data consolidation routines, reducing monthly reporting effort from 25
            hours to 5 hours (80% reduction).
          </>,
        ],
        images: [],
      },
      {
        company: "Timo Digital Bank",
        timeframe: "Jun 2021 – Jun 2022",
        role: "PMO, Product Delivery & Portfolio Operations",
        achievements: [
          <>
            Governed 100+ monthly delivery tickets across Product and Engineering teams, maintaining
            a single source of truth for documentation, decisions, approvals and governance evidence
            in Jira and Confluence.
          </>,
          <>
            Built integrated schedules and dependency maps across 6 squads and 30+ Product,
            Technology and Data contributors, managing dependencies, RAID, UAT readiness and release
            risks in a 2-week Agile sprint environment — reducing unresolved cross-team dependencies
            by 88%.
          </>,
          <>
            Partnered with Finance on budgets, forecasts, capitalisation and benefits tracking,
            consolidating financial and delivery data into executive portfolio views.
          </>,
          <>
            Facilitated planning, retrospectives and change-readiness activities for 6 squads,
            tailoring portfolio narratives for 10+ senior stakeholders across Product, Technology and
            Operations.
          </>,
          <>
            Standardised PMO templates and reporting routines, cutting new-project onboarding time to
            governance from 3 weeks to 1 week (67% faster).
          </>,
        ],
        images: [],
      },
      {
        company: "POSCO International (POSCO Group)",
        timeframe: "Sep 2017 – Sep 2020",
        role: "Finance PMO & Project Governance",
        achievements: [
          <>
            Managed project governance across 50+ finance and business initiatives, maintaining
            decision records, approvals and action tracking and coordinating follow-ups to closure.
          </>,
          <>
            Built integrated schedules and dependency views, monitoring delivery against baseline
            plans and escalating risks and issues requiring management action.
          </>,
          <>
            Partnered with Finance on budgets, forecasts and resource planning covering €1–5M
            financial scope, translating project and financial data into concise reporting for CFO
            decision-making.
          </>,
        ],
        images: [],
      },
      {
        company: "Inter-Pacific",
        timeframe: "Jun 2016 – Sep 2017",
        role: "Operations & Project Coordination",
        achievements: [
          <>
            Coordinated schedules, dependencies and scope changes across 50+ monthly shipments,
            supplier and logistics initiatives, maintaining project documentation and action tracking
            in Jira across partners in Europe, US, Japan, Korea, Australia and New Zealand.
          </>,
          <>
            Produced CEO and stakeholder status reporting, escalating delivery risks and dependencies
            and tracking decisions, approvals and follow-ups through to closure across 30+ external
            partners.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Vrije Universiteit Amsterdam",
        description: (
          <>MSc Business Administration — Leadership & Change Management (2024–2025)</>
        ),
      },
      {
        name: "Foreign Trade University, Ho Chi Minh City",
        description: <>Bachelor of Economics — International Business Economics (2012–2016)</>,
      },
      {
        name: "Certifications",
        description: (
          <>
            Microsoft Power BI Data Analyst (2025) · Google Project Management Professional
            Certificate (2024) · SQL for Data Analytics (2022)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "PMO & Governance",
        description: (
          <>
            Portfolio governance, integrated planning, RAID management, dependency management, scope
            & change control, and governance reviews.
          </>
        ),
        tags: [
          { name: "Jira", icon: "jira" },
          { name: "Confluence", icon: "confluence" },
          { name: "RAID" },
          { name: "Change control" },
        ],
        images: [],
      },
      {
        title: "Finance, Resources & Reporting",
        description: (
          <>
            Budget tracking, forecasting, resource allocation, capitalisation, benefits realisation,
            portfolio KPIs, executive reporting, advanced Excel, Power BI and PowerPoint.
          </>
        ),
        tags: [
          { name: "Power BI", icon: "powerbi" },
          { name: "SQL", icon: "sql" },
          { name: "Excel" },
          { name: "Jira Plans" },
        ],
        images: [],
      },
      {
        title: "Delivery, Stakeholders & AI",
        description: (
          <>
            Product & engineering delivery, facilitation, change readiness and executive storytelling
            — with AI-enabled PMO workflows, Jira automation and AI-assisted reporting (Claude AI).
          </>
        ),
        tags: [
          { name: "MS Project" },
          { name: "Claude AI" },
          { name: "Notion" },
          { name: "Trello" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about PMO and delivery...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected PMO and portfolio work by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
