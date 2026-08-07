import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Joseph Jilovec — Venture Studio", template: "%s — Joseph Jilovec" },
  description: site.description,
  applicationName: site.studioName,
  authors: [{ name: "Joseph Jilovec", url: site.url }],
  creator: "Joseph Jilovec",
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Joseph Jilovec — Venture Studio",
    description: site.description,
    siteName: site.studioName,
  },
  twitter: { card: "summary_large_image", title: "Joseph Jilovec — Venture Studio", description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joseph Jilovec",
    url: site.url,
    homeLocation: { "@type": "Place", name: site.location },
    sameAs: [site.github, site.medium],
    knowsAbout: ["venture development", "behavioral design", "robotics", "AI systems", "music production"]
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
