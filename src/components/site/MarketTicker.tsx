const feed = [
  { symbol: "EUR/USD", price: "1.0842", change: "+0.12%", up: true },
  { symbol: "GBP/USD", price: "1.2694", change: "-0.08%", up: false },
  { symbol: "BTC/USD", price: "61,240", change: "+2.41%", up: true },
  { symbol: "ETH/USD", price: "3,412", change: "+1.05%", up: true },
  { symbol: "XAU/USD", price: "2,384.10", change: "+0.31%", up: true },
  { symbol: "US30", price: "39,820", change: "+0.47%", up: true },
  { symbol: "Volatility 75", price: "184,230", change: "+0.92%", up: true },
  { symbol: "Boom 1000", price: "9,821.4", change: "-0.21%", up: false },
  { symbol: "USD/JPY", price: "151.32", change: "+0.05%", up: true },
  { symbol: "Crash 500", price: "412.6", change: "+0.63%", up: true },
];

export function MarketTicker() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 h-8 overflow-hidden border-b border-border/30 bg-secondary/60 backdrop-blur-md sm:h-9">
      <div className="flex h-full items-center">
        <span className="z-10 flex h-full shrink-0 items-center gap-1.5 bg-background/80 px-3 text-[10px] font-semibold uppercase tracking-wider text-primary sm:px-4 sm:text-xs">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live markets
        </span>
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap pl-8">
          {[...feed, ...feed].map((f, i) => (
            <span key={i} className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs">
              <span className="font-semibold text-foreground/90">{f.symbol}</span>
              <span className="text-muted-foreground">{f.price}</span>
              <span className={f.up ? "text-emerald-400" : "text-red-400"}>{f.change}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
