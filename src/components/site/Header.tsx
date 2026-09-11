import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Header() {
  const TRADER_URL = import.meta.env.VITE_TRADER_URL;
  const BOT_URL = import.meta.env.VITE_BOT_URL;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-border/30 bg-background/70 backdrop-blur-xl transition-all duration-300",
        scrolled ? "top-[2.75rem] shadow-2xl shadow-black/30" : "top-[3.25rem] shadow-2xl shadow-black/20"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}
      >
        {/* Brand - Candlestick Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 shrink-0">
            <div className="absolute inset-0 rounded-lg bg-primary/30 blur-md"></div>
            <svg viewBox="0 0 40 40" className="relative h-9 w-9" fill="none">
              {/* Bearish Candle */}
              <rect x="6" y="16" width="10" height="16" fill="#EF4444" rx="1.5" />
              <line x1="11" y1="6" x2="11" y2="16" stroke="#EF4444" strokeWidth="2.5" />
              <line x1="11" y1="32" x2="11" y2="36" stroke="#EF4444" strokeWidth="2.5" />
              {/* Bullish Candle */}
              <rect x="22" y="22" width="10" height="12" fill="#22C55E" rx="1.5" />
              <line x1="27" y1="12" x2="27" y2="22" stroke="#22C55E" strokeWidth="2.5" />
              <line x1="27" y1="34" x2="27" y2="36" stroke="#22C55E" strokeWidth="2.5" />
              {/* Trend Line */}
              <polyline
                points="6,34 14,24 24,30 34,18"
                stroke="#FBBF24"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-base font-bold tracking-tight sm:text-xl">
            <span className="text-primary">Alpha</span>stream{" "}
            <span className="font-medium text-muted-foreground">Trader</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={BOT_URL}
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Bot Builder
          </a>
          <a href={TRADER_URL}>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Log in
            </Button>
          </a>
          <a href={`${TRADER_URL}/?signup=1`}>
            <Button size="sm" className="gap-1 shadow-lg shadow-primary/30 transition-transform hover:scale-105">
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
