import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgressTracker from "./ProgressTracker";

interface AppLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  currentStep?: number;
  showBack?: boolean;
  showProgress?: boolean;
}

const AppLayout = ({ children, title, subtitle, currentStep = 0, showBack = true, showProgress = true }: AppLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showBack && (
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div>
              <h1 className="text-lg font-bold font-heading text-foreground">{title}</h1>
              {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
          <div className="font-heading font-bold text-primary text-lg tracking-tight">TaxFile</div>
        </div>
      </header>

      {/* Progress */}
      {showProgress && (
        <div className="border-b bg-card">
          <div className="container mx-auto">
            <ProgressTracker currentStep={currentStep} />
          </div>
        </div>
      )}

      {/* Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
