import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Deriv",
    tagline: "The regulated broker behind every Alphastream account — 25+ years, 3M+ traders.",
    cta: "Open Account",
  },
  {
    name: "cTrader",
    tagline: "Professional-grade execution with built-in copy trading, straight from your dashboard.",
    cta: "Explore cTrader",
  },
  {
    name: "Nakala",
    tagline: "Deriv's copy trading network — follow proven strategies without lifting a finger.",
    cta: "Learn More",
  },
];

export function PartnersSection() {
  const DERIV_SIGNUP = import.meta.env.VITE_DERIV_SIGNUP;

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <CandleBackground className="opacity-[0.05]" density={14} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Backed by the best</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Meet our partners</h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:gap-6 md:grid-cols-3">
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 120} direction="scale">
              <div className="flex h-full flex-col items-center rounded-2xl border border-border/40 bg-card/60 p-6 text-center backdrop-blur-md transition-all hover:border-primary/40 lg:p-8">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <a
                  href={DERIV_SIGNUP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary"
                >
                  {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
