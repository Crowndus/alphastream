import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";
import { Cpu, Copy, Radar, Clock, ShieldCheck, Wallet } from "lucide-react";

const features = [
  { icon: Cpu, title: "Quant AI Engines", desc: "Machine learning models trained on 10+ years of market data.", span: "md:col-span-2", bg: "from-indigo-500/10 to-transparent" },
  { icon: Copy, title: "Copy Trading", desc: "Follow and mirror experienced traders in real time via Deriv's cTrader Copy and Nakala.", span: "md:col-span-1", bg: "from-emerald-500/10 to-transparent" },
  { icon: Radar, title: "Real-time Risk Shield", desc: "Dynamic stop-loss and drawdown protection.", span: "md:col-span-1", bg: "from-amber-500/10 to-transparent" },
  { icon: Clock, title: "24/7 Institutional Uptime", desc: "99.99% uptime with sub-millisecond execution.", span: "md:col-span-1", bg: "from-blue-500/10 to-transparent" },
  { icon: ShieldCheck, title: "Segregated Funds", desc: "Held in tier-1 banks with full regulatory compliance.", span: "md:col-span-1", bg: "from-purple-500/10 to-transparent" },
  { icon: Wallet, title: "Instant Settlement", desc: "Withdrawals processed instantly, no hidden fees.", span: "md:col-span-2", bg: "from-pink-500/10 to-transparent" },
];

export function BentoGrid() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <CandleBackground className="opacity-[0.06]" density={20} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The Alpha Edge</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Built for the <span className="text-primary">modern trader</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:gap-6 md:grid-cols-4">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="scale">
              <div
                className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br ${f.bg} bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:p-8 ${f.span}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}