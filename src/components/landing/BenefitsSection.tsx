import { useLanguage } from '@/contexts/LanguageContext';
import { Box, Heart, BarChart3, Bot } from 'lucide-react';

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Box,
      title: t.benefits.lessSugar.title,
      description: t.benefits.lessSugar.description,
      color: 'text-primary',
    },
    {
      icon: Heart,
      title: t.benefits.betterHealth.title,
      description: t.benefits.betterHealth.description,
      color: 'text-destructive',
    },
    {
      icon: BarChart3,
      title: t.benefits.visibleProgress.title,
      description: t.benefits.visibleProgress.description,
      color: 'text-accent',
    },
    {
      icon: Bot,
      title: t.benefits.aiAssistant.title,
      description: t.benefits.aiAssistant.description,
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t.benefits.title}
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon mx-auto bg-card">
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
