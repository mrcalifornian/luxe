import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, categories } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Discover our curated collection of modern fashion essentials designed for the discerning individual.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-medium hover:bg-primary-foreground/90 transition-all hover:gap-3"
          >
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.slice(1).map((category) => (
            <Link
              key={category}
              href={`/shop?category=${category}`}
              className="group relative aspect-square rounded-xl overflow-hidden bg-secondary shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-primary-foreground font-medium text-lg tracking-wider">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary/30 rounded-3xl mb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Featured Collection
          </h2>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop"
              alt="Our story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-accent font-medium tracking-widest text-sm uppercase">Legacy</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 mt-2">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded with a passion for timeless design and quality craftsmanship, LUXE has been curating exceptional fashion pieces for over a decade.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe that true style transcends trends. Our collections are thoughtfully designed to become lasting additions to your wardrobe, crafted from the finest materials with attention to every detail.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-all group"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary rounded-t-[3rem] text-primary-foreground mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Join Our Newsletter
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            Subscribe for exclusive offers, new arrivals, and styling inspiration delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent shadow-inner"
            />
            <button
              type="submit"
              className="px-10 py-4 rounded-full bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
