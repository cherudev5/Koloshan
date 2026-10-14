import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

/**
 * Google Maps can set third-party cookies, so it is not loaded until the
 * visitor chooses to load it.
 */
function MapEmbed({ src, title, fallbackHref }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        className="w-full h-80 rounded-2xl mt-10 border border-[var(--navy-line)]"
        src={src}
        loading="lazy"
        allowFullScreen
      />
    );
  }

  return (
    <div className="w-full h-80 rounded-2xl mt-10 border border-[var(--navy-line)] bg-[var(--navy-surface)] flex flex-col items-center justify-center text-center gap-4 px-6">
      <FaMapMarkerAlt className="text-4xl text-[var(--orange)]" />
      <p className="text-[var(--off-white-dim)] max-w-sm text-sm leading-6">
        The map is provided by Google and may set cookies. Load it only if you
        are happy for Google to process your visit.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="px-5 py-2.5 rounded-lg font-semibold bg-[var(--orange)] text-[var(--navy-deep)] hover:bg-[var(--orange-dim)] hover:text-[var(--off-white)] transition"
        >
          Load map
        </button>
        {fallbackHref && (
          <a
            href={fallbackHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg font-semibold border border-[var(--navy-line)] text-[var(--off-white)] hover:border-[var(--orange)] transition"
          >
            Open in Google Maps
          </a>
        )}
      </div>
    </div>
  );
}

export default MapEmbed;
