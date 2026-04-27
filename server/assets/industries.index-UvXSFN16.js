import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Landmark, ShoppingBag, Signal, HeartPulse, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { i as industriesHero } from "./router-BeNaxK7Q.js";
import "react";
const bfsiImg = "/axentra-nexus/assets/industry-bfsi-BPGwLJvQ.jpg";
const ecommerceImg = "/axentra-nexus/assets/industry-ecommerce-aPHoRLky.jpg";
const telecomImg = "/axentra-nexus/assets/industry-telecom-DiVR9z9I.jpg";
const healthcareImg = "/axentra-nexus/assets/industry-healthcare-BKp9flXB.jpg";
const startupsImg = "/axentra-nexus/assets/industry-startups-CYvEhFEy.jpg";
const industries = [{
  title: "BFSI",
  tagline: "Banking, Financial Services & Insurance",
  desc: "Compliance-first operations across retail banking, NBFCs, insurance and capital markets — built for regulated environments where accuracy and security are non-negotiable.",
  highlights: ["KYC, AML & onboarding", "Loan & policy servicing", "Fraud & dispute management", "RBI / IRDAI-aligned controls"],
  metric: {
    value: "99.5%",
    label: "Process accuracy"
  },
  to: "/industries/bfsi",
  image: bfsiImg,
  Icon: Landmark
}, {
  title: "E-commerce",
  tagline: "Online Retail & Marketplaces",
  desc: "Elastic customer support, order management and returns operations that scale 5–10x during sale events without breaking SLAs or experience quality.",
  highlights: ["24/7 omnichannel support", "Order & returns management", "Marketplace operations", "Cart abandonment recovery"],
  metric: {
    value: "10x",
    label: "Peak season scale"
  },
  to: "/industries/ecommerce",
  image: ecommerceImg,
  Icon: ShoppingBag
}, {
  title: "Telecom",
  tagline: "Connectivity & Digital Services",
  desc: "Subscriber lifecycle, multi-tier technical support and revenue assurance for telcos navigating churn, outages and the shift to digital services.",
  highlights: ["Subscriber lifecycle management", "L1–L3 technical support", "Revenue assurance", "Outage surge handling"],
  metric: {
    value: "85%+",
    label: "First-call resolution"
  },
  to: "/industries/telecom",
  image: telecomImg,
  Icon: Signal
}, {
  title: "Healthcare",
  tagline: "Patient-Centric Operations",
  desc: "HIPAA-aligned patient engagement, claims processing and revenue cycle support for hospitals, payers, pharma and healthtech innovators.",
  highlights: ["Patient engagement & scheduling", "Claims & denial management", "Revenue cycle management", "Provider credentialing"],
  metric: {
    value: "100%",
    label: "HIPAA compliance"
  },
  to: "/industries/healthcare",
  image: healthcareImg,
  Icon: HeartPulse
}, {
  title: "Startups",
  tagline: "Built for Speed & Scale",
  desc: "Flexible engagement models that let early-stage and growth-stage companies launch enterprise-grade operations in weeks, not quarters.",
  highlights: ["2-week go-live", "5 to 500+ agent elasticity", "Full-stack support", "Founder-grade analytics"],
  metric: {
    value: "2 wks",
    label: "To go live"
  },
  to: "/industries/startups",
  image: startupsImg,
  Icon: Rocket
}];
function IndustriesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-foreground text-background", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: industriesHero, alt: "Industries served by Axentra Nexus", className: "h-full w-full object-cover opacity-30", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-foreground/60" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-5 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: "Industries" }),
        /* @__PURE__ */ jsxs("h1", { className: "heading-1 max-w-4xl text-background", children: [
          "Sector-Specific Expertise, ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand bg-clip-text", children: "Engineered for Outcomes" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-6 max-w-3xl text-background/80", children: "Every industry has unique regulatory, operational and customer-experience demands. Axentra Nexus brings deep domain knowledge and tailored playbooks to BFSI, E-commerce, Telecom, Healthcare and high-growth Startups." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-3", children: industries.map((ind) => /* @__PURE__ */ jsxs("a", { href: `#${ind.title.toLowerCase()}`, className: "group inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-medium text-background/90 backdrop-blur transition-all hover:border-background/40 hover:bg-background/10", children: [
          /* @__PURE__ */ jsx(ind.Icon, { className: "h-4 w-4 text-primary" }),
          ind.title
        ] }, ind.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container-max grid grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8", children: [{
      v: "5+",
      l: "Industries we serve"
    }, {
      v: "Founder-Led",
      l: "Engagement model"
    }, {
      v: "White-Glove",
      l: "Onboarding promise"
    }, {
      v: "24/7",
      l: "Always-on coverage"
    }].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-gradient-brand sm:text-4xl", children: s.v }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.l })
    ] }, s.l)) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsx("div", { className: "container-max space-y-24 lg:space-y-32", children: industries.map((ind, i) => {
      const reverse = i % 2 === 1;
      return /* @__PURE__ */ jsxs("article", { id: ind.title.toLowerCase(), className: "grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: `relative ${reverse ? "lg:order-2" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-[0_25px_60px_-20px_rgba(15,23,42,0.25)]", children: [
            /* @__PURE__ */ jsx("img", { src: ind.image, alt: `${ind.title} industry — ${ind.tagline}`, className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105", width: 1280, height: 896, loading: "lazy" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-gradient-brand", children: ind.metric.value }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: ind.metric.label })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: reverse ? "lg:order-1" : "", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary", children: [
            /* @__PURE__ */ jsx(ind.Icon, { className: "h-3.5 w-3.5" }),
            ind.tagline
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mt-4", children: ind.title }),
          /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: ind.desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: ind.highlights.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: h })
          ] }, h)) }),
          /* @__PURE__ */ jsxs(Link, { to: ind.to, className: "group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:gap-3 hover:bg-primary", children: [
            "Explore ",
            ind.title,
            " solutions",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] })
        ] })
      ] }, ind.title);
    }) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "gradient-brand", children: /* @__PURE__ */ jsxs("div", { className: "container-max px-4 py-20 text-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white sm:text-4xl lg:text-5xl", children: "Don't See Your Industry?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-lg text-white/90", children: "We work across sectors — from logistics and EdTech to energy and SaaS. Let's design a tailored operations partnership for your business." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-foreground shadow-lg transition-all hover:gap-3 hover:shadow-xl", children: [
        "Talk to Our Team",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) })
  ] });
}
export {
  IndustriesPage as component
};
