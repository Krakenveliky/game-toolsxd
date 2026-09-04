export function totalExperienceForLevel(level: number): number {
  if (level <= 16) return level * level + 6 * level;
  if (level <= 31) return Math.floor(2.5 * level * level - 40.5 * level + 360);
  return Math.floor(4.5 * level * level - 162.5 * level + 2220);
}

export function experienceBetweenLevels(currentLevel: number, targetLevel: number): number {
  return totalExperienceForLevel(targetLevel) - totalExperienceForLevel(currentLevel);
}