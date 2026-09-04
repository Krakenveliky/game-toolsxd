import Link from "next/link";
import type { Tool } from "./tool-card";

export function ToolFaq({ items }: { items: Array<{ question: string; answer: string }> }) {
  return <section className="faq-section"><h2>Frequently asked questions</h2>{items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>;
}

export function RelatedTools({ tools }: { tools: Tool[] }) {
  return <section className="related-section"><h2>Related tools</h2><div className="related-links">{tools.map((tool) => <Link key={tool.href} href={tool.href}>{tool.title}<span aria-hidden="true">→</span></Link>)}</div></section>;
}

export function ToolExample({ children }: { children: React.ReactNode }) {
  return <section className="example-section"><h2>Example</h2><div className="example-box">{children}</div></section>;
}