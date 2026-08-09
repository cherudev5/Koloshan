function Footer() {
  return (
    <footer className="bg-secondary text-white">

      <div className="container py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold">

              Koloshan Enterprise

            </h2>

            <p className="mt-5 text-gray-300 leading-8">

              Delivering professional printing,
              branding and promotional solutions
              for businesses across Kenya.

            </p>

          </div>

          <div>

            <h3 className="font-bold text-xl">

              Quick Links

            </h3>

            <ul className="space-y-3 mt-5">

              <li>Home</li>

              <li>About</li>

              <li>Services</li>

              <li>Portfolio</li>

              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold text-xl">

              Business Hours

            </h3>

            <div className="space-y-2 mt-5">

              <p>Monday - Friday</p>

              <p>8:00 AM - 6:00 PM</p>

              <p>Saturday</p>

              <p>8:00 AM - 2:00 PM</p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-blue-700">

        <div className="container py-6 text-center text-gray-300">

          © {new Date().getFullYear()} Koloshan Enterprise.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;