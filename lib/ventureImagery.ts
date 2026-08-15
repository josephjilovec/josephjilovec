export type VentureImage = {
  src: string;
  alt: string;
  position: string;
};

// Venture photography is intentionally separate from the accent-color system.
// The existing venture.accent and venture.accentSoft values remain the source of
// truth for hover glow, interface tinting, Project Files, and Capital Files.
export const ventureImagery: Record<string, VentureImage> = {
  "my-healthy-aura": {
    src: "https://images.pexels.com/photos/17640379/pexels-photo-17640379.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Serene modern wellness interior with soft natural light",
    position: "center 48%",
  },
  "swift-deal-solutions": {
    src: "https://images.pexels.com/photos/10410073/pexels-photo-10410073.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Modern glass towers in an urban business district",
    position: "center 50%",
  },
  "dj-hotwax": {
    src: "https://images.pexels.com/photos/5175355/pexels-photo-5175355.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "DJ turntables and mixer in a dark nightlife setting",
    position: "center 52%",
  },
  "vanta-helix": {
    src: "https://images.pexels.com/photos/3912482/pexels-photo-3912482.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Scientist working with precision laboratory equipment",
    position: "center 42%",
  },
  "cannacore-seeds": {
    src: "https://images.pexels.com/photos/17497507/pexels-photo-17497507.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Young seedling emerging from rich soil",
    position: "center 46%",
  },
  snarklogic: {
    src: "https://images.pexels.com/photos/29542363/pexels-photo-29542363.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Modern digital media and editing workspace",
    position: "center 52%",
  },
  "alder-and-meridian": {
    src: "https://images.pexels.com/photos/33827309/pexels-photo-33827309.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Refined modern interior with warm wood detailing",
    position: "center 50%",
  },
  jentlemens: {
    src: "https://images.pexels.com/photos/6764995/pexels-photo-6764995.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Tailor and client reviewing fabric samples in an atelier",
    position: "center 48%",
  },
  "united-american-future": {
    src: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Volunteers working together on a community service effort",
    position: "center 48%",
  },
  "world-forward-foundation": {
    src: "https://images.pexels.com/photos/6994869/pexels-photo-6994869.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Volunteers organizing donated supplies in a warehouse",
    position: "center 46%",
  },
  "givewise-insights": {
    src: "https://images.pexels.com/photos/7869102/pexels-photo-7869102.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Professionals discussing strategy in a modern office",
    position: "center 45%",
  },
  "advibe-central": {
    src: "https://images.pexels.com/photos/34002297/pexels-photo-34002297.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Creative video production and editing studio",
    position: "center 50%",
  },
  "kinetic-aromatics": {
    src: "https://images.pexels.com/photos/6707562/pexels-photo-6707562.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Minimal essential oil bottles arranged for an aromatic ritual",
    position: "center 48%",
  },
  "atlas-assets": {
    src: "https://images.pexels.com/photos/9034729/pexels-photo-9034729.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Professionals reviewing global strategy around a world map",
    position: "center 46%",
  },
  "autocomp-corp": {
    src: "https://images.pexels.com/photos/5483240/pexels-photo-5483240.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Laptop in a modern office displaying a cybersecurity interface",
    position: "center 50%",
  },
  "ferrix-corp": {
    src: "https://images.pexels.com/photos/7739856/pexels-photo-7739856.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "Heavy industrial steel manufacturing environment",
    position: "center 48%",
  },
};

export function getVentureImage(slug: string): VentureImage | undefined {
  return ventureImagery[slug];
}
