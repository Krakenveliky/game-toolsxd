import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function NotFound() { return <div className="site-shell"><SiteHeader /><main className="page-main"><div className="content-wrap not-found"><div className="eyebrow">404 / Not found</div><h1 className="page-title">That page is out of bounds.</h1><p className="page-intro">The page you requested does not exist or has moved. Head back to the tools and keep going.</p><Link className="primary-button" style={{ display: "inline-block" }} href="/">Return home</Link></div></main><SiteFooter /></div>; }