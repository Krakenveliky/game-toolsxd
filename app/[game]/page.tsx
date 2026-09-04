import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { gameConfigs, initialGameToolIds, toolDefinitions } from "../lib/game-tools/config";
import type { GameId } from "../lib/game-tools/types";

export function generateStaticParams() { return (Object.keys(gameConfigs) as GameId[]).map((game) => ({ game })); }
export function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> { return params.then(({ game }) => { const config = gameConfigs[game as GameId]; return config ? { title: `${config.name} Tools`, description: config.description } : {}; }); }
export default async function GamePage({ params }: { params: Promise<{ game: string }> }) { const { game: gameParam } = await params; const game = gameConfigs[gameParam as GameId]; if (!game) return null; return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap"><Breadcrumbs items={[{ label: game.name }]} /><div className="hub-hero"><div className="eyebrow">Game tools / {game.name}</div><h1 className="page-title">{game.name} tools.</h1><p className="page-intro">{game.description}</p></div><section className="section hub-section"><div className="section-heading"><div><div className="eyebrow">Available now</div><h2>Tools for {game.name}</h2></div></div><div className="tool-grid">{initialGameToolIds.filter((toolId) => toolDefinitions[toolId].supportedGames.includes(game.id)).map((toolId) => { const tool = toolDefinitions[toolId]; return <Link className="tool-card" href={`/${game.id}/${tool.id}`} key={tool.id}><span className="tag">{game.name}</span><h3>{tool.title}</h3><p>{tool.description}</p></Link>; })}</div></section></div></main><SiteFooter /></div>; }