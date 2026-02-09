'use client';

import {
  Target,
  BarChart3,
  BookOpen,
  Award,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';

export default function PaperTradingPage() {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Learn Trading",
      description: "Practice buying and selling stocks without any financial risk"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Test Strategies",
      description: "Experiment with different trading strategies and see what works"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Build Confidence",
      description: "Gain experience and confidence before using real money"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Risk-Free Learning",
      description: "Make mistakes and learn from them without losing real money. Perfect for beginners."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real Market Data",
      description: "Practice with live market prices and conditions to get an authentic trading experience."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "All Trading Tools",
      description: "Access the same powerful tools and features available in real trading mode."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Execution",
      description: "Execute trades instantly and see immediate results in your virtual portfolio."
    }
  ];

  return (
    <div className="min-h-screen trading-background">
      <section className="pt-48 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full mb-6 glass-morphism">
              <span className="text-sm font-bold" style={{ color: 'var(--text-accent)' }}>PRACTICE MODE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-shift leading-tight mb-6">
              Paper Trading
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Practice trading with $100,000 virtual money. Zero risk, real learning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-gradient">$100K</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Starting Balance</div>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-gradient">Live</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Market Prices</div>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-gradient">$0</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Real Money Risk</div>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-gradient">Full</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Trading Tools</div>
            </div>
          </div>

          {/* What is Paper Trading */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-4 text-center text-gradient">What is Paper Trading?</h2>
              <p className="text-lg text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
                Paper trading is a risk-free way to practice trading with virtual money. Test your strategies, learn the market, and build confidence before trading with real money.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="glass-morphism p-6 rounded-xl hover:scale-105 transition-all duration-300">
                    <div className="mb-4" style={{ color: 'var(--text-accent)' }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">Why Paper Trade?</h2>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                The perfect way to start your trading journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="card hover:scale-105 transition-all duration-300">
                  <div className="card-body text-center p-6">
                    <div className="flex justify-center mb-4" style={{ color: 'var(--text-accent)' }}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>How Paper Trading Works</h2>
              <p className="text-lg text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
                Start practicing in three simple steps
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Get $100,000 Virtual Money</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Start with a virtual balance of $100,000 to practice trading without any risk.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Trade with Real Market Data</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Buy and sell stocks using live market prices. Experience real trading conditions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Track Your Performance</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Monitor your virtual portfolio, analyze your trades, and improve your strategy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Start Paper Trading?</h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Get $100,000 in virtual money to practice trading risk-free
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Zero Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Live Market Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Full Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
