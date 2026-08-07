import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="section bg-white"
    >
      <div className="container">

        <h2 className="section-title">
          Contact Us
        </h2>

        <p className="section-subtitle">
          We'd love to discuss your next printing project.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-14">

          <div>

            <div className="space-y-8">

              <div className="flex gap-5">

                <FaPhoneAlt className="text-primary text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <p>+254 704 551 829</p>
                </div>

              </div>

              <div className="flex gap-5">

                <FaEnvelope className="text-primary text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p>info@koloshan.co.ke</p>
                </div>

              </div>

              <div className="flex gap-5">

                <FaMapMarkerAlt className="text-primary text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">
                    Address
                  </h3>

                  <p>Nairobi, Kenya</p>
                </div>

              </div>

            </div>

            <iframe
              title="map"
              className="w-full h-80 rounded-xl mt-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.3373372117215!2d36.82651567663625!3d-1.2854714345917946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11cce26e7913%3A0x966945e229804083!2sDynamic%20Mall!5e1!3m2!1sen!2ske!4v1786124189245!5m2!1sen!2ske"
              loading="lazy"
            ></iframe>

          </div>

          <form className="card space-y-6">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>

            <button
              className="btn btn-primary w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;