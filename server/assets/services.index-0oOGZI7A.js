import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Headphones, Banknote, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { b as bpoCallCenter } from "./router-BeNaxK7Q.js";
import { l as lendingFinance, c as cxAgent, s as salesGrowth } from "./sales-growth-Cyf-Nmdc.js";
import "react";
const services = [{
  title: "Business Process Outsourcing",
  desc: "Streamline operations across customer support, back office, document processing and compliance with our enterprise-grade BPO programs.",
  bullets: ["24×7 multilingual operations", "Voice, chat, email & social channels", "Document processing & data entry", "Quality and compliance frameworks"],
  icon: Headphones,
  image: bpoCallCenter,
  to: "/services/inbound-customer-support"
}, {
  title: "Lending & Financial Services Support",
  desc: "Purpose-built operations for banks, NBFCs and fintechs — from origination and underwriting support to KYC, servicing and collections.",
  bullets: ["Loan origination & underwriting support", "KYC, AML & verification", "Customer servicing & disbursal ops", "Early-stage and late-stage collections"],
  icon: Banknote,
  image: lendingFinance,
  to: "/services/lending"
}, {
  title: "Customer Experience Management",
  desc: "Omnichannel CX programs designed around your customer journey — measured by NPS, CSAT and lifetime value, not just call volumes.",
  bullets: ["Journey mapping & CX design", "Omnichannel contact center", "Voice of customer analytics", "AI-assisted agent workflows"],
  icon: Sparkles,
  image: cxAgent,
  to: "/services/digital-process"
}, {
  title: "Sales & Collections",
  desc: "Revenue and recovery operations powered by data, compliant outreach and high-performing teams trained for your products.",
  bullets: ["Inside sales & lead qualification", "Cross-sell & upsell programs", "Compliant collections operations", "Performance dashboards & reporting"],
  icon: TrendingUp,
  image: salesGrowth,
  to: "/services/outbound-sales"
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-20" }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: "Our Services" }),
        /* @__PURE__ */ jsxs("h1", { className: "heading-1 text-background", children: [
          "Comprehensive ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Business Solutions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-lg leading-relaxed text-background/80", children: "Four integrated practices designed to scale your operations with precision, speed and intelligence." })
      ] })
    ] }),
    services.map((s, idx) => {
      const Icon = s.icon;
      const reverse = idx % 2 === 1;
      return /* @__PURE__ */ jsx("section", { className: `section-padding ${idx % 2 === 0 ? "bg-background" : "gradient-brand-soft"}`, children: /* @__PURE__ */ jsxs("div", { className: "container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20", children: [
        /* @__PURE__ */ jsxs("div", { className: reverse ? "lg:order-2" : "", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-md", children: /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: s.desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-base text-foreground", children: b })
          ] }, b)) }),
          /* @__PURE__ */ jsxs(Link, { to: s.to, className: "mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]", children: [
            "Explore in detail ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `relative ${reverse ? "lg:order-1" : ""}`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" }),
          /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, width: 1280, height: 896, loading: "lazy", className: "relative w-full rounded-3xl object-cover shadow-xl" })
        ] })
      ] }) }, s.title);
    }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden gradient-brand text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-max px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold sm:text-4xl", children: "Need a Customized Solution?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-lg opacity-90", children: "Our experts will design a tailored engagement model for your business." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]", children: [
        "Talk to an Expert ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
