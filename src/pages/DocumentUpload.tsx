import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, FileText, Check, ArrowRight, X } from "lucide-react";
import AppLayout from "@/components/AppLayout";

interface DocType {
  id: string;
  label: string;
  desc: string;
  required?: boolean;
}

const docTypes: DocType[] = [
  { id: "form16", label: "Form 16", desc: "From your employer", required: true },
  { id: "Knowledge Base", label:"Knowledge Base", desc: "Knowledge Base", required: true },
  { id: "ais", label: "AIS / 26AS", desc: "Annual Information Statement" },
  { id: "bank", label: "Bank Statements", desc: "Savings & FD interest" },
  { id: "investment", label: "Investment Proofs", desc: "80C, 80D, etc." },
];

const DocumentUpload = () => {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState<Record<string, boolean>>({});
  const [processing, setProcessing] = useState(false);

  const handleUpload = (docId: string) => {
    setUploaded((prev) => ({ ...prev, [docId]: true }));
  };

  const handleContinue = () => {
    setProcessing(true);
    setTimeout(() => {
      navigate("/review");
    }, 2000);
  };

  const uploadedCount = Object.keys(uploaded).length;

  return (
    <AppLayout title="Upload Documents" subtitle="Upload your tax documents" currentStep={2}>
      <div className="space-y-4">
        {docTypes.map((doc) => (
          <Card key={doc.id} className={`shadow-card transition-all ${uploaded[doc.id] ? "border-success" : ""}`}>
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${uploaded[doc.id] ? "bg-success" : "bg-muted"}`}>
                    {uploaded[doc.id] ? (
                      <Check className="w-5 h-5 text-success-foreground" />
                    ) : (
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {doc.label}
                      {doc.required && <span className="text-destructive ml-1">*</span>}
                    </h3>
                    <p className="text-sm text-muted-foreground">{doc.desc}</p>
                  </div>
                </div>
                {uploaded[doc.id] ? (
                  <Button variant="ghost" size="sm" onClick={() => setUploaded((p) => { const n = { ...p }; delete n[doc.id]; return n; })}>
                    <X className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleUpload(doc.id)}>
                    <Upload className="w-4 h-4 mr-1" /> Upload
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        {processing ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-heading font-semibold text-foreground">Processing your documents...</p>
            <p className="text-sm text-muted-foreground mt-1">AI is extracting income & TDS data</p>
          </div>
        ) : (
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            disabled={uploadedCount === 0}
            onClick={handleContinue}
          >
            Process Documents <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>
    </AppLayout>
  );
};

export default DocumentUpload;
