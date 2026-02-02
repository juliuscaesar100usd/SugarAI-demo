import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Timer, Utensils, BarChart3, Plus, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SC</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              SugarControl
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              {t.nav.logout}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            {t.dashboard.welcome}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your sugar intake and stay healthy
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Today's Sugar */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{t.dashboard.todaysSugar}</h3>
            </div>
            <p className="text-4xl font-bold text-foreground">0<span className="text-lg text-muted-foreground ml-1">{t.common.grams}</span></p>
            <p className="text-sm text-muted-foreground mt-2">{t.dashboard.noMeals}</p>
          </div>

          {/* Sugar-Free Timer */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Timer className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{t.dashboard.sugarFreeTimer}</h3>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground">{t.dashboard.days}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground">{t.dashboard.hours}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground">{t.dashboard.minutes}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              {t.dashboard.startTimer}
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">{t.stats.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{t.stats.noData}</p>
            <Button variant="outline" size="sm" className="w-full">
              {t.nav.statistics}
            </Button>
          </div>
        </div>

        {/* Add Meal CTA */}
        <div className="card-elevated p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            {t.dashboard.addMeal}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Upload a photo of your meal and let AI analyze the sugar content
          </p>
          <Button size="lg" className="btn-primary-gradient">
            <Plus className="w-5 h-5 mr-2" />
            {t.dashboard.addMeal}
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
