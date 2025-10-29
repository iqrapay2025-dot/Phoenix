import { Wallet, ShoppingCart, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";

export function HowToJoin() {
  const steps = [
    {
      icon: Wallet,
      number: "1",
      title: "Prepare Your Wallet",
      description: "Install a self-custody wallet like MetaMask, Rabby, or Trust Wallet and fund it with Ethereum (ETH). You'll need ETH to join the $PC presale on Pinksale.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      number: "2",
      title: "Join the Presale on Pinksale",
      description: "Starting (coming soon), visit the official Pinksale link to participate in the presale at $0.00765 per $PC.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: CheckCircle2,
      number: "3",
      title: "Confirm & Hold",
      description: "Approve the transaction in your wallet. Your presale $PC tokens will be reserved and claimable after the listing.",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="how-to-join" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            How to Join the $PC Presale
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to participate in the presale and secure your $PC tokens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Number Background */}
                <div className="absolute top-4 right-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-block text-sm mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-300">Presale launching soon on Pinksale</span>
          </div>
        </div>
      </div>
    </section>
  );
}
