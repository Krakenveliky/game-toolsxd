import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "GameTools | Free tools and calculators for gamers", template: "%s | GameTools" },
  description: "Free tools and calculators for gamers. Fast, focused, and built for play.",
  openGraph: { title: "GameTools | Free tools and calculators for gamers", description: "Fast, focused tools and calculators for gamers.", type: "website", siteName: "GameTools" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
