import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, IndianRupee, FileCheck, ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Zap, title: "AI-Powered", desc: "Auto-extract income & TDS from documents" },
    { icon: Shield, title: "Secure Filing", desc: "Bank-grade encryption for your data" },
    { icon: IndianRupee, title: "Max Savings", desc: "Smart deduction optimizer finds best regime" },
    { icon: FileCheck, title: "Easy Filing", desc: "File ITR in minutes, not hours" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="font-heading font-bold text-2xl text-primary tracking-tight">TaxFile</span>
        <Button variant="outline" onClick={() => navigate("/login")}>
          Log In
        </Button>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          AY 2025-26 Filing Open
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
          File Your Income Tax
          <span className="block gradient-hero bg-clip-text text-transparent">in Minutes, Not Hours</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Upload your documents, let AI extract everything, optimize deductions, and file — all in one seamless flow.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={() => navigate("/login")} className="text-base px-8">
            Get Started <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="outline" size="lg" className="text-base">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 shadow-card border">
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
