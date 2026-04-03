import Link from "next/link";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=Tops", label: "Tops" },
    { href: "/shop?category=Bottoms", label: "Bottoms" },
    { href: "/shop?category=Dresses", label: "Dresses" },
    { href: "/shop?category=Outerwear", label: "Outerwear" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/shipping", label: "Shipping & Returns" },
  ],
  support: [
    { href: "/shipping", label: "Shipping Info" },
    { href: "/shipping#returns", label: "Returns" },
    { href: "/contact", label: "FAQ" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold">
              LUXE
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Timeless elegance meets modern sophistication. Curated fashion for the discerning individual.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
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
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
