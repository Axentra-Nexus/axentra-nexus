import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axentra — Intelligent Business Solutions" },
      { name: "description", content: "Axentra delivers enterprise-grade BPO, customer support, and digital transformation. A brand by Dharitri Nexus." },
      { property: "og:title", content: "Axentra — Intelligent Business Solutions" },
      { property: "og:description", content: "Enterprise-grade BPO and digital process management solutions." },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Inbound Customer Support", desc: "24/7 multilingual support that turns every interaction into a loyalty-building moment.", icon: "📞", to: "/services/inbound-customer-support" },
  { title: "Outbound Sales & Collections", desc: "Revenue-focused outreach with compliant, data-driven campaigns that deliver measurable ROI.", icon: "📈", to: "/services/outbound-sales" },
  { title: "Back Office Operations", desc: "Streamlined document processing, data entry, and reconciliation at enterprise scale.", icon: "⚙️", to: "/services/back-office" },
  { title: "Digital Process Management", desc: "End-to-end workflow automation and digital transformation for the modern enterprise.", icon: "🔄", to: "/services/digital-process" },
];

const industries = [
  { title: "BFSI", to: "/industries/bfsi" },
  { title: "E-commerce", to: "/industries/ecommerce" },
  { title: "Telecom", to: "/industries/telecom" },
  { title: "Healthcare", to: "/industries/healthcare" },
  { title: "Startups", to: "/industries/startups" },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98.7%", label: "Customer Satisfaction" },
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Professionals" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.484 0.14 145 / 0.3), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.484 0.14 145 / 0.2), transparent 50%)" }} />
        </div>
        <div className="container-max relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">
              A brand by Dharitri Nexus
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Intelligent Solutions for the <span className="text-primary">Modern Enterprise</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">
              Axentra combines deep industry expertise with cutting-edge technology to deliver business process outsourcing solutions that drive growth, reduce costs, and create lasting competitive advantage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex h-12 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Get Started
              </Link>
              <Link to="/about" className="inline-flex h-12 items-center rounded-md border border-background/20 px-8 text-sm font-semibold transition-colors hover:bg-background/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-max grid grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading label="Our Services" title="End-to-End Business Solutions" description="From front-office customer engagement to back-office process automation, Axentra delivers comprehensive solutions tailored to your business needs." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="card-hover group">
                <div className="mb-4 text-3xl">{s.icon}</div>
                <h3 className="heading-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <SectionHeading label="Industries" title="Sector-Specific Expertise" description="We understand the unique challenges across industries and deliver tailored solutions that address specific regulatory, operational, and customer experience requirements." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <Link key={ind.title} to={ind.to} className="card-hover group text-center">
                <h3 className="heading-3 group-hover:text-primary transition-colors">{ind.title}</h3>
                <span className="mt-2 inline-flex items-center text-sm text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dharitri Nexus */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Parent Company</span>
            <h2 className="heading-2 mt-2">Dharitri Nexus</h2>
            <p className="body-text mt-4">
              Dharitri Nexus is a forward-thinking enterprise group committed to building sustainable, technology-driven businesses that shape the future. With a portfolio spanning business services, digital innovation, and impact-driven ventures, Dharitri Nexus provides the strategic backbone that empowers brands like Axentra to deliver world-class outcomes.
            </p>
            <p className="body-text mt-4">
              Rooted in the philosophy of responsible growth, Dharitri Nexus integrates sustainability into every facet of its operations — from green infrastructure investments to ethical AI deployment — ensuring that progress never comes at the cost of our planet or communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your Operations?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Partner with Axentra to unlock efficiency, scalability, and measurable business impact.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
