export type VentureCategory = "Commerce" | "Behavioral" | "Technology" | "Creative";
export type VentureStage = "Concept designed" | "Thesis defined" | "Prototype" | "Creative project";

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
  accent: string;
  accentSoft: string;
  tags: string[];
};

export const ventures: Venture[] = [
  {
    slug: "swift-deal-solutions",
    name: "Swift Deal Solutions",
    eyebrow: "Private transaction concept",
    category: "Commerce",
    stage: "Concept designed",
    status: "Seeking operating partner",
    summary:
      "A structured sourcing and transaction concept for qualified participants in fragmented, high-value asset markets.",
    problem:
      "High-value transactions can depend on slow discovery, inconsistent screening, and informal coordination across multiple parties.",
    thesis:
      "A disciplined sourcing workflow, qualification layer, and transaction process may reduce friction for owners and serious buyers without pretending to replace licensed specialists where they are required.",
    currentState:
      "The founder thesis and initial workflow are defined. Customer discovery, jurisdiction-specific operating design, and an end-to-end live transaction test remain to be completed.",
    founderRole:
      "Opportunity framing, customer and workflow design, commercial model development, partner recruitment, and validation planning.",
    nextMilestone:
      "Interview the first customer segment and test one narrow transaction workflow with clear compliance boundaries.",
    opportunity:
      "Operating partner, market-domain adviser, or pilot participant with real transaction experience.",
    externalUrl: "https://swiftdealsolutions.com/",
    externalLabel: "Visit Swift Deal Solutions",
    art: "/project-art/swift.svg",
    accent: "#c9a76a",
    accentSoft: "rgba(201,167,106,.15)",
    tags: ["commerce", "active", "marketplaces", "operations"]
  },
  {
    slug: "my-healthy-aura",
    name: "My Healthy Aura",
    eyebrow: "Behavioral performance concept",
    category: "Behavioral",
    stage: "Concept designed",
    status: "Seeking pilot conversations",
    summary:
      "A one-to-one personal-performance concept built around structured conversation, focus conditioning, and personalized routines.",
    problem:
      "Many productivity tools organize tasks while leaving resistance, attention drift, motivation, and follow-through largely untouched.",
    thesis:
      "A guided format that combines practical behavior design with individualized routines may help some clients create more consistent focus and action.",
    currentState:
      "The service concept and offer structure are defined. Outcomes, repeat demand, and fit for different client profiles still need disciplined pilot measurement.",
    founderRole:
      "Service design, behavioral framing, session structure, client experience, and pilot measurement design.",
    nextMilestone:
      "Run a defined pilot and measure completion, perceived value, repeat interest, and where the format does or does not help.",
    opportunity:
      "Pilot participants, referral partners, or collaborators in ethical performance coaching and behavior design.",
    art: "/project-art/aura.svg",
    accent: "#8bd5c7",
    accentSoft: "rgba(139,213,199,.14)",
    tags: ["behavioral", "active", "performance", "services"]
  },
  {
    slug: "multi-robot-orchestration",
    name: "Multi-Robot Orchestration Platform",
    eyebrow: "Intelligent systems thesis",
    category: "Technology",
    stage: "Thesis defined",
    status: "Seeking technical co-founder",
    summary:
      "A coordination-layer concept for delegating work across heterogeneous robots and software agents while tracking capabilities, results, and recovery paths.",
    problem:
      "Multi-robot systems need better ways to assign work, evaluate outputs, share capabilities, and recover when conditions change.",
    thesis:
      "A capability-aware orchestration layer could make multi-robot fleets easier to coordinate across changing tasks and environments while preserving transparent failure handling.",
    currentState:
      "Core architecture and repository concepts are documented. A narrow production-quality proof of concept is still required before broader performance claims are justified.",
    founderRole:
      "System concept, architecture framing, product requirements, orchestration logic, research synthesis, and technical partner communication.",
    nextMilestone:
      "Build and benchmark one orchestration workflow with explicit success, handoff, and recovery criteria.",
    opportunity:
      "Robotics engineer, ROS2 specialist, technical co-founder, or pilot environment with heterogeneous robotic systems.",
    externalUrl: "https://github.com/josephjilovec",
    externalLabel: "View Joseph's GitHub",
    art: "/project-art/robotics.svg",
    accent: "#55d9ff",
    accentSoft: "rgba(85,217,255,.15)",
    tags: ["technology", "experimental", "robotics", "ai"]
  },
  {
    slug: "dj-hotwax",
    name: "DJ Hotwax",
    eyebrow: "Independent music identity",
    category: "Creative",
    stage: "Creative project",
    status: "Releasing music",
    summary:
      "A genre-fluid music identity spanning jazz, hip-hop, global rhythms, electronic music, and cinematic late-night atmosphere.",
    problem:
      "Not every project needs a market problem. DJ Hotwax is the creative counterweight in the portfolio: a place for original music, visual worlds, and collaboration.",
    thesis:
      "Genre is the palette; atmosphere is the signature. Distinct releases can move between musical traditions while still feeling like they belong to one cinematic universe.",
    currentState:
      "The standalone site and catalog are public, including the long-form release Nuits Feutrées and multiple stylistic worlds.",
    founderRole:
      "Music direction, concept development, release identity, visual world-building, catalog curation, and creative collaboration.",
    nextMilestone:
      "Continue building a recognizable catalog and selectively pursue placements, licensing, production, and creative partnerships.",
    opportunity:
      "Production collaboration, music licensing, visual work, placements, or creative partnerships.",
    externalUrl: "https://djhotwax.vercel.app/",
    externalLabel: "Visit DJ Hotwax",
    art: "/project-art/hotwax.svg",
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
      "A speculative product concept exploring adaptive, privacy-forward neural-interface experiences and the design language around them.",
    problem:
      "Wearable and ambient computing systems often collect large amounts of personal data while offering relatively generic feedback and interruptive interfaces.",
    thesis:
      "A future adaptive interface could become more useful by learning personal baselines, keeping sensitive processing local, and changing the environment instead of demanding more screen attention.",
    currentState:
      "The current public site is a designed concept experience. Its product specifications, testimonials, launch language, and future release framing should be read as prototype storytelling rather than independently verified commercial performance.",
    founderRole:
      "Concept direction, product storytelling, privacy principles, interaction thesis, experience design, and prototype framing.",
    nextMilestone:
      "Separate demonstrable software interaction from speculative hardware assumptions and validate one useful adaptive feedback loop.",
    opportunity:
      "Human-computer interaction, BCI, privacy, signal-processing, and product-design collaborators.",
    externalUrl: "https://vantahelix.vercel.app/",
    externalLabel: "Explore Vanta Helix",
    art: "/project-art/vanta.svg",
    accent: "#a18cff",
    accentSoft: "rgba(161,140,255,.15)",
    tags: ["technology", "experimental", "bci", "product-concept"]
  },
  {
    slug: "snarklogic",
    name: "SnarkLogic",
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
      "The public site demonstrates a deterministic server-route prototype and an illustrative performance model. It does not claim a production autonomous ad platform or guaranteed campaign outcomes.",
    founderRole:
      "System concept, multi-agent operating model, creative strategy, behavioral framing, risk architecture, and prototype direction.",
    nextMilestone:
      "Connect the orchestration flow to a real campaign dataset or controlled test and measure whether structured dissent improves decision quality.",
    opportunity:
      "Creative technologists, performance marketers, agencies, brand teams, and experiment partners.",
    externalUrl: "https://snarklogic.vercel.app/",
    externalLabel: "Explore SnarkLogic",
    art: "/project-art/snark.svg",
    accent: "#ff4f8b",
    accentSoft: "rgba(255,79,139,.14)",
    tags: ["technology", "experimental", "advertising", "ai", "creative"]
  }
];

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}

export const ventureCategories = ["All", "Technology", "Commerce", "Behavioral", "Creative"] as const;
