export type CapitalStage = { label: string; ask: string; valuation: string; justification?: string; asset: string; metric: string };
export type CapitalProfile = { slug: string; name: string; industry: string; benchmark: string; stages: CapitalStage[] };

export const capitalProfiles: CapitalProfile[] = [
  {
    slug: "my-healthy-aura", name: "My Healthy Aura",
    industry: "Behavioral / Health Tech & Performance Coaching",
    benchmark: "Digital wellness & performance platforms (e.g., Modern Health, Oura, BetterUp) raise $1.5M–$3M Seed rounds to secure clinical/coaching talent, build bio-feedback app integrations, and establish physical retreat/studio environments.",
    stages: [
      { label: "Institutional Seed Round", ask: "$1,500,000", valuation: "$7,500,000", justification: "Funds the custom client app build, bio-feedback software integration, and a leased 2,500 sq ft flagship performance studio for in-person conditioning.", asset: "Flagship Studio Lease + Custom App MVP (iOS/Android).", metric: "250 Active High-Ticket Retainers at $500/mo ($1.5M ARR)." },
      { label: "Venture Expansion Round", ask: "$4,500,000", valuation: "$22,500,000", asset: "3 Regional Studio Locations + Corporate Wellness B2B Licensing Layer.", metric: "$5.5M ARR across direct clients and enterprise contracts." },
      { label: "Portfolio Series A", ask: "$12,000,000", valuation: "$60,000,000", asset: "National franchise/corporate wellness integration and proprietary AI focus-conditioning wearable integration.", metric: "$18M+ ARR." },
    ]
  },
  {
    slug: "swift-deal-solutions", name: "Swift Deal Solutions",
    industry: "Commerce / FinTech & Asset Arbitrage",
    benchmark: "Alternative asset transaction platforms (e.g., Flipster, Brokerage Engine, CapTarget) raise $2M–$4M Seed rounds to establish institutional deal-flow liquidity, secure legal compliance, and build automated sourcing infrastructure.",
    stages: [
      { label: "Institutional Seed Round", ask: "$2,000,000", valuation: "$10,000,000", justification: "Establishes the automated deal-sourcing engine, dedicated legal/escrow compliance framework, and a $500k liquidity buffer for instant contract assignments.", asset: "Proprietary Off-Market Asset Matching Engine + Escrow Licensing.", metric: "$15M Gross Transaction Volume (GTV) at a 4% assignment fee ($600k Gross Revenue)." },
      { label: "Venture Expansion Round", ask: "$6,000,000", valuation: "$30,000,000", asset: "Expansion into institutional commercial real estate and luxury asset classes; full legal team in-house.", metric: "$100M GTV ($4M Net Revenue)." },
      { label: "Portfolio Series A", ask: "$18,000,000", valuation: "$90,000,000", asset: "Cross-border private asset marketplace dominance with institutional banking partnerships.", metric: "$500M+ GTV ($20M+ Net Revenue)." },
    ]
  },
  {
    slug: "dj-hotwax", name: "DJ Hotwax",
    industry: "Creative / Music IP & Media Operations",
    benchmark: "Independent music labels, sync licensing platforms, and artist ventures (e.g., Symphonic, Create Music Group) raise $1M–$2.5M Seed capital to build commercial production studios, secure catalog IP, and launch multi-platform distribution.",
    stages: [
      { label: "Institutional Seed Round", ask: "$1,000,000", valuation: "$5,000,000", justification: "Covers buildout of a state-of-the-art commercial recording studio, Dolby Atmos spatial audio mixing setup, sync licensing legal clearance, and initial global tour/content marketing.", asset: "Commercial Production Studio Buildout + Proprietary Sync Catalog (100+ tracks).", metric: "$400k annual revenue across streaming, sync placements, live bookings, and merch." },
      { label: "Venture Expansion Round", ask: "$3,000,000", valuation: "$15,000,000", asset: "Launch of independent imprint record label, artist accelerator studio space, and automated sync licensing platform.", metric: "$2.2M Annual Revenue." },
      { label: "Portfolio Series A", ask: "$8,500,000", valuation: "$42,500,000", asset: "Global media & live event production brand with international sync publishing integration.", metric: "$8M+ Annual Revenue." },
    ]
  },
  {
    slug: "vanta-helix", name: "Vanta Helix",
    industry: "Technology / Human-Computer Interaction (HCI) & Hardware/Software",
    benchmark: "Spatial computing, ambient UX, and privacy-first OS concepts (e.g., Humane, Rabbit, Sightful) raise $3M–$10M Seed rounds for deep R&D, hardware prototyping, and OS kernel development.",
    stages: [
      { label: "Institutional Seed Round", ask: "$3,500,000", valuation: "$17,500,000", justification: "Funds hardware/sensor prototyping, local zero-knowledge privacy architecture development, and optical/spatial UI engine R&D.", asset: "Alpha Hardware Prototype + Adaptive Ambient Interface SDK.", metric: "1,000 Developer Edition pre-orders at $1,500 ($1.5M upfront commitments)." },
      { label: "Venture Expansion Round", ask: "$12,000,000", valuation: "$60,000,000", asset: "Specialized optical/hardware testing facility, mass manufacturing tooling, and proprietary chip-level firmware integrations.", metric: "$10M ARR in consumer hardware and platform subscription licenses." },
      { label: "Portfolio Series A", ask: "$35,000,000", valuation: "$175,000,000", asset: "Commercial launch of consumer neural/ambient compute ecosystem competing with major tech OEM platforms.", metric: "$50M+ ARR." },
    ]
  },
  {
    slug: "cannacore-seeds", name: "CannaCore Seeds / JJ Stash",
    industry: "Commerce / AgTech & Cannabis Genetics",
    benchmark: "Commercial cannabis breeding labs and genetic IP brands (e.g., Phylos Bioscience, Humboldt Seed Company) raise $1.5M–$3M Seed capital to secure commercial real estate, build tissue culture labs, and acquire state/federal permits.",
    stages: [
      { label: "Institutional Seed Round", ask: "$1,500,000", valuation: "$7,500,000", justification: "Secures lease and buildout of an 8,000 sq ft climate-controlled commercial greenhouse/warehouse facility, tissue culture lab, agricultural licensing, and automated packaging machinery.", asset: "8,000 sq ft Breeding Facility + Tissue Culture Lab + State Licenses.", metric: "$1.8M Gross Revenue (Wholesale Seed Packs & B2B Genetics Licensing)." },
      { label: "Venture Expansion Round", ask: "$4,500,000", valuation: "$22,500,000", asset: "35,000 sq ft production greenhouse expansion, multi-state commercial distribution nodes, and automated fulfillment center.", metric: "$6.5M Gross Revenue." },
      { label: "Portfolio Series A", ask: "$12,500,000", valuation: "$62,500,000", asset: "National multi-state B2B agricultural genetics dominance and global seed export licensing.", metric: "$20M+ Gross Revenue." },
    ]
  },
  {
    slug: "snarklogic", name: "Snark Logic",
    industry: "Technology / Applied AI & Enterprise Communications",
    benchmark: "Generative copywriting, brand voice engines, and AI compliance firewalls (e.g., Jasper, Writer, Copy.ai) raise $2.5M–$5M Seed rounds for proprietary LLM fine-tuning, safety alignment, and enterprise API integrations.",
    stages: [
      { label: "Institutional Seed Round", ask: "$2,500,000", valuation: "$12,500,000", justification: "Covers custom model fine-tuning (satire/tone analysis engine), high-throughput GPU cluster inference infrastructure, and enterprise SOC2 Type II compliance.", asset: "Dual-Engine Public Writers' Room Web Platform + Enterprise Satire/Risk API.", metric: "$1.0M ARR across enterprise communications retainers and SaaS API usage." },
      { label: "Venture Expansion Round", ask: "$7,500,000", valuation: "$37,500,000", asset: "Proprietary model training cluster, enterprise PR crisis-simulation lab, and dedicated enterprise sales team.", metric: "$4.8M ARR." },
      { label: "Portfolio Series A", ask: "$20,000,000", valuation: "$100,000,000", asset: "Global enterprise standard for automated tone, satire, and brand reputation risk filtering.", metric: "$15M+ ARR." },
    ]
  },
  {
    slug: "alder-and-meridian", name: "Alder & Meridian",
    industry: "Commerce / Luxury E-Commerce & Supply Chain",
    benchmark: "Premium direct-to-consumer and curated luxury platforms (e.g., Huckberry, SSENSE, Italic) raise $2M–$4M Seed rounds to secure initial high-volume inventory procurement, leased fulfillment centers, and custom headless commerce software.",
    stages: [
      { label: "Institutional Seed Round", ask: "$2,000,000", valuation: "$10,000,000", justification: "Secures initial high-volume manufacturing orders, custom packaging tooling, headless e-commerce frontend development, and a leased 5,000 sq ft climate-controlled distribution hub.", asset: "Leased Fulfillment Hub + Custom Catalog Inventory ($800k Wholesale Value).", metric: "$2.5M Net Revenue with a 45% gross margin profile." },
      { label: "Venture Expansion Round", ask: "$5,500,000", valuation: "$27,500,000", asset: "20,000 sq ft automated warehousing setup, flagship physical showroom lease, and international logistics integration.", metric: "$9.0M Net Revenue." },
      { label: "Portfolio Series A", ask: "$15,000,000", valuation: "$75,000,000", asset: "Global omni-channel luxury commerce engine with regional distribution nodes in North America and Europe.", metric: "$30M+ Net Revenue." },
    ]
  },
  {
    slug: "united-american-future", name: "United American Future",
    industry: "Civic / Nonpartisan Civic Infrastructure",
    benchmark: "Major civic innovation, nonpartisan policy, and community opportunity foundations raise $1M–$3M in philanthropic seed capital to establish physical headquarters, legal 501(c)(3) frameworks, and national advocacy campaigns.",
    stages: [
      { label: "Institutional Seed Round", ask: "$1,200,000 (Philanthropic Grant / Seed Funding)", valuation: "N/A (Nonprofit Capital Endowment Target: $6,000,000)", justification: "Funds legal tax-exempt entity setup, Washington D.C. / Phoenix policy office lease, digital media production studio, and initial 5-state pilot community initiatives.", asset: "Headquarters Office & Media Studio + National Digital Platform.", metric: "$1.5M in annual philanthropic commitments & 50,000 registered civic participants." },
      { label: "Venture Expansion Round", ask: "$4,000,000", valuation: "N/A (Endowment Target: $20,000,000)", asset: "15 State Chapter Offices, policy research fellowship program, and nationwide media broadcast infrastructure.", metric: "$5.0M annual operating budget." },
      { label: "Portfolio Series A", ask: "$10,000,000", valuation: "N/A (Endowment Target: $50,000,000)", asset: "Permanent national endowment status funding civic innovation labs and community grants across all 50 states.", metric: "$15M+ annual sustained endowment budget." },
    ]
  },
  {
    slug: "world-forward-foundation", name: "World Forward Foundation",
    industry: "Civic / Global Humanitarian & Capacity Building",
    benchmark: "Global humanitarian platforms and sustainable development funds (e.g., GiveDirectly, Charity: Water, DRK Foundation) raise $2M–$5M initial catalytic funding to build field logistics, verification software, and regional operation hubs.",
    stages: [
      { label: "Institutional Seed Round", ask: "$2,000,000 (Catalytic Grant Capital)", valuation: "N/A (Global Fund Operating Scale)", justification: "Funds the transparent blockchain/ledger-based fund tracking platform, field verification infrastructure, and establishing 2 international regional operational hubs.", asset: "Real-Time Impact Tracking Platform + 2 Regional Field Hubs.", metric: "$3.0M in deployed program capital across 5 verified international partner projects." },
      { label: "Venture Expansion Round", ask: "$6,000,000", valuation: "N/A", asset: "8 International Operational Hubs, emergency response logistics network, and global institutional donor dashboard.", metric: "$12.0M deployed annual capital." },
      { label: "Portfolio Series A", ask: "$18,000,000", valuation: "N/A", asset: "World-class institutional humanitarian engine with direct United Nations / multilateral NGO partnership integrations.", metric: "$40M+ deployed annual capital." },
    ]
  },
  {
    slug: "givewise-insights", name: "Givewise Insights",
    industry: "Technology / Enterprise AI Advisory & Systems Architecture",
    benchmark: "Boutique AI transformation and technical advisory firms (e.g., Palantir Foundry Services, Scale AI Advisory, QuantumBlack) raise $1.5M–$3M Seed capital to build proprietary diagnostic software, secure executive office space, and hire senior AI architects.",
    stages: [
      { label: "Institutional Seed Round", ask: "$1,500,000", valuation: "$7,500,000", justification: "Establishes executive consulting office space, proprietary automated enterprise AI audit software, and senior AI systems engineering staff.", asset: "Proprietary AI Readiness Diagnostic Engine + Executive Briefing Suite.", metric: "$2.0M ARR across 10 enterprise transformation retainers." },
      { label: "Venture Expansion Round", ask: "$4,500,000", valuation: "$22,500,000", asset: "Regional consulting offices in London/NYC, pre-built agentic workflow deployment modules, and 20-person senior technical team.", metric: "$7.5M ARR." },
      { label: "Portfolio Series A", ask: "$12,000,000", valuation: "$60,000,000", asset: "Premier global enterprise advisory standard for agentic automation, AI governance, and legacy system modernization.", metric: "$22M+ ARR." },
    ]
  },
  {
    slug: "advibe-central", name: "AdVibe Central",
    industry: "Creative / AdTech & Interactive Media",
    benchmark: "Creative intelligence and ad-entertainment media hubs (e.g., Product Hunt, Contagious, Vidyard) raise $1.5M–$3.5M Seed rounds to build video streaming infrastructure, interactive rating algorithms, and live studio broadcasting setups.",
    stages: [
      { label: "Institutional Seed Round", ask: "$2,000,000", valuation: "$10,000,000", justification: "Covers buildout of a high-concurrency streaming media platform, custom hybrid (AI/Human) creative scoring algorithms, and a physical video studio for hosting industry creative breakdowns.", asset: "Streaming Video Platform Engine + Physical Media Studio.", metric: "$800k ARR (Brand sponsorships, premium agency analytics subscriptions)." },
      { label: "Venture Expansion Round", ask: "$5,500,000", valuation: "$27,500,000", asset: "B2B creative performance data API for agencies, annual live creative festival, and production hub.", metric: "$4.2M ARR." },
      { label: "Portfolio Series A", ask: "$15,000,000", valuation: "$75,000,000", asset: "Global creative benchmark platform for advertising, AI content scoring, and brand intelligence.", metric: "$16M+ ARR." },
    ]
  },
  {
    slug: "kinetic-aromatics", name: "Kinetic Aromatics",
    industry: "Commerce / Activewear & Personal Care",
    benchmark: "Active-lifestyle scent and performance ritual brands (e.g., Alo Yoga Beauty, Byredo, Lululemon Selfcare) raise $1.5M–$3M Seed capital to secure commercial lab leases, automated filling lines, and retail distribution contracts.",
    stages: [
      { label: "Institutional Seed Round", ask: "$1,500,000", valuation: "$7,500,000", justification: "Funds commercial ISO-certified lab manufacturing lease, custom stainless steel roll-on tooling, essential oil inventory sourcing, and gym/boutique retail distribution partnerships.", asset: "Leased Cleanroom Lab Manufacturing Line + 50,000 Product Units.", metric: "$1.6M Gross Revenue with distribution across 200+ premium fitness clubs and DTC e-commerce." },
      { label: "Venture Expansion Round", ask: "$4,000,000", valuation: "$20,000,000", asset: "High-speed automated bottling facility, national retail placement (Sephora/Equinox), and custom scent formulation IP.", metric: "$6.0M Gross Revenue." },
      { label: "Portfolio Series A", ask: "$11,000,000", valuation: "$55,000,000", asset: "Category-defining global activewear scent brand with international retail distribution.", metric: "$20M+ Gross Revenue." },
    ]
  },
  {
    slug: "atlas-assets", name: "Atlas Assets",
    industry: "Technology / RegTech & Cross-Border Structuring",
    benchmark: "LegalTech and cross-border entity management engines (e.g., Stripe Atlas, Atrium, Carta) raise $3M–$6M Seed rounds to build multi-jurisdictional tax/legal engines, secure global legal opinion frameworks, and maintain SOC2 Type II security.",
    stages: [
      { label: "Institutional Seed Round", ask: "$3,000,000", valuation: "$15,000,000", justification: "Funds cross-border tax/entity law database integration (covering 50+ jurisdictions), zero-knowledge legal document drafting engine, and international legal counsel retainers.", asset: "Proprietary Multi-Jurisdiction Structure Modeling Platform + API.", metric: "$1.2M ARR across wealth managers, family offices, and cross-border founders." },
      { label: "Venture Expansion Round", ask: "$8,000,000", valuation: "$40,000,000", asset: "Real-time automated banking/custody integration, international legal offices (Zurich/Singapore), and enterprise tax firm integrations.", metric: "$5.5M ARR." },
      { label: "Portfolio Series A", ask: "$22,000,000", valuation: "$110,000,000", asset: "Global enterprise infrastructure standard for cross-border asset, IP, and corporate entity structuring.", metric: "$18M+ ARR." },
    ]
  },
  {
    slug: "autocomp-corp", name: "AutoComp Corp",
    industry: "Technology / RegTech & Continuous Compliance",
    benchmark: "Automated compliance and continuous audit engines (e.g., Vanta, Drata, Secureframe) raise $3M–$5M Seed capital to build automated evidence collectors, SOC2/ISO audit integrations, and hire specialized security engineers.",
    stages: [
      { label: "Institutional Seed Round", ask: "$3,000,000", valuation: "$15,000,000", justification: "Covers hiring 8 senior security software engineers, building 100+ automated cloud evidence collectors (AWS/GCP/Azure), and securing SOC2/ISO/HIPAA auditor certifications.", asset: "Automated Compliance Engine Software + Auditor Portal.", metric: "$1.5M ARR across 30 mid-market B2B SaaS clients ($50k ACV)." },
      { label: "Venture Expansion Round", ask: "$9,000,000", valuation: "$45,000,000", asset: "Expansion into international frameworks (GDPR, ISO 27001, NIS2), enterprise sales team, and continuous execution workflow automation.", metric: "$6.5M ARR." },
      { label: "Portfolio Series A", ask: "$25,000,000", valuation: "$125,000,000", asset: "Enterprise compliance automation leader competing directly with Tier-1 RegTech giants.", metric: "$20M+ ARR." },
    ]
  },
];

export function getCapitalProfile(slug: string) { return capitalProfiles.find((profile) => profile.slug === slug); }
