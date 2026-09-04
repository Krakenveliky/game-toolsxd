import type { Metadata } from "next";
import { GameCard } from "../components/game-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = { title: "Games", description: "Browse games with practical calculators and tools from GameTools." };

const games = [
  { title: "Minecraft", description: "XP, enchantments, potions, damage, and portal tools.", href: "/minecraft", status: "Tools available" },
  { title: "VALORANT", description: "Sensitivity, eDPI, and cm/360 tools for aim setup.", href: "/valorant", status: "Tools available" },
  { title: "Counter-Strike 2", description: "Sensitivity, eDPI, and cm/360 tools for aim setup.", href: "/cs2", status: "Tools available" },
  { title: "Fortnite", description: "A home for verified Fortnite calculators and tools.", href: "/fortnite", status: "In development" },
  { title: "Terraria", description: "Tools for building, exploring, and gearing up.", href: "/games", status: "Coming soon" },
];

export default function GamesPage() { return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap"><div className="eyebrow">Game library</div><h1 className="page-title">Choose your game.</h1><p className="page-intro">Focused tools for the games you spend time in. More games will be added as their tools are ready.</p><section className="section"><div className="category-grid">{games.map((game) => <GameCard key={game.title} game={game} />)}</div></section></div></main><SiteFooter /></div>; }