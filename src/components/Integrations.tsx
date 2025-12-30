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
        <div className="text-center mb-[100px]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Supported LeadCRM
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        {/* Integration Icons Layout */}
<div className="relative flex items-center justify-center">

          {/* Center Main Logo */}
          <div className="relative z-10 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full 
              bg-[#E8F6FF] shadow-xl flex items-center justify-center border-2 border-[#00AEEF]">
            {/* Replace with your logo */}
            <img src="/logo 3-1.png" alt="LeadCRM" className="w-[70%] h-auto z-10" />

          </div>
                            <img src="/VectorCenter.png" alt="line" className="absolute ml-[160px]" />

          {/* Left LinkedIn Column */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] md:w-[35%] flex flex-col gap-10">

            {/* card 1 */}
            <div className="flex items-center gap-3 relative">
              <img src="/Message.png" alt="Conversation" className="w-16 h-16 z-10" />
              {/* <div className="bg-white shadow-lg border p-3 rounded-xl text-sm font-medium">
                Conversation
              </div> */}
              <img src="/VectorTop.png" alt="line" className="absolute mt-[80px]" />
              {/* <div className="absolute left-[70px] top-[30px] w-[60%] border-dashed border-b-2 border-[#9bd8ff]"></div> */}
            </div>

            {/* card 2 */}
            <div className="flex items-center gap-3 relative">
              <img src="/ContactBook.png" alt="Contacts" className="w-16 h-16 z-10" />
              {/* <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#E2F5FF] rounded-full text-xs">First Name</span>
                <span className="px-3 py-1 bg-[#E2F5FF] rounded-full text-xs">Last Name</span>
              </div> */}
                            <img src="/VectorCenter.png" alt="line"  />

              {/* <div className="absolute left-[70px] top-[30px] w-[50%] border-dashed border-b-2 border-[#9bd8ff]"></div> */}
            </div>

            {/* card 3 */}
            <div className="flex items-center gap-3 relative">
              <img src="/Building.png" alt="Companies" className="w-16 h-16 z-10" />
              {/* <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#E2F5FF] rounded-full text-xs">Website</span>
                <span className="px-3 py-1 bg-[#E2F5FF] rounded-full text-xs">Employees</span>
              </div> */}
                            <img src="/VectorBottom.png" alt="line" className="absolute mb-[80px]" />

              {/* <div className="absolute left-[70px] top-[30px] w-[45%] border-dashed border-b-2 border-[#9bd8ff]"></div> */}
            </div>
          </div>


          {/* Right CRM Column */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 bg-[#F5F8FF] p-6 rounded-3xl shadow-lg">

            {/* Replace with your CRM logos */}
            <img src="/Groups.png" className="w-14 h-14 rounded-full shadow-md" />
            <img src="/Work2.svg" className="w-14 h-14 rounded-full shadow-md" />
            <img src="/Salesforce Integration-1.png" className="w-14 h-14 rounded-full shadow-md" />
            <img src="/Zoho.png" className="w-14 h-14 rounded-full shadow-md" />

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-[180px]">
          <Button className="text-black bg-[#B3FC6A]" size="lg">
            Let us integrate your CRM Now !
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
