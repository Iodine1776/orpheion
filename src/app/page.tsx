import Image from "next/image";
import Link from "next/link";
import { OrpheionMark } from "@/components/OrpheionMark";
import { SiteFooter } from "@/components/SiteFooter";

const inquiry = "mailto:hello@orpheion.com?subject=AI%20Risk%20Desk%20pilot&body=Hi%20Sam%2C%0A%0AI%27m%20interested%20in%20the%20%241%2C500%20AI%20Risk%20Desk%20pilot.%0AAgency%3A%0AMy%20role%3A%0ATeam%20size%3A%0AOne%20AI%20question%20we%27re%20working%20through%3A%0A";
const included = [
  ["Your agency", "A clearer picture of your own AI use.", "An inventory of up to ten tools and ten workflows, an approved-use register draft and three priority control recommendations. Each action has an owner and evidence needed to close it."],
  ["Your clients", "Five useful client conversations.", "Five agency-branded AI Exposure Snapshots, each with a producer brief. Document reported AI use, unresolved questions and practical next steps before a renewal or risk review."],
  ["Your follow-through", "Keep the open questions moving.", "Two scheduled monitoring reviews, a brief producer training session and a closeout discussion. Record what changed, what still needs a decision and whether the service earned its place."]
];

export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="risk-header"><nav className="risk-wrap risk-nav" aria-label="Primary">
      <Link href="/" className="risk-brand"><OrpheionMark decorative className="h-9 w-9" /><span>Orpheion</span></Link>
      <div className="risk-nav-links"><a href="#sample">The sample</a><a href="#pilot">The pilot</a><a href={inquiry}>Get in touch</a></div>
    </nav></header>
    <main id="main">
      <section className="risk-hero">
        <div className="risk-wrap risk-hero-grid">
          <div><p className="risk-eyebrow">AI Risk Desk / Independent commercial agencies</p>
            <h1>Make AI part of a better client conversation.</h1>
            <p className="risk-lead">Give your producers a practical way to discuss clients’ AI use—while bringing more structure to your agency’s own.</p>
            <div className="risk-actions"><a className="risk-button" href={inquiry}>Discuss the $1,500 pilot</a><a className="risk-text-link" href="/Orpheion-AI-Risk-Desk-sample.pdf">Read the sample PDF</a></div>
            <p className="risk-caption">60 days · Five client reviews · No automatic renewal</p>
          </div>
          <div className="risk-hero-art"><Image src="/orpheion-hero.jpg" alt="Sunlit stone amphitheater" fill priority sizes="(max-width: 800px) 100vw, 42vw" className="object-cover" /><div className="risk-art-caption">A clear record.<br />A useful next step.</div></div>
        </div>
      </section>
      <section className="risk-section risk-wrap" aria-labelledby="service-title"><p className="risk-eyebrow">One service, two places it matters</p><h2 id="service-title">Inside your agency.<br />Across your commercial book.</h2><div className="risk-three">{included.map(([label,title,body],i)=><article key={label}><p className="risk-index">0{i+1} / {label}</p><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section id="sample" className="risk-sample"><div className="risk-wrap risk-two"><div><p className="risk-eyebrow">See the work before you decide</p><h2>A short report.<br />A specific decision.</h2><p className="risk-lead-small">The sample follows a fictional agency and accounting client from reported AI use to an action plan and producer conversation brief.</p><p>It separates what the client reports, what has not been verified and what needs a human decision. It does not assign a made-up risk score or promise insurance coverage.</p><a className="risk-text-link" href="/Orpheion-AI-Risk-Desk-sample.pdf">Open the six-page sample PDF</a></div><div className="risk-document"><p className="risk-eyebrow">Illustrative client snapshot</p><h3>Henderson Accounting LLC</h3><p className="risk-caption">Fictional example / Not a completed assessment</p><dl><dt>Reported use</dt><dd>An employee has entered client excerpts into a personal AI tool.</dd><dt>Question to resolve</dt><dd>What information was entered, and under which account settings?</dd><dt>Proposed next step</dt><dd>Pause confidential uploads while the tool and permitted uses are reviewed.</dd><dt>Producer discussion</dt><dd>Review the actual policies and the client’s reported activities with a licensed adviser.</dd></dl></div></div></section>
      <section id="pilot" className="risk-section risk-wrap"><div className="risk-two"><div><p className="risk-eyebrow">The founding pilot</p><h2>Five clients.<br />Sixty days.<br /><span className="risk-price">$1,500 total.</span></h2><p className="risk-lead-small">For one agency team of up to 25 people. Agree on fit, scope and a start date before paying.</p><a className="risk-button" href={inquiry}>Ask about the pilot</a></div><div className="risk-offer"><h3>What is included</h3><ul><li>Agency inventory and action brief: up to ten tools and ten workflows.</li><li>Five two-page client snapshots, each covering up to five AI use cases, with producer briefs.</li><li>Two scheduled monitoring reviews and one correction round per deliverable.</li><li>A 45-minute kickoff, 30-minute producer training and 30-minute closeout.</li></ul><div className="risk-continuation"><h3>Continue only if it is useful.</h3><p>Optional $750/month continuation: a maintained scoped register, monthly monitoring brief, two new or refreshed snapshots a month, quarterly control refresh and a 30-minute monthly review. Month-to-month; unused snapshots do not roll over.</p></div></div></div></section>
      <section className="risk-process"><div className="risk-wrap risk-section"><p className="risk-eyebrow">How it works</p><h2>Start with a real question.</h2><ol className="risk-three"><li><h3>01 / Confirm fit</h3><p>Identify a current AI use or client question. Nominate an operations owner, a licensed producer reviewer and five suitable clients.</p></li><li><h3>02 / Review and use</h3><p>We prepare the agency brief and client materials from authorized inputs. Your team confirms facts and approves client-facing content.</p></li><li><h3>03 / Decide what comes next</h3><p>Track whether the reports were used, what questions they resolved and the effort involved. Decide whether to continue at day 60.</p></li></ol></div></section>
      <section className="risk-section risk-wrap risk-faq"><p className="risk-eyebrow">Before you start</p><h2>A clear scope from day one.</h2>
        <details><summary>Does this replace our licensed producer or legal adviser?</summary><p>No. Orpheion organizes reported AI uses, evidence gaps and proposed controls. Your licensed producer owns insurance advice and reviews client-facing materials. Legal opinions, coverage determinations, software implementation and incident response are outside scope.</p></details>
        <details><summary>What does our agency need to provide?</summary><p>An authorized sponsor, an operations owner, a licensed producer reviewer and five commercial clients, with at least three having a renewal or planned risk review within 90 days. We agree on a secure transfer method before receiving confidential material. Please do not include client records in your initial email.</p></details>
        <details><summary>Will this mean lots of meetings?</summary><p>Most work and updates happen in writing. The pilot includes a short kickoff, producer training and closeout; written alternatives can be agreed before starting.</p></details>
        <details><summary>How do payment and cancellation work?</summary><p>The pilot costs $1,500 upfront after scope and delivery readiness are agreed. There is no automatic renewal. If we cannot start by the agreed date, you may request a refund before work starts. If core deliverables are missing at day 60, notify us; after a ten-business-day opportunity to complete them, you may request a pilot-fee refund. Agreed input delays and scope changes are recorded in writing. See the service terms.</p></details>
      </section>
      <section className="risk-close"><div className="risk-wrap"><p className="risk-eyebrow">Orpheion / AI Risk Desk</p><h2>Bring one question.<br />We’ll start there.</h2><p>Tell us your agency, your role and one AI issue you want to work through.</p><a className="risk-button risk-button-light" href={inquiry}>Email Sam about the pilot</a><p className="risk-caption">hello@orpheion.com · Please leave confidential client information out of this first email.</p></div></section>
    </main><SiteFooter />
  </>;
}
