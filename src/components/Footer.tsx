import { Twitter, Send, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/56317b1deb8f793ff58dbb977a646fb6a99e7db4.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={logo}
                alt="Phoenix Chicken Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <span className="text-white text-xl">Phoenix Chicken</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Rising from the ashes to create a resilient, community-driven memecoin with real utility. 
              Join the Phoenix Chicken Army.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Built on Ethereum • 690M Total Supply
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#how-to-join" className="text-gray-400 hover:text-purple-400 transition-colors">
                  How to Join
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Community</h4>
            <div className="flex gap-4">
              <a 
                href="https://x.com/Phoenix_Chicken" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a 
                href="https://t.me/+a5HncZxRjlJmMzQ0" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5 text-gray-300" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">#PhoenixChickenArmy</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-gray-400 text-sm">
              © 2025 Phoenix Chicken ($PC). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Disclaimer: Crypto investments carry risks. This is not financial advice. 
              Phoenix Chicken is built for longevity but offers no guarantees. Participate at your own risk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
