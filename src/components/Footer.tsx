import { Twitter, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Integrations: [
      "Salesforce",
      "HubSpot",
      "Pipedrive",
      "CLose.io",
      "Insightly",
    ],
    Alternatives: ["Surfe VS LeadCRM", "Linkmatch Alternative"],
    Legal: ["Privacy Policy", "Terms of Use"],
    "Contact Us": ["support@leadcrm.io", "+1 231-538-7466", "Help Center"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="py-16 text-black bg-[linear-gradient(90deg,#01B2D812,#01B2D838)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-black font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-lg">LEADCRM.IO</span>
            </div>
            <p className="text-black text-[16px] mb-6 leading-relaxed">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-[20px] mb-4 text-[#090F4E]">{title}</h4>
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
