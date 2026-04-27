import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";
const RECIPIENT = "business@axentra.co.in";
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`);
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-brand opacity-15" }),
      /* @__PURE__ */ jsxs("div", { className: "container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("h1", { className: "heading-1 text-background", children: [
          "Let's ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "start a conversation" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-lg leading-relaxed text-background/80", children: "Whether you're optimizing operations, launching a new product, or scaling a customer experience program — our team is ready to help." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-max grid gap-12 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Get in Touch" }),
        /* @__PURE__ */ jsx("p", { className: "body-text mt-4", children: "Fill out the form and our team will get back to you within 24 hours." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-5", children: [
          /* @__PURE__ */ jsxs("a", { href: `mailto:${RECIPIENT}`, className: "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold text-foreground group-hover:text-primary", children: RECIPIENT })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "tel:+918095122775", className: "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Phone / WhatsApp" }),
              /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold text-foreground group-hover:text-primary", children: "+91-8095122775" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Headquarters" }),
              /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold text-foreground", children: "India" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-md sm:p-10", children: submitted ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-14 w-14 text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 text-2xl font-bold text-foreground", children: "Message Ready to Send" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-sm text-sm text-muted-foreground", children: [
          "Your email client should have opened with your message pre-filled to ",
          RECIPIENT,
          ". If not, please email us directly."
        ] })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "mb-1.5 block text-sm font-semibold text-foreground", children: "Full Name" }),
          /* @__PURE__ */ jsx("input", { id: "name", name: "name", type: "text", required: true, className: "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "John Doe" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "mb-1.5 block text-sm font-semibold text-foreground", children: "Phone" }),
            /* @__PURE__ */ jsx("input", { id: "phone", name: "phone", type: "tel", className: "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "+91 98765 43210" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "mb-1.5 block text-sm font-semibold text-foreground", children: "Email" }),
            /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true, className: "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "john@company.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "mb-1.5 block text-sm font-semibold text-foreground", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", rows: 5, required: true, className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Tell us about your business and what you'd like to explore..." })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.01]", children: [
          "Send Message ",
          /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
          "By submitting, your default email app will open a pre-filled message to ",
          RECIPIENT,
          "."
        ] })
      ] }) }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
