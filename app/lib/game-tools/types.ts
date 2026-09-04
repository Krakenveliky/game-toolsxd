export type GameId = "valorant" | "cs2" | "fortnite";

export type GameConfig = {
  id: GameId;
  name: string;
  description: string;
  yawDegreesPerCount?: number;
};

export type ToolId =
  | "sensitivity-converter"
  | "edpi-calculator"
  | "cm-360-calculator"
  | "dpi-calculator"
  | "resolution-calculator"
  | "aspect-ratio-calculator"
  | "download-time-calculator"
  | "fps-calculator";

export type ToolDefinition = {
  id: ToolId;
  title: string;
  description: string;
  supportedGames: GameId[];
};