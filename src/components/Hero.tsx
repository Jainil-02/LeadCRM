import { Button } from "@/components/ui/button";
import { Star, Check, Shield, Users } from "lucide-react";

const Hero = () => {
  const integrations = [
    { name: "HubSpot", color: "#FF7A59", icon: "H" },
    { name: "Salesforce", color: "#00A1E0", icon: "S" },
    { name: "Pipedrive", color: "#2E2E2E", icon: "P" },
    { name: "Zoho", color: "#C8202F", icon: "Z" },
  ];

  return (
    <section className="pt-24 pb-16 gradient-hero-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#63657E] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#00A1E0]">
            <img src="/Frame1.svg" className="pr-2" />
            {/* <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span> */}
            Thousands of Professional using LeadCRM
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            LinkedIn CRM Integration
            <br />
            Capture, Sync and Enrich in{" "}
            <span className="text-[#00A1E0]">Both Ways</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-8">
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on LinkedIn profiles. Complete bi-directional
            integration with HubSpot, Salesforce, and Pipedrive.
          </p>

          {/* Integration Icons */}
          <div
            className="flex items-center justify-center gap-3 mb-8 p-4 rounded-2xl text-white"
            style={{
              background:
                "linear-gradient(90.37deg, #5ED3FF -12.35%, #6EC6FE 0.67%, #EB65F4 100.24%, #FD58F2 114.28%)",
              display: "inline-flex",
            }}
          >
            {" "}
            <span className="text-[24px] text-black mr-2">Works with:</span>
            <div className="gap-[21px] flex">
              <img src="/Work3.svg" />
              <img src="/Work2.svg" />
              <img src="/Work1.png" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-[60px] mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
              <span className="ml-2 font-semibold text-foreground">5/5</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
              <span className="ml-2 font-semibold text-foreground">5/5</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="xl" className="bg-[#373737]">
              Available in <br/>
              Chrome Web Store
            </Button>
            <Button size="xl" className="bg-[#B3FC6A] text-black">
              Get a Free trial Now!
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>Trusted by 50K+ Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Your Data is Safe. Encrypted.</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange" />
              <span>Trusted by Global Enterprises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
