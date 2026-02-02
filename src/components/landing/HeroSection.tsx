import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t.hero.title}
              <br />
              <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <Button size="lg" className="btn-primary-gradient text-lg px-8">
                  {t.hero.cta}
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative leaves */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                <LeafDecoration className="w-24 h-32 text-primary/30" />
              </div>
              <div className="absolute -right-4 top-1/4">
                <LeafDecoration className="w-16 h-20 text-primary/20 rotate-45" />
              </div>

              {/* Phone frame */}
              <div className="relative bg-card rounded-[2.5rem] p-2 shadow-prominent animate-float">
                <div className="bg-foreground/5 rounded-[2rem] p-4 w-64 h-[480px] flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>10:17</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl shadow-card p-4 flex flex-col items-center">
                    <div className="w-full h-32 bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl">🥞</div>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Sugar: 25g</p>
                      <p className="text-sm">
                        Risk: <span className="risk-high font-medium">High</span>
                      </p>
                    </div>
                    <div className="mt-4 w-full bg-muted rounded-full h-2">
                      <div className="bg-risk-high h-2 rounded-full w-3/4" />
                    </div>
                  </div>

                  {/* Bottom nav placeholder */}
                  <div className="mt-4 flex justify-center gap-8">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-3 h-3 rounded-full bg-muted" />
                  </div>
                </div>

                {/* Floating action button */}
                <div className="absolute -right-4 top-1/3 w-12 h-12 bg-accent rounded-full shadow-elevated flex items-center justify-center">
                  <span className="text-accent-foreground text-2xl font-bold">+</span>
                </div>

                {/* Heart icon */}
                <div className="absolute -right-2 top-1/2 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent fill-accent" />
                </div>
              </div>

              {/* Background circle */}
              <div className="absolute inset-0 -z-10 translate-x-8 translate-y-8">
                <div className="w-full h-full bg-primary/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="currentColor"
      className={className}
    >
      <path d="M50 0C50 0 100 30 100 80C100 110 80 140 50 140C20 140 0 110 0 80C0 30 50 0 50 0Z" />
      <path d="M50 20L50 120" stroke="white" strokeWidth="2" opacity="0.3" />
      <path d="M50 40L30 60" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <path d="M50 40L70 60" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <path d="M50 60L25 85" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <path d="M50 60L75 85" stroke="white" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}
