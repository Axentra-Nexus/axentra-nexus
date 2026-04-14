import { Link } from "@tanstack/react-router";

interface DetailPageProps {
  label: string;
  title: string;
  intro: string;
  overview: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  ctaText?: string;
}

export function ServiceDetailPage({ label, title, intro, overview, features, benefits, ctaText = "Get Started with This Service" }: DetailPageProps) {
  return (
    <>
      <section className="section-padding bg-foreground text-background">
        <div className="container-max">
          <span className="mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">{label}</span>
          <h1 className="heading-1 text-background">{title}</h1>
          <p className="body-text mt-6 max-w-3xl text-background/80">{intro}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="heading-2">Overview</h2>
          <p className="body-text mt-4">{overview}</p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <h2 className="heading-2 mb-8 text-center">Key Features</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="card-hover">
                <h3 className="heading-3">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="heading-2 mb-6">Benefits</h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">✓</span>
                <span className="body-text">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">{ctaText}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Our team will design a custom solution tailored to your needs.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

interface IndustryDetailPageProps {
  label: string;
  title: string;
  intro: string;
  challenges: string[];
  solutions: { title: string; desc: string }[];
  benefits: string[];
}

export function IndustryDetailPage({ label, title, intro, challenges, solutions, benefits }: IndustryDetailPageProps) {
  return (
    <>
      <section className="section-padding bg-foreground text-background">
        <div className="container-max">
          <span className="mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70">{label}</span>
          <h1 className="heading-1 text-background">{title}</h1>
          <p className="body-text mt-6 max-w-3xl text-background/80">{intro}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="heading-2 mb-6">Industry Challenges</h2>
          <ul className="space-y-3">
            {challenges.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs text-destructive">!</span>
                <span className="body-text">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-max">
          <h2 className="heading-2 mb-8 text-center">How Axentra Solves Them</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.title} className="card-hover">
                <h3 className="heading-3">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h2 className="heading-2 mb-6">Benefits</h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">✓</span>
                <span className="body-text">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your {title.split(" — ")[0]} Operations?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Let's discuss a tailored solution for your business.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
