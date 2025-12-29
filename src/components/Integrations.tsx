import { Button } from "@/components/ui/button";

const Integrations = () => {
  const integrations = [
    { name: "Salesforce", color: "#00A1E0", icon: "S", position: "top-left" },
    { name: "HubSpot", color: "#FF7A59", icon: "H", position: "top-right" },
    { name: "Slack", color: "#4A154B", icon: "S", position: "left" },
    { name: "Pipedrive", color: "#017737", icon: "P", position: "right" },
    { name: "Notion", color: "#000000", icon: "N", position: "bottom-left" },
    { name: "Zapier", color: "#FF4A00", icon: "Z", position: "bottom-right" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Supported LeadCRM
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        {/* Integration Icons Layout */}
        <div className="relative max-w-4xl mx-auto h-64 md:h-80">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 gradient-primary rounded-full flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-2xl">L</span>
          </div>

          {/* Curved Connection Lines - SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Curved paths connecting to center */}
            <path d="M 80 60 Q 140 100 200 160" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 320 60 Q 260 100 200 160" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 40 160 Q 100 160 200 160" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 360 160 Q 300 160 200 160" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 80 260 Q 140 220 200 160" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 320 260 Q 260 220 200 160" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
          </svg>

          {/* Integration Icons */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2">
            <div className="w-14 h-14 rounded-xl bg-[#00A1E0] flex items-center justify-center text-white font-bold shadow-lg animate-float">
              S
            </div>
          </div>
          <div className="absolute top-0 right-1/4 translate-x-1/2">
            <div className="w-14 h-14 rounded-xl bg-[#FF7A59] flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
              H
            </div>
          </div>
          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <div className="w-14 h-14 rounded-xl bg-[#4A154B] flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              S
            </div>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <div className="w-14 h-14 rounded-xl bg-[#017737] flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
              P
            </div>
          </div>
          <div className="absolute bottom-0 left-1/4 -translate-x-1/2">
            <div className="w-14 h-14 rounded-xl bg-[#000000] flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: "2s" }}>
              N
            </div>
          </div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2">
            <div className="w-14 h-14 rounded-xl bg-[#FF4A00] flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: "2.5s" }}>
              Z
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="text-black bg-[#B3FC6A]" size="lg">
            Let us integrate your CRM Now !
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
