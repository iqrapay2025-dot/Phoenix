import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/56317b1deb8f793ff58dbb977a646fb6a99e7db4.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Ecosystem & Partnership", id: "ecosystem" },
    { name: "Staking", id: "staking" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW58ZW58MXx8fHwxNzYxMDM1MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cryptocurrency background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <ImageWithFallback
            src={logo}
            alt="Phoenix Chicken Logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <span className="text-white text-xl">Phoenix Chicken</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`transition-colors ${
                currentPage === item.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
          {/* <a href="https://www.pinksale.finance/launchpad/ethereum/0xCcC1EcEB0F97cdC8f921022c9769847B5aA11f0a">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Join Presale
            </Button>
          </a> */}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={logo}
                alt="Phoenix Chicken Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <span className="text-white text-xl">Phoenix Chicken</span>
            </div>
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 mt-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-xl transition-colors ${
                  currentPage === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            {/* <a href="https://www.pinksale.finance/launchpad/ethereum/0xCcC1EcEB0F97cdC8f921022c9769847B5aA11f0a">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-4">
                Join Presale
              </Button>
            </a> */}
          </div>
        </div>
      )}
    </>
  );
}
