import Image from "next/image";
import { Award, Leaf, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every piece is crafted with meticulous attention to detail, using only the finest materials sourced from trusted suppliers around the world.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We are committed to reducing our environmental impact through responsible sourcing, ethical manufacturing, and eco-friendly packaging.",
  },
  {
    icon: Heart,
    title: "Timeless Design",
    description:
      "Our designs transcend seasonal trends, creating pieces that become lasting additions to your wardrobe for years to come.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      {/* <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop"
            alt="About LUXE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            About LUXE
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Redefining modern elegance since 2010
          </p>
        </div>
      </section> */}

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                LUXE was found with a singular vision: to create fashion that stands the test of time. In a world of fast fashion and fleeting trends, we chose a different path.
              </p>
              <p>
                Our journey began in a small atelier, where every stitch was placed with intention and every fabric chosen with care. Today, while we have grown, our commitment to quality and craftsmanship remains unchanged.
              </p>
              <p>
                We believe that true luxury lies not in logos or labels, but in the quiet confidence that comes from wearing something beautifully made. Each piece in our collection is designed to be worn, loved, and passed down.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=800&fit=crop"
              alt="Our atelier"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 rounded-[3rem] my-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-primary mb-8 shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md">
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
