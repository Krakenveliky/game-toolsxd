export function anvilPriorWorkPenalty(previousUses: number): number {
  return (2 ** previousUses) - 1;
}

export function calculatePotion(baseSeconds: number, modifier: "none" | "redstone" | "glowstone") {
  return { seconds: modifier === "redstone" ? Math.floor(baseSeconds * 8 / 3) : baseSeconds, amplifier: modifier === "glowstone" ? 2 : 1 };
}

export function damageAfterArmor(rawDamage: number, armor: number, toughness: number, critical: boolean): number {
  const criticalDamage = critical ? rawDamage * 1.5 : rawDamage;
  const reduction = Math.min(20, Math.max(armor / 5, armor - criticalDamage / (2 + toughness / 4)));
  return Math.max(0, criticalDamage * (1 - reduction / 25));
}

export function netherCoordinate(coordinate: number, direction: "to-nether" | "to-overworld"): number {
  return direction === "to-nether" ? Math.floor(coordinate / 8) : coordinate * 8;
}

export function stackBreakdown(itemCount: number, stackSize: number) {
  return { stacks: Math.floor(itemCount / stackSize), remainder: itemCount % stackSize, slots: Math.ceil(itemCount / stackSize) };
}

export function durabilityDetails(maxDurability: number, remainingDurability: number) {
  return { remaining: Math.min(maxDurability, Math.max(0, remainingDurability)), percentage: maxDurability > 0 ? Math.max(0, Math.min(100, remainingDurability / maxDurability * 100)) : 0 };
}

export function beaconBlocks(layers: number): number {
  return [0, 9, 25, 49, 81].slice(0, layers + 1).reduce((total, blocks) => total + blocks, 0);
}

export function smeltingDetails(itemCount: number, secondsPerItem: number, fuelSeconds: number) {
  const totalSeconds = itemCount * secondsPerItem;
  return { totalSeconds, fuelItems: Math.ceil(totalSeconds / fuelSeconds) };
}

export function brewingDetails(potionCount: number) {
  return { batches: Math.ceil(potionCount / 3), bottles: potionCount };
}