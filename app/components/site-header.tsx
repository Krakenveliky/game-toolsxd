"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "./search";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="header"><div className="content-wrap header-inner">
    <Link className="brand" href="/" onClick={() => setMenuOpen(false)}><span className="brand-mark">GT</span><span>GameTools</span></Link>
    <nav className="nav desktop-nav" aria-label="Main navigation"><Link href="/">Home</Link><details className="games-menu"><summary>Games <span aria-hidden="true">⌄</span></summary><div className="games-dropdown"><Link href="/minecraft">Minecraft</Link><Link href="/valorant">VALORANT</Link><Link href="/cs2">Counter-Strike 2</Link><Link href="/fortnite">Fortnite</Link></div></details><Link href="/tools">Tools</Link><Search compact /></nav>
    <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
  </div>{menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/games" onClick={() => setMenuOpen(false)}>Games</Link><Link href="/minecraft" onClick={() => setMenuOpen(false)}>Minecraft</Link><Link href="/tools" onClick={() => setMenuOpen(false)}>Tools</Link><Search onNavigate={() => setMenuOpen(false)} /></nav>}</header>;
}