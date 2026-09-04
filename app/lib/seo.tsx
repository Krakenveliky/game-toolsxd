import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function minecraftMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const url = `${siteUrl}${path}`;
  return { title, description, alternates: { canonical: path }, openGraph: { title: `${title} | GameTools`, description, url, type: "website", siteName: "GameTools" }, robots: { index: true, follow: true } };
}

export function MinecraftStructuredData({ path, name, description, breadcrumbs, application = true }: { path: string; name: string; description: string; breadcrumbs: string[]; application?: boolean }) {
  const url = `${siteUrl}${path}`;
  const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((label, index) => ({ "@type": "ListItem", position: index + 1, name: label, item: index === 0 ? siteUrl : `${siteUrl}${index === 1 ? "/minecraft" : path}` })) };
  const applicationData = { "@context": "https://schema.org", "@type": "WebApplication", name, description, url, applicationCategory: "GameApplication", operatingSystem: "Web", isPartOf: { "@type": "WebSite", name: "GameTools", url: siteUrl } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />{application && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationData) }} />}</>;
}