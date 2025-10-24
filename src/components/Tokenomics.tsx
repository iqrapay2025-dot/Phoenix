import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Card } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export function Tokenomics() {
  const tokenomicsData = [
    { allocation: "Public Sale", tokens: "207,000,000", percentage: 30, color: "#a855f7" },
    { allocation: "Liquidity Pool", tokens: "138,000,000", percentage: 20, color: "#ec4899" },
    { allocation: "Staking Rewards", tokens: "103,500,000", percentage: 15, color: "#8b5cf6" },
    { allocation: "Team & Advisors", tokens: "82,800,000", percentage: 12, color: "#d946ef" },
    { allocation: "Marketing", tokens: "69,000,000", percentage: 10, color: "#f472b6" },
    { allocation: "Community Treasury", tokens: "48,300,000", percentage: 7, color: "#c084fc" },
    { allocation: "Ecosystem Development", tokens: "41,400,000", percentage: 6, color: "#e879f9" }
  ];

  const chartData = tokenomicsData.map(item => ({
    name: item.allocation,
    value: item.percentage,
    tokens: item.tokens
  }));

  const COLORS = tokenomicsData.map(item => item.color);

  return (
    <section id="tokenomics" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fair distribution with deflationary mechanics. Built on Ethereum for security and DeFi compatibility.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
              <span className="text-gray-400">Network:</span> <span className="text-purple-400">Ethereum (ETH)</span>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
              <span className="text-gray-400">Ticker:</span> <span className="text-purple-400">$PC</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Chart */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
            <h3 className="text-2xl text-white mb-8 text-center">Token Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value: any, name: string, props: any) => [
                    `${value}% (${props.payload.tokens} tokens)`,
                    name
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
                    <TableHead className="text-purple-400 text-right">Percentage</TableHead>
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
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300">{row.tokens}</TableCell>
                      <TableCell className="text-right">
                        <span className="text-purple-400">{row.percentage}%</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Key Mechanics */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-3xl text-white text-center mb-10">Key Mechanics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-purple-300 mb-3">🔥 Burn-to-Rebirth</h4>
              <p className="text-gray-400 text-sm">
                Burn $PC to mutate NFTs or unlock traits, reducing supply and adding rarity
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
              <h4 className="text-lg text-purple-300 mb-3">🌍 Real-World Ties</h4>
              <p className="text-gray-400 text-sm">
                Use $PC for merch, events, and farm upgrades
              </p>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg text-pink-300 mb-3">🔒 Locked Liquidity</h4>
              <p className="text-gray-400 text-sm">
                Secure liquidity pools on Uniswap with CEX listings planned
              </p>
            </Card>
          </div>
        </div>

        {/* Total Supply */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-8 max-w-md mx-auto">
            <div className="text-gray-400 mb-2">Total Supply</div>
            <div className="text-4xl md:text-5xl text-white">690,000,000</div>
            <div className="text-purple-400 mt-2">$PC Tokens</div>
          </Card>
        </div>

        {/* Presale Structure */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-white mb-4">Presale Structure</h3>
            <p className="text-xl text-gray-400">
              Early access opportunity for supporters who share our long-term vision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sale Parameters */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
              <div className="p-8">
                <h4 className="text-2xl text-white mb-6">Sale Parameters</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-gray-400">Soft Cap</span>
                    <span className="text-white">$250,000 USD</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-gray-400">Hard Cap</span>
                    <span className="text-white">$1,500,000 USD</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-gray-400">Token Price</span>
                    <span className="text-purple-400">$0.00725 per PC</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-gray-400">Minimum Buy</span>
                    <span className="text-white">0.05 ETH</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-gray-400">Maximum Buy</span>
                    <span className="text-white">5 ETH</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Accepted Currencies</span>
                    <span className="text-white">ETH, USDT, USDC</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pricing Info */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
              <div className="p-8">
                <h4 className="text-2xl text-white mb-6">Price Overview</h4>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
                    <div className="text-sm text-gray-400 mb-2">Presale Price</div>
                    <div className="text-3xl text-purple-400">$0.00725</div>
                    <div className="text-sm text-gray-400 mt-2">per $PC token</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-lg p-6 border border-pink-500/30">
                    <div className="text-sm text-gray-400 mb-2">Launch Price</div>
                    <div className="text-3xl text-pink-400">$0.015</div>
                    <div className="text-sm text-gray-400 mt-2">per $PC token</div>
                  </div>
                   {/* <div className="bg-slate-900/50 rounded-lg p-6 border border-green-500/30">
                    <div className="text-sm text-gray-400 mb-2">Early Investor Advantage</div>
                    <div className="text-3xl text-green-400">Early supporters benefit from lower entry</div>
                    <div className="text-sm text-gray-400 mt-2">potential gain at launch</div>
                  </div> */}
                </div>
              </div>
            </Card>
          </div>

          {/* Important Note */}
          <Card className="bg-slate-800/50 border-slate-700 p-6 mt-8">
            <p className="text-gray-300 text-center">
              The presale will remain open until the hard cap is reached or until the official end date. 
              Upon successful completion, tokens will be distributed to participants according to the vesting schedule.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}