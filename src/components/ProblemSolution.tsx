import { Card } from "./ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Hype-Driven Volatility: Artificial pumps leading to devastating dumps",
    "Lack of Utility: Memes generate attention but fail to retain it",
    "Centralized Control: Founders prioritize personal gain over community",
    "Fragmented Engagement: Communities struggle beyond just trading",
    "Sustainability Gaps: Projects stagnate without evolution mechanisms"
  ];

  const solutions = [
    "Community-driven governance through ChickenDAO",
    "Real utility: NFTs, P2E gaming, and AR experiences",
    "Transparent tokenomics with locked liquidity",
    "Rebirth mechanics for continuous evolution",
    "Real-world integrations bridging digital and physical value"
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              The Phoenix Solution
            </h2>
            <p className="text-xl text-gray-400">
              Addressing the core issues plaguing the memecoin landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problems */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl text-white">The Problem</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-3 text-gray-300">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Solutions */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl text-white">Our Solution</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3 text-gray-300">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-orange-900/20 to-purple-900/20 border-orange-500/30 p-8 max-w-3xl mx-auto">
              <p className="text-xl text-purple-200">
                Phoenix Chicken creates a resilient, utility-rich ecosystem where the community 
                drives the narrative, ensuring the fire burns brighter with every cycle.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
