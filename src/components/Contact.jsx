import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const whatsappMessage = `
Hello Koloshan,

My name is ${name}.

Email: ${email}
Phone: ${phone}

I'd like to enquire about:
${message}

Thank you.
    `.trim();

    const whatsappNumber = "254704551829";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="section bg-[var(--navy-deep)]"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[var(--orange)]">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--off-white)]">
            Contact Us
          </h2>

          <p className="mt-5 text-[var(--off-white-dim)] leading-7">
            We'd love to discuss your next printing, branding,
            packaging or promotional project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-14">

          {/* Contact Information */}
          <div>

            <h3 className="text-2xl font-bold text-[var(--off-white)]">
              Let's Work Together
            </h3>

            <p className="mt-4 text-[var(--off-white-dim)] leading-7">
              Have a project in mind? Get in touch with Koloshan
              and let's bring your ideas to life.
            </p>

            <div className="space-y-6 mt-10">

              {/* Phone */}
              <a
                href="tel:+254704551829"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--navy-surface)] border border-[var(--navy-line)] flex items-center justify-center group-hover:bg-[var(--orange)] transition">
                  <FaPhoneAlt className="text-[var(--orange)] group-hover:text-[var(--navy-deep)] text-xl transition" />
                </div>

                <div>
                  <h4 className="font-bold text-[var(--off-white)]">
                    Phone
                  </h4>

                  <p className="text-[var(--off-white-dim)] mt-1">
                    +254 704 551 829
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@koloshan.co.ke"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--navy-surface)] border border-[var(--navy-line)] flex items-center justify-center group-hover:bg-[var(--orange)] transition">
                  <FaEnvelope className="text-[var(--orange)] group-hover:text-[var(--navy-deep)] text-xl transition" />
                </div>

                <div>
                  <h4 className="font-bold text-[var(--off-white)]">
                    Email
                  </h4>

                  <p className="text-[var(--off-white-dim)] mt-1">
                    info@koloshan.co.ke
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[var(--navy-surface)] border border-[var(--navy-line)] flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[var(--orange)] text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-[var(--off-white)]">
                    Address
                  </h4>

                  <p className="text-[var(--off-white-dim)] mt-1">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254704551829"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold bg-[var(--orange)] text-[var(--navy-deep)] hover:bg-[var(--orange-dim)] hover:text-[var(--off-white)] transition"
            >
              <FaWhatsapp className="text-xl" />
              Chat With Us on WhatsApp
            </a>

            {/* Map */}
            <iframe
              title="Koloshan location"
              className="w-full h-80 rounded-2xl mt-10 border border-[var(--navy-line)]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.3373372117215!2d36.82651567663625!3d-1.2854714345917946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11cce26e7913%3A0x966945e229804083!2sDynamic%20Mall!5e1!3m2!1sen!2ske!4v1786124189245!5m2!1sen!2ske"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--navy-surface)] border border-[var(--navy-line)] rounded-2xl p-8 shadow-xl space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium text-[var(--off-white)]">
                Full Name
              </label>

              <input
                name="name"
                type="text"
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--navy-deep)] border border-[var(--navy-line)] text-[var(--off-white)] placeholder:text-[var(--off-white-dim)] focus:outline-none focus:border-[var(--orange)] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[var(--off-white)]">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--navy-deep)] border border-[var(--navy-line)] text-[var(--off-white)] placeholder:text-[var(--off-white-dim)] focus:outline-none focus:border-[var(--orange)] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[var(--off-white)]">
                Phone Number
              </label>

              <input
                name="phone"
                type="tel"
                placeholder="+254..."
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--navy-deep)] border border-[var(--navy-line)] text-[var(--off-white)] placeholder:text-[var(--off-white-dim)] focus:outline-none focus:border-[var(--orange)] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[var(--off-white)]">
                Project Details
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your printing or branding project..."
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--navy-deep)] border border-[var(--navy-line)] text-[var(--off-white)] placeholder:text-[var(--off-white-dim)] focus:outline-none focus:border-[var(--orange)] transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-bold bg-[var(--orange)] text-[var(--navy-deep)] hover:bg-[var(--orange-dim)] hover:text-[var(--off-white)] transition"
            >
              <FaWhatsapp className="text-xl" />
              Send Enquiry via WhatsApp
            </button>

            <p className="text-center text-sm text-[var(--off-white-dim)]">
              Your enquiry will open directly in WhatsApp.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;