import { X, Check, ArrowRight } from "lucide-react";
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
    { text: "Complete Bi-Directional Sync", highlight: true, subtext:"Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time." },
    { text: "700M+ Contacts + Enrichment", highlight: true, subtext:"Get verified emails and phone numbers from a vast global database." },
    { text: "CRM Overlay on LinkedIn", highlight: true, subtext:"See full CRM insights directly on LinkedIn profiles without switching tabs." },
    { text: "AI Response + Templates + Bulk Export", highlight: true, subtext:"Save time with AI-crafted replies, pre-built templates, and one-click data exports." },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Every LinkedIn Prospector faces these daily challenges
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without LeadCRM */}
          <div className="bg-destructive/5 rounded-2xl p-6 border border-destructive/20">
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-3 h-3 rounded-full bg-destructive"></div> */}
              <h3 className="font-semibold text-[#D24B68] text-[24px]">
                Without LeadCRM
              </h3>
              {/* <span className="ml-auto text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full">
                Time Consuming
              </span> */}
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
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-3 h-3 rounded-full bg-success"></div> */}
              <h3 className="font-semibold text-[#097737] text-[24px]">
                With LeadCRM
              </h3>
              <span className="ml-auto text-xs bg-[#E6FFF1] text-success px-2 py-1 rounded-full flex items-center gap-1">
                 4+ Hours/day Saved
              </span>
            </div>
            {/* <div className="space-y-3">
              {withLeadCRM.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span
                    className={`text-sm ${
                      item.highlight
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div> */}
            <div className="space-y-3">
              {withLeadCRM.map((item, index) => (
                <div key={index} className="pb-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-7 h-7 text-success shrink-0 mt-4" />

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-black text-[20px] font-medium">
                          {item.text}
                        </span>

                        {/* <span className="text-[12px] bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">
                          {item.status}
                        </span> */}
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
        </div>

        {/* Stats */}
        <div className="text-center mt-12">
          <div>
            <Button variant="success" size="lg" className="bg-[#B3FC6A] text-black">
              Start Using LeadCRM Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
