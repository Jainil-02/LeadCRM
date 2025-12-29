import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <img src="/LeadcrmLogo.png" alt="LeadCRM Logo" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="nav" className="gap-1 font-semibold">
              Product <ChevronDown className="w-4 h-4 font-semibold" />
            </Button>
            <Button variant="nav" className="font-semibold">Pricing</Button>
            <Button variant="nav" className="gap-1 font-semibold">
              Resources <ChevronDown className="w-4 h-4 font-semibold" />
            </Button>
            <Button variant="nav" className="gap-1 font-semibold">
              Company <ChevronDown className="w-4 h-4 font-semibold" />
            </Button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex bg-[#00A1E0] text-white">
              Get Your Free Account
            </Button>
            <Button className="bg-white text-[#00A1E0] border border-[#00A1E0]">
              <img src="/Frame.svg" alt="" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
