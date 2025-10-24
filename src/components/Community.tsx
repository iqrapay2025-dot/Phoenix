import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Users, Vote, Gift, TrendingUp, Send, Twitter, MessageCircle } from "lucide-react";

export function Community() {
  const features = [
    {
      icon: Vote,
      title: "DAO Governance",
      description: "Stake $PC to vote on proposals, tokenomics tweaks, NFT traits, and charity initiatives"
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Participate in governance to earn airdrops, boosts, and special recognition"
    },
    {
      icon: Users,
      title: "Founding Flock",
      description: "Join builders, artists, gamers, storytellers, and marketers shaping the future"
    },
    {
      icon: TrendingUp,
      title: "Community-First",
      description: "No single entity controls the project—the flock decides everything together"
    }
  ];

  return (
    <section id="community" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Join the Flock
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The Phoenix Chicken Army is a global movement of believers who rise together. 
            Be part of the #PhoenixChickenArmy
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30 p-12 text-center">
            <h3 className="text-3xl text-white mb-4">
              Rise with the Phoenix Chicken Army
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join our Telegram Group for discussions, raids, reveals, and to connect with fellow believers
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href="https://t.me/+a5HncZxRjlJmMzQ0" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Join Telegram Group
                </Button>
              </a>
              <a 
                href="https://x.com/Phoenix_Chicken" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg">
                  <Twitter className="w-5 h-5 mr-2" />
                  Follow on X
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Growing Community</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-pink-400" />
                <span>Active Daily</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Philosophy */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
            <p className="text-2xl text-purple-200 italic mb-4">
              "From ashes to moons, we cluck, we rise, we conquer."
            </p>
            <p className="text-gray-400">
              Phoenix Chicken is more than a memecoin—it's a rebirth of crypto's original spirit: 
              fun, innovative, and community-led. Join us and let's build a legacy that soars beyond limits.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
