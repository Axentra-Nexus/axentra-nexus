import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Axentra — Get in Touch" },
      { name: "description", content: "Contact Axentra for BPO, customer support, and digital transformation solutions. Email: axentra.cx@gmail.com" },
      { property: "og:title", content: "Contact Axentra" },
      { property: "og:description", content: "Get in touch with our team for tailored business solutions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding bg-foreground text-background">
        <div className="container-max">
          <span className="mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">Contact Us</span>
          <h1 className="heading-1 text-background">Let's Start a Conversation</h1>
          <p className="body-text mt-6 max-w-3xl text-background/80">
            Whether you're looking to optimize operations, enhance customer experiences, or explore digital transformation — our team is ready to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-2">Get in Touch</h2>
            <p className="body-text mt-4">Fill out the form and our team will get back to you within 24 hours.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">✉️</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email</div>
                  <a href="mailto:axentra.cx@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">axentra.cx@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 text-4xl">✅</div>
                <h3 className="heading-3">Thank You!</h3>
                <p className="mt-2 text-sm text-muted-foreground">We've received your message and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                  <input id="name" name="name" type="text" required className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                  <input id="phone" name="phone" type="tel" className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input id="email" name="email" type="email" required className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
