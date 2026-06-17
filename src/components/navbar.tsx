"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#070b14] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" onClick={() => setIsOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white-transparent.webp"
            alt="Spark Adriatic"
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "transition-colors hover:text-[#98D9EB]",
                  pathname === link.href && "text-[#98D9EB]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-md bg-[#98D9EB] px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8] sm:block"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white sm:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-700 px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block transition-colors hover:text-[#98D9EB]",
                    pathname === link.href && "text-[#98D9EB]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-block rounded-md bg-[#98D9EB] px-4 py-2 font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
