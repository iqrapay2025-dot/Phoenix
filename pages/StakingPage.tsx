import { Card } from "../src/components/ui/card";
import { Badge } from "../src/components/ui/badge";
import { Flame, Clock, Trophy, Lock, Unlock, TrendingUp } from "lucide-react";

export function StakingPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            $PC Staking Tiers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Earn rewards by staking your Phoenix Chicken tokens. Choose the tier
            that matches your commitment level and maximize your returns.
          </p>
        </div>

        {/* Staking Tiers */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 - Flexible */}
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-800/50 border-blue-500/30 overflow-hidden hover:border-blue-400/50 transition-all duration-300 relative">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <div className="p-8">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
                  TIER 1
                </Badge>
                <h3 className="text-3xl text-white mb-2">Flexible</h3>
                <p className="text-blue-300 text-sm mb-6">
                  Withdraw anytime
                </p>

                <div className="space-y-6 mb-8">
                  <div className="text-center">
                    <div className="text-6xl text-blue-400 mb-2">12%</div>
                    <p className="text-gray-400">APY</p>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300">Lock Period</span>
                    </div>
                    <p className="text-white">No lock required</p>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Unlock className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300">Unstaking</span>
                    </div>
                    <p className="text-white">Instant unstake access</p>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm text-center">
                    Ideal for new holders who want flexibility
                  </p>
                </div>
              </div>
            </Card>

            {/* Tier 2 - 60 Days */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/50 border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 relative transform md:scale-105 z-10">
              <Badge className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                POPULAR
              </Badge>
              <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <div className="p-8">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                  TIER 2
                </Badge>
                <h3 className="text-3xl text-white mb-2">60 Days</h3>
                <p className="text-purple-300 text-sm mb-6">
                  2 months commitment
                </p>

                <div className="space-y-6 mb-8">
                  <div className="text-center">
                    <div className="text-6xl text-purple-400 mb-2">40%</div>
                    <p className="text-gray-400">APY</p>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300">Lock Period</span>
                    </div>
                    <p className="text-white">60 days</p>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300">Benefits</span>
                    </div>
                    <p className="text-white">
                      Stable returns with short-term commitment
                    </p>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm text-center">
                    Best balance of returns and flexibility
                  </p>
                </div>
              </div>
            </Card>

            {/* Tier 3 - 180 Days */}
            <Card className="bg-gradient-to-br from-pink-900/40 to-slate-800/50 border-pink-500/30 overflow-hidden hover:border-pink-400/50 transition-all duration-300 relative">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-rose-400"></div>
              <div className="p-8">
                <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 mb-4">
                  TIER 3
                </Badge>
                <h3 className="text-3xl text-white mb-2">180 Days</h3>
                <p className="text-pink-300 text-sm mb-6">
                  6 months commitment
                </p>

                <div className="space-y-6 mb-8">
                  <div className="text-center">
                    <div className="text-6xl text-pink-400 mb-2">85%</div>
                    <p className="text-gray-400">APY</p>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-pink-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-5 h-5 text-pink-400" />
                      <span className="text-pink-300">Lock Period</span>
                    </div>
                    <p className="text-white">180 days</p>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-pink-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-5 h-5 text-pink-400" />
                      <span className="text-pink-300">Premium Rewards</span>
                    </div>
                    <p className="text-white">
                      Premium loyalty rewards and yield boost
                    </p>
                  </div>
                </div>

                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm text-center">
                    Maximum returns for long-term believers
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Staking Benefits */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl text-white text-center mb-10">
            Why Stake Phoenix Chicken?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="text-4xl mb-4">🔥</div>
              <h4 className="text-lg text-purple-300 mb-3">
                Deflationary Rewards
              </h4>
              <p className="text-gray-400 text-sm">
                Staking rewards come from ecosystem growth and token burns,
                increasing value over time
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h4 className="text-lg text-pink-300 mb-3">Exclusive NFTs</h4>
              <p className="text-gray-400 text-sm">
                Long-term stakers gain access to exclusive NFT drops and special
                traits
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="text-4xl mb-4">🗳️</div>
              <h4 className="text-lg text-purple-300 mb-3">DAO Voting Power</h4>
              <p className="text-gray-400 text-sm">
                Staked tokens grant enhanced voting rights in community
                governance decisions
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg text-pink-300 mb-3">Game Boosts</h4>
              <p className="text-gray-400 text-sm">
                Staking unlocks multipliers and bonuses in Phoenix Chicken
                ecosystem games
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-lg text-purple-300 mb-3">Secure & Audited</h4>
              <p className="text-gray-400 text-sm">
                Our staking contracts are fully audited and secured with
                industry best practices
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-lg text-pink-300 mb-3">
                Compound Your Growth
              </h4>
              <p className="text-gray-400 text-sm">
                Auto-compound feature available to maximize your staking returns
              </p>
            </Card>
          </div>
        </div>

        {/* How to Stake */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl text-white text-center mb-10">
            How to Start Staking
          </h3>
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl text-purple-400">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-2">
                      Connect Your Wallet
                    </h4>
                    <p className="text-gray-400">
                      Connect your Ethereum wallet (MetaMask, WalletConnect,
                      etc.) to the staking platform
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl text-purple-400">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-2">
                      Choose Your Tier
                    </h4>
                    <p className="text-gray-400">
                      Select the staking tier that best matches your investment
                      strategy and timeline
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl text-purple-400">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-2">
                      Stake Your Tokens
                    </h4>
                    <p className="text-gray-400">
                      Enter the amount of $PC tokens you want to stake and
                      confirm the transaction
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl text-purple-400">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-2">Earn Rewards</h4>
                    <p className="text-gray-400">
                      Watch your rewards accumulate! Claim them at any time or
                      auto-compound for maximum returns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Important Notes */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-8">
            <h3 className="text-2xl text-white mb-6 text-center">
              Important Notes
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  Rewards are calculated based on your staked amount and the
                  selected tier's APY
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  Early unstaking from locked tiers may incur a penalty fee
                  (except Tier 1 Flexible)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  APY rates are subject to change based on ecosystem performance
                  and DAO governance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>
                  Staking platform will be live shortly after the Presale
                  concludes
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
