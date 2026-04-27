import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Banknote, Sparkles, TrendingUp, ShieldCheck, Users, Layers, Cpu, Globe2, BarChart3 } from "lucide-react";
import { h as heroOffice, l as leadershipTeam, b as bpoCallCenter, p as partnership } from "./router-BeNaxK7Q.js";
import { l as lendingFinance, c as cxAgent, s as salesGrowth } from "./sales-growth-Cyf-Nmdc.js";
import "react";
const globalConnectivity = "/axentra-nexus/assets/global-connectivity-bpuXHWTJ.jpg";
const services = [{
  title: "Business Process Outsourcing",
  desc: "End-to-end BPO services that streamline operations, reduce costs, and free your teams to focus on growth.",
  icon: Headphones,
  image: bpoCallCenter,
  to: "/services/inbound-customer-support"
}, {
  title: "Lending & Financial Services",
  desc: "Specialized loan operations, underwriting support, KYC, and collections for banks, NBFCs and fintechs.",
  icon: Banknote,
  image: lendingFinance,
  to: "/services/lending"
}, {
  title: "Customer Experience Management",
  desc: "Omnichannel CX programs that turn every customer interaction into a measurable loyalty moment.",
  icon: Sparkles,
  image: cxAgent,
  to: "/services/digital-process"
}, {
  title: "Sales & Collections",
  desc: "Compliant, data-driven outbound campaigns that grow revenue and accelerate recoveries.",
  icon: TrendingUp,
  image: salesGrowth,
  to: "/services/outbound-sales"
}];
const industries = [{
  title: "BFSI",
  desc: "Banks, insurance & NBFCs",
  to: "/industries/bfsi"
}, {
  title: "E-commerce",
  desc: "D2C & marketplaces",
  to: "/industries/ecommerce"
}, {
  title: "Fintech",
  desc: "Lending & payments",
  to: "/industries/healthcare"
}, {
  title: "Telecom",
  desc: "Carriers & ISPs",
  to: "/industries/telecom"
}];
const trust = [{
  icon: ShieldCheck,
  value: "Day 1",
  label: "Founder-Led Delivery"
}, {
  icon: Users,
  value: "Hand-Picked",
  label: "Premium Talent Pool"
}, {
  icon: Layers,
  value: "24×7",
  label: "Always-On Operations"
}, {
  icon: Cpu,
  value: "AI-First",
  label: "Tech-Driven Processes"
}];
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background", children: [
      /* @__PURE__ */ jsx("img", { src: heroOffice, alt: "Modern corporate office with business team", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover opacity-30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.02_260)] via-[oklch(0.16_0.02_260/0.85)] to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "container-max relative px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
        /* @__PURE__ */ jsxs("span", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          " Premium Business Solutions Partner"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl", children: [
          "Scaling Businesses with",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Precision, Speed" }),
          " ",
          "and Intelligence"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-background/80 sm:text-xl", children: [
          "BPO ",
          /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-50", children: "|" }),
          " Lending ",
          /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-50", children: "|" }),
          " Customer Experience ",
          /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-50", children: "|" }),
          " Growth Solutions"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex h-12 items-center gap-2 rounded-full gradient-brand px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]", children: [
            "Partner With Us ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex h-12 items-center rounded-full border border-background/30 bg-background/5 px-8 text-sm font-semibold backdrop-blur transition-colors hover:bg-background/10", children: "Explore Services" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "About Axentra Nexus" }),
        /* @__PURE__ */ jsxs("h2", { className: "heading-2 mt-2", children: [
          "A next-generation business solutions company helping organizations ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "scale efficiently" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-6", children: "Axentra Nexus partners with banks, fintechs, e-commerce leaders and high-growth enterprises to design, run and optimize the operations that power their business. We blend domain expertise, premium talent and intelligent automation to deliver outcomes that move the needle." }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "From customer experience to lending operations and back-office excellence — we partner with ambitious leadership teams ready to scale with confidence." }),
        /* @__PURE__ */ jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all", children: [
          "Learn more about us ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" }),
        /* @__PURE__ */ jsx("img", { src: leadershipTeam, alt: "Axentra Nexus leadership team in strategic discussion", width: 1280, height: 896, loading: "lazy", className: "relative w-full rounded-3xl object-cover shadow-xl" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding gradient-brand-soft", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "What We Do" }),
        /* @__PURE__ */ jsxs("h2", { className: "heading-2 mt-2", children: [
          "Four pillars. ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "One growth engine." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "Built for enterprises that demand precision, speed and intelligence at scale." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: services.map((s) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxs(Link, { to: s.to, className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
            /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, width: 1280, height: 896, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.02_260/0.6)] to-transparent" }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/95 text-primary shadow-md backdrop-blur", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground transition-colors group-hover:text-primary", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
            /* @__PURE__ */ jsxs("span", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary", children: [
              "Learn more ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] })
          ] })
        ] }, s.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" }),
        /* @__PURE__ */ jsx("img", { src: salesGrowth, alt: "Business team reviewing growth analytics", width: 1280, height: 896, loading: "lazy", className: "relative w-full rounded-3xl object-cover shadow-xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "Why Choose Us" }),
        /* @__PURE__ */ jsxs("h2", { className: "heading-2 mt-2", children: [
          "Enterprise-grade outcomes, ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "delivered with discipline." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "We don't just run processes — we engineer them. Every engagement is built on rigorous SLAs, premium talent and a tech-first operating model." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: trust.map((t) => {
          const Icon = t.icon;
          return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-extrabold text-brand-blue", children: t.value }),
              /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-sm text-muted-foreground", children: t.label })
            ] })
          ] }, t.label);
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding gradient-brand-soft", children: /* @__PURE__ */ jsxs("div", { className: "container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "Industries Served" }),
        /* @__PURE__ */ jsxs("h2", { className: "heading-2 mt-2", children: [
          "Deep expertise across ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "regulated, fast-moving sectors." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "We combine sector know-how with proven playbooks to deliver measurable impact from day one." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: industries.map((ind) => /* @__PURE__ */ jsxs(Link, { to: ind.to, className: "group flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-foreground group-hover:text-primary", children: ind.title }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: ind.desc })
          ] }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-1" })
        ] }, ind.title)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-15 blur-2xl" }),
        /* @__PURE__ */ jsx("img", { src: globalConnectivity, alt: "Global digital connectivity", width: 1280, height: 896, loading: "lazy", className: "relative w-full rounded-3xl object-cover shadow-xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-2xl ring-1 ring-border sm:block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Globe2, { className: "h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-extrabold text-brand-blue", children: "Global" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Delivery-Ready" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: partnership, alt: "Business partnership handshake", width: 1920, height: 800, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-95" }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative px-4 py-20 text-center text-primary-foreground sm:px-6 sm:py-28 lg:px-8", children: [
        /* @__PURE__ */ jsx(BarChart3, { className: "mx-auto mb-6 h-12 w-12 opacity-90" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl", children: "Let's Build Scalable Operations Together" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg opacity-90", children: "Talk to our team about a tailored engagement model designed around your growth goals." }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]", children: [
          "Get in Touch ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] });
}
export {
  HomePage as component
};
