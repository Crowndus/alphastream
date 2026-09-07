import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";
import { Link, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  { icon: Link, title: "1. Connect", desc: "Link your existing Deriv account in one click." },
  { icon: UserCheck, title: "2. Deploy", desc: "Select a quant strategy or mirror a top performer." },
  { icon: BarChart3, title: "3. Grow", desc: "Monitor real-time analytics and withdraw instantly." },
];

export function FlowSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-y border-border/40 bg-secondary/5">
      <CandleBackground className="opacity-[0.07]" density={16} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            From connection to <span className="text-primary">execution</span> in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            No coding required. No hidden delays. Pure, algorithmic precision.
          </p>
        </ScrollReveal>

        <div className="relative mt-8 hidden lg:mt-12 md:block">
          <div className="absolute left-[16.6%] right-[16.6%] top-10 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 200} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/50 bg-background text-3xl text-primary shadow-xl shadow-primary/10">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4 lg:mt-12 md:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-border/40 bg-card p-6 lg:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}