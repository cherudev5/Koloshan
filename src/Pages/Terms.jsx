import LegalPage from "../components/LegalPage";
import LegalContact from "../components/LegalContact";

const sections = [
  {
    title: "Quotes and orders",
    blocks: [
      "You may request a quote through our website, WhatsApp, email or telephone. A quote or discussion is not an accepted order. Before confirming, please review the product or service, specifications, quantity, price, payment instructions and delivery or collection details. An order is accepted when Koloshan confirms those details in writing, including by WhatsApp or email. We will provide written order details for you to keep.",
    ],
  },
  {
    title: "Prices and payment",
    blocks: [
      "Prices are in Kenyan shillings unless the quote says otherwise. Any delivery charge, applicable tax, deposit or balance due will be stated in the quote or order confirmation.",
      "Payment is currently made directly to the bank account we confirm for the order. Pay only to bank details confirmed through our verified business contact channels. If you receive a message changing payment details, contact us using the phone number above before sending money. Do not share your PIN, password or one-time security code with us.",
      "We will confirm the payment stage and any production start requirements in writing. Online card or API payment is not currently part of this ordering process. If that changes, we will provide payment terms and relevant details before online checkout.",
    ],
    notice: {
      label: "Payment safety:",
      text: "We only change payment details through our verified contact channels. If in doubt, call +254 704 551 829 before sending money.",
    },
  },
  {
    title: "Artwork, approvals and production",
    blocks: [
      "You are responsible for checking the final proof and order details, including spelling, names, numbers, dimensions, colours and quantities, before approval. We will not materially change approved artwork or specifications without your agreement. Production can differ slightly from a screen preview because of screens, materials and print processes; we will confirm important specifications in the quote or proof.",
      "You confirm that you have permission to provide any logo, image, text, photograph or other material you ask us to print. You allow us to use it only to quote, design, produce, deliver and support your order. We will not use your logo or project images in our marketing without your permission. Ownership or permitted use of custom designs will be as stated in the quote or a separate written agreement.",
    ],
  },
  {
    title: "Delivery, changes and issues",
    blocks: [
      "Any production or delivery date is an estimate unless we expressly confirm a fixed date in writing. Delivery charges, location and collection arrangements will be confirmed before order acceptance. Please provide accurate delivery and contact information.",
      "Contact us promptly if you need to change or cancel an order. We will discuss whether it is still possible and any reasonable costs for work completed or materials committed. If an order is incomplete, defective or materially different from what we agreed, contact us at info@koloshanenterpriseslimited.com or +254 704 551 829 with the order details. We will review the issue and discuss an appropriate remedy under the agreement and applicable law.",
      "Nothing in these terms excludes or limits any consumer right or remedy that cannot legally be excluded or limited. Custom or personalised products are not automatically excluded from rights provided by law.",
    ],
  },
  {
    title: "Website and privacy",
    blocks: [
      "Website descriptions and prices are for general information; we confirm the specifications and price for each order in writing. Please use the website lawfully and do not attempt to disrupt it or access its systems without permission.",
      <p key="privacy-link">
        Our{" "}
        <a
          href="/privacy"
          className="text-[var(--orange)] underline underline-offset-4 hover:text-[var(--off-white)] transition-colors"
        >
          Privacy Policy
        </a>{" "}
        describes our handling of personal data and cookies.
      </p>,
    ],
  },
  {
    title: "Complaints, law and updates",
    blocks: [
      "Please contact us first by email or phone/WhatsApp if you have an order concern. These terms are governed by Kenyan law, without limiting consumer rights or dispute options available under that law. We may update these terms by posting a new version with its effective date; changes do not alter an order already accepted unless agreed or required by law.",
    ],
  },
];

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      documentTitle="Terms of Service | Koloshan Enterprises Limited"
      effectiveDate="13 October 2026"
      intro={
        <p>
          These terms apply to koloshanenterpriseslimited.com and to printing,
          design, branding, packaging, apparel and promotional products or
          services ordered from Koloshan Enterprises Limited (“Koloshan”, “we”,
          “us”).
        </p>
      }
      contactCard={<LegalContact />}
      sections={sections}
      footerLinks={[{ href: "/privacy", label: "Privacy Policy" }]}
    />
  );
}

export default Terms;
