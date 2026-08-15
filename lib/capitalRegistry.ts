import { capitalProfiles as baseCapitalProfiles, type CapitalProfile } from "@/lib/capital";

export const jentlemensCapitalProfile: CapitalProfile = {
  slug: "jentlemens",
  name: "Jentlemens",
  industry: "Commerce / Premium Menswear, Made-to-Order Tailoring & Omnichannel Retail",
  benchmark:
    "Made-to-measure menswear is best scaled after fit, repeat purchase, supplier execution, and unit economics are proven. INDOCHINO reported more than 50% revenue growth for a second consecutive year, full-year EBITDA profitability, and expansion from 10 to 20 showrooms in 2017 before announcing further strategic investment and North American expansion. Public specialty-menswear operators also demonstrate that apparel economics depend heavily on merchandise margin, inventory discipline, e-commerce execution, and productive physical locations; Tailored Brands reported a 46.8% gross margin in fiscal 2024 and continued e-commerce growth in fiscal 2025. Jentlemens is therefore modeled to begin with a capital-light made-to-order and direct-to-consumer system before funding a larger showroom network and owned inventory position.",
  stages: [
    {
      label: "Institutional Seed Round",
      ask: "$1,500,000",
      valuation: "$7,500,000",
      justification:
        "Funds final Athletic Fit block development and grading, made-to-order supplier deposits, fabric and trim commitments, proprietary product photography, fit and measurement validation, e-commerce and CRM completion, customer acquisition testing, working capital, and one appointment-based showroom / fitting studio. The first round is intentionally structured to avoid tying excessive capital up in broad ready-to-wear inventory before the fit model and customer demand are proven.",
      asset:
        "Validated Athletic Fit pattern library; made-to-order tailoring and shirting supplier agreements; initial footwear/accessory sampling; 1,500-2,500 sq ft appointment showroom and fitting studio; measurement/CRM workflow; launch inventory limited primarily to samples, core accessories, and fast-moving size runs.",
      metric:
        "$1.8M-$2.5M annualized net revenue, 50%+ blended gross margin target, 1,500+ paying customers, measurable repeat purchase, and fit/remake economics that support scaling without excessive returns or alteration losses."
    },
    {
      label: "Venture Expansion Round",
      ask: "$5,000,000",
      valuation: "$25,000,000",
      justification:
        "Expansion capital is deployed only after the core fit proposition and supplier economics are validated. It adds regional customer-acquisition capacity, deeper working capital, limited owned inventory in proven categories, stronger footwear and leather-goods programs, and a small network of appointment showrooms rather than a conventional high-fixed-cost retail rollout.",
      asset:
        "3-5 appointment showrooms in priority U.S. markets; expanded tailoring, shirting, knitwear, trouser, footwear, and leather-goods supplier network; centralized quality-control and returns/remake operation; upgraded order-management, clienteling, merchandising, and demand-planning systems.",
      metric:
        "$8M-$12M annual net revenue, 52%+ blended gross margin target, 30%+ repeat-customer contribution, positive contribution margin by mature acquisition cohort, and at least two showroom markets demonstrating attractive four-wall economics."
    },
    {
      label: "Portfolio Series A",
      ask: "$15,000,000",
      valuation: "$75,000,000",
      justification:
        "Series A assumes Jentlemens has already demonstrated repeatable demand, fit reliability, disciplined customer acquisition, supplier redundancy, and positive showroom economics. Capital then supports selective omnichannel expansion, a broader permanent wardrobe system, and operating infrastructure capable of supporting national scale without abandoning the made-to-order and controlled-assortment model.",
      asset:
        "10-15 appointment-led flagship and showroom locations, national fulfillment and alterations network, deeper permanent-core inventory, long-term manufacturing capacity agreements, expanded footwear/accessories platform, and integrated merchandising, clienteling, demand-planning, and customer-data infrastructure.",
      metric:
        "$30M-$40M annual net revenue, sustained 52%-55% gross margin target, positive EBITDA after expansion costs normalize, strong repeat purchasing across wardrobe categories, and a demonstrated path to a nationally recognized premium menswear platform."
    }
  ]
};

export const capitalProfiles: CapitalProfile[] = [...baseCapitalProfiles, jentlemensCapitalProfile];

export function getCapitalProfile(slug: string) {
  return capitalProfiles.find((profile) => profile.slug === slug);
}
