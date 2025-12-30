import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/LeadcrmLogo.png"
              alt="LeadCRM Logo"
              className="h-12 shrink-0"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="nav" className="gap-1 font-semibold">
              Product <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="nav" className="font-semibold">
              Pricing
            </Button>
            <Button variant="nav" className="gap-1 font-semibold">
              Resources <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="nav" className="gap-1 font-semibold">
              Company <ChevronDown className="w-4 h-4" />
            </Button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-[#00A1E0] text-white">
              Get Your Free Account
            </Button>
            <Button className="bg-white text-[#00A1E0] border border-[#00A1E0] flex items-center gap-2">
              <img src="/Frame.svg" alt="" />
              Login
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-3 py-4 animate-in slide-in-from-top fade-in">
            <Button variant="ghost" className="justify-between">
              Product <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="justify-start">
              Pricing
            </Button>
            <Button variant="ghost" className="justify-between">
              Resources <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="justify-between">
              Company <ChevronDown className="w-4 h-4" />
            </Button>

            {/* Mobile CTA */}
            <div className="flex flex-col gap-2 pt-2">
              <Button className="bg-[#00A1E0] text-white w-full">
                Get Your Free Account
              </Button>
              <Button className="bg-white text-[#00A1E0] border border-[#00A1E0] w-full">
                <img src="/Frame.svg" alt="" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
