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

const kineticBotanicals: PortfolioVenture = {
  slug: "kinetic-botanicals",
  name: "Kinetic Botanicals",
  eyebrow: "Active-lifestyle botanical roll-ons",
  category: "Commerce",
  stage: "Launch-Ready Brand",
  status: "Public",
  summary:
    "A gym- and active-lifestyle botanical brand centered on compact essential-oil roll-ons designed as personal scent rituals for before training, after training, and everyday movement.",
  problem:
    "Gym-bag personal care often splits between fragrance, supplements, and generic wellness products, leaving little room for a compact botanical ritual positioned specifically around active routines and personal scent.",
  thesis:
    "A focused roll-on format can occupy a distinct active-lifestyle lane when scent profiles, portability, packaging, and the before-and-after workout ritual are treated as one coherent product experience rather than as broad wellness claims.",
  currentState:
    "The public Next.js brand experience is built with a five-scent product system, scent filtering, local cart behavior, an interactive Gym Bag Essential feature, and a three-step scent quiz. Checkout remains a demonstration flow until live payment and fulfillment infrastructure are enabled and tested.",
  founderRole:
    "Brand strategy, category positioning, scent-system direction, product architecture, active-lifestyle framing, commerce experience, quiz design, and digital platform development.",
  nextMilestone:
    "Finalize production and fulfillment details, verify product and packaging inputs, connect a tested payment flow, and validate initial demand with a controlled launch rather than relying on prototype engagement alone.",
  opportunity:
    "Product manufacturing, packaging, fulfillment, fitness partnerships, retail testing, creator collaborations, and active-lifestyle distribution.",
  externalUrl: "https://kineticbotanicals.josephjilovec.com/",
  externalLabel: "Visit Kinetic Botanicals",
  art: "/project-art/kinetic-botanicals.svg",
  heroArt: "/project-hero/kinetic-botanicals-hero.svg",
  accent: "#b7ef55",
  accentSoft: "rgba(183,239,85,.15)",
  tags: ["commerce", "active-lifestyle", "botanicals", "fitness", "product"]
};

export const ventures: PortfolioVenture[] = [
  ...portfolioVentures,
  givewiseInsights,
  adVibeCentral,
  kineticBotanicals
];
export { ventureCategories };

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
