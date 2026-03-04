import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const incomeItems = [
  { label: "Salary", amount: "8,50,000" },
  { label: "Capital Gains", amount: "0" },
  { label: "Interest Income", amount: "24,500" },
  { label: "Other Income", amount: "12,000" },
];

const IncomeSummary = () => {
  const navigate = useNavigate();
  const totalGross = "8,86,500";

  return (
    <AppLayout title="Income Summary" subtitle="Your total income breakdown" currentStep={4}>
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-heading">Income Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incomeItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b last:border-0">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-semibold text-foreground">₹ {item.amount}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t-2 border-primary/20 flex items-center justify-between">
            <span className="font-heading font-bold text-lg text-foreground">Total Gross Income</span>
            <span className="font-heading font-bold text-2xl text-primary">₹ {totalGross}</span>
          </div>
        </CardContent>
      </Card>

      <Button variant="hero" size="lg" className="w-full mt-6" onClick={() => navigate("/deductions")}>
        Continue <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </AppLayout>
  );
};

export default IncomeSummary;
