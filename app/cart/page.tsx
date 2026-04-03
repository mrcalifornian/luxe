"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  const shipping = totalPrice >= 150 ? 0 : 15;
  const orderTotal = totalPrice + shipping;

  if (items.length === 0) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
        <h1 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="font-serif text-4xl font-bold mb-12">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="divide-y divide-border">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="py-6 flex gap-6"
              >
                <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <Link
                        href={`/product/${item.product.id}`}
                        className="font-medium hover:text-muted-foreground transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="inline-flex items-center border border-border rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
            <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground">
                  Free shipping on orders over $150
                </p>
              )}
              <div className="border-t border-border pt-4 flex justify-between font-medium text-base">
                <span>Total</span>
                <span>{formatPrice(orderTotal)}</span>
              </div>
            </div>

            <button className="w-full mt-6 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>

            <Link
              href="/shop"
              className="block text-center mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
