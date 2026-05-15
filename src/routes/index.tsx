import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Headphones,
  Banknote,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Users,
  Layers,
  Cpu,
  Globe2,
  BarChart3,
} from "lucide-react";

import { LazyVideo } from "@/components/LazyVideo";

import heroOffice from "@/assets/hero-office.jpg";
import bpoCallCenter from "@/assets/bpo-call-center.jpg";
import lendingFinance from "@/assets/lending-finance.jpg";
import cxAgent from "@/assets/cx-agent.jpg";
import salesGrowth from "@/assets/sales-growth.jpg";
import leadershipTeam from "@/assets/leadership-team.jpg";
import globalConnectivity from "@/assets/global-connectivity.jpg";
import partnership from "@/assets/partnership.jpg";

import aboutVideo from "@/assets/about-video.mp4.asset.json";
import bpoVideo from "@/assets/bpo-video.mp4.asset.json";
import lendingVideo from "@/assets/lending-video.mp4.asset.json";
import cxVideo from "@/assets/cx-video.mp4.asset.json";
import salesVideo from "@/assets/sales-video.mp4.asset.json";
import globalVideo from "@/assets/global-video.mp4.asset.json";
import partnershipVideo from "@/assets/partnership-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [/* unchanged */];
const industries = [/* unchanged */];
const trust = [/* unchanged */];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden text-white">

        {/* CINEMATIC VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover scale-110 animate-zoomSlow"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* PARALLAX LIGHT LAYERS */}
        <div className="parallax-bg" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 hero-overlay" />

        {/* NOISE OVERLAY */}
        <div className="noise-overlay" />

        {/* HERO CONTENT */}
        <div className="container-max relative flex min-h-screen items-center px-6">

          <div className="max-w-4xl">

            {/* BADGE */}
            <div className="glass-card mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em]">
              Premium Business Solutions Partner
            </div>

            {/* TYPEWRITER HEADLINE */}
            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">
              <span className="typing-line block">Scaling Businesses</span>
              <span className="typing-line delay-700 block text-gradient-brand">
                With Precision,
              </span>
              <span className="typing-line delay-1400 block">
                Speed & Intelligence
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-8 text-lg text-white/80">
              BPO | Lending | Customer Experience | Growth Solutions
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Link
                to="/contact"
                className="glass-card rounded-full bg-primary px-8 py-4 font-semibold text-black hover:scale-105 transition"
              >
                Partner With Us
              </Link>

              <Link
                to="/services"
                className="glass-card rounded-full px-8 py-4 hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>

            {/* FLOATING METRICS */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["24×7", "Operations"],
                ["AI", "Driven"],
                ["Global", "Delivery"],
                ["Premium", "Talent"],
              ].map(([a, b]) => (
                <div key={a} className="glass-card animate-floatSlow rounded-2xl p-5">
                  <div className="text-2xl font-bold">{a}</div>
                  <div className="text-xs opacity-70">{b}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border border-white/30" />
        </div>

      </section>

      {/* KEEP REST OF YOUR PAGE EXACT SAME */}
    </>
  );
}

export default HomePage;
