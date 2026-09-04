import Link from "next/link";

export type Tool = { title: string; description: string; href: string; icon: string; status?: string };

export function ToolCard({ tool }: { tool: Tool }) {
  return <Link className="tool-card" href={tool.href}><span className="tool-icon" aria-hidden="true">{tool.icon}</span><span className="tag">{tool.status ?? "Minecraft tool"}</span><h3>{tool.title}</h3><p>{tool.description}</p></Link>;
}