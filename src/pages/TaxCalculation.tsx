import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, IndianRupee } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const rows = [
  { label: "Total Income", value: "8,86,500", bold: false },
  { label: "Total Deductions", value: "2,74,000", bold: false },
  { label: "Taxable Income", value: "6,12,500", bold: true },
  { label: "Tax on Income", value: "52,500", bold: false },
  { label: "Less: TDS Already Paid", value: "72,000", bold: false },
];

const TaxCalculation = () => {
  const navigate = useNavigate();
  const refund = "19,500";

  return (
    <AppLayout title="Tax Calculation" subtitle="Final computation" currentStep={6}>
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <IndianRupee className="w-5 h-5" />
            Tax Computation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {rows.map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between py-3 border-b last:border-0 ${row.bold ? "border-b-2" : ""}`}
              >
                <span className={row.bold ? "font-heading font-bold text-foreground" : "text-muted-foreground"}>
                  {row.label}
                </span>
                <span className={row.bold ? "font-heading font-bold text-lg text-foreground" : "font-semibold text-foreground"}>
                  ₹ {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl gradient-success p-6 text-center">
            <p className="text-success-foreground/80 text-sm font-medium">You're getting a refund!</p>
            <p className="text-4xl font-heading font-bold text-success-foreground mt-1">₹ {refund}</p>
          </div>
        </CardContent>
      </Card>

      <Button variant="hero" size="lg" className="w-full mt-6" onClick={() => navigate("/itr-preview")}>
        Preview ITR <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </AppLayout>
  );
};

export default TaxCalculation;
