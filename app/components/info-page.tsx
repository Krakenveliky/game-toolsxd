import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function InfoPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap legal"><div className="eyebrow">{eyebrow}</div><h1 className="page-title">{title}</h1><article className="article">{children}<p><Link className="text-link" href="/">Return to GameTools →</Link></p></article></div></main><SiteFooter /></div>; }