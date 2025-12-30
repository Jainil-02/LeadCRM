import { Button } from "@/components/ui/button";

const CTA = () => {
  const badges = [
    { text: "10,000 Free Profiles", color: "bg-success" },
    { text: "No Setup", color: "bg-primary" },
    { text: "Google rated", color: "bg-orange" },
    { text: "50k+ Users", color: "bg-purple" },
  ];

  return (
    <section className="mb-[100px] py-20 bg-background bg-[#e5ebf9]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className=" mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Thousands of Professionals Using LeadCRM
          </h2>
        </div>
        <img src="/Product hunt banner image.png" alt="banner" />

        <div className="flex justify-center mt-8">
          <Button className="text-black bg-[#9EE25A]" size="xl">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
