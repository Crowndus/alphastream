import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";
import { X, Check, ArrowRight } from "lucide-react";

const before = [
  "Entering trades on gut feeling and FOMO",
  "No fixed risk per trade, blown accounts",
  "Watching charts alone, second-guessing every move",
  "Finding out a strategy failed after the loss",
];

const after = [
  "Entries backed by a tested quant model",
  "Risk Shield caps exposure before you click buy",
  "Copy vetted strategies or run your own, transparently",
  "Live performance data, not hindsight",
];

export function TransformSection() {
  const DERIV_SIGNUP = import.meta.env.VITE_DERIV_SIGNUP;

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <CandleBackground className="opacity-[0.05]" density={14} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The shift</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              From guessing <span className="text-muted-foreground">to</span>{" "}
              <span className="text-primary">profitable</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most traders don't fail because markets are unpredictable. They fail because
              every decision is a fresh guess. Here's what changes.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:gap-6 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="h-full rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm lg:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Trading on guesswork
              </h3>
              <ul className="mt-4 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="h-full rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm lg:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Trading with Alphastream
              </h3>
              <ul className="mt-4 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:gap-4 lg:mt-10">
            <a
              href={DERIV_SIGNUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              Make the switch <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <p className="max-w-md text-xs text-muted-foreground/70">
              Trading still carries risk — a tested process just replaces guesswork with a plan.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
