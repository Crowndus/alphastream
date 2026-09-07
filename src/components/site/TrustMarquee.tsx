import { CandleBackground } from "./CandleBackground";
import { DollarSign, TrendingUp } from "lucide-react";

function MiniCandles() {
  return (
    <svg viewBox="0 0 60 24" className="h-5 w-auto text-muted-foreground/70" fill="none">
      <rect x="4" y="8" width="5" height="10" rx="1" fill="#EF4444" />
      <line x1="6.5" y1="3" x2="6.5" y2="8" stroke="#EF4444" strokeWidth="1.5" />
      <line x1="6.5" y1="18" x2="6.5" y2="21" stroke="#EF4444" strokeWidth="1.5" />
      <rect x="16" y="6" width="5" height="8" rx="1" fill="#22C55E" />
      <line x1="18.5" y1="2" x2="18.5" y2="6" stroke="#22C55E" strokeWidth="1.5" />
      <line x1="18.5" y1="14" x2="18.5" y2="19" stroke="#22C55E" strokeWidth="1.5" />
      <rect x="28" y="10" width="5" height="9" rx="1" fill="#22C55E" />
      <line x1="30.5" y1="5" x2="30.5" y2="10" stroke="#22C55E" strokeWidth="1.5" />
      <line x1="30.5" y1="19" x2="30.5" y2="22" stroke="#22C55E" strokeWidth="1.5" />
    </svg>
  );
}

export function TrustMarquee() {
  const items = [
    "Quantitative Funds",
    "Hedge Fund Standards",
    "Fintech 50",
    "Institutional Grade",
    "FCA Regulated",
    "Top 10 Exchanges",
  ];

  return (
    <section className="relative overflow-hidden py-12 border-y border-border/40 bg-secondary/10">
      <CandleBackground className="opacity-[0.05]" density={16} />
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i % 3 === 0 ? (
                <MiniCandles />
              ) : i % 3 === 1 ? (
                <DollarSign className="h-4 w-4 text-primary/70" />
              ) : (
                <TrendingUp className="h-4 w-4 text-primary/70" />
              )}
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground/70">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
