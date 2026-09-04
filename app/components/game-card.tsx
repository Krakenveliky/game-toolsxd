import Link from "next/link";

export type Game = { title: string; description: string; href: string; status?: string };

export function GameCard({ game }: { game: Game }) {
  return <Link className="category-card game-card" href={game.href}><span className="tag">{game.status ?? "Game tools"}</span><h3>{game.title}</h3><p>{game.description}</p></Link>;
}