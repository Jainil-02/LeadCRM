import { Button } from "@/components/ui/button";

const CTA = () => {
  const badges = [
    { text: "10,000 Free Profiles", color: "bg-success" },
    { text: "No Setup", color: "bg-primary" },
    { text: "Google rated", color: "bg-orange" },
    { text: "50k+ Users", color: "bg-purple" },
  ];

  return (
    <section className="mb-[100px] py-20 bg-background bg-[#EAEFFA]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className=" mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Thousands of Professionals Using LeadCRM
          </h2>
        </div>

        {/* Dark Card */}
        <div className="gradient-navy rounded-3xl p-8 md:p-12 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h3>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`${badge.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
              >
                {badge.text}
              </span>
            ))}
          </div>

          {/* User Avatars */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-navy bg-gradient-to-br from-primary to-success flex items-center justify-center text-white font-semibold text-xs"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-navy bg-secondary flex items-center justify-center text-foreground font-semibold text-xs">
                +50k
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="text-black bg-[#9EE25A]" size="xl">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
