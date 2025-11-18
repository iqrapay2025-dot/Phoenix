import { Card } from "../src/components/ui/card";
import { FileText, AlertTriangle, Scale, Shield, Ban, Globe } from "lucide-react";

export function TermsOfServicePage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-12 h-12 text-purple-400" />
              <h1 className="text-4xl md:text-5xl text-white">Terms of Service</h1>
            </div>
            <p className="text-gray-400 text-lg">
              Last Updated: November 18, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Phoenix Chicken ($PC). By accessing or using our website, services, or purchasing our tokens, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you do not agree to these Terms, you must not access or use our services.
            </p>
          </Card>

          {/* Acceptance of Terms */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white">1. Acceptance of Terms</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                By using the Phoenix Chicken platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Your continued use of the platform after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </div>
          </Card>

          {/* Eligibility */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-pink-400" />
              <h2 className="text-2xl text-white">2. Eligibility</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>To use our services, you must:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Be at least 18 years of age or the age of majority in your jurisdiction</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Have the legal capacity to enter into binding contracts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Not be located in a jurisdiction where cryptocurrency transactions are prohibited</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Comply with all applicable laws and regulations in your jurisdiction</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Token Purchase and Use */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white">3. Token Purchase and Use</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl text-purple-300">3.1 Token Purchase</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>All token purchases are final and non-refundable</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Token prices may fluctuate based on market conditions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>You are responsible for all transaction fees, including gas fees</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Ensure you are sending funds to the correct contract address</span>
                </li>
              </ul>

              <h3 className="text-xl text-purple-300 mt-6">3.2 Token Utility</h3>
              <p>
                $PC tokens provide access to the Phoenix Chicken ecosystem, including but not limited to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Staking rewards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Governance voting rights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>NFT minting and breeding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Exclusive community benefits</span>
                </li>
              </ul>

              <h3 className="text-xl text-purple-300 mt-6">3.3 No Investment Advice</h3>
              <p>
                $PC tokens are utility tokens and should not be considered an investment, security, or financial instrument. We do not provide investment advice, and nothing on our platform should be construed as such.
              </p>
            </div>
          </Card>

          {/* Risks and Disclaimers */}
          <Card className="bg-gradient-to-br from-red-900/30 to-slate-800/50 border-red-500/30 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl text-white">4. Risks and Disclaimers</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-red-300">
                <strong>WARNING: Cryptocurrency investments carry significant risks. By using our services, you acknowledge and accept the following risks:</strong>
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Volatility:</strong> Token prices can fluctuate dramatically and unpredictably</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Loss of Value:</strong> You may lose some or all of your investment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Regulatory Risk:</strong> Cryptocurrency regulations may change and affect token value</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Technical Risk:</strong> Smart contracts may contain bugs or vulnerabilities despite audits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Liquidity Risk:</strong> You may not be able to sell tokens at your desired price or time</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Wallet Security:</strong> Loss of private keys results in permanent loss of tokens</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>No Guarantees:</strong> We make no guarantees about future token performance or utility</span>
                </li>
              </ul>

              <p className="text-yellow-300 mt-6">
                <strong>You should only invest what you can afford to lose. This is not financial advice.</strong>
              </p>
            </div>
          </Card>

          {/* User Responsibilities */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white">5. User Responsibilities</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>As a user, you agree to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Provide accurate and complete information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Maintain the security of your wallet and private keys</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Not use the platform for illegal activities, fraud, or money laundering</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Not attempt to hack, disrupt, or manipulate our services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Not engage in market manipulation or insider trading</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Conduct your own research before making any token purchases</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Prohibited Activities */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Ban className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl text-white">6. Prohibited Activities</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>You may not:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Use our services for any unlawful purpose</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Violate any local, state, national, or international law</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Infringe upon intellectual property rights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Transmit viruses, malware, or harmful code</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Impersonate any person or entity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Harass, abuse, or harm other users</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Create multiple accounts to circumvent restrictions</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">7. Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                All content on the Phoenix Chicken platform, including but not limited to text, graphics, logos, images, and software, is the property of Phoenix Chicken or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </div>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">8. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PHOENIX CHICKEN AND ITS AFFILIATES SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Any indirect, incidental, special, consequential, or punitive damages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Loss of profits, revenue, data, or use</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Token price fluctuations or market volatility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Technical failures, security breaches, or smart contract vulnerabilities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Loss of tokens due to user error or wallet compromise</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Actions of third parties, including exchanges or wallet providers</span>
                </li>
              </ul>
              <p className="mt-4">
                Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid for tokens in the 30 days prior to the claim.
              </p>
            </div>
          </Card>

          {/* Indemnification */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Phoenix Chicken, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any rights of another party.
            </p>
          </Card>

          {/* Governing Law */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">10. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Phoenix Chicken is registered, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration, except where prohibited by law.
              </p>
            </div>
          </Card>

          {/* Modifications */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">11. Modifications to Service</h2>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </Card>

          {/* Severability */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">12. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-8">
            <h2 className="text-2xl text-white mb-4">13. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:phoenixc@atomicmail.io" className="text-purple-400 hover:text-purple-300">
                  phoenixc@atomicmail.io
                </a>
              </p>
              <p>
                <strong className="text-white">Telegram:</strong>{" "}
                <a href="https://t.me/+a5HncZxRjlJmMzQ0" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  Join our community
                </a>
              </p>
              <p>
                <strong className="text-white">Twitter:</strong>{" "}
                <a href="https://x.com/Phoenix_Chicken" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  @Phoenix_Chicken
                </a>
              </p>
            </div>
          </Card>

          {/* Acknowledgment */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 p-6 mt-8">
            <p className="text-center text-gray-300">
              By using Phoenix Chicken services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
