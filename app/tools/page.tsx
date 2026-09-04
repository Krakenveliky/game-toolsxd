import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ToolCard } from "../components/tool-card";
import { minecraftTools } from "../data/tools";

export const metadata: Metadata = { title: "Tools", description: "Browse free gaming calculators and tools from GameTools." };

export default function ToolsPage() { return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap"><div className="eyebrow">Tool library</div><h1 className="page-title">Useful tools, ready when you are.</h1><p className="page-intro">Browse the growing GameTools collection. Every available tool works without an account or a download.</p><section className="section"><div className="tool-grid">{minecraftTools.map((tool) => <ToolCard key={tool.href} tool={tool} />)}</div></section></div></main><SiteFooter /></div>; }