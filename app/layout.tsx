import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./venture-universe-overrides.css";
import "./venture-studio-theme.css";
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
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#founder`,
        name: "Joseph Jilovec",
        url: site.url,
        homeLocation: { "@type": "Place", name: site.location },
        sameAs: [site.linkedin, site.medium],
        knowsAbout: ["venture design", "portfolio strategy", "product architecture", "behavioral design", "operator partnerships"]
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#studio`,
        name: site.studioName,
        url: site.url,
        description: site.description,
        founder: { "@id": `${site.url}/#founder` }
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.studioName,
        url: site.url,
        publisher: { "@id": `${site.url}/#studio` }
      }
    ]
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
