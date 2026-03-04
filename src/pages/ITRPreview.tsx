import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const summaryData = [
  { label: "Name", value: "John Doe" },
  { label: "PAN", value: "ABCDE1234F" },
  { label: "Assessment Year", value: "2025-26" },
  { label: "Total Income", value: "₹ 8,86,500" },
  { label: "Total Deductions", value: "₹ 2,74,000" },
  { label: "Taxable Income", value: "₹ 6,12,500" },
  { label: "Tax Payable", value: "₹ 52,500" },
  { label: "TDS Paid", value: "₹ 72,000" },
  { label: "Refund", value: "₹ 19,500" },
  { label: "Regime", value: "Old Regime" },
];

const jsonData = {
  assesseeInfo: { name: "John Doe", pan: "ABCDE1234F", ay: "2025-26" },
  income: { salary: 850000, interest: 24500, other: 12000, totalGross: 886500 },
  deductions: { sec80C: 150000, sec80D: 18000, hra: 96000, sec80TTA: 10000, total: 274000 },
  taxComputation: { taxableIncome: 612500, taxPayable: 52500, tdsPaid: 72000, refund: 19500 },
  regime: "old",
};

const ITRPreview = () => {
  const navigate = useNavigate();

  return (
    <AppLayout title="ITR Preview" subtitle="Review before filing" currentStep={7}>
      <Tabs defaultValue="summary">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="form">Full Form</TabsTrigger>
          <TabsTrigger value="json">JSON</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <Card className="shadow-card mt-4">
            <CardHeader>
              <CardTitle className="font-heading">Filing Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {summaryData.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                    <span className="font-semibold text-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="form">
          <Card className="shadow-card mt-4">
            <CardHeader>
              <CardTitle className="font-heading">ITR-1 (Sahaj)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Part A: General Information</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-muted-foreground">Name:</span> <span className="font-medium text-foreground">John Doe</span></div>
                    <div><span className="text-muted-foreground">PAN:</span> <span className="font-medium text-foreground">ABCDE1234F</span></div>
                    <div><span className="text-muted-foreground">AY:</span> <span className="font-medium text-foreground">2025-26</span></div>
                    <div><span className="text-muted-foreground">Status:</span> <span className="font-medium text-foreground">Individual</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Part B: Gross Total Income</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between"><span className="text-muted-foreground">Income from Salary</span><span className="text-foreground">₹ 8,50,000</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Income from Other Sources</span><span className="text-foreground">₹ 36,500</span></div>
                    <div className="flex justify-between font-semibold border-t pt-1 mt-1"><span className="text-foreground">Gross Total Income</span><span className="text-foreground">₹ 8,86,500</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Part C: Deductions & Tax</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between"><span className="text-muted-foreground">Total Deductions</span><span className="text-foreground">₹ 2,74,000</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Taxable Income</span><span className="text-foreground">₹ 6,12,500</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Tax Payable</span><span className="text-foreground">₹ 52,500</span></div>
                    <div className="flex justify-between font-semibold text-success border-t pt-1 mt-1"><span>Refund</span><span>₹ 19,500</span></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="json">
          <Card className="shadow-card mt-4">
            <CardHeader>
              <CardTitle className="font-heading">JSON Data</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted rounded-lg p-4 text-sm text-foreground overflow-auto max-h-96 font-mono">
                {JSON.stringify(jsonData, null, 2)}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Button variant="hero" size="lg" className="w-full mt-6" onClick={() => navigate("/submit")}>
        Submit Filing <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </AppLayout>
  );
};

export default ITRPreview;
