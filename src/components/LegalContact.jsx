import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function LegalContact() {
  return (
    <>
      <a
        href="tel:+254704551829"
        className="flex items-center gap-3 hover:text-[var(--orange)] transition-colors"
      >
        <FaPhoneAlt className="text-[var(--orange)]" />
        +254 704 551 829
      </a>
      <a
        href="https://wa.me/254704551829"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-[var(--orange)] transition-colors"
      >
        <FaWhatsapp className="text-[var(--orange)]" />
        WhatsApp
      </a>
      <a
        href="mailto:info@koloshanenterpriseslimited.com"
        className="flex items-center gap-3 hover:text-[var(--orange)] transition-colors break-all"
      >
        <FaEnvelope className="text-[var(--orange)] shrink-0" />
        info@koloshanenterpriseslimited.com
      </a>
      <p className="text-[var(--off-white-dim)]">
        Dynamic Mall, Tom Mboya Street, Nairobi, Kenya
      </p>
    </>
  );
}

export default LegalContact;
