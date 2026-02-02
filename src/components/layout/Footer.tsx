import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-foreground">
              SugarControl
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              {t.footer.about}
            </a>
            <span className="text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              {t.footer.privacy}
            </a>
            <span className="text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              {t.footer.contacts}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
