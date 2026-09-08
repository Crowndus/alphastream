import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";
import { Users, SlidersHorizontal, RefreshCw, LineChart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Browse strategy providers",
    desc: "Compare traders by track record, instruments traded, and drawdown history before you follow anyone.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set your own risk",
    desc: "Choose how much capital to allocate per trader, cap your exposure, and adjust or stop copying at any time.",
  },
  {
    icon: RefreshCw,
    title: "Trades mirror automatically",
    desc: "Once you're following a trader, their positions are replicated to your account in real time via cTrader Copy or Deriv Nakala.",
  },
  {
    icon: LineChart,
    title: "Track performance transparently",
    desc: "See exactly what's been copied, your running P&L, and each provider's historical performance in one place.",
  },
];

export function CopyTradingSection() {
  const TRADER_URL = import.meta.env.VITE_TRADER_URL;

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <CandleBackground className="opacity-[0.06]" density={18} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Copy Trading
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Follow experienced traders, <span className="text-primary">hands-free</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Copy trading through Deriv's cTrader Copy and Nakala lets you mirror another
              trader's positions without placing every trade yourself. You're still exposed
              to the same market risk they are — it's a tool for hands-off execution, not a
              shortcut around losses.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex h-full flex-col items-start rounded-xl border border-border/30 bg-secondary/20 p-5 transition-all hover:bg-secondary/30">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Callout CTA */}
        <ScrollReveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:p-6 lg:mt-10">
            <p className="text-center font-semibold sm:text-left">
              Ready to mirror the top 1% of quants?
            </p>
            <a
              href={`${TRADER_URL}/?signup=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              Launch Mirror Vault <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
