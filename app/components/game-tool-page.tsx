import type { Metadata } from "next";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { GameToolCalculator } from "./game-tool-calculator";
import { gameConfigs, toolDefinitions } from "../lib/game-tools/config";
import type { GameId, ToolId } from "../lib/game-tools/types";

export function gameToolMetadata(gameId: GameId, toolId: ToolId): Metadata { const game = gameConfigs[gameId]; const tool = toolDefinitions[toolId]; return { title: `${game.name} ${tool.title}`, description: `${tool.description} Built for ${game.name}.`, alternates: { canonical: `/${gameId}/${toolId}` } }; }

export function GameToolPage({ gameId, toolId }: { gameId: GameId; toolId: ToolId }) { const game = gameConfigs[gameId]; const tool = toolDefinitions[toolId]; return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap"><Breadcrumbs items={[{ label: game.name, href: `/${gameId}` }, { label: tool.title }]} /><div className="eyebrow">{game.name} / game tool</div><h1 className="page-title">{tool.title}</h1><p className="page-intro">{tool.description}</p><GameToolCalculator game={game} toolId={toolId} /><article className="article"><h2>About this calculator</h2><p>{game.name} uses its own game settings where applicable. Shared formulas are only used when the underlying units are compatible, and game-specific constants stay in the configuration layer.</p></article></div></main><SiteFooter /></div>; }