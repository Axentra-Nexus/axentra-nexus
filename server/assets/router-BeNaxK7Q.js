import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const axentraLogo = "/axentra-nexus/assets/axentra-logo-ClU5eSRH.png";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md" : "border-b border-transparent bg-background/70 backdrop-blur-sm"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-max flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", onClick: () => setMobileOpen(false), children: [
            /* @__PURE__ */ jsx("img", { src: axentraLogo, alt: "Axentra Nexus logo", width: 64, height: 64, className: "h-16 w-16 object-contain" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-extrabold tracking-tight text-brand-blue", children: "Axentra" }),
              /* @__PURE__ */ jsx("span", { className: "-mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary", children: "Nexus" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-1 md:flex", children: [
            navLinks.map((link) => /* @__PURE__ */ jsx(
              Link,
              {
                to: link.to,
                className: `rounded-md px-4 py-2 text-sm font-medium transition-colors ${location.pathname === link.to ? "text-primary" : "text-foreground/70 hover:text-foreground"}`,
                children: link.label
              },
              link.to
            )),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "ml-3 inline-flex h-10 items-center rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]",
                children: "Partner With Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileOpen(!mobileOpen),
              className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden",
              "aria-label": "Toggle menu",
              children: mobileOpen ? /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
                /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
              ] }) : /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
              ] })
            }
          )
        ] }),
        mobileOpen && /* @__PURE__ */ jsxs("div", { className: "border-t border-border bg-background px-4 pb-6 pt-2 md:hidden", children: [
          navLinks.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              to: link.to,
              onClick: () => setMobileOpen(false),
              className: `block rounded-md px-4 py-3 text-sm font-medium ${location.pathname === link.to ? "text-primary" : "text-foreground/80"}`,
              children: link.label
            },
            link.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setMobileOpen(false),
              className: "mt-3 inline-flex h-11 w-full items-center justify-center rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground",
              children: "Partner With Us"
            }
          )
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-[oklch(0.18_0.02_260)] text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max section-padding", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: axentraLogo, alt: "Axentra Nexus logo", width: 48, height: 48, className: "h-12 w-12 object-contain", loading: "lazy" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-extrabold text-background", children: "Axentra" }),
            /* @__PURE__ */ jsx("span", { className: "-mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Nexus" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed opacity-70", children: "Premium BPO, lending and business solutions partner. Scaling enterprises with precision, speed, and intelligence." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider opacity-50", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm opacity-70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/inbound-customer-support", className: "hover:text-primary transition-colors", children: "Business Process Outsourcing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/lending", className: "hover:text-primary transition-colors", children: "Lending & Financial Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/digital-process", className: "hover:text-primary transition-colors", children: "Customer Experience" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/outbound-sales", className: "hover:text-primary transition-colors", children: "Sales & Collections" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider opacity-50", children: "Industries" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm opacity-70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/industries/bfsi", className: "hover:text-primary transition-colors", children: "BFSI" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/industries/ecommerce", className: "hover:text-primary transition-colors", children: "E-commerce" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/industries/telecom", className: "hover:text-primary transition-colors", children: "Telecom" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/industries/healthcare", className: "hover:text-primary transition-colors", children: "Fintech & Healthcare" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider opacity-50", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm opacity-70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:business@axentra.co.in", className: "hover:text-primary transition-colors", children: "business@axentra.co.in" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+918095122775", className: "hover:text-primary transition-colors", children: "+91-8095122775" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact Form" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 border-t border-background/10 pt-8 text-center text-xs opacity-50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Axentra Nexus. All rights reserved."
    ] })
  ] }) });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/918095122775",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.17_145)] shadow-xl ring-4 ring-[oklch(0.62_0.17_145/0.18)] transition-transform hover:scale-110",
      children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "28", viewBox: "0 0 24 24", fill: "white", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) })
    }
  );
}
const appCss = "/axentra-nexus/assets/styles-SqRFRSp3.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children: "Go home" }) })
  ] }) });
}
const Route$g = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      { name: "description", content: "Axentra Nexus is a premium BPO, lending and business solutions partner — scaling enterprises with precision, speed and intelligence." },
      { name: "author", content: "Axentra Nexus" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      { name: "twitter:title", content: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      { property: "og:description", content: "BPO | Lending | Customer Experience | Growth Solutions for the modern enterprise." },
      { name: "twitter:description", content: "BPO | Lending | Customer Experience | Growth Solutions for the modern enterprise." }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
}
const leadershipTeam = "/axentra-nexus/assets/leadership-team-yyEHkkMd.jpg";
const $$splitComponentImporter$f = () => import("./team-jbYm3Xp_.js");
const Route$f = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Meet Our Team — Founders & Directors | Axentra Nexus"
    }, {
      name: "description",
      content: "Meet the founders and directors of Axentra Nexus — seasoned leaders with 40+ combined years across BPO, Banking, Fintech, E-commerce and Customer Experience."
    }, {
      property: "og:title",
      content: "Meet Our Team — Axentra Nexus Leadership"
    }, {
      property: "og:description",
      content: "The founders and directors building Axentra Nexus — decades of cross-industry expertise in BPO, lending, fintech and CX."
    }, {
      property: "og:image",
      content: leadershipTeam
    }, {
      name: "twitter:image",
      content: leadershipTeam
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const partnership = "/axentra-nexus/assets/partnership-BhNwclx_.jpg";
const $$splitComponentImporter$e = () => import("./contact-Alh5MGMd.js");
const Route$e = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Axentra Nexus — Let's Talk Business"
    }, {
      name: "description",
      content: "Talk to Axentra Nexus about BPO, lending operations and customer experience. Email business@axentra.co.in or call +91-8095122775."
    }, {
      property: "og:title",
      content: "Contact Axentra Nexus"
    }, {
      property: "og:description",
      content: "Reach our team for tailored business solutions."
    }, {
      property: "og:image",
      content: partnership
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./about-BpZUzSIM.js");
const Route$d = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Axentra Nexus — Vision, Mission & Leadership"
    }, {
      name: "description",
      content: "Axentra Nexus is a premium BPO, lending and business solutions partner — built to scale enterprises with precision, speed and intelligence."
    }, {
      property: "og:title",
      content: "About Axentra Nexus"
    }, {
      property: "og:description",
      content: "Vision, mission and the people scaling enterprises with precision and intelligence."
    }, {
      property: "og:image",
      content: leadershipTeam
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const heroOffice = "/axentra-nexus/assets/hero-office-CTtrU2si.jpg";
const $$splitComponentImporter$c = () => import("./index-C6JRoH13.js");
const Route$c = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Axentra Nexus — Premium BPO, Lending & Business Solutions"
    }, {
      name: "description",
      content: "Scaling businesses with precision, speed and intelligence. BPO, Lending, Customer Experience and Growth Solutions for the modern enterprise."
    }, {
      property: "og:title",
      content: "Axentra Nexus — Premium BPO, Lending & Business Solutions"
    }, {
      property: "og:description",
      content: "BPO | Lending | Customer Experience | Growth Solutions"
    }, {
      property: "og:image",
      content: heroOffice
    }, {
      name: "twitter:image",
      content: heroOffice
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const bpoCallCenter = "/axentra-nexus/assets/bpo-call-center-Dxk_D5vl.jpg";
const $$splitComponentImporter$b = () => import("./services.index-0oOGZI7A.js");
const Route$b = createFileRoute("/services/")({
  head: () => ({
    meta: [{
      title: "Services — Axentra Nexus BPO, Lending & Business Solutions"
    }, {
      name: "description",
      content: "BPO, Lending & Financial Services Support, Customer Experience Management, and Sales & Collections — delivered with precision and scale."
    }, {
      property: "og:title",
      content: "Services — Axentra Nexus"
    }, {
      property: "og:description",
      content: "End-to-end BPO, lending, CX and sales solutions for the modern enterprise."
    }, {
      property: "og:image",
      content: bpoCallCenter
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const industriesHero = "/axentra-nexus/assets/industries-hero-BEhYMrNk.jpg";
const $$splitComponentImporter$a = () => import("./industries.index-UvXSFN16.js");
const Route$a = createFileRoute("/industries/")({
  head: () => ({
    meta: [{
      title: "Industries — Axentra Nexus Sector Expertise"
    }, {
      name: "description",
      content: "Axentra Nexus delivers tailored BPO, lending, and CX solutions across BFSI, E-commerce, Telecom, Healthcare, and Startups."
    }, {
      property: "og:title",
      content: "Industries — Axentra Nexus"
    }, {
      property: "og:description",
      content: "Sector-specific BPO and digital transformation solutions."
    }, {
      property: "og:image",
      content: industriesHero
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./services.outbound-sales-CdU1Kc-V.js");
const Route$9 = createFileRoute("/services/outbound-sales")({
  head: () => ({
    meta: [{
      title: "Outbound Sales & Collections — Axentra"
    }, {
      name: "description",
      content: "Data-driven outbound sales, lead generation, and collections services with full regulatory compliance."
    }, {
      property: "og:title",
      content: "Outbound Sales & Collections — Axentra"
    }, {
      property: "og:description",
      content: "Revenue-focused outbound campaigns that deliver measurable ROI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./services.lending-BJdYUWEu.js");
const Route$8 = createFileRoute("/services/lending")({
  head: () => ({
    meta: [{
      title: "Lending & Financial Services Support — Axentra Nexus"
    }, {
      name: "description",
      content: "Specialized lending operations for banks, NBFCs and fintechs — origination, underwriting support, KYC, servicing and collections."
    }, {
      property: "og:title",
      content: "Lending & Financial Services Support — Axentra Nexus"
    }, {
      property: "og:description",
      content: "Purpose-built operations for the lending lifecycle."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./services.inbound-customer-support-Dj5CYFtE.js");
const Route$7 = createFileRoute("/services/inbound-customer-support")({
  head: () => ({
    meta: [{
      title: "Inbound Customer Support — Axentra"
    }, {
      name: "description",
      content: "24/7 multilingual inbound customer support across voice, chat, email, and social channels."
    }, {
      property: "og:title",
      content: "Inbound Customer Support — Axentra"
    }, {
      property: "og:description",
      content: "Deliver exceptional customer experiences with Axentra's inbound support."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services.digital-process-fhHY-s_P.js");
const Route$6 = createFileRoute("/services/digital-process")({
  head: () => ({
    meta: [{
      title: "Digital Process Management — Axentra"
    }, {
      name: "description",
      content: "End-to-end workflow automation, RPA, AI analytics, and digital transformation solutions."
    }, {
      property: "og:title",
      content: "Digital Process Management — Axentra"
    }, {
      property: "og:description",
      content: "Transform your operations with intelligent digital process management."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services.back-office-CHnIzxrv.js");
const Route$5 = createFileRoute("/services/back-office")({
  head: () => ({
    meta: [{
      title: "Back Office Operations — Axentra"
    }, {
      name: "description",
      content: "Scalable back-office operations including document processing, data management, and reconciliation services."
    }, {
      property: "og:title",
      content: "Back Office Operations — Axentra"
    }, {
      property: "og:description",
      content: "Streamline your back-office with enterprise-scale process management."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./industries.telecom-B-MXfd0I.js");
const Route$4 = createFileRoute("/industries/telecom")({
  head: () => ({
    meta: [{
      title: "Telecom Solutions — Axentra"
    }, {
      name: "description",
      content: "Subscriber lifecycle management, technical support, and revenue assurance for telecom operators."
    }, {
      property: "og:title",
      content: "Telecom Solutions — Axentra"
    }, {
      property: "og:description",
      content: "End-to-end telecom BPO and customer lifecycle management."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./industries.startups-DAhWfFDR.js");
const Route$3 = createFileRoute("/industries/startups")({
  head: () => ({
    meta: [{
      title: "Startup Solutions — Axentra"
    }, {
      name: "description",
      content: "Flexible, cost-effective BPO solutions designed to scale with fast-growing startups."
    }, {
      property: "og:title",
      content: "Startup Solutions — Axentra"
    }, {
      property: "og:description",
      content: "BPO solutions built for startup speed and scale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./industries.healthcare-CGi3BNlB.js");
const Route$2 = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [{
      title: "Healthcare Solutions — Axentra"
    }, {
      name: "description",
      content: "HIPAA-compliant patient engagement, claims processing, and healthcare administration services."
    }, {
      property: "og:title",
      content: "Healthcare Solutions — Axentra"
    }, {
      property: "og:description",
      content: "Compliant healthcare BPO and patient experience solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./industries.ecommerce-nsfKrsyx.js");
const Route$1 = createFileRoute("/industries/ecommerce")({
  head: () => ({
    meta: [{
      title: "E-commerce Solutions — Axentra"
    }, {
      name: "description",
      content: "Scalable customer support, order management, and fulfillment operations for online retailers."
    }, {
      property: "og:title",
      content: "E-commerce Solutions — Axentra"
    }, {
      property: "og:description",
      content: "Scale your e-commerce operations with Axentra."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./industries.bfsi-DpH8Ralr.js");
const Route = createFileRoute("/industries/bfsi")({
  head: () => ({
    meta: [{
      title: "BFSI Solutions — Axentra"
    }, {
      name: "description",
      content: "Banking, financial services, and insurance BPO solutions with compliance-first operations."
    }, {
      property: "og:title",
      content: "BFSI Solutions — Axentra"
    }, {
      property: "og:description",
      content: "Compliance-first BPO solutions for banking and insurance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TeamRoute = Route$f.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$g
});
const ContactRoute = Route$e.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$g
});
const AboutRoute = Route$d.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const ServicesIndexRoute = Route$b.update({
  id: "/services/",
  path: "/services/",
  getParentRoute: () => Route$g
});
const IndustriesIndexRoute = Route$a.update({
  id: "/industries/",
  path: "/industries/",
  getParentRoute: () => Route$g
});
const ServicesOutboundSalesRoute = Route$9.update({
  id: "/services/outbound-sales",
  path: "/services/outbound-sales",
  getParentRoute: () => Route$g
});
const ServicesLendingRoute = Route$8.update({
  id: "/services/lending",
  path: "/services/lending",
  getParentRoute: () => Route$g
});
const ServicesInboundCustomerSupportRoute = Route$7.update({
  id: "/services/inbound-customer-support",
  path: "/services/inbound-customer-support",
  getParentRoute: () => Route$g
});
const ServicesDigitalProcessRoute = Route$6.update({
  id: "/services/digital-process",
  path: "/services/digital-process",
  getParentRoute: () => Route$g
});
const ServicesBackOfficeRoute = Route$5.update({
  id: "/services/back-office",
  path: "/services/back-office",
  getParentRoute: () => Route$g
});
const IndustriesTelecomRoute = Route$4.update({
  id: "/industries/telecom",
  path: "/industries/telecom",
  getParentRoute: () => Route$g
});
const IndustriesStartupsRoute = Route$3.update({
  id: "/industries/startups",
  path: "/industries/startups",
  getParentRoute: () => Route$g
});
const IndustriesHealthcareRoute = Route$2.update({
  id: "/industries/healthcare",
  path: "/industries/healthcare",
  getParentRoute: () => Route$g
});
const IndustriesEcommerceRoute = Route$1.update({
  id: "/industries/ecommerce",
  path: "/industries/ecommerce",
  getParentRoute: () => Route$g
});
const IndustriesBfsiRoute = Route.update({
  id: "/industries/bfsi",
  path: "/industries/bfsi",
  getParentRoute: () => Route$g
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  TeamRoute,
  IndustriesBfsiRoute,
  IndustriesEcommerceRoute,
  IndustriesHealthcareRoute,
  IndustriesStartupsRoute,
  IndustriesTelecomRoute,
  ServicesBackOfficeRoute,
  ServicesDigitalProcessRoute,
  ServicesInboundCustomerSupportRoute,
  ServicesLendingRoute,
  ServicesOutboundSalesRoute,
  IndustriesIndexRoute,
  ServicesIndexRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({
  error,
  reset
}) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  bpoCallCenter as b,
  heroOffice as h,
  industriesHero as i,
  leadershipTeam as l,
  partnership as p,
  router as r
};
