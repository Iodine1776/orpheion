import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — Orpheion",
  description:
    "Terms of Service for Orpheion’s async design-to-production subscription and Kickoff Sprint.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="August 13, 2026">
      <section>
        <h2>1. Who we are</h2>
        <p>
          Orpheion (“Orpheion,” “we,” “us”) is operated by Sam Bolton, doing
          business as Orpheion / Orpheion LLC (entity filing pending in
          Tennessee). Contact:{" "}
          <a href="mailto:hello@orpheion.com">hello@orpheion.com</a>.
        </p>
      </section>

      <section>
        <h2>2. The service</h2>
        <p>
          Orpheion provides async design-to-production for agencies and similar
          clients: locked design (typically Figma) implemented as production
          frontend (typically Next.js, Tailwind, and Vercel), communicated via a
          shared board and Loom. By default there are no live video calls (no Zoom
          / Meet discovery or status meetings unless we expressly agree
          otherwise).
        </p>
        <p>
          Offers may include a monthly production queue (one active request at a
          time, pause/cancel as described at signup) and/or a fixed Kickoff Sprint
          for a scoped stand-up. Scope, turnaround norms, inclusions, and
          exclusions are further described in our Client Expectations materials
          shared at engagement; those materials form part of the agreement where
          referenced.
        </p>
      </section>

      <section>
        <h2>3. Scope lock and one active request</h2>
        <p>
          Work begins from a complete request packet (locked design, brief,
          assets, copy, access, integrations, and one decision-maker). Incomplete
          packets are not “active.” Design is locked when a request becomes
          active; material redesign mid-flight may restart the request or require
          a new request / change order. Large builds are sequenced as multiple
          requests. You may maintain a backlog; only one request is active at a
          time on the standard monthly queue.
        </p>
      </section>

      <section>
        <h2>4. Client responsibilities</h2>
        <p>
          You are responsible for providing accurate materials, lawful content,
          required licenses (fonts, imagery, third-party tools), timely decisions
          (typically within one business day on the board), and any third-party
          accounts needed for delivery. You represent that you have authority to
          engage us for the work described.
        </p>
      </section>

      <section>
        <h2>5. Payment, pause, and cancel</h2>
        <p>
          Fees are as quoted at signup or on the invoice (typical ranges appear
          on orpheion.com and may change for new clients). Monthly queue fees are
          generally billed in advance. Pause and cancel terms follow what we
          confirm in writing at engagement (commonly pause/cancel anytime for the
          monthly queue, with timing relative to the then-current billing period).
          Kickoff Sprints are fixed-fee as quoted. Unpaid invoices may pause
          delivery. Taxes may apply where required.
        </p>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>
          Upon full payment for a deliverable, you own the custom frontend code
          and related production assets we create specifically for that
          deliverable, excluding our pre-existing tools, templates, know-how,
          and third-party open-source or licensed components (which remain subject
          to their own licenses). You retain ownership of your designs, brand
          assets, and content. We may show anonymized or credited work in our
          portfolio unless we agree otherwise in writing.
        </p>
      </section>

      <section>
        <h2>7. No warranty; limitation of liability</h2>
        <p>
          The service is provided on a commercially reasonable basis “as is.” We
          do not warrant uninterrupted availability, that deliverables will be
          error-free, or fitness for a particular purpose beyond the agreed
          scope. To the maximum extent permitted by law, our total liability
          arising out of or related to the service is limited to the fees you paid
          us for the specific engagement giving rise to the claim in the three
          (3) months preceding the claim. We are not liable for indirect,
          incidental, special, consequential, or lost-profit damages.
        </p>
      </section>

      <section>
        <h2>8. Third-party services</h2>
        <p>
          Delivery often depends on third parties (e.g. Vercel, Figma, form SaaS,
          analytics). Those services have their own terms; we are not responsible
          for their outages, policy changes, or pricing.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          Either party may end an engagement as allowed by the pause/cancel terms
          or for material breach. Provisions that by nature should survive
          (IP, payment for work performed, limitation of liability, governing
          law) survive termination.
        </p>
      </section>

      <section>
        <h2>10. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Tennessee, without
          regard to conflict-of-law rules. Exclusive venue for disputes lies in
          the state or federal courts located in Tennessee, unless applicable law
          requires otherwise.
        </p>
      </section>

      <section>
        <h2>11. Changes</h2>
        <p>
          We may update these terms by posting a revised version on this page.
          Material changes for active clients will be communicated by email where
          practical. Continued use after the effective date constitutes
          acceptance of the updated terms for ongoing work.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          Questions:{" "}
          <a href="mailto:hello@orpheion.com">hello@orpheion.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
