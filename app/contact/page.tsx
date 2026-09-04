import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";
export const metadata: Metadata = { title: "Contact GameTools", description: "Contact the GameTools team with questions or suggestions." };
export default function ContactPage() { return <InfoPage eyebrow="Contact" title="Have a tool idea?"><p>We&apos;d like to hear it. For questions, corrections, or suggestions, email <a className="text-link" href="mailto:hello@gametools.example">hello@gametools.example</a>.</p></InfoPage>; }