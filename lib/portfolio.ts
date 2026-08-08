import { ventures as baseVentures, ventureCategories } from "@/lib/ventures";
import type { Venture } from "@/lib/ventures";

const givewiseInsights: Venture = {
  slug: "givewise-insights",
  name: "Givewise Insights",
  eyebrow: "AI transformation & technology advisory",
  category: "Technology",
  stage: "Active brand",
  status: "Public consulting brand",
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
  externalUrl: "https://givewiseinsights.vercel.app/",
  externalLabel: "Visit Givewise Insights",
  art: "/project-art/givewise.svg",
  heroArt: "/project-hero/givewise-hero.svg",
  accent: "#3157ff",
  accentSoft: "rgba(49,87,255,.16)",
  tags: ["technology", "ai", "consulting", "transformation", "advisory"]
};

export const ventures: Venture[] = [...baseVentures, givewiseInsights];
export { ventureCategories };

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
