import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, CheckCircle2 } from "lucide-react";
import AppLayout from "@/components/AppLayout";

interface Deduction {
  id: string;
  section: string;
  label: string;
  max: string;
  value: string;
}

const initialDeductions: Deduction[] = [
  { id: "80c", section: "80C", label: "PPF, ELSS, LIC, etc.", max: "1,50,000", value: "1,50,000" },
  { id: "80d", section: "80D", label: "Health Insurance Premium", max: "25,000", value: "18,000" },
  { id: "hra", section: "HRA", label: "House Rent Allowance", max: "Variable", value: "96,000" },
  { id: "80tta", section: "80TTA", label: "Savings Interest", max: "10,000", value: "10,000" },
];

const DeductionOptimizer = () => {
  const navigate = useNavigate();
  const [deductions, setDeductions] = useState(initialDeductions);
  const [recommended, setRecommended] = useState<"old" | "new">("old");

  const updateDeduction = (id: string, value: string) => {
    setDeductions((prev) => prev.map((d) => (d.id === id ? { ...d, value } : d)));
  };

  return (
    <AppLayout title="Deduction Optimizer" subtitle="Maximize your tax savings" currentStep={5}>
      {/* Deductions */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-success" />
            Your Deductions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {deductions.map((d) => (
            <div key={d.id} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-sm">
                  <span className="font-semibold text-primary">{d.section}</span> — {d.label}
                </Label>
                <span className="text-xs text-muted-foreground">Max: ₹{d.max}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">₹</span>
                <Input
                  value={d.value}
                  onChange={(e) => updateDeduction(d.id, e.target.value)}
                  className="h-9"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Regime Comparison */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="font-heading">Regime Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`rounded-xl p-5 border-2 cursor-pointer transition-all ${
                recommended === "old" ? "border-success bg-success/5" : "border-border"
              }`}
              onClick={() => setRecommended("old")}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-semibold text-foreground">Old Regime</span>
                {recommended === "old" && <Badge variant="default" className="bg-success text-success-foreground">Recommended</Badge>}
              </div>
              <p className="text-2xl font-heading font-bold text-foreground">₹ 52,500</p>
              <p className="text-xs text-muted-foreground mt-1">Tax after deductions</p>
            </div>
            <div
              className={`rounded-xl p-5 border-2 cursor-pointer transition-all ${
                recommended === "new" ? "border-success bg-success/5" : "border-border"
              }`}
              onClick={() => setRecommended("new")}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-semibold text-foreground">New Regime</span>
                {recommended === "new" && <Badge variant="default" className="bg-success text-success-foreground">Recommended</Badge>}
              </div>
              <p className="text-2xl font-heading font-bold text-foreground">₹ 61,100</p>
              <p className="text-xs text-muted-foreground mt-1">Tax without deductions</p>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-success/10 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="text-sm font-medium text-foreground">
              Old Regime saves you <span className="font-bold text-success">₹ 8,600</span> more
            </span>
          </div>
        </CardContent>
      </Card>

      <Button variant="hero" size="lg" className="w-full" onClick={() => navigate("/tax-calculation")}>
        Continue to Tax Calculation <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </AppLayout>
  );
};

export default DeductionOptimizer;
