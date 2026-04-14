import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Axentra BPO & Business Solutions" },
      { name: "description", content: "Explore Axentra's comprehensive BPO services including customer support, sales, back office operations, and digital process management." },
      { property: "og:title", content: "Services — Axentra" },
      { property: "og:description", content: "End-to-end business process outsourcing solutions." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Inbound Customer Support", desc: "Deliver exceptional customer experiences with 24/7 multilingual support across voice, chat, email, and social channels.", to: "/services/inbound-customer-support", icon: "📞" },
  { title: "Outbound Sales & Collections", desc: "Drive revenue growth with compliant, data-driven outbound campaigns including telemarketing, lead generation, and collections.", to: "/services/outbound-sales", icon: "📈" },
  { title: "Back Office Operations", desc: "Streamline your back-office with scalable document processing, data management, reconciliation, and compliance services.", to: "/services/back-office", icon: "⚙️" },
  { title: "Digital Process Management", desc: "Transform operations with intelligent workflow automation, RPA, AI-powered analytics, and end-to-end digital solutions.", to: "/services/digital-process", icon: "🔄" },
];

function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-foreground text-background">
        <div className="container-max">
          <span className="mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">Our Services</span>
          <h1 className="heading-1 text-background">Comprehensive Business Solutions</h1>
          <p className="body-text mt-6 max-w-3xl text-background/80">
            From front-office customer engagement to back-office process automation, Axentra delivers end-to-end solutions that drive efficiency, reduce costs, and enhance experiences.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="card-hover group">
                <div className="mb-4 text-4xl">{s.icon}</div>
                <h3 className="heading-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Need a Customized Solution?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Our experts will design a tailored engagement model for your business.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
