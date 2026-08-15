import { ventures as baseVentures, ventureCategories as baseVentureCategories } from "@/lib/ventures";
import type { Venture } from "@/lib/ventures";

export type PortfolioVenture = Omit<Venture, "stage" | "category"> & {
  stage: string;
  category: Venture["category"] | "Industrial";
};

// Public portfolio links use branded josephjilovec.com subdomains when a project has no dedicated custom domain.
const brandedSubdomains: Record<string, string> = {
  "dj-hotwax": "https://djhotwax.josephjilovec.com/",
  "vanta-helix": "https://vantahelix.josephjilovec.com/",
  snarklogic: "https://snarklogic.josephjilovec.com/",
  "alder-and-meridian": "https://aldermeridian.josephjilovec.com/",
  "united-american-future": "https://unitedamericanfuture.josephjilovec.com/",
  "world-forward-foundation": "https://worldforwardfoundation.josephjilovec.com/"
};

// Stage describes operational maturity. Status remains available as internal portfolio data even when it is not surfaced in the public UI.
const maturityStages: Record<string, string> = {
  "my-healthy-aura": "Pilot Operations",
  "swift-deal-solutions": "Market-Mapped",
  "dj-hotwax": "Active Creative Brand",
  "vanta-helix": "Functional Architecture",
  "cannacore-seeds": "Live Market",
  snarklogic: "Active System Build",
  "alder-and-meridian": "Venture-Ready",
  "united-american-future": "Nonprofit",
  "world-forward-foundation": "Nonprofit"
};

const portfolioStatuses: Record<string, string> = {
  "my-healthy-aura": "Pilot",
  "swift-deal-solutions": "Public",
  "dj-hotwax": "Public",
  "vanta-helix": "Public",
  "cannacore-seeds": "Pilot",
  snarklogic: "Public",
  "alder-and-meridian": "Public",
  "united-american-future": "Public",
  "world-forward-foundation": "Public"
};

const portfolioVentures: PortfolioVenture[] = baseVentures.map((venture) => ({
  ...venture,
  stage: maturityStages[venture.slug] ?? venture.stage,
  status: portfolioStatuses[venture.slug] ?? venture.status,
  externalUrl: brandedSubdomains[venture.slug] ?? venture.externalUrl
}));

const givewiseInsights: PortfolioVenture = {
  slug: "givewise-insights",
  name: "Givewise Insights",
  eyebrow: "AI transformation & technology advisory",
  category: "Technology",
  stage: "Market-Ready Advisory",
  status: "Public",
  summary:
    "A founder-led AI transformation and technology advisory helping organizations make clearer decisions about AI strategy, agentic workflows, data readiness, governance, automation, and modernization.",
  problem:
    "Organizations increasingly have access to powerful AI tools but still struggle to decide where AI belongs, which workflows should change, whether their data is ready, how autonomy should be governed, and which initiatives deserve to scale.",
  thesis:
    "Independent, decision-first advisory can help leaders connect AI investment to real operating problems by evaluating workflow, data, controls, people, cost, and implementation sequence before technology choices become commitments.",
  currentState:
    "The public consulting website is live with a defined AI transformation positioning, interactive capability explorer, AI-readiness diagnostic, market-signal interface, contact pathway, and Vercel deployment. Client outcomes are not presented as established proof unless independently supported.",
  founderRole:
    "Consulting brand strategy, AI transformation framework, technology-advisory positioning, decision architecture, workflow and governance models, interactive diagnostic design, and digital platform development.",
  nextMilestone:
    "Convert the public advisory model into a small number of clearly scoped consulting engagements and document the resulting decision process, deliverables, and measurable operating outcomes.",
  opportunity:
    "Organizations evaluating AI strategy, automation, agentic workflows, data readiness, governance, technology modernization, and implementation priorities.",
  externalUrl: "https://givewiseinsights.josephjilovec.com/",
  externalLabel: "Visit Givewise Insights",
  art: "/project-art/givewise.svg",
  heroArt: "/project-hero/givewise-hero.svg",
  accent: "#3157ff",
  accentSoft: "rgba(49,87,255,.16)",
  tags: ["technology", "ai", "consulting", "transformation", "advisory"]
};

const adVibeCentral: PortfolioVenture = {
  slug: "advibe-central",
  name: "AdVibe Central",
  eyebrow: "Advertising entertainment & creative discovery",
  category: "Creative",
  stage: "Interactive Platform",
  status: "Public",
  summary:
    "An advertising-entertainment platform built around discovering, watching, reacting to, rating, saving, sharing, and discussing standout creative work across human, AI, and hybrid production.",
  problem:
    "Most digital products treat advertising as an interruption, while creative advertising itself is scattered across feeds, award sites, agency reels, and brand channels with little shared context for discovery or discussion.",
  thesis:
    "Advertising can become destination content when the platform is designed around entertainment, creative comparison, audience reaction, and transparent distinctions between human, AI, and hybrid production rather than around forced ad exposure.",
  currentState:
    "The public platform concept is live with search and filtering, creative labels, watchlist behavior, detail views, illustrative scoring interfaces, a Creative Wall, Vibe Pulse, brand and agency pathways, and an emerging trust architecture. Demonstration metrics are not presented as verified campaign performance.",
  founderRole:
    "Platform concept, brand architecture, creative-discovery model, interaction design, product strategy, scoring-system direction, trust framework, and digital build.",
  nextMilestone:
    "Move from demonstration creative data to a controlled set of real submissions and audience interactions, then validate which discovery, rating, and discussion mechanics create repeat use.",
  opportunity:
    "Brands, agencies, filmmakers, creative technologists, advertising researchers, creators, and partners interested in the future of advertising as entertainment.",
  externalUrl: "https://advibecentral.com/",
  externalLabel: "Visit AdVibe Central",
  art: "/project-art/advibe.svg",
  heroArt: "/project-hero/advibe-hero.svg",
  accent: "#7c5cff",
  accentSoft: "rgba(124,92,255,.16)",
  tags: ["creative", "advertising", "media", "ai", "discovery"]
};

const kineticAromatics: PortfolioVenture = {
  slug: "kinetic-aromatics",
  name: "Kinetic Aromatics",
  eyebrow: "Active-lifestyle aromatic roll-ons",
  category: "Commerce",
  stage: "Launch-Ready Brand",
  status: "Public",
  summary:
    "A gym- and active-lifestyle aromatic brand centered on compact essential-oil roll-ons designed as personal scent rituals for before training, after training, and everyday movement.",
  problem:
    "Gym-bag personal care often splits between fragrance, supplements, and generic wellness products, leaving little room for a compact aromatic ritual positioned specifically around active routines and personal scent.",
  thesis:
    "A focused roll-on format can occupy a distinct active-lifestyle lane when scent profiles, portability, packaging, and the before-and-after workout ritual are treated as one coherent product experience rather than as broad wellness claims.",
  currentState:
    "The public Next.js brand experience is built with a five-scent product system, scent filtering, local cart behavior, an interactive Gym Bag Essential feature, and a three-step scent quiz. Checkout remains a demonstration flow until live payment and fulfillment infrastructure are enabled and tested.",
  founderRole:
    "Brand strategy, category positioning, scent-system direction, product architecture, active-lifestyle framing, commerce experience, quiz design, and digital platform development.",
  nextMilestone:
    "Finalize production and fulfillment details, verify product and packaging inputs, connect a tested payment flow, and validate initial demand with a controlled launch rather than relying on demonstration engagement alone.",
  opportunity:
    "Product manufacturing, packaging, fulfillment, fitness partnerships, retail testing, creator collaborations, and active-lifestyle distribution.",
  externalUrl: "https://kineticaromatics.josephjilovec.com/",
  externalLabel: "Visit Kinetic Aromatics",
  art: "/project-art/kinetic-botanicals.svg",
  heroArt: "/project-hero/kinetic-botanicals-hero.svg",
  accent: "#b7ef55",
  accentSoft: "rgba(183,239,85,.15)",
  tags: ["commerce", "active-lifestyle", "aromatics", "fitness", "product"]
};

const atlasAssets: PortfolioVenture = {
  slug: "atlas-assets",
  name: "Atlas Assets",
  eyebrow: "Cross-border structure simulation & professional coordination",
  category: "Technology",
  stage: "Cross-Border Modeling Platform",
  status: "Public",
  summary:
    "A cross-border structure modeling concept that maps how entities, intellectual property, digital assets, tax residence, banking, custody, and jurisdiction rules interact before consequential implementation decisions are made.",
  problem:
    "Globally distributed companies and asset structures can span residence, operating entities, intellectual property, banking, custody, customers, and counterparties across multiple jurisdictions, making dependencies difficult to evaluate as one system.",
  thesis:
    "A structured simulation and professional-review workflow can make cross-border dependencies easier to inspect before formation, transfer, banking, custody, or tax decisions are handed to the qualified professionals responsible for execution.",
  currentState:
    "The public Next.js experience is deployed with jurisdiction comparison, structure modeling, control rules, and an interactive structure-review pathway. It is presented as scenario modeling and professional coordination rather than legal, tax, securities, fiduciary, banking, or regulated advice.",
  founderRole:
    "Brand architecture, cross-border systems framing, scenario-model design, jurisdiction interface, professional-review workflow, guardrail design, and digital platform development.",
  nextMilestone:
    "Test the structure-review workflow against a narrow set of realistic founder and digital-asset scenarios, then refine the handoff materials with qualified legal, tax, banking, and compliance professionals.",
  opportunity:
    "Cross-border founders, digital-asset operators, international business advisers, legal and tax professionals, banking specialists, and compliance collaborators.",
  externalUrl: "https://atlasassets.josephjilovec.com/",
  externalLabel: "Visit Atlas Assets",
  art: "/project-art/atlas-assets.svg",
  heroArt: "/project-art/atlas-assets.svg",
  accent: "#68d4ff",
  accentSoft: "rgba(104,212,255,.15)",
  tags: ["technology", "cross-border", "structures", "digital-assets", "professional-review"]
};

const autoCompCorp: PortfolioVenture = {
  slug: "autocomp-corp",
  name: "AutoComp Corp",
  eyebrow: "Autonomous compliance operations & evidence systems",
  category: "Technology",
  stage: "Compliance Operations Platform",
  status: "Public",
  summary:
    "A compliance-operations software concept for continuous monitoring, evidence capture, controlled document drafting, and permissioned execution workflows with human authority preserved for consequential decisions.",
  problem:
    "Corporate compliance work is often fragmented across alerts, spreadsheets, evidence requests, policy documents, calendars, and manual follow-up, making it difficult to maintain a continuous operational picture.",
  thesis:
    "A coordinated agent system can reduce repetitive monitoring and evidence work when automation is separated from legal judgment and high-consequence actions remain permissioned to authorized professionals and company officers.",
  currentState:
    "A Next.js product system and readiness-check workflow are built around monitoring, specialized agents, evidence management, control routing, and explicit human approval boundaries. It is not presented as a substitute for legal or regulated professional judgment.",
  founderRole:
    "Product concept, compliance-operations architecture, autonomous-agent model, evidence workflow, permission system, risk framing, and digital platform development.",
  nextMilestone:
    "Validate one narrow compliance workflow end to end with realistic evidence inputs, measurable review time, explicit escalation criteria, and a qualified professional in the approval loop.",
  opportunity:
    "Compliance teams, governance and risk operators, legal-operations professionals, audit and evidence-management partners, and enterprise workflow collaborators.",
  externalUrl: "https://autocompcorp.josephjilovec.com/",
  externalLabel: "Visit AutoComp Corp",
  art: "/project-art/autocomp-corp.svg",
  heroArt: "/project-art/autocomp-corp.svg",
  accent: "#b8ff4a",
  accentSoft: "rgba(184,255,74,.14)",
  tags: ["technology", "compliance", "agents", "evidence", "governance"]
};

const crestlineMetals: PortfolioVenture = {
  slug: "crestline-metals",
  name: "Crestline Metals",
  eyebrow: "Industrial manufacturing / high-performance steel",
  category: "Industrial",
  stage: "Industrial Build Plan",
  status: "Public",
  summary:
    "A planned American industrial manufacturing company focused on high-performance steel, disciplined process control, traceability, dependable supply, demanding specifications, and long-term customer relationships.",
  problem:
    "Industrial customers with demanding steel requirements need more than nominal material specifications: they also depend on process discipline, documentation, traceability, delivery reliability, responsive technical communication, and confidence that the manufacturing system can perform consistently.",
  thesis:
    "A focused domestic steel manufacturer can create a credible premium position by treating process control, specification discipline, quality documentation, traceability, supply responsiveness, and customer communication as part of the product rather than as secondary operating details.",
  currentState:
    "The Crestline Metals public website is live with defined company, capability, market, quality, critical-response, careers, contact, and industry-intelligence positioning. Bethlehem, Pennsylvania is presented as the planned operating base. Manufacturing facilities, production capacity, certifications, customer contracts, defense qualifications, and operating output are not presented as existing achievements.",
  founderRole:
    "Company concept, brand architecture, commercial positioning, public platform, operating-system framing, venture roadmap, and coordination of the technical, industrial, partnership, and capital work required to move from a public company concept toward an operating manufacturer.",
  nextMilestone:
    "Narrow the initial product and process route, validate real buyer requirements, develop the facility, equipment, utility, logistics, permitting, quality-system, and capital plan with qualified industrial and metallurgical specialists, and establish evidence before making operating claims.",
  opportunity:
    "Steelmaking and processing operators, metallurgical and plant engineers, equipment suppliers, industrial customers, energy and logistics partners, economic-development stakeholders, quality-system specialists, and capital partners.",
  externalUrl: "https://crestlinemetals.josephjilovec.com/",
  externalLabel: "Visit Crestline Metals",
  art: "/project-art/crestline-metals.svg",
  heroArt: "/project-art/crestline-metals.svg",
  accent: "#9AA9B5",
  accentSoft: "rgba(154,169,181,.16)",
  tags: ["industrial", "steel", "manufacturing", "quality", "domestic-supply"]
};

export const ventures: PortfolioVenture[] = [
  ...portfolioVentures,
  givewiseInsights,
  adVibeCentral,
  kineticAromatics,
  atlasAssets,
  autoCompCorp,
  crestlineMetals
];

export const ventureCategories = [...baseVentureCategories, "Industrial"] as const;

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
