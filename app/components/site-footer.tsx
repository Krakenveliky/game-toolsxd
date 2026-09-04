import Link from "next/link";

export function SiteFooter() {
  return <footer className="footer"><div className="content-wrap footer-inner"><p className="footer-note">GameTools · Free tools and calculators for gamers.</p><nav className="footer-links" aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link></nav><p className="footer-copyright">© {new Date().getFullYear()} GameTools</p></div></footer>;
}