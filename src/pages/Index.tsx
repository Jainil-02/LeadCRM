import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <HowItWorks />
        <Testimonials />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
