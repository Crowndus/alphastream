import { Button } from "@/components/ui/button";
import { CandleBackground } from "@/components/site/CandleBackground";
import { ChevronRight, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const statusMessages = [
  "Scanning global liquidity pools...",
  "Analyzing 150+ technical indicators...",
  "Optimal entry strategy acquired.",
];

export function Hero() {
  const TRADER_URL = import.meta.env.VITE_TRADER_URL;

  const [statusIndex, setStatusIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [greeting, setGreeting] = useState("Hey there, future trader");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 5) setGreeting("Up late chasing candles?");
    else if (hour < 12) setGreeting("Morning, future trader ☕");
    else if (hour < 17) setGreeting("Afternoon, future trader");
    else if (hour < 22) setGreeting("Evening, future trader");
    else setGreeting("Up late chasing candles?");
  }, []);

  useEffect(() => {
    const currentMsg = statusMessages[statusIndex];
    let timer: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (charIndex < currentMsg.length) {
        timer = setTimeout(() => setDisplayText((prev) => prev + currentMsg[charIndex]), 30);
        setCharIndex((prev) => prev + 1);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), 15);
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setStatusIndex((prev) => (prev + 1) % statusMessages.length);
      }
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, statusIndex]);

  // Candlestick chart data
  const candles = [
    { x: 5, h: 85, l: 30, o: 40, c: 75 },
    { x: 20, h: 90, l: 50, o: 80, c: 60 },
    { x: 35, h: 80, l: 20, o: 30, c: 70 },
    { x: 50, h: 95, l: 40, o: 75, c: 55 },
    { x: 65, h: 88, l: 25, o: 35, c: 82 },
    { x: 80, h: 98, l: 45, o: 85, c: 65 },
    { x: 95, h: 85, l: 30, o: 40, c: 78 },
    { x: 110, h: 92, l: 55, o: 70, c: 60 },
    { x: 125, h: 85, l: 20, o: 30, c: 80 },
    { x: 140, h: 100, l: 50, o: 85, c: 70 },
    { x: 155, h: 90, l: 35, o: 45, c: 88 },
    { x: 170, h: 95, l: 60, o: 80, c: 65 },
    { x: 185, h: 85, l: 30, o: 40, c: 82 },
    { x: 200, h: 95, l: 50, o: 75, c: 60 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 lg:pt-36">
      {/* =============================================
          MASSIVE CANDLESTICK BACKGROUND CHART
          ============================================= */}
      <div className="absolute inset-0 z-0 opacity-15 md:opacity-25 pointer-events-none">
        <svg viewBox="0 0 220 120" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          {/* Moving Average Line (Glowing) */}
          <polyline
            points="5,75 20,60 35,70 50,55 65,82 80,65 95,78 110,60 125,80 140,70 155,88 170,65 185,82 200,60"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
          {/* Glow for the MA line */}
          <polyline
            points="5,75 20,60 35,70 50,55 65,82 80,65 95,78 110,60 125,80 140,70 155,88 170,65 185,82 200,60"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-20 blur-sm"
          />

          {candles.map((c, i) => {
            const isBull = c.c > c.o;
            const color = isBull ? "#22C55E" : "#EF4444";
            const bodyY = isBull ? c.c : c.o;
            const bodyHeight = Math.abs(c.c - c.o);

            return (
              <g key={i}>
                {/* Wick (High) */}
                <line
                  x1={c.x}
                  y1={c.h}
                  x2={c.x}
                  y2={Math.min(c.o, c.c)}
                  stroke={color}
                  strokeWidth="1.5"
                />
                {/* Wick (Low) */}
                <line
                  x1={c.x}
                  y1={Math.max(c.o, c.c)}
                  x2={c.x}
                  y2={c.l}
                  stroke={color}
                  strokeWidth="1.5"
                />
                {/* Candle Body */}
                <rect
                  x={c.x - 4.5}
                  y={bodyY}
                  width="9"
                  height={Math.max(bodyHeight, 1)}
                  fill={color}
                  rx="1.5"
                  className="shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-3xl z-0" />

      {/* Continuously drifting candles along the bottom edge for extra motion */}
      <CandleBackground className="bottom-0 top-auto h-24 opacity-20 z-0 sm:h-32" density={18} />

      {/* Main Content */}
      <div className="container relative z-10 grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-8">
        {/* LEFT: Text Content */}
        <div className="space-y-6">
          <p className="animate-fade-in-up flex items-start gap-1.5 text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
            <span className="shrink-0">👋</span>
            <span>{greeting} — let's put your money to work.</span>
          </p>
          <div className="animate-fade-in-up [animation-delay:60ms] inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            v3.0 Quant Engine Live
          </div>
          <h1 className="animate-fade-in-up [animation-delay:120ms] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Institutional intelligence, <br />
            <span className="bg-gradient-to-r from-primary to-emerald-300 bg-clip-text text-transparent">
              visualized.
            </span>
          </h1>
          <p className="animate-fade-in-up [animation-delay:240ms] max-w-lg text-lg text-muted-foreground">
            Trade with the precision of a hedge fund. AI-driven execution, zero emotional
            bias, and full transparency—now with live market visualizations.
          </p>
          <div className="animate-fade-in-up [animation-delay:360ms] flex flex-wrap gap-4">
            <a href={`${TRADER_URL}/?signup=1`}>
              <Button size="lg" className="gap-2 px-8 shadow-2xl shadow-primary/30 transition-transform hover:scale-105">
                Start Free Trial <ChevronRight className="h-5 w-5" />
              </Button>
            </a>
            <a href={`${TRADER_URL}/?signup=1`}>
              <Button variant="outline" size="lg" className="transition-transform hover:scale-105">
                View Demo
              </Button>
            </a>
          </div>
          <p className="animate-fade-in-up [animation-delay:420ms] flex items-start gap-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
            <span className="shrink-0">🤖</span>
            <span>Zero experience? No stress — our bots have your back from trade one.</span>
          </p>
          <div className="animate-fade-in-up [animation-delay:480ms] flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="h-4 w-4 text-primary" /> Regulated
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-primary" /> 78% Win Rate
            </span>
          </div>
        </div>

        {/* RIGHT: Premium Dashboard Card with Sparkline */}
        <div className="relative flex justify-end">
          <div className="w-full max-w-md rounded-2xl border border-border/40 bg-card/80 p-6 backdrop-blur-2xl shadow-2xl shadow-black/40 animate-card-entrance">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                ⚡ Live Strategy Vault
              </span>
              <span className="flex h-2 w-2 rounded-full bg-green-500">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
              </span>
            </div>

            {/* Mini Sparkline Chart */}
            <div className="mt-4 h-12 w-full">
              <svg viewBox="0 0 200 40" className="h-full w-full">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,35 20,20 40,30 60,10 80,25 100,15 120,32 140,8 160,22 180,18 200,5"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="2"
                />
                <polygon
                  points="0,35 20,20 40,30 60,10 80,25 100,15 120,32 140,8 160,22 180,18 200,5 200,40 0,40"
                  fill="url(#grad)"
                  opacity="0.2"
                />
                <circle cx="200" cy="5" r="3" fill="#2DD4BF" className="animate-pulse" />
              </svg>
            </div>

            {/* Stats */}
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Sharpe Ratio</span>
                <span className="font-mono font-bold text-primary">2.4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Return (YTD)</span>
                <span className="font-mono font-bold text-emerald-400">+342%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Max Drawdown</span>
                <span className="font-mono font-bold text-amber-400">-8.2%</span>
              </div>
              <div className="mt-2 rounded-lg bg-secondary/30 p-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary">❯</span> {displayText}
                <span className="animate-pulse text-primary">|</span>
              </div>
            </div>

            {/* Footer Tags */}
            <div className="mt-4 grid grid-cols-3 gap-2 pt-4 text-center text-[10px] uppercase tracking-wider text-muted-foreground border-t border-border/40">
              <div>24/7 Execution</div>
              <div>Zero Slippage</div>
              <div>Deep Liquidity</div>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}