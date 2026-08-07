import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254704551829"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}

export default WhatsAppButton;