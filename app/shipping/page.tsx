import { Truck, RotateCcw, CreditCard, Shield } from "lucide-react";

const shippingOptions = [
  {
    name: "Standard Shipping",
    time: "5-7 business days",
    price: "$15",
    description: "Free on orders over $150",
  },
  {
    name: "Express Shipping",
    time: "2-3 business days",
    price: "$25",
    description: "Fast delivery for urgent orders",
  },
  {
    name: "Next Day Delivery",
    time: "1 business day",
    price: "$40",
    description: "Order by 2pm for next day delivery",
  },
  {
    name: "International",
    time: "7-14 business days",
    price: "From $35",
    description: "Available to 50+ countries",
  },
];

const returnSteps = [
  {
    step: 1,
    title: "Initiate Return",
    description:
      "Log into your account and select the items you wish to return within 30 days of delivery.",
  },
  {
    step: 2,
    title: "Print Label",
    description:
      "Download your prepaid shipping label and pack items securely in original packaging.",
  },
  {
    step: 3,
    title: "Ship Items",
    description:
      "Drop off your package at any authorized shipping location.",
  },
  {
    step: 4,
    title: "Get Refund",
    description:
      "Receive your refund within 5-7 business days after we receive your return.",
  },
];

const policies = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $150",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Free returns within 30 days",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "All transactions encrypted",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% authentic products",
  },
];

export default function ShippingPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Shipping & Returns
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about our shipping options and return policy.
        </p>
      </div>

      {/* Policy Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {policies.map((policy) => (
          <div
            key={policy.title}
            className="text-center p-6 bg-card rounded-lg border border-border"
          >
            <policy.icon className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-medium mb-1">{policy.title}</h3>
            <p className="text-sm text-muted-foreground">{policy.description}</p>
          </div>
        ))}
      </div>

      {/* Shipping Options */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold mb-8">Shipping Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-medium">Method</th>
                <th className="text-left py-4 px-4 font-medium">Delivery Time</th>
                <th className="text-left py-4 px-4 font-medium">Cost</th>
                <th className="text-left py-4 px-4 font-medium hidden sm:table-cell">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {shippingOptions.map((option) => (
                <tr key={option.name} className="border-b border-border">
                  <td className="py-4 px-4 font-medium">{option.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {option.time}
                  </td>
                  <td className="py-4 px-4">{option.price}</td>
                  <td className="py-4 px-4 text-muted-foreground hidden sm:table-cell">
                    {option.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Returns */}
      <section className="mb-16" id="returns">
        <h2 className="font-serif text-3xl font-bold mb-8">Return Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {returnSteps.map((step) => (
            <div key={step.step} className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                {step.step}
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Return Policy Details */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold mb-8">Return Policy</h2>
        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">Eligible for Return</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Items returned within 30 days of delivery</li>
                <li>Unworn items with all original tags attached</li>
                <li>Items in original packaging</li>
                <li>Items purchased at full price or on sale</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Not Eligible for Return</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Items marked as final sale</li>
                <li>Worn, washed, or altered items</li>
                <li>Items without original tags</li>
                <li>Intimate apparel and swimwear</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section>
        <h2 className="font-serif text-3xl font-bold mb-8">Size Guide</h2>
        <div className="bg-card rounded-lg p-8 border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Size</th>
                <th className="text-left py-3 px-4 font-medium">US</th>
                <th className="text-left py-3 px-4 font-medium">UK</th>
                <th className="text-left py-3 px-4 font-medium">EU</th>
                <th className="text-left py-3 px-4 font-medium">Bust (in)</th>
                <th className="text-left py-3 px-4 font-medium">Waist (in)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">XS</td>
                <td className="py-3 px-4">0-2</td>
                <td className="py-3 px-4">4-6</td>
                <td className="py-3 px-4">32-34</td>
                <td className="py-3 px-4">31-32</td>
                <td className="py-3 px-4">24-25</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">S</td>
                <td className="py-3 px-4">4-6</td>
                <td className="py-3 px-4">8-10</td>
                <td className="py-3 px-4">36-38</td>
                <td className="py-3 px-4">33-34</td>
                <td className="py-3 px-4">26-27</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">M</td>
                <td className="py-3 px-4">8-10</td>
                <td className="py-3 px-4">12-14</td>
                <td className="py-3 px-4">40-42</td>
                <td className="py-3 px-4">35-36</td>
                <td className="py-3 px-4">28-29</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-foreground">L</td>
                <td className="py-3 px-4">12-14</td>
                <td className="py-3 px-4">16-18</td>
                <td className="py-3 px-4">44-46</td>
                <td className="py-3 px-4">37-39</td>
                <td className="py-3 px-4">30-32</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">XL</td>
                <td className="py-3 px-4">16-18</td>
                <td className="py-3 px-4">20-22</td>
                <td className="py-3 px-4">48-50</td>
                <td className="py-3 px-4">40-42</td>
                <td className="py-3 px-4">33-35</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
