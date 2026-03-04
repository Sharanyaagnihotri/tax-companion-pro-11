import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  path: string;
}

const steps: Step[] = [
  { label: "Onboarding", path: "/onboarding" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Upload", path: "/upload" },
  { label: "Review", path: "/review" },
  { label: "Income", path: "/income-summary" },
  { label: "Deductions", path: "/deductions" },
  { label: "Tax Calc", path: "/tax-calculation" },
  { label: "Preview", path: "/itr-preview" },
  { label: "Submit", path: "/submit" },
];

interface ProgressTrackerProps {
  currentStep: number;
}

const ProgressTracker = ({ currentStep }: ProgressTrackerProps) => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex items-center min-w-max px-4">
        {steps.map((step, index) => (
          <div key={step.path} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all",
                  index < currentStep
                    ? "bg-success text-success-foreground"
                    : index === currentStep
                    ? "gradient-hero text-primary-foreground shadow-elevated"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span
                className={cn(
                  "text-[10px] mt-1 font-medium whitespace-nowrap",
                  index <= currentStep ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 h-0.5 mx-1 mt-[-12px]",
                  index < currentStep ? "bg-success" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
