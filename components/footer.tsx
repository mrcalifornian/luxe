import Link from "next/link";

const mainLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping", label: "Shipping & Returns" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
        <div className="text-center md:text-left">
          <Link href="/" className="font-serif text-2xl font-bold">
            LUXE
          </Link>
          <p className="mt-2 text-sm text-primary-foreground/70 max-w-sm">
            Timeless elegance meets modern sophistication. Curated fashion for the discerning individual.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70 py-8">
        <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
      </div>
    </footer>
  );
}
