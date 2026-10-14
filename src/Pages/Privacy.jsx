import LegalPage from "../components/LegalPage";
import LegalContact from "../components/LegalContact";

const sections = [
  {
    title: "Who is responsible for your personal data?",
    blocks: [
      "Koloshan Enterprises Limited is responsible for personal data described in this policy.",
      "Please use the email below to ask a question or exercise a privacy right.",
      <ul key="contact" className="space-y-2">
        <li>
          <strong className="text-[var(--off-white)]">Privacy contact:</strong>{" "}
          info@koloshanenterpriseslimited.com
        </li>
        <li>
          <strong className="text-[var(--off-white)]">
            Telephone/WhatsApp:
          </strong>{" "}
          +254 704 551 829
        </li>
        <li>
          <strong className="text-[var(--off-white)]">Address:</strong> Dynamic
          Mall, Tom Mboya Street, Nairobi, Kenya
        </li>
      </ul>,
    ],
  },
  {
    title: "Personal data we collect",
    blocks: [
      "The information we collect depends on how you interact with us. It may include:",
      {
        list: [
          "Contact and enquiry details, such as your name, email address, telephone number, WhatsApp number, and the contents of your messages or quote requests.",
          "Order and project details, such as products or services requested, quantities, specifications, delivery details, branding instructions, and communications about quotations and fulfilment. If you send artwork, photographs, logos or other files, those files may contain personal data that you or your organisation choose to include.",
          "Payment and transaction details. At present, orders and payment arrangements are handled outside the website, typically after discussion through WhatsApp, with payment made to a bank. We may receive or retain information needed to confirm or reconcile a payment, such as the amount, date, transaction reference and payer name. We do not intend to collect or store your bank-card security details through the website under this current process.",
          "Website and device data, such as IP address, browser and device type, pages viewed, approximate usage information, and cookie or tracker identifiers. The specific data depends on the cookies, analytics or other tracking technologies active on the site.",
        ],
      },
      "Please do not send us sensitive personal information unless it is genuinely needed for your request and you have a lawful reason to share it.",
    ],
  },
  {
    title: "How we collect personal data",
    blocks: [
      "We collect information directly from you when you complete or use a website contact feature, start an enquiry through WhatsApp, email or telephone us, or discuss a quote, project or order with us. We may also receive information through cookies and similar technologies used on the website.",
      "The website currently directs enquiries to WhatsApp. If you choose WhatsApp, your use of that service is also subject to WhatsApp’s own privacy terms. Email and telephone communications are handled through the services used by you and by us.",
    ],
  },
  {
    title: "Why we use personal data",
    blocks: [
      "We use personal data to:",
      {
        list: [
          "respond to questions and quote requests;",
          "prepare, design, produce, deliver and support requested print or branding work;",
          "communicate with you about specifications, proofs, changes, payment arrangements and delivery;",
          "maintain business, accounting and transaction records and meet legal obligations;",
          "operate, secure, troubleshoot and improve the website and our services; and",
          "understand website use and, where enabled, measure or improve marketing and advertising.",
        ],
      },
      "We process personal data only where we have an applicable lawful basis. Depending on the circumstances, this may be because processing is needed to take steps you request before entering into a contract, perform a contract, comply with a legal obligation, protect a legitimate business interest in a way that does not override your rights, or because you have given consent. Where we rely on consent, you may withdraw it; doing so does not affect processing that took place before withdrawal or processing that has another lawful basis.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    blocks: [
      "The website uses cookies and tracking technologies, and these may change as we develop the site. Cookies are small files stored on your device. Similar technologies may recognise a browser or measure how a website is used.",
      "Depending on what is active, these technologies may be necessary for site operation, remember preferences, measure traffic or support analytics and advertising. Some may be provided by third parties and may collect information directly through your browser. We will update this policy when material tracking practices change.",
      "You can manage or delete cookies through your browser settings. Blocking some cookies may affect website features. Where required, we will seek your consent before setting non-essential cookies or trackers.",
    ],
  },
  {
    title: "When we share personal data",
    blocks: [
      "We do not sell your personal data. We may share it only as reasonably necessary with:",
      {
        list: [
          "Service providers that help us host or maintain the website, communicate with customers, measure site use, process orders, print or deliver products, or maintain business records. They may use personal data only for their assigned services and under appropriate safeguards.",
          "WhatsApp and email providers when you use those channels to contact us or we use them to communicate with you. These providers process data under their own terms and may process or store it outside Kenya.",
          "Banks and payment service providers as needed to receive, verify or reconcile payments. Currently, website orders and bank payments are arranged outside the website. If online payments are introduced, we will update this policy to describe the payment provider and the information involved before that payment feature is used.",
          "Professional advisers, regulators, law enforcement or other parties where disclosure is required by law, needed to establish or defend legal claims, or necessary to protect people or our business.",
          "A successor to our business if a business reorganisation or transfer occurs, subject to applicable law and appropriate protections.",
        ],
      },
      "We do not control third-party privacy practices. Please review the privacy information provided by the relevant service, including WhatsApp, your email provider, your bank and any payment service provider.",
    ],
  },
  {
    title: "Transfers outside Kenya",
    blocks: [
      "Some of our service providers may store or process personal data outside Kenya. Where personal data is transferred outside Kenya, we will use the safeguards required by applicable law and take reasonable steps to protect it. Contact us if you would like more information about relevant transfers and safeguards.",
    ],
  },
  {
    title: "How long we keep personal data",
    blocks: [
      "Our standard retention period for enquiry and project information is up to 90 days:",
      {
        list: [
          "If you make an enquiry but do not place an order, we will normally delete or anonymise the enquiry and related messages within 90 days after our last meaningful contact with you.",
          "For an order, we will normally retain the project communications, approved artwork and production files for up to 90 days after the order is completed or delivered, so we can address follow-up questions and service issues.",
        ],
      },
      "We may retain a limited amount of relevant information beyond 90 days where it is still needed to provide an ongoing service you have requested, handle an active complaint or dispute, establish or defend a legal claim, or meet a legal record-keeping obligation. If information is retained to support an ongoing client relationship, we will review that need at least every 90 days and keep only what is reasonably relevant to that service. Invoices, payment records and other records subject to legal retention requirements may be kept for the period required by law. When a retention purpose ends, we will take reasonable steps to delete, anonymise or securely dispose of the information, subject to any lawful hold or technical backup-deletion cycle.",
    ],
  },
  {
    title: "How we protect personal data",
    blocks: [
      "We use reasonable technical and organisational measures designed to protect personal data against unauthorised access, loss, misuse, alteration or disclosure. No website, email, messaging service or electronic storage method can be guaranteed to be completely secure. Please take care when sending information online and tell us promptly if you believe your communications or information have been misused.",
    ],
  },
  {
    title: "Your rights",
    blocks: [
      "Subject to applicable law and any relevant limitations, you may have the right to:",
      {
        list: [
          "be informed about how your personal data is used and request access to it;",
          "object to certain processing;",
          "ask us to correct inaccurate or misleading information;",
          "request deletion or erasure in circumstances provided by law;",
          "request data portability where the legal requirements apply; and",
          "withdraw consent where processing is based on your consent.",
        ],
      },
      "To make a request, email info@koloshanenterpriseslimited.com and describe what you need. We may ask for information to verify your identity and locate the relevant records. We will respond within the time required by applicable law. Some rights are not absolute, and we may need to retain or continue using certain information where the law permits or requires it.",
      <p key="odpc">
        You may also complain to the Office of the Data Protection Commissioner
        of Kenya (ODPC). Information on submitting a complaint is available at{" "}
        <a
          href="https://www.odpc.go.ke/file-a-complaint/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--orange)] underline underline-offset-4 hover:text-[var(--off-white)] transition-colors"
        >
          odpc.go.ke/file-a-complaint
        </a>
        .
      </p>,
    ],
  },
  {
    title: "Children",
    blocks: [
      "Our website and services are intended for people arranging printing, branding or related services. If you are a parent or guardian and believe a child has provided personal data to us directly, contact us using the details above. We will take appropriate steps in accordance with applicable law.",
    ],
  },
  {
    title: "Changes to this policy",
    blocks: [
      "We may update this policy as our website, services or data practices change. The current version will be posted on this page with its effective date. If we introduce online payments or materially change our cookies, trackers or other data practices, we will update the relevant information before or when those features are introduced, as appropriate.",
    ],
  },
];

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      documentTitle="Privacy Policy | Koloshan Enterprises Limited"
      effectiveDate="13 October 2026"
      intro={
        <>
          <p>
            Koloshan Enterprises Limited (referred to as “Koloshan”, “we”, “us”
            or “our”) respects your privacy. This policy explains how we
            collect, use, store and share personal data when you visit
            koloshanenterpriseslimited.com, contact us, request a quote, or
            discuss an order for our printing, design, branding, packaging or
            promotional products and services.
          </p>
          <p>
            We handle personal data in accordance with applicable data
            protection law in Kenya, including the Data Protection Act, 2019.
          </p>
        </>
      }
      contactCard={<LegalContact />}
      sections={sections}
      footerLinks={[{ href: "/terms", label: "Terms of Service" }]}
    />
  );
}

export default Privacy;
