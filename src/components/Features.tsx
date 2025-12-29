import {
  Linkedin,
  Mail,
  Database,
  Users,
  Zap,
  Shield,
  BarChart3,
  Globe,
} from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainFeatures = [
    { icon: Linkedin, label: "CRM Data Enrich" },
    { icon: Mail, label: "CRM Data Sync" },
    { icon: Database, label: "Bulk Export & Enrichment" },
    { icon: Users, label: "AI Productivity" },
  ];

  const detailedFeatures = [
    {
      title: "Here's how LeadCRM tackles that situation:",
      subtitle: "Try LeadCRM Data Enrichment",
      items: [
        { icon: Zap, text: "Bi-Directional Enriching" },
        { icon: Database, text: "Cloud Grounded" },
        { icon: Shield, text: "Sales/Account Sync on" },
        { icon: Users, text: "LinkedIn/Email Sync" },
      ],
    },
    {
      title: "If it does not works for you ! try our",
      subtitle: "Advance Waterfall Enrichment",
      items: [
        { icon: BarChart3, text: "Buying Signals" },
        { icon: Globe, text: "Fundraising" },
        { icon: Users, text: "Company Size" },
        { icon: Zap, text: "Career Growth" },
      ],
    },
  ];

  return (
    <section className="py-9 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#090F4E] mb-4">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        {/* Main Features */}

        <div className="flex items-center justify-center gap-[75px] pb-3 mb-10">
          {mainFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center group"
            >
              <div className="flex items-center gap-2">
                <feature.icon className="w-5 h-5 text-primary" />
                <span
                  className={`text-md text-[#090F4E] font-medium transition ${
                    activeIndex === index
                      ? "text-primary font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {feature.label}
                </span>
              </div>

              {/* Underline for Active Tab */}
              <div
                className={`h-[3px] w-full mt-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#090F4E]" : "bg-transparent"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Detailed Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
          {detailedFeatures.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-card rounded-2xl p-6 card-shadow  bg-[#F0F4FD] border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="text-sm text-[#097737] mb-4">
                  {section.subtitle}
                </p>
              )}
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 bg-secondary/50 rounded-lg p-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
