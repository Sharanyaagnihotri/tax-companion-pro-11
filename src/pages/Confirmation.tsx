import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download, Eye, ArrowRight } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const Confirmation = () => {
  return (
    <AppLayout title="Filing Confirmed" subtitle="Your ITR has been filed" currentStep={9} showProgress={false}>
      <Card className="shadow-elevated">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-success-foreground" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground">Successfully Filed! 🎉</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Your ITR-1 for AY 2025-26 has been submitted to the Income Tax Portal.
          </p>

          <div className="mt-8 bg-muted rounded-xl p-6 max-w-sm mx-auto text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Filing ID</span>
              <span className="font-mono font-semibold text-foreground">ITR-2025-A7X9K2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Date</span>
              <span className="font-semibold text-foreground">04 Mar 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <span className="font-semibold text-success">Submitted</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Refund</span>
              <span className="font-semibold text-success">₹ 19,500</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" /> Download Acknowledgement
            </Button>
            <Button variant="hero" size="lg">
              <Eye className="w-4 h-4 mr-2" /> Track Filing Status
            </Button>
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
};

export default Confirmation;
