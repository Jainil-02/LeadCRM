import { Twitter, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Integrations: [
      "Salesforce",
      "HubSpot",
      "Pipedrive",
      "Close.io",
      "Insightly",
    ],
    Alternatives: ["Surfe VS LeadCRM", "Linkmatch Alternative"],
    Legal: ["Privacy Policy", "Terms of Use"],
    "Contact Us": ["support@leadcrm.io", "+1 231-538-7466", "Help Center"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="py-16 text-black bg-[linear-gradient(90deg,#01B2D812,#01B2D838)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            {/* <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-black font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-lg">LEADCRM.IO</span>
            </div> */}
            <img src="/LeadcrmLogo.png" alt="logo" />
            <p className="text-black text-[16px] mb-6 leading-relaxed">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#01B2D8" }} // Blue tint background
                >
                  <social.icon className="w-5 h-5 text-white" />{" "}
                  {/* optional blue icon */}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-[20px] mb-4 text-[#090F4E]">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-black text-sm hover:text-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-end justify-end gap-4 mb-0 mt-0">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8  items-center justify-between gap-4 ">
          <p className="text-[#7A7A7A] text-sm text-center mb-2">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
            LinkedIn(tm) logos and trademarks displayed on this tool are
            property of LinkedIn. LeadCRM is distributed AS IS. Your use of
            LeadCRM is at your own risk.{" "}
          </p>
          <div className=" items-center gap-4 border-t-2">
            <p className="text-center text-[#7A7A7A]">
              Copyright © 2025 LeadCRM. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
