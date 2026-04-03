import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-medium">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
