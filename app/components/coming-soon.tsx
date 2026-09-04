import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function ComingSoon({ title }: { title: string }) { return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap legal"><div className="eyebrow">Minecraft tool</div><h1 className="page-title">{title}</h1><p className="page-intro">This calculator is being shaped into something useful. It&apos;ll be here when it&apos;s ready.</p><Link className="primary-button" style={{ display: "inline-block" }} href="/minecraft">Back to Minecraft tools</Link></div></main><SiteFooter /></div>; }