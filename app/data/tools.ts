import type { Tool } from "../components/tool-card";

export const minecraftTools: (Tool & { category: string })[] = [
  { title: "XP Calculator", description: "Find the experience needed to reach your target level.", href: "/minecraft/xp-calculator", icon: "01", category: "Progression" },
  { title: "Enchantment Calculator", description: "Estimate anvil XP costs and prior work penalties.", href: "/minecraft/enchantment-calculator", icon: "02", category: "Progression" },
  { title: "Potion Calculator", description: "Plan potion duration and effect strength modifiers.", href: "/minecraft/potion-calculator", icon: "03", category: "Brewing" },
  { title: "Damage Calculator", description: "Estimate damage after armor and toughness reduction.", href: "/minecraft/damage-calculator", icon: "04", category: "Combat" },
  { title: "Nether Portal Calculator", description: "Convert coordinates between the Overworld and Nether.", href: "/minecraft/nether-portal-calculator", icon: "05", category: "Travel" },
  { title: "Coordinate Converter", description: "Convert coordinates between Minecraft dimensions.", href: "/minecraft/coordinate-converter", icon: "06", category: "Travel" },
  { title: "Stack Calculator", description: "Turn item counts into full stacks and remaining items.", href: "/minecraft/stack-calculator", icon: "07", category: "Inventory" },
  { title: "Durability Calculator", description: "See remaining tool durability and percentage.", href: "/minecraft/durability-calculator", icon: "08", category: "Inventory" },
  { title: "Beacon Calculator", description: "Calculate the mineral blocks needed for a beacon pyramid.", href: "/minecraft/beacon-calculator", icon: "09", category: "Building" },
  { title: "Smelting Calculator", description: "Estimate furnace time and fuel items for a batch.", href: "/minecraft/smelting-calculator", icon: "10", category: "Resources" },
  { title: "Brewing Calculator", description: "Plan brewing batches and bottle requirements.", href: "/minecraft/brewing-calculator", icon: "11", category: "Brewing" },
];

export const categories = [
  { title: "Minecraft", description: "XP, enchantments, potions, damage, and more.", href: "/minecraft", tag: "11 tools" },
  { title: "Terraria", description: "Tools for building, exploring, and gearing up.", href: "/minecraft", tag: "Coming soon" },
  { title: "More games", description: "New calculators are on the way.", href: "/minecraft", tag: "In development" },
];