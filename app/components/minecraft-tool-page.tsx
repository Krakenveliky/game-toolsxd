import { AdSlot } from "./ad-slot";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { RelatedTools, ToolExample, ToolFaq } from "./minecraft-content";
import type { Tool } from "./tool-card";
import { MinecraftStructuredData } from "../lib/seo";

export function MinecraftToolPage({ path, title, description, children, article, example, faqs, related }: { path?: string; title: string; description: string; children: React.ReactNode; article: React.ReactNode; example: React.ReactNode; faqs: Array<{ question: string; answer: string }>; related: Tool[] }) {
  const toolPath = path ?? `/minecraft/${title.toLowerCase().replaceAll(" ", "-")}`;
  return <div className="site-shell"><MinecraftStructuredData path={toolPath} name={title} description={description} breadcrumbs={["Home", "Minecraft", title]} /><SiteHeader /><main className="page-main"><div className="content-wrap"><Breadcrumbs items={[{ label: "Minecraft", href: "/minecraft" }, { label: title }]} /><div className="tool-layout"><div><div className="eyebrow">Minecraft calculator</div><h1 className="page-title">{title}</h1><p className="page-intro">{description}</p>{children}<AdSlot className="top-ad" /><article className="article">{article}<ToolExample>{example}</ToolExample><ToolFaq items={faqs} /><RelatedTools tools={related} /></article></div><aside className="sidebar-ad"><AdSlot /></aside></div></div></main><SiteFooter /></div>;
}