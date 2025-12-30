import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Challenges = () => {
  const withoutLeadCRM = [
    {
      text: "Manual Data Entry",
      status: "3+ Hours wasted daily",
      subtext:
        "Copying LinkedIn contacts to CRM manually plus losing conversation history",
    },
    {
      text: "Incomplete Data",
      status: "60% Data Incomplete",
      subtext: "LinkedIn profiles missing Email and Phones from 700M+ Database",
    },
    {
      text: "No CRM Visibility",
      status: "Zero context availabe",
      subtext:
        "Can’t see existing CRM contacts when browsing LinkedIn profiles",
    },
    {
      text: "Limited Productivity",
      status: "No smart Assistance",
      subtext:
        "Writing messages manually plus no AI assistant for reply, Invite or comments.",
    },
  ];

  const withLeadCRM = [
    {
      text: "Complete Bi-Directional Sync",
      highlight: true,
      subtext:
        "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    },
    {
      text: "700M+ Contacts + Enrichment",
      highlight: true,
      subtext:
        "Get verified emails and phone numbers from a vast global database.",
    },
    {
      text: "CRM Overlay on LinkedIn",
      highlight: true,
      subtext:
        "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    },
    {
      text: "AI Response + Templates + Bulk Export",
      highlight: true,
      subtext:
        "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
    },
  ];

  return (
    <section className="py-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Every LinkedIn Prospector faces these daily challenges
          </h2>
        </div>

        {/* Comparison Section with VS Divider */}
        {/* Comparison Section with VS Divider */}
        <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 overflow-hidden">
          {/* Vertical Line */}
          <div
            className="hidden md:block absolute inset-y-10 top-0 bottom-0 
      left-1/2 w-[2px] bg-gray-300 -translate-x-1/2"
          ></div>

          {/* VS Badge */}
          <div
            className="hidden md:flex absolute top-1/2 left-1/2 z-10
      -translate-x-1/2 -translate-y-1/2 
      bg-white text-black font-bold shadow-none
      w-9 h-9 rounded-full items-center justify-center text-lg"
          >
            VS
          </div>

          {/* Without LeadCRM */}
          <div className="bg-destructive/5 rounded-2xl p-6 border border-destructive/20">
            <img src="/withoutCRM.png" alt="without" />
            <div className="flex items-center gap-2 mb-6 mt-4">
              <h3 className="font-semibold text-[#D24B68] text-[24px]">
                Without LeadCRM
              </h3>
            </div>

            <div className="space-y-3">
              {withoutLeadCRM.map((item, index) => (
                <div key={index} className="pb-4">
                  <div className="flex items-start gap-3">
                    <X className="w-7 h-7 text-destructive shrink-0 mt-4" />

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-black text-[20px] font-medium">
                          {item.text}
                        </span>

                        <span className="text-[12px] bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>

                      <p className="text-gray-600 text-[16px] leading-normal">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* With LeadCRM */}
          <div className="bg-white rounded-2xl p-6 border border-success/20">
            <img src="/withCRM.png" alt="with" />

            <div className="flex items-center gap-2 mb-6 mt-4">
              <h3 className="font-semibold text-[#097737] text-[24px]">
                With LeadCRM
              </h3>
              <span className="ml-auto text-xs bg-[#E6FFF1] text-success px-2 py-1 rounded-full flex items-center gap-1">
                4+ Hours/day Saved
              </span>
            </div>

            <div className="space-y-3">
              {withLeadCRM.map((item, index) => (
                <div key={index} className="pb-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-7 h-7 text-success shrink-0 mt-4" />

                    <div className="flex flex-col gap-1">
                      <span className="text-black text-[20px] font-medium">
                        {item.text}
                      </span>
                      <p className="text-gray-600 text-[16px] leading-normal">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 mt-16 text-center">
  <Button className="bg-[#B3FC6A] text-black" size="lg">
    Start Using LeadCRM Now
  </Button>

  <img
    src="/save.png"
    alt="save"
    style={{ height: "150px", width: "180px" }}
    className="hidden md:block relative bottom-10"  // <-- hides on mobile
  />
</div>

      </div>
    </section>
  );
};

export default Challenges;
