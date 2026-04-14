import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Axentra — Our Story & Vision" },
      { name: "description", content: "Learn about Axentra's mission to deliver intelligent BPO and digital transformation solutions. A brand by Dharitri Nexus." },
      { property: "og:title", content: "About Axentra — Our Story & Vision" },
      { property: "og:description", content: "Discover how Axentra drives operational excellence through innovation." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Client Centricity", desc: "Every decision is anchored in delivering measurable value and exceptional experiences for our clients and their customers." },
  { title: "Innovation", desc: "We continuously invest in emerging technologies — AI, automation, analytics — to keep our partners ahead of the curve." },
  { title: "Integrity", desc: "Transparent operations, ethical practices, and compliance-first culture define how we work across every engagement." },
  { title: "Sustainability", desc: "Guided by Dharitri Nexus's commitment to responsible growth, we embed sustainability into our processes and infrastructure." },
  { title: "People First", desc: "We invest in talent development, well-being, and a culture of inclusion that empowers our 10,000+ professionals worldwide." },
  { title: "Excellence", desc: "Rigorous quality frameworks, Six Sigma methodologies, and continuous improvement drive everything we deliver." },
];

function AboutPage() {
  return (
    <>
      <section className="section-padding bg-foreground text-background">
        <div className="container-max">
          <span className="mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">About Us</span>
          <h1 className="heading-1 text-background">Transforming Businesses Through Intelligent Outsourcing</h1>
          <p className="body-text mt-6 max-w-3xl text-background/80">
            Founded with a vision to redefine business process outsourcing, Axentra partners with enterprises across the globe to streamline operations, enhance customer experiences, and accelerate digital transformation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading label="Our Mission" title="Empowering Enterprises to Thrive" centered={false} />
            <p className="body-text">
              At Axentra, our mission is to deliver intelligent, technology-enabled business solutions that help organizations focus on what matters most — growth, innovation, and customer satisfaction. We handle the complexity so our clients can concentrate on their core competencies.
            </p>
            <p className="body-text mt-4">
              With over 15 years of domain expertise across BFSI, E-commerce, Telecom, Healthcare, and emerging startups, we bring deep industry knowledge to every engagement. Our solutions are designed not just to reduce costs, but to create lasting competitive advantage through operational excellence.
            </p>
          </div>
          <div>
            <SectionHeading label="Our Vision" title="Shaping the Future of Work" centered={false} />
            <p className="body-text">
              We envision a world where intelligent automation and human expertise converge seamlessly to create extraordinary business outcomes. Axentra is building the bridge between today's operational challenges and tomorrow's possibilities.
            </p>
            <p className="body-text mt-4">
              As a brand by Dharitri Nexus, we are backed by a parent company that shares our commitment to sustainable innovation. Together, we are investing in AI-driven process optimization, green infrastructure, and workforce development programs that prepare our people — and our clients — for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <SectionHeading label="Our Values" title="What Drives Us" description="Six foundational values guide every interaction, decision, and solution we deliver." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card-hover">
                <h3 className="heading-3">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Let's Build Something Great Together</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Discover how Axentra can transform your operations.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
