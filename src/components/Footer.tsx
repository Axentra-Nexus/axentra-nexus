import { Link } from "@tanstack/react-router";
import axentraLogo from "@/assets/axentra-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-max section-padding">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={axentraLogo} alt="Axentra logo" width={36} height={36} className="brightness-0 invert" loading="lazy" />
              <span className="text-lg font-bold">Axentra</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Driving operational excellence through intelligent business process outsourcing and digital transformation.
            </p>
            <p className="mt-3 text-xs opacity-50">
              Axentra is a brand by Dharitri Nexus
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/services/inbound-customer-support" className="hover:opacity-100 transition-opacity">Inbound Customer Support</Link></li>
              <li><Link to="/services/outbound-sales" className="hover:opacity-100 transition-opacity">Outbound Sales & Collections</Link></li>
              <li><Link to="/services/back-office" className="hover:opacity-100 transition-opacity">Back Office Operations</Link></li>
              <li><Link to="/services/digital-process" className="hover:opacity-100 transition-opacity">Digital Process Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Industries</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/industries/bfsi" className="hover:opacity-100 transition-opacity">BFSI</Link></li>
              <li><Link to="/industries/ecommerce" className="hover:opacity-100 transition-opacity">E-commerce</Link></li>
              <li><Link to="/industries/telecom" className="hover:opacity-100 transition-opacity">Telecom</Link></li>
              <li><Link to="/industries/healthcare" className="hover:opacity-100 transition-opacity">Healthcare</Link></li>
              <li><Link to="/industries/startups" className="hover:opacity-100 transition-opacity">Startups</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>axentra.cx@gmail.com</li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Axentra. All rights reserved. A brand by Dharitri Nexus.
        </div>
      </div>
    </footer>
  );
}
