import { Link } from "@tanstack/react-router";
import axentraLogo from "@/assets/axentra-mark.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.18_0.02_260)] text-background">
      <div className="container-max section-padding">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={axentraLogo} alt="Axentra Nexus logo" width={48} height={48} className="h-12 w-12 object-contain" loading="lazy" />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold text-background">Axentra</span>
                <span className="-mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Nexus</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed opacity-70">
              Premium BPO, lending and business solutions partner. Scaling enterprises with precision, speed, and intelligence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Services</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/services/inbound-customer-support" className="hover:text-primary transition-colors">Business Process Outsourcing</Link></li>
              <li><Link to="/services/lending" className="hover:text-primary transition-colors">Lending & Financial Services</Link></li>
              <li><Link to="/services/digital-process" className="hover:text-primary transition-colors">Customer Experience</Link></li>
              <li><Link to="/services/outbound-sales" className="hover:text-primary transition-colors">Sales & Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Industries</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/industries/bfsi" className="hover:text-primary transition-colors">BFSI</Link></li>
              <li><Link to="/industries/ecommerce" className="hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/industries/telecom" className="hover:text-primary transition-colors">Telecom</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-primary transition-colors">Fintech & Healthcare</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Contact</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="mailto:business@axentra.co.in" className="hover:text-primary transition-colors">business@axentra.co.in</a></li>
              <li><a href="tel:+918095122775" className="hover:text-primary transition-colors">+91-8095122775</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-background/10 pt-8 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Axentra Nexus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
