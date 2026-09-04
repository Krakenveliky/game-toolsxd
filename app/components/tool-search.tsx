"use client";

import Link from "next/link";
import { useState } from "react";
import { minecraftTools } from "../data/tools";

export function Search({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const results = query.trim() ? minecraftTools.filter((tool) => `${tool.title} ${tool.description}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4) : [];
  return <div className={`search ${compact ? "search-compact" : ""}`}><label className="sr-only" htmlFor={compact ? "header-tool-search" : "tool-search"}>Find a tool</label><input id={compact ? "header-tool-search" : "tool-search"} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={compact ? "Search" : "Search tools, games, or calculators"} /><span className="search-icon" aria-hidden="true">/</span>{query && <div className="search-results">{results.length ? results.map((tool) => <Link key={tool.href} href={tool.href} onClick={() => { setQuery(""); onNavigate?.(); }}><span>{tool.title}</span><small>{tool.status ?? "Minecraft"}</small></Link>) : <span className="muted" style={{ display: "block", padding: "14px 16px", fontSize: 13 }}>No tools found yet.</span>}</div>}</div>;
}

export const ToolSearch = Search;