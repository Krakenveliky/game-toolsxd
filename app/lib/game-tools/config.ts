import type { GameConfig, GameId, ToolDefinition, ToolId } from "./types";

export const gameConfigs: Record<GameId, GameConfig> = {
  valorant: {
    id: "valorant",
    name: "VALORANT",
    description: "Mouse settings and performance tools for VALORANT.",
    yawDegreesPerCount: 0.07,
  },
  cs2: {
    id: "cs2",
    name: "Counter-Strike 2",
    description: "Mouse settings and performance tools for Counter-Strike 2.",
    yawDegreesPerCount: 0.022,
  },
  fortnite: {
    id: "fortnite",
    name: "Fortnite",
    description: "A home for Fortnite tools. Game-specific calculators will be added as they are verified.",
  },
};

export const toolDefinitions: Record<ToolId, ToolDefinition> = {
  "sensitivity-converter": { id: "sensitivity-converter", title: "Sensitivity Converter", description: "Convert sensitivity between games with verified look constants.", supportedGames: ["valorant", "cs2"] },
  "edpi-calculator": { id: "edpi-calculator", title: "eDPI Calculator", description: "Calculate effective DPI from your mouse DPI and in-game sensitivity.", supportedGames: ["valorant", "cs2"] },
  "cm-360-calculator": { id: "cm-360-calculator", title: "cm/360 Calculator", description: "Measure the physical distance needed for a full 360-degree turn.", supportedGames: ["valorant", "cs2"] },
  "dpi-calculator": { id: "dpi-calculator", title: "DPI Calculator", description: "Find the DPI needed for a target cm/360 distance.", supportedGames: ["valorant", "cs2"] },
  "resolution-calculator": { id: "resolution-calculator", title: "Resolution Calculator", description: "Scale a resolution while preserving its aspect ratio.", supportedGames: ["valorant", "cs2", "fortnite"] },
  "aspect-ratio-calculator": { id: "aspect-ratio-calculator", title: "Aspect Ratio Calculator", description: "Reduce a resolution to its simplest aspect ratio.", supportedGames: ["valorant", "cs2", "fortnite"] },
  "download-time-calculator": { id: "download-time-calculator", title: "Game Download Time Calculator", description: "Estimate download time from file size and connection speed.", supportedGames: ["valorant", "cs2", "fortnite"] },
  "fps-calculator": { id: "fps-calculator", title: "FPS / Performance Calculator", description: "Estimate frame time and frame rate from a measured render time.", supportedGames: ["valorant", "cs2", "fortnite"] },
};

export const initialGameToolIds: ToolId[] = ["sensitivity-converter", "edpi-calculator", "cm-360-calculator"];