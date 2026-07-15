import { navItems } from "@/lib/nav";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] px-6 pb-12 pt-16 md:px-12 lg:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Logo + address */}
          <div className="flex flex-col gap-5">
            <Logo />
            <div className="space-y-1 text-[16px] leading-[1.5] text-[#282828]">
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
              href="https://www.youtube.com/@VstdyStudio"
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
            <a
              href="https://www.instagram.com/vstdystudio"
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
              href="https://www.snapchat.com/@vstdyed"
              aria-label="VStdy on Snapchat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 transition-opacity hover:opacity-70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
