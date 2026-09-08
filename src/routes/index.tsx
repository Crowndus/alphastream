import { Header } from "@/components/site/Header";
import { MarketTicker } from "@/components/site/MarketTicker";
import { Hero } from "@/components/site/Hero";
import { TransformSection } from "@/components/site/TransformSection";
import { StatsBar } from "@/components/site/StatsBar";
import { FlowSection } from "@/components/site/FlowSection";
import { CopyTradingSection } from "@/components/site/CopyTradingSection";
import { BentoGrid } from "@/components/site/BentoGrid";
import { TrustMarquee } from "@/components/site/TrustMarquee";
import { PartnersSection } from "@/components/site/PartnersSection";
import { PlatformsSection } from "@/components/site/PlatformsSection";
import { Footer } from "@/components/site/Footer";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { CandleBackground } from "@/components/site/CandleBackground";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { Button } from "@/components/ui/button";

const TRADER_URL = import.meta.env.VITE_TRADER_URL;

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketTicker />
      <Header />
      <main>
        <Hero />
        <TransformSection />
        <StatsBar />
        <TrustMarquee />
        <PartnersSection />
        <FlowSection />
        <CopyTradingSection />
        <PlatformsSection />
        <BentoGrid />

        <TestimonialsSection />

        {/* Final CTA */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <CandleBackground className="opacity-[0.08]" density={20} />
          <div className="container relative text-center px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="scale">
              <h2 className="text-4xl md:text-6xl font-bold">
                Ready to <span className="text-primary">outperform</span> the market?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Join the silent revolution of data-driven traders. Start your free demo today.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:mt-12">
                <a href={`${TRADER_URL}/?signup=1`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 px-10 shadow-2xl shadow-primary/30 text-base transition-transform hover:scale-105">
                    Launch Demo <span className="font-mono text-xs">↗</span>
                  </Button>
                </a>
                <a href={`${TRADER_URL}/?signup=1`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="transition-transform hover:scale-105">
                    Learn More
                  </Button>
                </a>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-xs text-muted-foreground/70">
                Trading CFDs and derivatives carries a high level of risk and most retail accounts
                lose money. See the full risk disclosure below before you sign up.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}