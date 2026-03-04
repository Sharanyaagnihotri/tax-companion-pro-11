import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, TrendingUp, FileText, Upload, ArrowRight } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Income", value: "—", icon: IndianRupee, color: "gradient-hero" },
    { label: "TDS Detected", value: "—", icon: TrendingUp, color: "gradient-success" },
    { label: "Tax Payable / Refund", value: "—", icon: FileText, color: "gradient-hero" },
  ];

  return (
    <AppLayout title="Dashboard" subtitle="Your tax filing overview" currentStep={1} showBack={false}>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <Card key={s.label} className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-2xl font-heading font-bold text-foreground mt-1">{s.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress */}
      <Card className="shadow-card mb-8">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Filing Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[10%] gradient-hero rounded-full transition-all" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">10%</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Next step: Upload your documents to get started</p>
        </CardContent>
      </Card>

      {/* CTA */}
      <Button variant="hero" size="lg" className="w-full" onClick={() => navigate("/upload")}>
        <Upload className="w-5 h-5 mr-2" />
        Upload Documents
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </AppLayout>
  );
};

export default Dashboard;
