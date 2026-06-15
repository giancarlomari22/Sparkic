import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Spark <span className="text-blue-500">Adriatic</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-blue-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
