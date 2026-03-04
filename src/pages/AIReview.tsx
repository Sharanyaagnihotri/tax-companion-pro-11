import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Pencil, ArrowRight } from "lucide-react";
import AppLayout from "@/components/AppLayout";

interface ExtractedField {
  id: string;
  label: string;
  value: string;
  category: string;
}

const initialFields: ExtractedField[] = [
  { id: "salary", label: "Salary Income", value: "8,50,000", category: "Income" },
  { id: "tds", label: "TDS Deducted", value: "72,000", category: "TDS" },
  { id: "interest", label: "Interest Income", value: "24,500", category: "Income" },
  { id: "other", label: "Other Income", value: "12,000", category: "Income" },
  { id: "hra", label: "HRA Received", value: "1,80,000", category: "Allowances" },
];

const AIReview = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState(initialFields);
  const [editing, setEditing] = useState<string | null>(null);

  const updateField = (id: string, value: string) => {
    setFields((prev) => prev.map((f) => (f.id === id ? { ...f, value } : f)));
  };

  const categories = [...new Set(fields.map((f) => f.category))];

  return (
    <AppLayout title="AI Extraction Review" subtitle="Verify extracted data" currentStep={3}>
      <div className="mb-6 p-4 rounded-xl bg-info/10 border border-info/20">
        <p className="text-sm text-foreground">
          <span className="font-semibold">AI has extracted the following data</span> from your documents. Please review and edit if needed.
        </p>
      </div>

      {categories.map((cat) => (
        <Card key={cat} className="shadow-card mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-base">{cat}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {fields
              .filter((f) => f.category === cat)
              .map((field) => (
                <div key={field.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <Label className="text-sm text-muted-foreground">{field.label}</Label>
                  <div className="flex items-center gap-2">
                    {editing === field.id ? (
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">₹</span>
                        <Input
                          className="w-32 h-8 text-right"
                          value={field.value}
                          onChange={(e) => updateField(field.id, e.target.value)}
                          autoFocus
                        />
                        <Button size="sm" variant="ghost" onClick={() => setEditing(null)}>
                          <Check className="w-4 h-4 text-success" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">₹ {field.value}</span>
                        <Button size="sm" variant="ghost" onClick={() => setEditing(field.id)}>
                          <Pencil className="w-3 h-3 text-muted-foreground" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}

      <Button variant="hero" size="lg" className="w-full mt-6" onClick={() => navigate("/income-summary")}>
        Confirm & Continue <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </AppLayout>
  );
};

export default AIReview;
