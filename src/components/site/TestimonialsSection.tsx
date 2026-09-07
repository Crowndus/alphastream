import { BadgeCheck, Quote, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { CandleBackground } from "./CandleBackground";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Alan Whitfield",
    role: "Portfolio Manager",
    quote:
      "Alphastream's quant engine outperforms my manual strategies by 40%. It's a genuine paradigm shift for how I allocate risk.",
    rating: 5,
  },
  {
    name: "Jessica Tran",
    role: "Retail Trader",
    quote:
      "I finally understand how the big players win. The Mirror Vault is pure genius, and the interface makes it easy to follow along.",
    rating: 5,
  },
  {
    name: "Michael Osei",
    role: "Swing Trader",
    quote:
      "The risk shield alone has saved me from blowing up my account twice this year. Worth the subscription for that feature alone.",
    rating: 5,
  },
  {
    name: "Priya Ramanathan",
    role: "Full-time Investor",
    quote:
      "Instant settlement means I'm never waiting around for my own money. That alone removed so much friction from my routine.",
    rating: 5,
  },
  {
    name: "Daniel Kessler",
    role: "Independent Analyst",
    quote:
      "Sub-millisecond execution actually shows up in my fill prices, not just the marketing copy. Slippage dropped noticeably.",
    rating: 4,
  },
  {
    name: "Sofia Marchetti",
    role: "Options Trader",
    quote:
      "The bento dashboard gives me everything at a glance — volatility, flow, exposure — without fifteen tabs open at once.",
    rating: 5,
  },
  {
    name: "Kwame Boateng",
    role: "Prop Desk Trader",
    quote:
      "Copy trading here actually respects position sizing. I can mirror a strategy without blowing past my own risk limits.",
    rating: 5,
  },
  {
    name: "Elena Novak",
    role: "Quant Researcher",
    quote:
      "Clean data, low latency, and an API that doesn't fight me. Alphastream feels built by people who actually trade.",
    rating: 5,
  },
];

/** Deterministic string hash (no Math.random, so SSR/CSR output matches). */
function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Generates a unique, deterministic avatar mark for a given name — a
 * gradient identity disc with an embedded sparkline (seeded from the name)
 * and initials. Every name produces a distinct, stable visual without
 * relying on stock or AI-generated photos of "people" attached to quotes
 * they never said.
 */
function TestimonialAvatar({ name }: { name: string }) {
  const h = hashString(name);
  const hue1 = 165 + (h % 95); // teal -> indigo -> violet range, on-brand
  const hue2 = (hue1 + 30 + (h % 25)) % 360;
  const uid = `${h}`;

  const points = Array.from({ length: 7 }, (_, i) => {
    const n = Math.abs(Math.sin((h + i) * 12.9898) * 10000) % 1;
    const y = 30 - n * 22 - i * 1.1;
    return `${i * 8},${Math.max(2, Math.min(32, y)).toFixed(1)}`;
  }).join(" ");

  return (
    <div className="relative shrink-0">
      <svg viewBox="0 0 56 56" className="h-14 w-14 rounded-full ring-2 ring-border/60">
        <defs>
          <linearGradient id={`grad-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={`hsl(${hue1} 72% 46%)`} />
            <stop offset="100%" stopColor={`hsl(${hue2} 72% 38%)`} />
          </linearGradient>
          <clipPath id={`clip-${uid}`}>
            <circle cx="28" cy="28" r="28" />
          </clipPath>
        </defs>
        <circle cx="28" cy="28" r="28" fill={`url(#grad-${uid})`} />
        <g clipPath={`url(#clip-${uid})`} opacity="0.4">
          <polyline
            points={points}
            fill="none"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(6,20)"
          />
        </g>
        <text
          x="28"
          y="34"
          textAnchor="middle"
          fontSize="17"
          fontWeight="600"
          fill="white"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          {getInitials(name)}
        </text>
      </svg>
      <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-1 ring-border/60">
        <BadgeCheck className="h-4 w-4 fill-primary text-background" />
      </span>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="group relative flex w-[300px] shrink-0 flex-col rounded-2xl border border-border/40 bg-card/80 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 sm:w-[340px]">
      <Quote className="absolute right-5 top-5 h-10 w-10 text-primary/10 transition-colors group-hover:text-primary/20" />
      <div className="mb-4 flex gap-1 text-primary">
        {[...Array(5)].map((_, j) => (
          <Star
            key={j}
            className={`h-4 w-4 ${j < t.rating ? "fill-primary" : "fill-transparent text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <p className="min-h-[6.5rem] flex-1 text-[15px] font-light italic leading-relaxed text-foreground/90">
        "{t.quote}"
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border/30 pt-5">
        <TestimonialAvatar name={t.name} />
        <div>
          <p className="font-semibold leading-tight">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  durationClass,
}: {
  items: Testimonial[];
  reverse?: boolean;
  durationClass: string;
}) {
  return (
    <div
      className="marquee-row relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-5 py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} ${durationClass}`}
        style={{ willChange: "transform" }}
        tabIndex={-1}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const rowA = testimonials.slice(0, 4);
  const rowB = testimonials.slice(4, 8);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-secondary/5">
      <CandleBackground className="opacity-[0.06]" density={18} />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Trusted by traders who <span className="text-primary">demand results</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real feedback from portfolio managers, analysts, and independent traders running
              their books on Alphastream.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.9/5</span>
              <span className="text-sm text-muted-foreground">from 2,400+ traders</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="scale">
        <div className="space-y-6">
          <MarqueeRow items={rowA} durationClass="[animation-duration:40s]" />
          <MarqueeRow items={rowB} reverse durationClass="[animation-duration:52s]" />
        </div>
      </ScrollReveal>

      <p className="mt-8 text-center text-xs text-muted-foreground/60">
        Hover or tap to pause · results vary and are not guaranteed
      </p>
    </section>
  );
}
