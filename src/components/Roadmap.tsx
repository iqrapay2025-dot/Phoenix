import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Coins, Zap, Globe } from "lucide-react";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Roadmap to Glory
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our journey from egg to legendary phoenix
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Q1 2027 - Real-World Chicken Farm */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div className="flex-1">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3">
                    Q1 2027
                  </Badge>
                  <h3 className="text-3xl text-white mb-4">
                    Real-World Chicken Farm + NFT Staking
                  </h3>
                  <p className="text-gray-300 mb-6">
                    NFTs linked to real-life chicken farms for dual digital-physical value.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Coins className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg text-purple-300">$PC Utility</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Stake NFTs + $PC - earn physical eggs or $PC rewards</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Use $PC to upgrade farm efficiency via in-game breeding mechanics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-pink-400" />
                    <h4 className="text-lg text-pink-300">Monetization</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Farm pass NFTs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Staking fees</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Physical product sales - all tied to $PC</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Q2 2027 - Meme & Viral Content Engine */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div className="flex-1">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-3">
                    Q2 2027
                  </Badge>
                  <h3 className="text-3xl text-white mb-4">
                    Meme & Viral Content Engine
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Community generates memes, AR videos, or viral content using NFT traits.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Coins className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg text-purple-300">$PC Utility</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Pay $PC to submit premium content - top submissions earn exclusive NFT drops, $PC, or mutation boosts</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Content contributes to Phoenix Battle leaderboard, influencing $PC rewards and DAO perks</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-pink-400" />
                    <h4 className="text-lg text-pink-300">Monetization</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Sponsored content</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Premium meme packs - all $PC-based</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Ongoing/Optional Cross-Layer Features */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-purple-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl text-white">
                  Ongoing/Optional Cross-Layer Features
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-xl text-purple-300 mb-3">🌉 Cross-Chain Migration</h4>
                  <p className="text-gray-300 text-sm">
                    Move NFTs across Ethereum, Solana, BSC - unlock unique traits. Migrations paid in $PC
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-xl text-pink-300 mb-3">🐦 Charity Tie-Ins</h4>
                  <p className="text-gray-300 text-sm">
                    NFT and $PC purchases fund bird conservation projects
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-xl text-purple-300 mb-3">🛡️ Insurance/DeFi Layer</h4>
                  <p className="text-gray-300 text-sm">
                    Stake $PC to protect NFTs during rebirths or battles
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* DAO Treasury Note */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Coins className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg text-white mb-2">DAO Treasury</h4>
                <p className="text-gray-300">
                  Funded in $PC - used for community NFT drops, events, and charity initiatives. 
                  All decisions driven by community governance.
                </p>
              </div>
            </div>
          </Card>

          {/* Note */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-6 inline-block">
              <p className="text-gray-300">
                <span className="text-purple-300">Note:</span> This roadmap is flexible and evolves with DAO governance. 
                The community can adapt plans based on feedback and market conditions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}