import { Download, Search, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      description: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      icon: Download,
      color: "bg-primary/10 text-primary",
    },
    {
      number: "2",
      title: "Browse LinkedIn",
      description: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      icon: Search,
      color: "bg-orange/10 text-orange",
    },
    {
      number: "3",
      title: "Get Enriched Data",
      description: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      icon: Database,
      color: "bg-success/10 text-success",
    },
    {
      number: "4",
      title: "Sync to CRM Instantly",
      description: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
      icon: Zap,
      color: "bg-purple/10 text-purple",
    },
  ];

  return (
    <section className="py-20 bg-[#EAEFFA]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className=" mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#090F4E] mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From setup to success in <b>4 simple steps</b>
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"></div>
              )}
              
              <div className="bg-card rounded-2xl p-6 card-shadow hover-lift relative z-10">
                {/* Step Number */}
                {/* <div className="step-number mb-4">{step.number}</div>
                
                <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-6 h-6" />
                </div> */}
                <div className="text-center text-[112px] text-400 mb-4 text-[#2D96BC] text-center">{step.number}</div>
                {/* Content */}
                <h3 className="text-[24px] font-semibold text-foreground mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[16px] leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button  size="lg" className="text-black bg-[#B3FC6A]">
            Try LeadCRM Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
