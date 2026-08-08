import { ventures as baseVentures, ventureCategories } from "@/lib/ventures";
import type { Venture } from "@/lib/ventures";

export type PortfolioVenture = Omit<Venture, "stage"> & { stage: string };

// Public portfolio links use branded josephjilovec.com subdomains when a project has no dedicated custom domain.
const brandedSubdomains: Record<string, string> = {
  "dj-hotwax": "https://djhotwax.josephjilovec.com/",
  "vanta-helix": "https://vantahelix.josephjilovec.com/",
  snarklogic: "https://snarklogic.josephjilovec.com/",
  "alder-and-meridian": "https://aldermeridian.josephjilovec.com/",
  "united-american-future": "https://unitedamericanfuture.josephjilovec.com/",
  "world-forward-foundation": "https://worldforwardfoundation.josephjilovec.com/"
};

// Stage describes operational maturity. Status describes the project's current public/operating mode.
// These labels intentionally replace generic terms such as Prototype, Concept designed, and Active brand in the public portfolio UI.
const maturityStages: Record<string, string> = {
  "my-healthy-aura": "Pilot Operations",
  "swift-deal-solutions": "Market-Mapped",
  "dj-hotwax": "Active Creative Brand",
  "vanta-helix": "Functional Architecture",
  "cannacore-seeds": "Live Market",
  snarklogic: "Experimental Build",
  "alder-and-meridian": "Venture-Ready",
  "united-american-future": "Nonprofit",
  "world-forward-foundation": "Nonprofit"
};

const portfolioStatuses: Record<string, string> = {
  "my-healthy-aura": "Public",
  "swift-deal-solutions": "Public",
  "dj-hotwax": "Public",
  "vanta-helix": "Experimental",
  "cannacore-seeds": "Operating",
  snarklogic: "Experimental",
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
    "Organizations increasingly have access to powerful AI tools but still struggle to decide where AI belongs, which workflows should change, whether their data is ready, how autonomy should be governed, and which experiments deserve to scale.",
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

export const ventures: PortfolioVenture[] = [...portfolioVentures, givewiseInsights];
export { ventureCategories };

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
