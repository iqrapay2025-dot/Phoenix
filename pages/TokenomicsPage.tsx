import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../src/components/ui/table";
import { Card } from "../src/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function TokenomicsPage() {
  const tokenomicsData = [
    {
      allocation: "Public Sale",
      tokens: "207,000,000",
      percentage: 30,
      color: "#a855f7",
    },
    {
      allocation: "Liquidity Pool",
      tokens: "127,822,500",
      percentage: 25,
      color: "#ec4899",
    },
    {
      allocation: "Staking Rewards",
      tokens: "103,500,000",
      percentage: 15,
      color: "#8b5cf6",
    },
    {
      allocation: "Team & Advisors",
      tokens: "48,300,000",
      percentage: 7,
      color: "#d946ef",
      note: "(Renounced)",
    },
    {
      allocation: "Marketing",
      tokens: "69,000,000",
      percentage: 10,
      color: "#f472b6",
    },
    {
      allocation: "Community Treasury",
      tokens: "20,700,000",
      percentage: 3,
      color: "#c084fc",
    },
    {
      allocation: "Ecosystem Development",
      tokens: "23,800,000",
      percentage: 2,
      color: "#e879f9",
    },
    {
      allocation: "CEX Listing",
      tokens: "55,200,000",
      percentage: 8,
      color: "#22c55e",
    },
  ];

  const chartData = tokenomicsData.map((item) => ({
    name: item.allocation,
    value: item.percentage,
    tokens: item.tokens,
    color: item.color,
  }));

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Tokenomics</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fair distribution with deflationary mechanics. Built on Ethereum for
            security and DeFi compatibility.
          </p>
        </div>

        {/* Token Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl text-white mb-6">Token Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span className="text-gray-400">Token Name</span>
                    <span className="text-white">Phoenix Chicken</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span className="text-gray-400">Token Symbol</span>
                    <span className="text-white">PC</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span className="text-gray-400">Total Supply</span>
                    <span className="text-white">690,000,000 PC</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Blockchain</span>
                    <span className="text-white">Ethereum (ERC-20)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span className="text-gray-400">Decimals</span>
                    <span className="text-white">18</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span className="text-gray-400">Initial Price</span>
                    <span className="text-white">TBD after the fairlaunch</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Smart Contract</span>
                    <span className="text-green-400">Audited & Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          {/* Chart */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
            <h3 className="text-2xl text-white mb-8 text-center">
              Token Distribution
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart width={400} height={400}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="allocation"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  formatter={(value, name, props) => [
                    `${value}% (${props.payload.tokens} tokens)`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Table */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl text-white mb-6">Allocation Breakdown</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700 hover:bg-slate-700/50">
                    <TableHead className="text-purple-400">Allocation</TableHead>
                    <TableHead className="text-purple-400">Tokens</TableHead>
                    <TableHead className="text-purple-400 text-right">
                      Percentage
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenomicsData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="border-slate-700 hover:bg-slate-700/50 transition-colors"
                    >
                      <TableCell className="text-white">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: row.color }}
                          ></div>
                          {row.allocation}
                          {row.note && (
                            <span className="text-xs text-gray-400">
                              {row.note}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {row.tokens}
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="text-purple-400">
                          {row.percentage}%
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Key Mechanics */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl text-white text-center mb-10">
            Key Mechanics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-purple-300 mb-3">
                🔥 Burn-to-Rebirth
              </h4>
              <p className="text-gray-400 text-sm">
                Burn $PC to mutate NFTs or unlock traits, reducing supply and
                adding rarity
              </p>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-pink-300 mb-3">🪺 Staking Nests</h4>
              <p className="text-gray-400 text-sm">
                Stake $PC to earn rewards like exclusive NFTs and game boosts
              </p>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-purple-300 mb-3">🗳️ DAO Missions</h4>
              <p className="text-gray-400 text-sm">
                Community votes on treasury use, burns, rewards, and events
              </p>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-pink-300 mb-3">📉 Deflationary</h4>
              <p className="text-gray-400 text-sm">
                Transaction fees fund burns, liquidity, and community rewards
              </p>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-purple-300 mb-3">
                🌍 Real-World Ties
              </h4>
              <p className="text-gray-400 text-sm">
                Use $PC for merch, events, and farm upgrades
              </p>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-pink-300 mb-3">
                🔒 Locked Liquidity
              </h4>
              <p className="text-gray-400 text-sm">
                Secure liquidity pools on Uniswap with CEX listings planned
              </p>
            </Card>
          </div>
        </div>

        {/* Marketing Breakdown */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Marketing Allocation
            </h3>
            <p className="text-xl text-gray-400">
              Strategic deployment of 10% (69M tokens) for maximum reach and
              impact
            </p>
          </div>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-900/40 to-slate-800/30 rounded-lg p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg text-purple-300">
                      Influencer Marketing
                    </h4>
                    <span className="text-2xl text-purple-400">40%</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Strategic partnerships with crypto influencers and content
                    creators
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/40 to-slate-800/30 rounded-lg p-6 border border-pink-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg text-pink-300">
                      Paid Advertisements
                    </h4>
                    <span className="text-2xl text-pink-400">30%</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Targeted ads across social media and crypto platforms
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/40 to-slate-800/30 rounded-lg p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg text-purple-300">
                      PR & Media Coverage
                    </h4>
                    <span className="text-2xl text-purple-400">20%</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Press releases, media outreach, and brand partnerships
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/40 to-slate-800/30 rounded-lg p-6 border border-pink-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg text-pink-300">Emergency Reserve</h4>
                    <span className="text-2xl text-pink-400">10%</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Reserve fund for opportunistic campaigns and market needs
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Security & Trust
            </h3>
            <p className="text-xl text-gray-400">
              Built with industry-leading security measures for your peace of
              mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card className="bg-gradient-to-br from-green-900/30 to-slate-800/50 border-green-500/30 p-6 text-center hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-white mb-2">Audited & KYC</h4>
              <p className="text-gray-400 text-sm">
                Verified by trusted third-party auditors
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 border-blue-500/30 p-6 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-white mb-2">Liquidity Locked</h4>
              <p className="text-gray-400 text-sm">
                12+ months lock for stability
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 border-purple-500/30 p-6 text-center hover:border-purple-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-white mb-2">Team Vested</h4>
              <p className="text-gray-400 text-sm">
                2-year vesting period for alignment
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/30 to-slate-800/50 border-pink-500/30 p-6 text-center hover:border-pink-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-white mb-2">Multi-Sig Treasury</h4>
              <p className="text-gray-400 text-sm">
                Enhanced security for funds
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/30 to-slate-800/50 border-orange-500/30 p-6 text-center hover:border-orange-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-white mb-2">Etherscan Verified</h4>
              <p className="text-gray-400 text-sm">
                Transparent on-chain verification
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
