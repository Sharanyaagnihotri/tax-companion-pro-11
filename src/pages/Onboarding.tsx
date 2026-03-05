import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Building2 } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [pan, setPan] = useState("");
  const [panError, setPanError] = useState("");

  const validatePan = (value: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (value.length === 10 && !panRegex.test(value)) {
      setPanError("Invalid PAN format (e.g. ABCDE1234F)");
    } else if (value.length > 0 && value.length < 10) {
      setPanError("PAN must be exactly 10 characters");
    } else {
      setPanError("");
    }
  };
  const [assessmentYear, setAssessmentYear] = useState("");

  if (!userType) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground">Choose Your Profile</h1>
            <p className="text-muted-foreground mt-2">Select your filing type to get started</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card
              className="cursor-pointer hover:shadow-elevated transition-shadow border-2 hover:border-primary"
              onClick={() => setUserType("individual")}
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Individual</h3>
                <p className="text-sm text-muted-foreground mt-1">Salaried or self-employed</p>
              </CardContent>
            </Card>
            <Card className="cursor-not-allowed opacity-50 border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Business</h3>
                <p className="text-sm text-muted-foreground mt-1">Coming soon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="font-heading">Your Details</CardTitle>
            <CardDescription>We need some basic information to proceed</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
                if (!panRegex.test(pan)) {
                  setPanError("Invalid PAN format (e.g. ABCDE1234F)");
                  return;
                }
                navigate("/dashboard");
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input placeholder="As per PAN card" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label>PAN Number</Label>
                <Input
                  placeholder="ABCDE1234F"
                  value={pan}
                  onChange={(e) => {
                    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
                    setPan(val);
                    validatePan(val);
                  }}
                  maxLength={10}
                  required
                />
                {panError && <p className="text-sm text-destructive">{panError}</p>}
              </div>
              <div className="space-y-2">
                <Label>Assessment Year</Label>
                <Select value={assessmentYear} onValueChange={setAssessmentYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select AY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-26">AY 2025-26</SelectItem>
                    <SelectItem value="2024-25">AY 2024-25</SelectItem>
                    <SelectItem value="2023-24">AY 2023-24</SelectItem>
                    <SelectItem value="2022-23">AY 2022-23</SelectItem>
                    <SelectItem value="2021-22">AY 2021-22</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" variant="hero" className="w-full">Continue to Dashboard</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;