import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

/**
 * Shared layout for legal pages (Terms, Privacy).
 *
 * sections: [{ title, blocks: [...], notice? }]
 *   block = string                  -> paragraph
 *         | { list: string[] }      -> bullet list
 *         | JSX element             -> rendered as-is
 */
function LegalPage({
  title,
  documentTitle,
  effectiveDate,
  intro,
  contactCard,
  sections,
  footerLinks = [],
}) {
  useEffect(() => {
    const previous = document.title;
    document.title = documentTitle;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [documentTitle]);

  return (
    <div className="min-h-screen bg-[var(--navy-deep)] text-[var(--off-white)]">
      {/* Header */}
      <header className="bg-[var(--off-white)]/95 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/KoloshanLogo.png"
              alt="Koloshan Enterprise Logo"
              className="w-12 h-12 object-contain rounded-md"
            />
            <span className="text-2xl font-bold tracking-tight text-[var(--orange)]">
              Koloshan
              <span className="ml-2 text-sm font-medium text-[var(--navy)]">
                Enterprises
              </span>
            </span>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] hover:text-[var(--orange-dim)] transition-colors"
          >
            <FaArrowLeft />
            Back to website
          </a>
        </div>
      </header>

      {/* Title */}
      <section className="bg-[var(--navy)] border-b border-[var(--navy-line)]">
        <div className="container mx-auto px-4 py-14 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold">{title}</h1>
          <div className="w-16 h-1 bg-[var(--orange)] rounded-full mt-4 mb-5" />
          <p className="text-[var(--off-white-dim)]">
            Effective date: {effectiveDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-14 max-w-4xl">
        <div className="space-y-4 text-[var(--off-white-dim)] leading-8">
          {intro}
        </div>

        {contactCard && (
          <div className="mt-8 rounded-xl border border-[var(--navy-line)] bg-[var(--navy-surface)] p-6 grid gap-4 sm:grid-cols-2">
            {contactCard}
          </div>
        )}

        {sections.map((section, i) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-2xl font-bold flex items-start gap-3">
              <span className="text-[var(--orange)] text-lg leading-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.title}
            </h2>
            <div className="w-10 h-1 bg-[var(--orange)] rounded-full mt-3 mb-5" />

            <div className="space-y-4 text-[var(--off-white-dim)] leading-8">
              {section.blocks.map((block, j) => {
                if (typeof block === "string") {
                  return <p key={j}>{block}</p>;
                }
                if (block && block.list) {
                  return (
                    <ul
                      key={j}
                      className="list-disc pl-6 space-y-2 marker:text-[var(--orange)]"
                    >
                      {block.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return <div key={j}>{block}</div>;
              })}
            </div>

            {section.notice && (
              <div className="mt-6 rounded-lg border-l-4 border-[var(--orange)] bg-[var(--navy-surface)] p-4 text-sm leading-7">
                <strong className="text-[var(--orange)]">
                  {section.notice.label}
                </strong>{" "}
                {section.notice.text}
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--navy-line)]">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[var(--off-white-dim)]">
          <p>
            © {new Date().getFullYear()} Koloshan Enterprises Limited. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--orange)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("koloshan:open-cookie-settings"))
              }
              className="hover:text-[var(--orange)] transition-colors"
            >
              Cookie Settings
            </button>
            <a href="/" className="hover:text-[var(--orange)] transition-colors">
              Homepage
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LegalPage;
