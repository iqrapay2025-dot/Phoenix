import { About } from "../src/components/About";
import { ProblemSolution } from "../src/components/ProblemSolution";
import { HowToJoin } from "../src/components/HowToJoin";
import { Community } from "../src/components/Community";
import { ImageWithFallback } from "../src/components/figma/ImageWithFallback";
import { Button } from "../src/components/ui/button";
import { Rocket, TrendingUp, Send, Twitter, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("December 1, 2025 00:00:00 UTC").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">
              Presale is LIVE 🔥
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Join the $PC Token Presale
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in early! - Don't miss your chance to be part of the future.
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Presale Starts In</span>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
                <div className="text-3xl md:text-5xl text-purple-400 mb-1">
                  {timeLeft.days}
                </div>
                <div className="text-xs md:text-sm text-gray-400">DAYS</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-4">
                <div className="text-3xl md:text-5xl text-pink-400 mb-1">
                  {timeLeft.hours}
                </div>
                <div className="text-xs md:text-sm text-gray-400">HOURS</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
                <div className="text-3xl md:text-5xl text-purple-400 mb-1">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs md:text-sm text-gray-400">MINUTES</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-4">
                <div className="text-3xl md:text-5xl text-pink-400 mb-1">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs md:text-sm text-gray-400">SECONDS</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative">
              <a href="https://www.pinksale.finance/launchpad/ethereum/0xCcC1EcEB0F97cdC8f921022c9769847B5aA11f0a">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg opacity-75 cursor-pointer">
                  <Rocket className="w-5 h-5 mr-2" />
                  Join the Presale
                </Button>
              </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto justify-center justify-items-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl text-purple-400 mb-2">
                Presale in Progress
              </div>
              <div className="text-gray-400">
                Price determined by total raised
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl text-green-400 mb-2">
                Early supporters benefit from lower entry
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <ProblemSolution />
      <HowToJoin />
      <Community />
    </div>
  );
}