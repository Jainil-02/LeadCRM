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
        <div className="text-center max-w-6xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#63657E] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#00A1E0]">
            <img src="/Frame1.svg" className="pr-2" />
            {/* <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span> */}
            Thousands of Professional using LeadCRM
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            LinkedIn CRM Integration <br />
            Capture, Sync and Enrich in{" "}
            <span className="relative inline-flex flex-col items-center whitespace-nowrap">
              <span className="text-[#00A1E0]">Both Ways</span>
              <img src="/line 1.png" alt="line" className="w-full mt-1" />
            </span>
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
            <div className="flex gap-3 md:gap-[21px]">
              <img src="/Groups.png" className="w-10 md:w-14" />{" "}
              {/* smaller on mobile */}
              <img src="/Work2.svg" className="w-10 md:w-14" />
              <img src="/Work1.png" className="w-10 md:w-14" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[60px] mb-8 mt-8">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 mt-10">
            <Button
              size="xl"
              className="bg-[#373737] flex items-center justify-between py-3 px-5 w-fit"
            >
              {/* Left Text */}
              <div className="flex flex-col items-start leading-none">
                <span className="text-[12px] text-[#E4E4E4] leading-tight">
                  Available in
                </span>
                <span className="text-[16px] text-[#E4E4E4] font-medium leading-tight">
                  Chrome Web Store
                </span>
              </div>

              {/* Right Icon */}
              <img
                src="/chrome-logo 1.png"
                alt="chrome-logo"
                className="w-6 h-6 ml-3"
              />
            </Button>

            <Button size="xl" className="bg-[#B3FC6A] text-black">
              Get a Free trial Now!
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-muted-foreground max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2">
              <img src="/contact (2).svg" alt="icons" />
              <span>Access to 700M+ Contacts</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/cursorPointer.svg" alt="icons" />
              <span>One click push to CRM</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/threeDot.svg" alt="icons" />
              <span>Custom Field Mapping</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/waterfall.svg" alt="icons" />
              <span>Advanced Waterfall Enrichment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
