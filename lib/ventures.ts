export type VentureCategory = "Commerce" | "Behavioral" | "Technology" | "Creative";
export type VentureStage = "Concept designed" | "Prototype" | "Creative project" | "Active brand";

export type Venture = {
  slug: string;
  name: string;
  eyebrow: string;
  category: VentureCategory;
  stage: VentureStage;
  status: string;
  summary: string;
  problem: string;
  thesis: string;
  currentState: string;
  founderRole: string;
  nextMilestone: string;
  opportunity: string;
  externalUrl?: string;
  externalLabel?: string;
  art: string;
  heroArt: string;
  accent: string;
  accentSoft: string;
  tags: string[];
};

export const ventures: Venture[] = [
  {
    slug: "my-healthy-aura",
    name: "My Healthy Aura",
    eyebrow: "Behavioral / personal performance",
    category: "Behavioral",
    stage: "Concept designed",
    status: "Public concept",
    summary:
      "A one-to-one personal-performance concept built around structured conversation, focus conditioning, personalized routines, and a calmer client experience.",
    problem:
      "Many productivity tools organize tasks while leaving resistance, attention drift, motivation, and follow-through largely untouched.",
    thesis:
      "A guided format combining practical behavior design with individualized routines may help some clients create more consistent focus and action.",
    currentState:
      "The public brand site, service positioning, and initial client journey exist. Outcomes and repeat demand still need disciplined pilot measurement.",
    founderRole:
      "Brand direction, service design, behavioral framing, session structure, client experience, and pilot-measurement design.",
    nextMilestone:
      "Run a clearly defined pilot and measure completion, perceived value, repeat interest, and where the format does or does not help.",
    opportunity:
      "Pilot participants, referral partners, and collaborators in ethical performance coaching and behavior design.",
    externalUrl: "https://myhealthyaura.vercel.app/",
    externalLabel: "Visit My Healthy Aura",
    art: "/project-art/aura.svg",
    heroArt: "/project-hero/aura-hero.svg",
    accent: "#8bd5c7",
    accentSoft: "rgba(139,213,199,.14)",
    tags: ["behavioral", "active", "performance", "services"]
  },
  {
    slug: "swift-deal-solutions",
    name: "Swift Deal Solutions",
    eyebrow: "Private transaction venture",
    category: "Commerce",
    stage: "Concept designed",
    status: "Public concept",
    summary:
      "A structured sourcing and transaction concept for qualified participants in fragmented, high-value asset markets.",
    problem:
      "High-value transactions can depend on slow discovery, inconsistent screening, and informal coordination across multiple parties.",
    thesis:
      "A disciplined sourcing workflow, qualification layer, and transaction process may reduce friction for owners and serious buyers without pretending to replace licensed specialists where required.",
    currentState:
      "The public site and initial workflow are defined. Customer discovery, jurisdiction-specific operating design, and a complete live transaction test remain the next proof points.",
    founderRole:
      "Opportunity framing, customer and workflow design, commercial model development, partner recruitment, and validation planning.",
    nextMilestone:
      "Interview the first customer segment and test one narrow transaction workflow with explicit compliance boundaries.",
    opportunity:
      "Operating partners, market-domain advisers, and pilot participants with real transaction experience.",
    externalUrl: "https://swiftdealsolutions.vercel.app/",
    externalLabel: "Visit Swift Deal Solutions",
    art: "/project-art/swift.svg",
    heroArt: "/project-hero/swift-hero.svg",
    accent: "#c9a76a",
    accentSoft: "rgba(201,167,106,.15)",
    tags: ["commerce", "active", "marketplaces", "operations"]
  },
  {
    slug: "dj-hotwax",
    name: "DJ Hotwax",
    eyebrow: "Independent music identity",
    category: "Creative",
    stage: "Creative project",
    status: "Public catalog",
    summary:
      "Joseph's music identity spanning jazz, hip-hop, global rhythms, electronic music, and cinematic atmosphere.",
    problem:
      "DJ Hotwax is the creative channel in the portfolio: a place for original music, visual worlds, releases, and collaboration rather than a conventional startup problem statement.",
    thesis:
      "Different genres can live under one artist identity when the connective tissue is taste, atmosphere, sequencing, and a recognizable point of view.",
    currentState:
      "The standalone website and public music catalog are live, with long-form releases and multiple stylistic directions already represented.",
    founderRole:
      "Music direction, concept development, release identity, visual world-building, catalog curation, and creative collaboration.",
    nextMilestone:
      "Keep expanding the catalog while selectively pursuing placements, licensing, production work, and creative partnerships.",
    opportunity:
      "Production collaboration, music licensing, placements, visual work, and creative partnerships.",
    externalUrl: "https://djhotwax.vercel.app/",
    externalLabel: "Visit DJ Hotwax",
    art: "/project-art/hotwax.svg",
    heroArt: "/project-hero/hotwax-hero.svg",
    accent: "#ff7849",
    accentSoft: "rgba(255,120,73,.15)",
    tags: ["creative", "active", "music", "licensing"]
  },
  {
    slug: "vanta-helix",
    name: "Vanta Helix",
    eyebrow: "Adaptive interface concept",
    category: "Technology",
    stage: "Prototype",
    status: "Concept experience",
    summary:
      "A futuristic adaptive-interface concept exploring neural-interface ideas, privacy-forward computing, and ambient personalized experiences.",
    problem:
      "Wearable and ambient computing systems can collect large amounts of personal data while still offering generic feedback and interruptive interfaces.",
    thesis:
      "A future adaptive interface could become more useful by learning personal baselines, keeping sensitive processing local, and changing the environment instead of demanding more screen attention.",
    currentState:
      "The public site is a designed concept experience. Future-facing specifications and launch language are treated here as prototype storytelling rather than independently verified commercial performance.",
    founderRole:
      "Concept direction, product storytelling, privacy principles, interaction thesis, experience design, and prototype framing.",
    nextMilestone:
      "Separate demonstrable software interaction from speculative hardware assumptions and validate one useful adaptive feedback loop.",
    opportunity:
      "Human-computer interaction, BCI, privacy, signal-processing, and product-design collaborators.",
    externalUrl: "https://vantahelix.vercel.app/",
    externalLabel: "Explore Vanta Helix",
    art: "/project-art/vanta.svg",
    heroArt: "/project-hero/vanta-hero.svg",
    accent: "#a18cff",
    accentSoft: "rgba(161,140,255,.15)",
    tags: ["technology", "experimental", "bci", "product-concept"]
  },
  {
    slug: "cannacore-seeds",
    name: "CannaCore Seeds",
    eyebrow: "Genetics brand + JJ Stash editorial",
    category: "Commerce",
    stage: "Active brand",
    status: "Seed bank + publication",
    summary:
      "A cannabis genetics and seed-bank brand paired with JJ Stash, the editorial layer covering genetics, breeding history, cultivation practices, and plant culture.",
    problem:
      "Genetics markets are crowded with inconsistent documentation, fragmented cultivar histories, and brands that often separate product discovery from useful educational context.",
    thesis:
      "A focused seed brand can become more valuable when the genetics catalog is paired with credible strain history, breeding context, and an editorial voice that treats plant culture seriously.",
    currentState:
      "CannaCore Seeds has a public seed-bank presence, while the JJ Stash repository documents the publication/newsletter concept focused on cultivars, auto-flowering genetics, breeding history, and cultivation insights.",
    founderRole:
      "Brand direction, genetics curation, breeding perspective, catalog strategy, editorial positioning, and culture-focused content development.",
    nextMilestone:
      "Tighten the connection between the seed-bank experience and JJ Stash so product discovery, genetics documentation, and editorial content reinforce one another.",
    opportunity:
      "Breeders, genetics collaborators, editorial contributors, collectors, and compliant industry partners.",
    externalUrl: "https://www.cannacoreseeds.com/",
    externalLabel: "Visit CannaCore Seeds",
    art: "/project-art/cannacore.svg",
    heroArt: "/project-hero/cannacore-hero.svg",
    accent: "#75d58a",
    accentSoft: "rgba(117,213,138,.14)",
    tags: ["commerce", "active", "genetics", "editorial", "culture"]
  },
  {
    slug: "snarklogic",
    name: "Snark Logic",
    eyebrow: "Creative intelligence prototype",
    category: "Technology",
    stage: "Prototype",
    status: "Interactive prototype",
    summary:
      "An AI advertising and comedic-intelligence concept combining creative systems, structured agent disagreement, risk controls, and performance feedback.",
    problem:
      "Generative content made advertising easier to produce but did not solve sameness, taste, governance, or learning from what actually performs.",
    thesis:
      "Creative, behavioral, finance, and risk perspectives can be encoded as explicit decision roles so campaign concepts are challenged before production and measured after deployment.",
    currentState:
      "The public Next.js prototype includes reusable UI, multi-page product architecture, server routes, interactive client behavior, and illustrative campaign/performance systems; external production integrations remain future work.",
    founderRole:
      "System concept, multi-agent operating model, creative strategy, behavioral framing, risk architecture, and prototype direction.",
    nextMilestone:
      "Connect the orchestration flow to a real campaign dataset or controlled test and measure whether structured dissent improves decision quality.",
    opportunity:
      "Creative technologists, performance marketers, agencies, brand teams, and experiment partners.",
    externalUrl: "https://snarklogic.vercel.app/",
    externalLabel: "Explore Snark Logic",
    art: "/project-art/snark.svg",
    heroArt: "/project-hero/snark-hero.svg",
    accent: "#ff4f8b",
    accentSoft: "rgba(255,79,139,.14)",
    tags: ["technology", "experimental", "advertising", "ai", "creative"]
  },
  {
    slug: "alder-and-meridian",
    name: "Alder & Meridian",
    eyebrow: "Curated commerce prototype",
    category: "Commerce",
    stage: "Prototype",
    status: "E-commerce prototype",
    summary:
      "A premium e-commerce concept built around a tightly curated catalog, restrained presentation, and a fulfillment architecture designed to become more rigorous before live selling is enabled.",
    problem:
      "Many online stores become cluttered marketplaces with weak curation, unclear product trust, and fulfillment logic that is bolted on after the visual brand is finished.",
    thesis:
      "A smaller, deliberately curated catalog can feel more credible when product data, checkout validation, supplier mapping, legal review, and fulfillment controls are treated as part of the product from the beginning.",
    currentState:
      "The repository documents a Next.js App Router prototype with a typed local catalog, integer-cent prices, an ID/quantity cart, and server-side checkout validation. Live Stripe and supplier ordering are intentionally disabled pending verification and testing.",
    founderRole:
      "Brand concept, catalog direction, commerce architecture, product experience, supplier-integration planning, and launch-readiness framing.",
    nextMilestone:
      "Complete product photography and supplier verification, legal/compliance review, test-mode payments, order storage, fulfillment mapping, and a complete test order before enabling live commerce.",
    opportunity:
      "Supplier relationships, product curation, e-commerce operations, brand partnerships, and launch-readiness collaborators.",
    art: "/project-art/alder.svg",
    heroArt: "/project-hero/alder-hero.svg",
    accent: "#74a9b8",
    accentSoft: "rgba(116,169,184,.14)",
    tags: ["commerce", "prototype", "ecommerce", "curation", "operations"]
  }
];

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}

export const ventureCategories = ["All", "Technology", "Commerce", "Behavioral", "Creative"] as const;
