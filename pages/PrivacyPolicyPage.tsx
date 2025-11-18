import { Card } from "../src/components/ui/card";
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-12 h-12 text-purple-400" />
              <h1 className="text-4xl md:text-5xl text-white">Privacy Policy</h1>
            </div>
            <p className="text-gray-400 text-lg">
              Last Updated: November 18, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <p className="text-gray-300 leading-relaxed">
              At Phoenix Chicken ($PC), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our services.
            </p>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-purple-300 mb-3">1. Information You Provide</h3>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Wallet addresses when you connect to our platform</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Email addresses if you subscribe to our newsletter or updates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Communications you send to us via email or social media</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Feedback, survey responses, or other user-generated content</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-purple-300 mb-3">2. Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>IP addresses and device identifiers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Browser type and version</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Operating system and device information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Pages visited, time spent on pages, and navigation patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Referral sources and exit pages</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-purple-300 mb-3">3. Blockchain Data</h3>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Transaction history and wallet balances (publicly available on blockchain)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Token holdings and staking activities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Smart contract interactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* How We Use Your Information */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-pink-400" />
              <h2 className="text-2xl text-white">How We Use Your Information</h2>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To provide, operate, and maintain our services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To process transactions and manage your token holdings</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To send you updates, newsletters, and marketing communications (with your consent)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To improve our website, products, and services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To analyze usage patterns and optimize user experience</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To detect, prevent, and address technical issues or fraudulent activities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To comply with legal obligations and enforce our terms</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>To communicate with you about your account or transactions</span>
              </li>
            </ul>
          </Card>

          {/* Data Security */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white">Data Security</h2>
            </div>
            
            <p className="text-gray-300 mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Encryption of data in transit and at rest</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Secure socket layer (SSL) technology</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Restricted access to personal information on a need-to-know basis</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Multi-factor authentication for administrative access</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4 text-sm">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </Card>

          {/* Third-Party Services */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-pink-400" />
              <h2 className="text-2xl text-white">Third-Party Services</h2>
            </div>
            
            <p className="text-gray-300 mb-4">
              We may use third-party service providers to help us operate our business and website. These include:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Analytics providers (e.g., Google Analytics)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Email service providers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Blockchain infrastructure providers (e.g., Infura, Alchemy)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Wallet providers (e.g., MetaMask, WalletConnect)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400 mt-1">•</span>
                <span>Social media platforms</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4">
              These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for other purposes.
            </p>
          </Card>

          {/* Your Rights */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl text-white">Your Rights</h2>
            </div>
            
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Access:</strong> Request a copy of the personal information we hold about you</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Deletion:</strong> Request deletion of your personal information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Objection:</strong> Object to our processing of your personal information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Portability:</strong> Request transfer of your data to another service</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:phoenixc@atomicmail.io" className="text-purple-400 hover:text-purple-300">
                phoenixc@atomicmail.io
              </a>
            </p>
          </Card>

          {/* Cookies */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Essential Cookies:</strong> Required for the website to function properly</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Preference Cookies:</strong> Remember your settings and preferences</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4 text-sm">
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </Card>

          {/* Children's Privacy */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="bg-slate-800/50 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 p-8">
            <h2 className="text-2xl text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
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
        </div>
      </div>
    </div>
  );
}
