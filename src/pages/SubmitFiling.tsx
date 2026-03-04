import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowRight } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const SubmitFiling = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      navigate("/confirmation");
    }, 3000);
  };

  return (
    <AppLayout title="Submit Filing" subtitle="Submit to Income Tax Portal" currentStep={8}>
      <Card className="shadow-card">
        <CardContent className="pt-8 pb-8 text-center">
          {submitting ? (
            <div>
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6" />
              <h2 className="font-heading text-xl font-bold text-foreground">Submitting to Income Tax Portal...</h2>
              <p className="text-muted-foreground mt-2">Please wait while we file your ITR</p>
            </div>
          ) : (
            <div>
              <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Ready to Submit</h2>
              <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                Your ITR-1 for AY 2025-26 is ready. Click below to submit to the Income Tax Portal via API.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-warning/10 text-sm text-foreground">
                ⚠️ Please ensure all details are correct before submitting. This action cannot be undone.
              </div>
              <Button variant="hero" size="lg" className="mt-6" onClick={handleSubmit}>
                Submit to IT Portal <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </AppLayout>
  );
};

export default SubmitFiling;
