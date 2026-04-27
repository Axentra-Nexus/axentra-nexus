import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Target, Eye, Award, Sparkles, Users, Heart, ArrowRight } from "lucide-react";
import { l as leadershipTeam, b as bpoCallCenter, p as partnership } from "./router-BeNaxK7Q.js";
import "react";
const values = [{
  icon: Award,
  title: "Excellence",
  desc: "Six Sigma rigor and a relentless pursuit of better — in every process, every day."
}, {
  icon: Sparkles,
  title: "Innovation",
  desc: "AI, automation and analytics embedded into operations — not bolted on."
}, {
  icon: Users,
  title: "People First",
  desc: "We invest in talent, training and culture to keep our delivery world-class."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-15" }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: "About Us" }),
        /* @__PURE__ */ jsxs("h1", { className: "heading-1 text-background", children: [
          "A premium operating partner for the ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "modern enterprise" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-lg leading-relaxed text-background/80", children: "Axentra Nexus is a next-generation business solutions company helping organizations scale efficiently — across BPO, lending and customer experience." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" }),
        /* @__PURE__ */ jsx("img", { src: leadershipTeam, alt: "Axentra Nexus leadership team", width: 1280, height: 896, loading: "lazy", className: "relative w-full rounded-3xl object-cover shadow-xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "Our Story" }),
        /* @__PURE__ */ jsxs("h2", { className: "heading-2 mt-2", children: [
          "Built by operators, ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "for operators." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "Axentra Nexus was founded with a clear conviction: enterprises deserve an outsourcing partner that thinks like an owner. We bring together leaders from BFSI, fintech, e-commerce and customer experience to architect operating models that don't just cut cost — they create competitive advantage." }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "We're built for high-growth brands and regulated enterprises with one playbook: premium talent, deep domain training, intelligent technology and an obsession with measurable outcomes — and we're ready to make your business our flagship engagement." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding gradient-brand-soft", children: /* @__PURE__ */ jsxs("div", { className: "container-max grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-10 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-md", children: /* @__PURE__ */ jsx(Target, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "To empower enterprises with intelligent, technology-enabled operations — so they can focus on growth, innovation and the customers they serve." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-10 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-md", children: /* @__PURE__ */ jsx(Eye, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground", children: "Our Vision" }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "To be the most trusted operating partner for high-growth and regulated enterprises — globally recognized for precision, speed and intelligence." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "What Drives Us" }),
        /* @__PURE__ */ jsxs("h2", { className: "heading-2 mt-2", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Core Values" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        values.map((v) => {
          const Icon = v.icon;
          return /* @__PURE__ */ jsxs("div", { className: "card-hover", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "heading-3", children: v.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: v.desc })
          ] }, v.title);
        }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 grid items-center gap-12 lg:grid-cols-2 lg:gap-20 mt-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "Our Culture" }),
            /* @__PURE__ */ jsxs("h3", { className: "heading-2 mt-2", children: [
              "A ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "people-first" }),
              " operating model"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "Our delivery quality starts with our people. We hire for ownership, train for depth and reward outcomes — building teams ready to run mission-critical operations from day one." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: "Inclusion, well-being and continuous learning at the core." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" }),
            /* @__PURE__ */ jsx("img", { src: bpoCallCenter, alt: "Axentra Nexus operations team", width: 1280, height: 896, loading: "lazy", className: "relative w-full rounded-3xl object-cover shadow-xl" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: partnership, alt: "Business partnership", width: 1920, height: 800, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-95" }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative px-4 py-20 text-center text-primary-foreground sm:px-6 sm:py-24 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold sm:text-4xl", children: "Let's Build Something Great Together" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-lg opacity-90", children: "Discover how Axentra Nexus can transform your operations." }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]", children: [
          "Get in Touch ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
