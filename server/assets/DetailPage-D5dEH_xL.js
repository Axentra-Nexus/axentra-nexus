import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function ServiceDetailPage({ label, title, intro, overview, features, benefits, ctaText = "Get Started with This Service" }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70", children: label }),
      /* @__PURE__ */ jsx("h1", { className: "heading-1 text-background", children: title }),
      /* @__PURE__ */ jsx("p", { className: "body-text mt-6 max-w-3xl text-background/80", children: intro })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "container-max max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Overview" }),
      /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: overview })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-8 text-center", children: "Key Features" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "card-hover", children: [
        /* @__PURE__ */ jsx("h3", { className: "heading-3", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "container-max max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-6", children: "Benefits" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary", children: "✓" }),
        /* @__PURE__ */ jsx("span", { className: "body-text", children: b })
      ] }, b)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: ctaText }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-lg opacity-90", children: "Our team will design a custom solution tailored to your needs." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90", children: "Contact Us" })
    ] }) })
  ] });
}
function IndustryDetailPage({ label, title, intro, challenges, solutions, benefits }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider opacity-70", children: label }),
      /* @__PURE__ */ jsx("h1", { className: "heading-1 text-background", children: title }),
      /* @__PURE__ */ jsx("p", { className: "body-text mt-6 max-w-3xl text-background/80", children: intro })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "container-max max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-6", children: "Industry Challenges" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: challenges.map((c) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs text-destructive", children: "!" }),
        /* @__PURE__ */ jsx("span", { className: "body-text", children: c })
      ] }, c)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-8 text-center", children: "How Axentra Solves Them" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: solutions.map((s) => /* @__PURE__ */ jsxs("div", { className: "card-hover", children: [
        /* @__PURE__ */ jsx("h3", { className: "heading-3", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "container-max max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-6", children: "Benefits" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary", children: "✓" }),
        /* @__PURE__ */ jsx("span", { className: "body-text", children: b })
      ] }, b)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-max px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold sm:text-4xl", children: [
        "Ready to Transform Your ",
        title.split(" — ")[0],
        " Operations?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-lg opacity-90", children: "Let's discuss a tailored solution for your business." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-8 inline-flex h-12 items-center rounded-md bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-background/90", children: "Contact Us" })
    ] }) })
  ] });
}
export {
  IndustryDetailPage as I,
  ServiceDetailPage as S
};
