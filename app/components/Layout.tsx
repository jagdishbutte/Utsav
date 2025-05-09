"use client";

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#0f2027]/80 backdrop-blur-md border-b border-gray-800/50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#ff9966] to-[#ff5e62] bg-clip-text text-transparent">
              Utsav.life
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/syndicate"
              className={`transition ${
                pathname === "/syndicate"
                  ? "text-blue-400 font-medium"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Syndicate
            </Link>
            <Link
              href="/gallery"
              className={`transition ${
                pathname === "/gallery"
                  ? "text-blue-400 font-medium"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`transition ${
                pathname === "/about"
                  ? "text-blue-400 font-medium"
                  : "text-white hover:text-blue-400"
              }`}
            >
              About
            </Link>
            <Link href="/join">
              <button
                className={`ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-medium hover:opacity-90 transition ${
                  pathname === "/join" ? "ring-2 ring-white" : ""
                }`}
              >
                Join Us
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-white p-2"
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 bg-[#0f2027]/95 backdrop-blur-md border-b border-gray-800/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4 space-y-3">
              <Link
                href="/syndicate"
                className={`px-4 py-2 rounded-md ${
                  pathname === "/syndicate"
                    ? "bg-blue-500/20 text-blue-400 font-medium"
                    : "text-white hover:bg-gray-800/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Syndicate
              </Link>
              <Link
                href="/gallery"
                className={`px-4 py-2 rounded-md ${
                  pathname === "/gallery"
                    ? "bg-blue-500/20 text-blue-400 font-medium"
                    : "text-white hover:bg-gray-800/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-md ${
                  pathname === "/about"
                    ? "bg-blue-500/20 text-blue-400 font-medium"
                    : "text-white hover:bg-gray-800/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link href="/join" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-medium">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0f2027]/80 backdrop-blur-md border-t border-gray-800/50 py-4 px-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left mb-3 md:mb-0">
              <div className="text-xl font-bold bg-gradient-to-r from-[#ff9966] to-[#ff5e62] bg-clip-text text-transparent mb-1">
                Utsav.life
              </div>
              <p className="text-gray-400 text-xs">Don't Just Exist, Utsav.</p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left mb-3 md:mb-0">
              <h3 className="text-white font-semibold mb-2 text-sm">
                Quick Links
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/syndicate"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Syndicate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/join"
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-2 text-sm">Connect</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-3 border-t border-gray-800 text-center text-gray-400 text-xs">
            © {new Date().getFullYear()} Utsav.life. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
