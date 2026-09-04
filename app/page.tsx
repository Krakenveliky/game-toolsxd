import Link from "next/link";
import { AdSlot } from "./components/ad-slot";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { ToolCard } from "./components/tool-card";
import { ToolSearch } from "./components/tool-search";
import { categories, minecraftTools } from "./data/tools";

export default function Home() {
  return <div className="site-shell"><SiteHeader /><main><div className="content-wrap"><AdSlot className="top-ad" /><section className="hero"><div className="eyebrow">Tools for the way you play</div><h1>Less guessing.<br /><span>More playing.</span></h1><p className="hero-copy">Free tools and calculators for gamers. Make the plan, check the numbers, and get back in the game.</p><ToolSearch /></section></div><section className="section" id="tools"><div className="content-wrap"><div className="section-heading"><div><div className="eyebrow">Start here</div><h2>Popular tools</h2></div><Link className="text-link" href="/minecraft">View all tools →</Link></div><div className="tool-grid">{minecraftTools.slice(0, 3).map((tool) => <ToolCard key={tool.href} tool={tool} />)}</div></div></section><section className="section"><div className="content-wrap"><div className="section-heading"><div><div className="eyebrow">Pick your world</div><h2>Games & categories</h2></div></div><div className="category-grid">{categories.map((category) => <Link className="category-card" href={category.href} key={category.title}><span className="tag">{category.tag}</span><h3>{category.title}</h3><p>{category.description}</p></Link>)}</div></div></section></main><SiteFooter /></div>;
}
