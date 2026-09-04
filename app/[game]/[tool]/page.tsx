import { notFound } from "next/navigation";
import { GameToolPage, gameToolMetadata } from "../../components/game-tool-page";
import { gameConfigs, toolDefinitions } from "../../lib/game-tools/config";
import type { GameId, ToolId } from "../../lib/game-tools/types";

export function generateStaticParams() { return (Object.keys(gameConfigs) as GameId[]).flatMap((game) => ["sensitivity-converter", "edpi-calculator", "cm-360-calculator"].filter((tool) => toolDefinitions[tool as ToolId].supportedGames.includes(game)).map((tool) => ({ game, tool }))); }
export async function generateMetadata({ params }: { params: Promise<{ game: string; tool: string }> }) { const { game, tool } = await params; if (!(game in gameConfigs) || !(tool in toolDefinitions)) return {}; return gameToolMetadata(game as GameId, tool as ToolId); }
export default async function GameToolRoute({ params }: { params: Promise<{ game: string; tool: string }> }) { const { game, tool } = await params; const gameId = game as GameId; const toolId = tool as ToolId; if (!(gameId in gameConfigs) || !(toolId in toolDefinitions) || !toolDefinitions[toolId].supportedGames.includes(gameId)) notFound(); return <GameToolPage gameId={gameId} toolId={toolId} />; }