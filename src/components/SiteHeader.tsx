import Link from "next/link";
import { OrpheionMark } from "@/components/OrpheionMark";

export function SiteHeader() {
  return <header className="risk-header"><nav className="risk-wrap risk-nav" aria-label="Primary">
    <Link href="/" className="risk-brand" aria-label="Orpheion home"><OrpheionMark decorative className="h-9 w-9"/><span className="risk-brand-name">Orpheion<span className="risk-brand-service">Practical AI consulting</span></span></Link>
    <div className="risk-nav-links"><Link href="/sample">See the work</Link><Link href="/#pilot">Scope &amp; price</Link><Link href="/#meet-sam">Meet Sam</Link></div>
  </nav></header>;
}
