import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";
import { CheckCircle2 } from "lucide-react";

const platforms = [
  {
    name: "Deriv MT5",
    bullets: [
      "Widest range of forex, stocks, and commodities",
      "Zero commissions, tight swap-free spreads",
      "Exclusive access to Derived Indices",
    ],
  },
  {
    name: "Deriv cTrader",
    bullets: [
      "Professional-grade charting and depth of market",
      "Built-in copy trading via cTrader Copy",
      "Fast execution with transparent pricing",
    ],
  },
];

export function PlatformsSection() {
  const DERIV_SIGNUP = import.meta.env.VITE_DERIV_SIGNUP;
  const DERIV_LOGIN = import.meta.env.VITE_DERIV_LOGIN;

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <CandleBackground className="opacity-[0.05]" density={14} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Trading Platforms</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Trade your way</h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:gap-6 md:grid-cols-2">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="h-full rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/30 lg:p-8">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={DERIV_LOGIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary"
                  >
                    Access Live Markets
                  </a>
                  <a
                    href={DERIV_SIGNUP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary"
                  >
                    Start Trading
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
