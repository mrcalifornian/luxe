"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, Check } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/products";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Product Image */}
        <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-secondary shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded">
              Sale
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground mb-2">
            {product.category}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-8">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-12 h-12 rounded-lg border text-sm font-medium transition-colors",
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary",
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3">Quantity</label>
            <div className="inline-flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-secondary transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-6 py-3 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-secondary transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={cn(
              "w-full py-4 rounded-full font-medium transition-colors",
              isAdded
                ? "bg-green-600 text-white"
                : selectedSize
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed",
            )}
          >
            {isAdded ? (
              <span className="inline-flex items-center gap-2">
                <Check className="h-5 w-5" />
                Added to Cart
              </span>
            ) : selectedSize ? (
              "Add to Cart"
            ) : (
              "Select a Size"
            )}
          </button>

          {/* Product Details */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="font-medium mb-4">Product Details</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Premium quality materials</li>
              <li>Designed for lasting comfort</li>
              <li>Easy care instructions included</li>
              <li>Free shipping on orders over $150</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
