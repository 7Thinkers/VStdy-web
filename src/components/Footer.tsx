import { navItems } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] px-6 pb-12 pt-16 md:px-12 lg:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Logo + address */}
          <div className="flex flex-col gap-5">
            <FooterLogo />
            <address className="space-y-1 not-italic text-[16px] leading-[1.5] text-[#282828]">
              <p>
                <strong className="font-bold">Corporate Head Office:</strong>{" "}
                2210 N Orange Blossom Trail, #348
              </p>
              <p>Orlando, Florida 32804</p>
            </address>
            <div className="space-y-1 text-[16px] leading-[1.5] text-[#282828]">
              <p>
                <strong className="font-bold">Phone:</strong>{" "}
                <a href="tel:+13218887277" className="hover:text-neutral-900">
                  1-321-888-7277
                </a>
              </p>
              <p>
                <strong className="font-bold">Email:</strong>{" "}
                <a href="mailto:info@vstdy.com" className="hover:text-neutral-900">
                  info@vstdy.com
                </a>
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-3 text-[16px] leading-[1.5] text-[color:var(--neutral-600)]">
            <h3 className="text-[20px] font-bold leading-[1.5] text-neutral-900">
              Vision
            </h3>
            <p>
              Change the way we teach and learn. Motivate students with visual
              and audio-based learning, introducing a new paradigm of learning
              math.
            </p>
            <p>Use AI to Learn How to Think.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 text-[16px] leading-[1.5]">
            <h3 className="text-[20px] font-bold leading-[1.5] text-neutral-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[color:var(--neutral-600)]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-neutral-900">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="hover:text-neutral-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-6 text-[16px] text-[#002b6b] sm:flex-row sm:items-center">
          <p>©{new Date().getFullYear()} All rights reserved</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/vstdy"
              aria-label="VStdy on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 transition-opacity hover:opacity-70"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@vstdy"
              aria-label="VStdy on YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 transition-opacity hover:opacity-70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <a href="#top" aria-label="VStdy home" className="inline-flex items-center">
      <span className="font-serif text-[43px] leading-none">
        <span
          className="bg-gradient-to-r from-[#1aacfb] to-[#eb14fb] bg-clip-text text-transparent"
          aria-hidden
        >
          V
        </span>
        <span className="text-[#1e1e1e]">Stdy</span>
      </span>
    </a>
  );
}
