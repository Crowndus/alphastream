import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

export interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  static?: boolean; // e.g. a founding year — shown as-is, no count-up
}

function StatCounter({ value, prefix = "", suffix = "", label, static: isStatic }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isStatic) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isStatic]);

  const count = useCountUp(value, active && !isStatic);
  const display = isStatic ? value : count;

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl font-bold text-primary sm:text-4xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

const stats: StatCounterProps[] = [
  { value: 3, suffix: "M+", label: "Traders worldwide" },
  { value: 700, prefix: "$", suffix: "B+", label: "Monthly trading volume" },
  { value: 168, suffix: "M+", label: "Trades executed monthly" },
  { value: 1999, label: "Established", static: true },
];

export function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-card/30 py-16 lg:py-24">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs uppercase tracking-widest text-muted-foreground/70">
          The scale behind every trade — powered by Deriv
        </p>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
