import { Card } from "../src/components/ui/card";
import { Badge } from "../src/components/ui/badge";
import { Coins, Zap, Globe, Rocket, TrendingUp, Award } from "lucide-react";

export function RoadmapPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Roadmap to Glory
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our journey from egg to legendary phoenix
          </p>
        </div>

        {/* Presale Stages */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              3-Stage Presale
            </h3>
            <p className="text-xl text-gray-400">
              Strategic early access for long-term believers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/50 border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                  STAGE 1
                </Badge>
                <h4 className="text-2xl text-white mb-2">EARLY BIRD</h4>
                <p className="text-purple-300 mb-4">(Seed Round)</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-purple-400">$0.00435 per PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discount:</span>
                    <span className="text-green-400">40% from launch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Allocation:</span>
                    <span className="text-white">62.1M PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hard Cap:</span>
                    <span className="text-white">$270,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">7-10 days</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300">Bonus</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    First 100 investors get NFT whitelist guarantee
                  </p>
                </div>
              </div>
            </Card>

            {/* Stage 2 */}
            <Card className="bg-gradient-to-br from-pink-900/40 to-slate-800/50 border-pink-500/30 overflow-hidden hover:border-pink-400/50 transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <div className="p-6">
                <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 mb-4">
                  STAGE 2
                </Badge>
                <h4 className="text-2xl text-white mb-2">COMMUNITY ROUND</h4>
                <p className="text-pink-300 mb-4">&nbsp;</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-pink-400">$0.00580 per PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discount:</span>
                    <span className="text-green-400">20% from launch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Allocation:</span>
                    <span className="text-white">82.8M PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hard Cap:</span>
                    <span className="text-white">$480,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">10-14 days</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-pink-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-pink-400" />
                    <span className="text-pink-300">Bonus</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Guaranteed allocation in launchpad tier system
                  </p>
                </div>
              </div>
            </Card>

            {/* Stage 3 */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/50 border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                  STAGE 3
                </Badge>
                <h4 className="text-2xl text-white mb-2">FINAL CALL</h4>
                <p className="text-purple-300 mb-4">&nbsp;</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-purple-400">$0.00652 per PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discount:</span>
                    <span className="text-green-400">10% from launch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Allocation:</span>
                    <span className="text-white">62.1M PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hard Cap:</span>
                    <span className="text-white">$405,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">7 days</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300">Bonus</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    1.5x staking multiplier for first 30 days post-launch
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 p-6 mt-8">
            <p className="text-gray-300 text-center">
              <span className="text-purple-400">Total Presale Allocation:</span>{" "}
              207M PC tokens (30% of total supply) | <span className="text-purple-400">Combined Hard Cap:</span> $1,155,000
            </p>
          </Card>
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
                    NFTs linked to real-life chicken farms for dual
                    digital-physical value.
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
                      <span>
                        Stake NFTs + $PC - earn physical eggs or $PC rewards
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Use $PC to upgrade farm efficiency via in-game breeding
                        mechanics
                      </span>
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
                    Community generates memes, AR videos, or viral content using
                    NFT traits.
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
                      <span>
                        Pay $PC to submit premium content - top submissions earn
                        exclusive NFT drops, $PC, or mutation boosts
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Content contributes to Phoenix Battle leaderboard,
                        influencing $PC rewards and DAO perks
                      </span>
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
                  <h4 className="text-xl text-purple-300 mb-3">
                    🌉 Cross-Chain Migration
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Move NFTs across Ethereum, Solana, BSC - unlock unique
                    traits. Migrations paid in $PC
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-xl text-pink-300 mb-3">
                    🐦 Charity Tie-Ins
                  </h4>
                  <p className="text-gray-300 text-sm">
                    NFT and $PC purchases fund bird conservation projects
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-xl text-purple-300 mb-3">
                    🛡️ Insurance/DeFi Layer
                  </h4>
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
                  Funded in $PC - used for community NFT drops, events, and
                  charity initiatives. All decisions driven by community
                  governance.
                </p>
              </div>
            </div>
          </Card>

          {/* Note */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-6 inline-block">
              <p className="text-gray-300">
                <span className="text-purple-300">Note:</span> This roadmap is
                flexible and evolves with DAO governance. The community can
                adapt plans based on feedback and market conditions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
