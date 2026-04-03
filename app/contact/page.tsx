"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@luxe.com",
    href: "mailto:hello@luxe.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Fashion Ave, New York, NY 10001",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9am-6pm EST",
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer free returns within 30 days of purchase. Items must be unworn with original tags attached.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you will receive an email with a tracking number and link to track your package.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or need assistance? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Form */}
        <div className="bg-card rounded-lg p-8 border border-border">
          <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <info.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium hover:text-muted-foreground transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section>
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
