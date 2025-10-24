import { Card } from "./ui/card";
import { Flame, Users, Shield, Sparkles } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Transparency > Hype",
      description: "Built on trust and honest communication"
    },
    {
      icon: Users,
      title: "Community > Founders",
      description: "Flock-powered decision making"
    },
    {
      icon: Sparkles,
      title: "Sustainability > Pump & Dump",
      description: "Long-term value over quick gains"
    },
    {
      icon: Flame,
      title: "Laughter > Greed",
      description: "Fun and creativity at our core"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm">From Ashes to Moons</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Rising from the Ashes
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Phoenix Chicken ($PC) is a next-generation memecoin that embodies resilience, 
            community-driven innovation, and real-world utility. Born from the ashes of traditional 
            crypto hype, $PC rises as a symbol of rebirth, blending viral meme culture with 
            sustainable blockchain ecosystems.
          </p>

          <p className="text-lg text-purple-300 italic">
            "Every great story starts with a spark, but the magic happens when the flock believes."
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Key Pillars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl text-white text-center mb-10">Key Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 border-purple-500/30 p-6">
              <h4 className="text-xl text-purple-300 mb-3">🔥 Rebirth Mechanics</h4>
              <p className="text-gray-300">
                Tokens and NFTs can "burn" and reborn with enhanced traits, symbolizing resilience.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-pink-900/30 to-slate-800/50 border-pink-500/30 p-6">
              <h4 className="text-xl text-pink-300 mb-3">🏛️ Community Ownership</h4>
              <p className="text-gray-300">
                Through DAO voting, the flock shapes tokenomics, utilities, and expansions.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-orange-900/30 to-slate-800/50 border-orange-500/30 p-6">
              <h4 className="text-xl text-orange-300 mb-3">🎮 Viral and Fun Focus</h4>
              <p className="text-gray-300">
                Memes, AR experiences, and games keep the energy high while delivering value.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 border-purple-500/30 p-6">
              <h4 className="text-xl text-purple-300 mb-3">♻️ Sustainability</h4>
              <p className="text-gray-300">
                Built on ETH with staking and burns to maintain scarcity and rewards.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
