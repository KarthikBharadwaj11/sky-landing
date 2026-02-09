'use client';

import {
  Users,
  TrendingUp,
  Shield,
  Target,
  BarChart3,
  Copy,
  Brain,
  Clock,
} from 'lucide-react';

export default function CopyTradingPage() {
  const features = [
    {
      icon: <Copy className="w-8 h-8" />,
      title: "Automatic Copying",
      description: "Every trade your chosen expert makes is automatically replicated in your account proportionally."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Control",
      description: "Set your own risk limits, stop-losses, and maximum allocation per trade for complete control."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Learn While You Earn",
      description: "See expert reasoning, analysis, and market insights to improve your own trading knowledge."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Trading",
      description: "Connect with expert traders, ask questions, and join a community of successful investors."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transparent Performance",
      description: "View detailed performance metrics, trade history, and risk analysis for every expert."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Trading",
      description: "Your investments work around the clock, even while you sleep or focus on other priorities."
    }
  ];

  return (
    <div className="min-h-screen trading-background">
      <section className="pt-48 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-shift leading-tight mb-6">
              Copy Trading Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Automatically copy trades from expert traders and earn while you learn.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-4xl font-black text-gradient mb-2">X</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-4xl font-black text-gradient mb-2">X</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Expert Traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-4xl font-black text-gradient mb-2">X</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-4xl font-black text-gradient mb-2">X</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Positive Returns</div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">Why Copy Trading?</h2>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Powerful features to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card hover:scale-105 transition-all duration-300">
                  <div className="card-body text-center p-6">
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

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>How Copy Trading Works</h2>
              <p className="text-lg text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
                Start copying expert traders in four simple steps
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Browse Expert Traders</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Explore our marketplace of verified expert traders. View their performance history, win rates, and trading strategies.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Select a Trader to Copy</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Choose an expert trader that matches your investment goals and risk tolerance.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Set Your Parameters</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Decide how much to invest, choose between automatic or manual copying, and set your duration preferences.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Start Copying</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Sit back and watch as trades are copied to your account. Monitor performance and adjust settings anytime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Trading Modes */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Choose Your Copy Trading Mode</h2>
            <p className="text-lg text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
              Two ways to copy trades - pick what works best for you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Automatic Copying</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Trades are executed instantly when your chosen expert makes a move. Completely hands-free.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Instant trade execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span style={{ color: 'var(--text-secondary)' }}>No manual intervention needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Set duration and forget</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Manual Approval</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Review each trade before it's executed. You maintain full control over every decision.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Review before executing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Full control over each trade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Learn from expert strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Start Copy Trading?</h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Join thousands of traders who are already earning with copy trading
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Verified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Transparent Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Risk Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
