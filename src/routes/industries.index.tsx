import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Axentra Sector Expertise" },
      { name: "description", content: "Axentra delivers tailored BPO solutions across BFSI, E-commerce, Telecom, Healthcare, and Startups." },
      { property: "og:title", content: "Industries — Axentra" },
      { property: "og:description", content: "Sector-specific BPO and digital transformation solutions." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { title: "BFSI", desc: "Banking, financial services, and insurance solutions with compliance-first processes and secure operations.", to: "/industries/bfsi" },
  { title: "E-commerce", desc: "Scalable customer support, order management, and fulfillment operations for online retailers.", to: "/industries/ecommerce" },
  { title: "Telecom", desc: "Subscriber lifecycle management, technical support, and revenue assurance for telecom operators.", to: "/industries/telecom" },
  { title: "Healthcare", desc: "HIPAA-compliant patient engagement, claims processing, and healthcare administration services.", to: "/industries/healthcare" },
  { title: "Startups", desc: "Flexible, cost-effective BPO solutions designed to scale with fast-growing companies.", to: "/industries/startups" },
];

function IndustriesPage() {
  return (
    <>
      <section className="section-padding bg-foreground text-background">
        <div className="container-max">
          <span className="mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">Industries</span>
          <h1 className="heading-1 text-background">Sector-Specific Expertise</h1>
          <p className="body-text mt-6 max-w-3xl text-background/80">
            Every industry has unique challenges. Axentra brings deep domain knowledge and tailored solutions that address specific regulatory, operational, and customer experience requirements.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link key={ind.title} to={ind.to} className="card-hover group">
                <h3 className="heading-3 group-hover:text-primary transition-colors">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Don't See Your Industry?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">We work across sectors. Let's discuss how Axentra can help your business.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
