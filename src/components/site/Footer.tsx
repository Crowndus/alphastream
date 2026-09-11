import { Twitter, Linkedin, Youtube, Instagram, KeyRound, Lock, BarChart3 } from "lucide-react";

type FooterLink = string | { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: ["Quant Engines", "Mirror Vault", "Risk Shield", "Instant Settlement"],
  },
  {
    title: "Platform",
    links: [
      { label: "Alphastream Trader", href: "TRADER" },
      { label: "Alphastream Bot", href: "BOT" },
      { label: "Deriv cTrader", href: "DERIV_LOGIN" },
      { label: "Deriv MT5", href: "DERIV_LOGIN" },
    ],
  },
  {
    title: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "Risk Disclosure"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Community"],
  },
];

export function Footer() {
  const TRADER_URL = import.meta.env.VITE_TRADER_URL;
  const BOT_URL = import.meta.env.VITE_BOT_URL;
  const DERIV_LOGIN = import.meta.env.VITE_DERIV_LOGIN;

  const resolveHref = (key: string) => {
    if (key === "TRADER") return TRADER_URL;
    if (key === "BOT") return BOT_URL;
    if (key === "DERIV_LOGIN") return DERIV_LOGIN;
    return key;
  };

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        {/* Top row: brand */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">α</span>
            <span className="text-lg font-bold">
              Alphastream <span className="font-medium text-muted-foreground">Trader</span>
            </span>
            <span className="ml-2 hidden text-sm text-muted-foreground sm:inline">
              Quantitative intelligence for every investor.
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Middle rows: info columns (non-clickable) */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-semibold">{col.title}</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {col.links.map((link) => {
                  const label = typeof link === "string" ? link : link.label;
                  if (typeof link === "string") {
                    return (
                      <li key={label}>
                        <span className="cursor-default">{label}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={label}>
                      <a
                        href={resolveHref(link.href)}
                        className="transition-colors hover:text-primary"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Glass CTA bar */}
        <div className="my-6 flex w-full flex-col items-center justify-between gap-3 rounded-xl border-y border-border/40 bg-card/50 px-4 py-3 backdrop-blur-md sm:flex-row sm:px-6 sm:py-4">
          <p className="font-medium">Ready to trade?</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`${TRADER_URL}/?signup=1`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              <KeyRound className="h-3.5 w-3.5" />
              Open Account
            </a>
            <a
              href={TRADER_URL}
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary"
            >
              <Lock className="h-3.5 w-3.5" />
              Client Login
            </a>
            <a
              href={TRADER_URL}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary"
            >
              <BarChart3 className="h-3.5 w-3.5" />
              Launch Demo
            </a>
          </div>
        </div>

        {/* Bottom row: legal */}
        <div className="mx-auto max-w-3xl text-center text-xs text-muted-foreground/70">
          <p>
            <strong>Risk Warning:</strong> Trading derivatives carries a high level of risk. Past performance does
            not guarantee future results. Only invest what you can afford to lose.
          </p>
          <p className="mt-3">
            Alphastream Trader is an independent marketing partner of Deriv and is not itself a broker or licensed
            financial services provider. All trading accounts, funds, and executions are held and processed by
            Deriv.
          </p>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground/70 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Alphastream Trader. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a href="https://deriv.com" className="text-primary hover:underline">
              Deriv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
