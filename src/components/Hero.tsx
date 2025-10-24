import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Rocket, TrendingUp, Send, Twitter } from "lucide-react";
import logo from "figma:asset/56317b1deb8f793ff58dbb977a646fb6a99e7db4.png";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW58ZW58MXx8fHwxNzYxMDM1MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cryptocurrency background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ImageWithFallback
            src={logo}
            alt="Phoenix Chicken Logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <span className="text-white text-xl">Phoenix Chicken</span>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#how-to-join" className="text-gray-300 hover:text-white transition-colors">
            How to Join
          </a>
          <a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
            Roadmap
          </a>
          <a href="#community" className="text-gray-300 hover:text-white transition-colors">
            Community
          </a>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Join Presale
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Presale Coming Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Join the $PC Token Presale
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in early at $0.00725 per token. Launch price $0.015 - Don't miss your chance to be part of the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative">
              <Badge className="absolute -top-3 -right-3 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs px-2 py-1 z-10">
                Coming Soon
              </Badge>
              <Button 
                disabled
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg opacity-75 cursor-not-allowed"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Join the Presale
              </Button>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://t.me/+a5HncZxRjlJmMzQ0" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
              <a 
                href="https://x.com/Phoenix_Chicken" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
                Follow Us
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl text-purple-400 mb-2">$0.00725</div>
              <div className="text-gray-400">Presale Price</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl text-pink-400 mb-2">$0.015</div>
              <div className="text-gray-400">Launch Price</div>
            </div>
             <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl text-green-400 mb-2">Early supporters benefit from lower entry</div>
              {/* <div className="text-gray-400">Potential Gain</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}