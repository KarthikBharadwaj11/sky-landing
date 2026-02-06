'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  BarChart3,
  Zap,
  ChevronDown,
  DollarSign,
} from 'lucide-react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Market Data",
      description: "Live stock prices, interactive charts, and comprehensive market indices at your fingertips"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Trading Signals",
      description: "Smart recommendations and insights powered by advanced machine learning algorithms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Copy Trading",
      description: "Follow top traders, copy their strategies, and learn from the best in the community"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Portfolio Management",
      description: "Track your performance with detailed analytics and risk management tools"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Trading",
      description: "Trade anywhere, anytime with our responsive platform optimized for all devices"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Zero Commission",
      description: "Commission-free stock trading with transparent pricing and no hidden fees"
    }
  ];

  const faqs = [
    {
      question: "Is Sky really commission-free?",
      answer: "Yes! We offer commission-free stock trading with no hidden fees. You only pay regulatory fees required by exchanges."
    },
    {
      question: "How secure is my money and data?",
      answer: "We use bank-level encryption and are SIPC insured up to $500,000. Your funds are held in segregated accounts for maximum security."
    },
    {
      question: "What's the minimum deposit to start trading?",
      answer: "There's no minimum deposit required. You can start trading with any amount, making Sky accessible to traders at all levels."
    },
    {
      question: "How do AI trading signals work?",
      answer: "Our AI analyzes market data, news sentiment, and historical patterns to generate trading recommendations with confidence scores."
    },
    {
      question: "Can I copy other traders' strategies?",
      answer: "Yes! Our social trading feature lets you follow successful traders and automatically copy their trades with customizable risk settings."
    },
    {
      question: "Is there a mobile app?",
      answer: "Our platform is fully responsive and works seamlessly on all devices. Native mobile apps are coming soon!"
    }
  ];

  return (
    <div className="min-h-screen trading-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-48 pb-32">
          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-6xl md:text-8xl font-bold gradient-shift leading-tight mb-8 flex items-center justify-center gap-1 flex-wrap">
              Trade Smarter with
              <Image
                src="/logo.png"
                alt="Sky Logo"
                width={200}
                height={80}
                className="inline-block -ml-10"
                priority
              />
            </h1>

            <p className="text-2xl md:text-3xl mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Your gateway to intelligent trading with AI-powered insights, real-time data, and a thriving community
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="glass-morphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-gradient mb-2">X</div>
                <div style={{ color: 'var(--text-secondary)' }}>Active Traders</div>
              </div>
              <div className="glass-morphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-gradient mb-2">X</div>
                <div style={{ color: 'var(--text-secondary)' }}>Volume Traded</div>
              </div>
              <div className="glass-morphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-gradient mb-2">X</div>
                <div style={{ color: 'var(--text-secondary)' }}>Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gradient mb-6">Powerful Trading Features</h2>
              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                Everything you need to succeed in the markets, all in one platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card hover:scale-105 transition-all duration-300">
                  <div className="card-body text-center">
                    <div className="flex justify-center mb-4" style={{ color: 'var(--text-accent)' }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="card-body p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>How Sky Works</h2>
                  <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                    Start trading in three simple steps
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Sign Up</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Create your account in just 2 minutes with our streamlined registration process
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Fund Account</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Deposit funds securely and start with any amount - no minimum required
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Start Trading</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Access powerful tools, AI insights, and start your trading journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gradient mb-6">Frequently Asked Questions</h2>
              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                Everything you need to know about trading with Sky
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-morphism rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--text-accent)' }}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6" style={{ color: 'var(--text-secondary)' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card">
              <div className="card-body p-12">
                <h2 className="text-5xl font-bold text-gradient mb-6">
                  About Sky
                </h2>
                <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Sky is a modern trading platform designed to empower traders of all levels with cutting-edge technology,
                  AI-powered insights, and a supportive community. Our mission is to make intelligent trading accessible to everyone.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>SIPC Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>SEC Registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>FINRA Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gradient">Sky</span>
                </div>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Empowering traders with intelligent tools, real-time data, and a supportive community.
                </p>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  © 2024 Sky Trading Platform. All rights reserved.
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Company</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Legal</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Risk Disclosure</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Regulatory</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
