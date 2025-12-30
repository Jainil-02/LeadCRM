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
    { icon: Linkedin, label: "CRM Data Enrich", image: "/data.svg" },
    { icon: Mail, label: "CRM Data Sync", image: "/sync.svg" },
    {
      icon: Database,
      label: "Bulk Export & Enrichment",
      image: "/compass.png",
    },
    { icon: Users, label: "AI Productivity", image: "/brain.png" },
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
      image: "/SearchFilter.png",
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
      image: "/SearchFilter.png",
    },
  ];

  return (
    <section className="py-9 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
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

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-[75px] pb-3 mb-10">
          {mainFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center group"
            >
              <div className="flex items-center gap-2">
                <img src={feature.image} alt="icon" />
                <span
                  className={`text-md font-medium transition ${
                    activeIndex === index
                      ? "text-primary font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {feature.label}
                </span>
              </div>

              <div
                className={`h-[3px] w-full mt-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#090F4E]" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-3 pb-7 items-center justify-center text-center">
          <p className="text-center">
            It’s hard to find the accurate contact data for every prospects by{" "}
          </p>

          <span className="hidden md:inline-flex text-[12px] bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">
            Incomplete Data
          </span>
        </div>

        {/* Detailed Features Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-full mx-auto ">
          {detailedFeatures.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-card rounded-2xl p-6 card-shadow  bg-[#e6ebf7] border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="text-sm text-[#097737] mb-4">
                  {section.subtitle}
                </p>
              )}

              <img
                  src={section.image}
                  alt="image"
                  // className="w-full object-contain"

                  style={{height:'300px', width:'100%'}}
                />
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
