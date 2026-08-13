import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Orpheion",
  description:
    "Privacy Policy for Orpheion — how we handle contact, email, and site data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="August 13, 2026">
      <section>
        <h2>1. Overview</h2>
        <p>
          Orpheion (“Orpheion,” “we,” “us”) is operated by Sam Bolton, doing
          business as Orpheion / Orpheion LLC (entity filing pending in
          Tennessee). This policy describes how we handle personal information
          when you visit orpheion.com, email us, or engage our services. Contact:{" "}
          <a href="mailto:hello@orpheion.com">hello@orpheion.com</a>.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Contact and inquiry data</strong> — name, email address,
            company, and message content when you email{" "}
            <a href="mailto:hello@orpheion.com">hello@orpheion.com</a> or
            otherwise contact us.
          </li>
          <li>
            <strong>Client project data</strong> — materials you provide for
            delivery (designs, assets, copy, access credentials you share,
            board/Loom communications). We use these only to perform the
            engagement.
          </li>
          <li>
            <strong>Technical / hosting data</strong> — standard server and CDN
            logs (e.g. IP address, browser type, request timestamps) may be
            processed by our hosting and edge providers.
          </li>
          <li>
            <strong>Analytics</strong> — if we enable site analytics in the
            future, we may collect aggregated usage metrics (pages viewed,
            approximate location, device type). If analytics are added, this
            policy will be updated to name the provider.
          </li>
        </ul>
        <p>
          We do not sell personal information. We do not intentionally collect
          sensitive categories of data beyond what you choose to send us.
        </p>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <ul>
          <li>Respond to inquiries and provide the Orpheion service</li>
          <li>Operate, secure, and improve the website</li>
          <li>Send service-related messages (billing, delivery, schedule)</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>4. Processors and infrastructure</h2>
        <p>
          We rely on third-party processors that may handle data on our behalf,
          including:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — website hosting and previews
          </li>
          <li>
            <strong>Cloudflare</strong> — DNS / CDN / security edge (when
            configured for the domain)
          </li>
          <li>
            <strong>Google Workspace</strong> — email (
            hello@orpheion.com) and related productivity tools
          </li>
          <li>
            Project tools you or we use for delivery (e.g. board, Loom, Figma,
            Git hosting) under their own privacy terms
          </li>
        </ul>
        <p>
          Those providers process data under their contracts and policies. We
          choose commonly used US/EU-oriented vendors; transfers may occur as
          those vendors operate globally.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          The marketing site is primarily static content. Essential cookies or
          similar technologies may be set by our hosting/CDN stack for security
          and performance. We do not currently run advertising pixels. If we add
          analytics or other non-essential cookies, we will update this policy
          and, where required, provide notice or controls.
        </p>
      </section>

      <section>
        <h2>6. Retention</h2>
        <p>
          Inquiry emails and client project records are kept as long as needed
          for the relationship, legitimate business records, and legal
          requirements, then deleted or archived in the ordinary course. You may
          ask us to delete personal data we hold, subject to legal retention
          needs.
        </p>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>
          We use reasonable administrative and technical measures appropriate to
          a small studio (access-limited accounts, reputable vendors). No method
          of transmission or storage is 100% secure.
        </p>
      </section>

      <section>
        <h2>8. Children</h2>
        <p>
          The site and services are directed at businesses, not children under
          13 (or under 16 where applicable). We do not knowingly collect
          children’s personal information.
        </p>
      </section>

      <section>
        <h2>9. Your choices</h2>
        <p>
          Email us to request access, correction, or deletion of personal
          information we hold about you, or to opt out of non-essential
          marketing (we generally do not run marketing lists beyond direct
          replies). Depending on your location, additional privacy rights may
          apply; we will honor applicable requests to the extent required by law.
        </p>
      </section>

      <section>
        <h2>10. Changes</h2>
        <p>
          We may update this policy by posting a revised version on this page
          with a new “Last updated” date.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href="mailto:hello@orpheion.com">hello@orpheion.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
