import { useLanguage } from '@/contexts/LanguageContext';
import { Upload, Cpu, TrendingUp } from 'lucide-react';

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Upload,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Cpu,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: TrendingUp,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t.howItWorks.title}
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center hover:shadow-elevated transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`feature-icon mx-auto ${step.bgColor}`}>
                <step.icon className={`w-7 h-7 ${step.color}`} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
