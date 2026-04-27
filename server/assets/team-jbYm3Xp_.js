import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, Mail, Globe } from "lucide-react";
const ashwini = "/axentra-nexus/assets/team-ashwini-TWndTEMw.jpg";
const saivijay = "/axentra-nexus/assets/team-saivijay-DWvky_jd.jpg";
const nithin = "/axentra-nexus/assets/team-nithin-Bgbw4aPK.jpg";
const rohith = "/axentra-nexus/assets/team-rohith-C-5MRABT.jpg";
const founders = [{
  name: "Nithin Rao",
  role: "Co-Founder",
  image: nithin,
  years: "14+ yrs",
  short: "Banking, Finance, E-commerce & BPO",
  bio: "An MBA in Systems & Operations Management, Nithin has spent over fourteen years building and leading large-scale operations across Banking, Financial Services, E-commerce and BPO. He has architected onshore and offshore delivery models, run multi-hundred-seat contact centers, and led digital transformation programs that combine process rigor with measurable cost-to-serve impact. His operating playbook — built on Six Sigma discipline, workforce analytics and customer-obsessed design — anchors how Axentra Nexus designs every engagement, from pilot to enterprise scale.",
  expertise: ["Banking & Financial Services", "BPO Operations", "E-commerce Support", "Six Sigma & Process Design", "Workforce Management", "Digital Transformation"],
  education: "MBA — Systems & Operations Management"
}, {
  name: "C Sai Vijay Rahul",
  role: "Co-Founder",
  image: saivijay,
  years: "8+ yrs",
  short: "Business Management & Project Delivery",
  bio: "Sai Vijay's career spans the music industry, hospitality business management and project management consulting. This unique blend gives him a sharp eye for client experience, brand-led storytelling and disciplined project execution — the cultural backbone of Axentra Nexus.",
  expertise: ["Business Management", "Hospitality Operations", "Project Management", "Brand & Culture", "Client Delivery"]
}];
const directors = [{
  name: "Ashwini Holla",
  role: "Director",
  image: ashwini,
  years: "10+ yrs",
  short: "Customer Experience & Business Support",
  bio: "Ashwini brings over a decade of hands-on leadership in business support and customer experience operations. She has scaled CX programs across E-commerce, Apparel and Marketing — building teams that consistently deliver measurable improvements in CSAT, retention and operational efficiency.",
  expertise: ["E-commerce Operations", "Apparel & Retail", "Marketing Ops", "Customer Experience", "Team Scaling"]
}, {
  name: "Rohith C",
  role: "Director",
  image: rohith,
  years: "9+ yrs",
  short: "Banking & Fintech Strategy",
  bio: "An MBA from Italy with a global outlook, Rohith has spent nine years across Banking and Fintech — partnering with lenders, payment platforms and digital-first NBFCs to build scalable customer and risk operations. He brings international best practices and a sharp commercial lens to every Axentra engagement.",
  expertise: ["Retail & Digital Banking", "Fintech Operations", "Lending & Risk Ops", "International Best Practices", "Strategy & GTM"],
  education: "MBA — Italy"
}];
function MemberCard({
  member
}) {
  return /* @__PURE__ */ jsx("article", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-7", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
      /* @__PURE__ */ jsx("div", { className: "relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-card sm:h-32 sm:w-32", children: /* @__PURE__ */ jsx("img", { src: member.image, alt: `${member.name}, ${member.role} at Axentra Nexus`, width: 256, height: 256, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-2.5 w-2.5" }),
        " ",
        member.years
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: member.role }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 text-2xl font-bold leading-tight text-foreground", children: member.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-muted-foreground", children: member.short })
      ] }),
      member.education && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary", children: [
        /* @__PURE__ */ jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
        " ",
        member.education
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: member.bio }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "h-3.5 w-3.5 text-primary" }),
          " Expertise"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: member.expertise.map((tag) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80", children: tag }, tag)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
        /* @__PURE__ */ jsx("a", { href: "mailto:business@axentra.co.in", className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary", "aria-label": `Email ${member.name}`, children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary", "aria-label": `${member.name} on LinkedIn`, children: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }) })
      ] })
    ] })
  ] }) });
}
function TeamPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-15" }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: "Our Team" }),
        /* @__PURE__ */ jsxs("h1", { className: "heading-1 text-background", children: [
          "The minds behind ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Axentra Nexus" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-lg leading-relaxed text-background/80", children: "A founding team with 40+ combined years across BPO, Banking, Fintech, E-commerce and Customer Experience — building Axentra Nexus to be the operating partner the modern enterprise deserves." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid max-w-2xl grid-cols-3 gap-4", children: [{
          k: "40+",
          v: "Years combined"
        }, {
          k: "4",
          v: "Industry verticals"
        }, {
          k: "2",
          v: "MBAs on the board"
        }].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-background/15 bg-background/5 p-4 backdrop-blur", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-background", children: s.k }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs font-medium uppercase tracking-wider text-background/70", children: s.v })
        ] }, s.v)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "Founders" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 mt-2", children: "The vision, the operators" }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "The founders set the tone for everything Axentra Nexus stands for — clarity in execution, obsession with client outcomes, and a culture built around the people who do the work." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: founders.map((m) => /* @__PURE__ */ jsx(MemberCard, { member: m }, m.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "container-max", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "Directors" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 mt-2", children: "Senior leadership on the board" }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "Two seasoned directors with deep delivery experience across Banking, Fintech, E-commerce and BPO — the operating muscle behind every engagement we take on." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: directors.map((m) => /* @__PURE__ */ jsx(MemberCard, { member: m, featured: true }, m.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-max", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-[oklch(0.16_0.02_260)] p-10 text-background shadow-xl sm:p-14", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold sm:text-4xl", children: "Want to work directly with our founders?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-background/80", children: "As a young, founder-led firm, every early client gets direct access to the leadership team — not a layered account hierarchy." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]", children: [
          "Talk to the founders ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  TeamPage as component
};
