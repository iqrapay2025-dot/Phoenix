import { Card } from "../src/components/ui/card";
import { Badge } from "../src/components/ui/badge";
import {
  Shield,
  Settings,
  ArrowLeftRight,
  TrendingUp,
  Code,
  Clock,
  Target,
} from "lucide-react";

export function EcosystemPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Ecosystem & Partnerships
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our project is supported by a robust network of security partners,
            infrastructure providers, development tools, and exchange
            collaborators. Below is an overview of our current integrations and
            ongoing initiatives.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Security & Auditing */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h3 className="text-3xl text-white">Security & Auditing</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-green-500/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg text-green-300">CertiK</h4>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      Scheduled
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Additional Security Review
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-green-500/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg text-green-300">Hacken</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Active
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Continuous Security Monitoring
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-green-500/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg text-green-300">CFG Ninja</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Completed
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">Audit completed</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-green-500/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg text-green-300">Cyberscope</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Completed
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">KYC completed</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Core Infrastructure */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-blue-400" />
                <h3 className="text-3xl text-white">Core Infrastructure</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/30 transition-all">
                  <h4 className="text-lg text-blue-300 mb-3">Chainlink</h4>
                  <p className="text-gray-400 text-sm">
                    Decentralised Price Feeds & Oracle Services
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/30 transition-all">
                  <h4 className="text-lg text-blue-300 mb-3">
                    Alchemy / Infura
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Blockchain Node Infrastructure
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/30 transition-all">
                  <h4 className="text-lg text-blue-300 mb-3">The Graph</h4>
                  <p className="text-gray-400 text-sm">
                    Decentralised Data Indexing
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Liquidity & Exchange Integration */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <ArrowLeftRight className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl text-white">
                  Liquidity & Exchange Integration
                </h3>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/30 transition-all">
                <h4 className="text-lg text-purple-300 mb-3">Uniswap</h4>
                <p className="text-gray-400 text-sm">
                  Primary DEX Liquidity Pool
                </p>
              </div>
            </div>
          </Card>

          {/* Marketing, Analytics & Growth */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-orange-400" />
                <h3 className="text-3xl text-white">
                  Marketing, Analytics & Growth Platforms
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-orange-500/30 transition-all">
                  <h4 className="text-lg text-orange-300 mb-3">
                    CoinMarketCap
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Listing & Market Analytics
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-orange-500/30 transition-all">
                  <h4 className="text-lg text-orange-300 mb-3">CoinGecko</h4>
                  <p className="text-gray-400 text-sm">
                    Listing & Live Tracking
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-orange-500/30 transition-all">
                  <h4 className="text-lg text-orange-300 mb-3">DexTools</h4>
                  <p className="text-gray-400 text-sm">
                    Trading & Charting Analytics
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Development Frameworks */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-cyan-400" />
                <h3 className="text-3xl text-white">
                  Development Frameworks & Tooling
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/30 transition-all">
                  <h4 className="text-lg text-cyan-300 mb-3">OpenZeppelin</h4>
                  <p className="text-gray-400 text-sm">
                    Smart Contract Standards & Security Libraries
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/30 transition-all">
                  <h4 className="text-lg text-cyan-300 mb-3">Hardhat</h4>
                  <p className="text-gray-400 text-sm">
                    Development & Testing Environment
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/30 transition-all">
                  <h4 className="text-lg text-cyan-300 mb-3">Etherscan</h4>
                  <p className="text-gray-400 text-sm">
                    Contract Verification & Transparency
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* In Progress */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl text-white">In Progress</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-yellow-700 hover:border-yellow-500/30 transition-all">
                  <h4 className="text-lg text-yellow-300 mb-3">Gate.io</h4>
                  <p className="text-gray-400 text-sm">Application Submitted</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-yellow-700 hover:border-yellow-500/30 transition-all">
                  <h4 className="text-lg text-yellow-300 mb-3">MEXC</h4>
                  <p className="text-gray-400 text-sm">
                    Compliance & Listing Exploration
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-yellow-700 hover:border-yellow-500/30 transition-all">
                  <h4 className="text-lg text-yellow-300 mb-3">KuCoin</h4>
                  <p className="text-gray-400 text-sm">
                    Partnership Discussions
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Targeted for Q3 2026 */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl text-white">Targeted for Q3 2026</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-700 hover:border-purple-500/30 transition-all">
                  <h4 className="text-lg text-purple-300 mb-3">Binance</h4>
                  <p className="text-gray-400 text-sm">
                    Listing Review Process
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-700 hover:border-purple-500/30 transition-all">
                  <h4 className="text-lg text-purple-300 mb-3">Coinbase</h4>
                  <p className="text-gray-400 text-sm">
                    Compliance & Listing Exploration
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-700 hover:border-purple-500/30 transition-all">
                  <h4 className="text-lg text-purple-300 mb-3">OKX</h4>
                  <p className="text-gray-400 text-sm">
                    Partnership Opportunities Under Review
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Note */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-6 inline-block">
              <p className="text-gray-300">
                <span className="text-purple-300">Note:</span> Partnerships are
                subject to change based on market conditions and strategic
                priorities. We continuously evaluate new opportunities to
                enhance the Phoenix Chicken ecosystem.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
