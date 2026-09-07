interface CandleBackgroundProps {
  className?: string;
  density?: number;
}

// Deterministic pseudo-random candle generator (no Math.random so output
// is stable across renders).
function makeCandles(density: number) {
  return Array.from({ length: density }, (_, i) => {
    const a = Math.abs(Math.sin(i * 12.9898)) * 100;
    const b = Math.abs(Math.sin(i * 78.233 + 4.1)) * 100;
    const o = 20 + (a % 60);
    const c = 20 + (b % 60);
    const h = Math.min(Math.max(o, c) + 10 + (a % 15), 98);
    const l = Math.max(Math.min(o, c) - 10 - (b % 15), 2);
    return { o, c, h, l };
  });
}

/**
 * A continuously drifting candlestick chart used as a decorative background
 * layer. Renders two identical sets side by side and animates a seamless
 * loop, so it works the same on mobile and desktop — the parent section
 * just needs `relative overflow-hidden`.
 */
export function CandleBackground({ className = "", density = 14 }: CandleBackgroundProps) {
  const candles = makeCandles(density);
  const setWidth = density * 30;

  const renderCandles = () =>
    candles.map((cnd, i) => {
      const isBull = cnd.c > cnd.o;
      const color = isBull ? "#22C55E" : "#EF4444";
      const bodyY = isBull ? cnd.c : cnd.o;
      const bodyHeight = Math.max(Math.abs(cnd.c - cnd.o), 1.5);
      const x = i * 30 + 15;
      return (
        <g key={i}>
          <line x1={x} y1={cnd.h} x2={x} y2={Math.min(cnd.o, cnd.c)} stroke={color} strokeWidth="1.2" />
          <line x1={x} y1={Math.max(cnd.o, cnd.c)} x2={x} y2={cnd.l} stroke={color} strokeWidth="1.2" />
          <rect x={x - 4} y={bodyY} width="8" height={bodyHeight} fill={color} rx="1.2" />
        </g>
      );
    });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex h-full w-[200%] animate-candle-drift">
        <svg viewBox={`0 0 ${setWidth} 100`} preserveAspectRatio="none" className="h-full w-1/2 shrink-0">
          {renderCandles()}
        </svg>
        <svg viewBox={`0 0 ${setWidth} 100`} preserveAspectRatio="none" className="h-full w-1/2 shrink-0">
          {renderCandles()}
        </svg>
      </div>
    </div>
  );
}
