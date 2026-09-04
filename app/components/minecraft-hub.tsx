"use client";

import { useState } from "react";
import { ToolCard } from "./tool-card";
import { minecraftTools } from "../data/tools";

const categories = ["All", ...Array.from(new Set(minecraftTools.map((tool) => tool.category)))];

export function MinecraftHub() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const filtered = minecraftTools.filter((tool) => (category === "All" || tool.category === category) && `${tool.title} ${tool.description}`.toLowerCase().includes(query.toLowerCase()));
  return <><section className="hub-controls" aria-label="Filter Minecraft tools"><label className="filter-search"><span className="sr-only">Search Minecraft tools</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Minecraft tools" /></label><div className="filter-tabs" role="group" aria-label="Tool categories">{categories.map((item) => <button className={category === item ? "active" : ""} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></section><div className="tool-grid">{filtered.length ? filtered.map((tool) => <ToolCard key={tool.href} tool={tool} />) : <p className="muted">No tools match that search.</p>}</div></>;
}