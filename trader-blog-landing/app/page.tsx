"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [heroEmail, setHeroEmail] = useState("");

  const handleSubmit = (e: React.FormEvent, emailValue: string) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${emailValue}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">
                <span className="text-emerald-600">Market</span>Masters
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#stories" className="text-slate-700 hover:text-emerald-600 transition-colors">Success Stories</a>
              <a href="#topics" className="text-slate-700 hover:text-emerald-600 transition-colors">Topics</a>
              <a href="#articles" className="text-slate-700 hover:text-emerald-600 transition-colors">Latest Articles</a>
              <a href="#subscribe" className="text-slate-700 hover:text-emerald-600 transition-colors">Subscribe</a>
            </div>
            <a href="#subscribe" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                LEARN FROM THE BEST TRADERS IN THE WORLD
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Master the Markets with Proven Trading Strategies
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover the secrets, strategies, and mindsets of the world's most successful traders. 
                Get exclusive insights, real trading stories, and actionable advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">50K+</div>
                    <div className="text-slate-400 text-sm">Active Readers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">$2B+</div>
                    <div className="text-slate-400 text-sm">Combined AUM</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Your Trading Journey</h3>
              <p className="text-slate-600 mb-6">Join 50,000+ traders getting weekly insights</p>
              <form onSubmit={(e) => handleSubmit(e, heroEmail)} className="space-y-4">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="hero-name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hero-email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="hero-email"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hero-experience" className="block text-sm font-medium text-slate-700 mb-2">
                    Trading Experience
                  </label>
                  <select
                    id="hero-experience"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Professional</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                >
                  Get Free Trading Insights
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Free forever. Unsubscribe anytime. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Traders Section */}
      <section id="stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn from legendary traders who've mastered the markets and built extraordinary wealth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Warren Buffett",
                title: "Value Investing Pioneer",
                achievement: "$100B+ Net Worth",
                quote: "The most important quality for an investor is temperament, not intellect.",
                strategy: "Long-term value investing"
              },
              {
                name: "Paul Tudor Jones",
                title: "Macro Trading Legend",
                achievement: "Predicted 1987 Crash",
                quote: "The secret to being successful is to find a way to bring yourself down to earth.",
                strategy: "Global macro trading"
              },
              {
                name: "Ray Dalio",
                title: "Hedge Fund Titan",
                achievement: "$150B AUM at Bridgewater",
                quote: "He who lives by the crystal ball will eat shattered glass.",
                strategy: "All-weather portfolio"
              }
            ].map((trader, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {trader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{trader.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{trader.title}</p>
                <p className="text-slate-700 font-bold mb-4">{trader.achievement}</p>
                <blockquote className="text-slate-600 italic mb-4 border-l-4 border-emerald-500 pl-4">
                  "{trader.quote}"
                </blockquote>
                <div className="bg-emerald-50 rounded-lg px-4 py-2 inline-block">
                  <span className="text-sm font-medium text-emerald-700">{trader.strategy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Cover</h2>
            <p className="text-xl text-slate-600">Comprehensive insights across all trading disciplines</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📊", title: "Technical Analysis", desc: "Chart patterns, indicators, and price action strategies" },
              { icon: "💼", title: "Fundamental Analysis", desc: "Financial statements, valuations, and economic indicators" },
              { icon: "🧠", title: "Trading Psychology", desc: "Mindset, discipline, and emotional control techniques" },
              { icon: "⚡", title: "Day Trading", desc: "Intraday strategies, scalping, and momentum trading" },
              { icon: "📈", title: "Swing Trading", desc: "Multi-day positions and trend-following systems" },
              { icon: "🌍", title: "Options Trading", desc: "Strategies, Greeks, and risk management" },
              { icon: "💎", title: "Risk Management", desc: "Position sizing, stop losses, and portfolio protection" },
              { icon: "🎯", title: "Trading Systems", desc: "Algorithmic trading and backtesting strategies" }
            ].map((topic, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                <p className="text-slate-600">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Readers Say</h2>
            <p className="text-xl text-slate-600">Join thousands of traders improving their skills daily</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "This blog completely transformed my trading approach. The insights from successful traders are invaluable and have helped me become consistently profitable.",
                author: "Michael Chen",
                role: "Full-Time Day Trader",
                location: "San Francisco, CA"
              },
              {
                quote: "I've been trading for 10 years, but the strategies and psychology lessons here took my performance to the next level. Best trading resource I've found.",
                author: "Sarah Martinez",
                role: "Swing Trader",
                location: "Austin, TX"
              },
              {
                quote: "The real-world examples and detailed breakdowns of successful trades are exactly what I needed. This isn't theory - it's practical, actionable advice.",
                author: "David Thompson",
                role: "Options Trader",
                location: "New York, NY"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-slate-400">Years Publishing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-slate-400">In-Depth Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-slate-400">Active Subscribers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-slate-400">Reader Satisfaction</div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-slate-800">
            <p className="text-center text-slate-400 mb-6">AS FEATURED IN</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 font-bold text-lg">
              <span>BLOOMBERG</span>
              <span>WALL STREET JOURNAL</span>
              <span>CNBC</span>
              <span>FORBES</span>
              <span>MARKETWATCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-slate-600">Fresh insights from the world of trading</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Technical Analysis",
                title: "How Jesse Livermore Made $100M Using Price Action",
                excerpt: "Discover the timeless price action principles that made Livermore one of history's greatest traders...",
                date: "Dec 1, 2025",
                readTime: "8 min read"
              },
              {
                category: "Trading Psychology",
                title: "The Mental Game: How Top Traders Handle Losses",
                excerpt: "Learn the psychological frameworks elite traders use to bounce back from losing streaks...",
                date: "Nov 28, 2025",
                readTime: "6 min read"
              },
              {
                category: "Risk Management",
                title: "Position Sizing Secrets from George Soros",
                excerpt: "The exact position sizing formula Soros used to break the Bank of England...",
                date: "Nov 25, 2025",
                readTime: "10 min read"
              }
            ].map((article, idx) => (
              <article key={idx} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow border border-slate-200">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-6xl">
                  📈
                </div>
                <div className="p-6">
                  <div className="text-emerald-600 font-medium text-sm mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{article.title}</h3>
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="subscribe" className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Never Miss a Trading Insight</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 50,000+ traders receiving weekly strategies, market analysis, and success stories
          </p>
          
          <form onSubmit={(e) => handleSubmit(e, email)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:ring-4 focus:ring-emerald-300 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-bold whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </div>
            <p className="text-emerald-100 text-sm mt-4">
              100% free. Unsubscribe anytime. No spam, guaranteed.
            </p>
          </form>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-100">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Weekly Market Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Exclusive Trading Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Trader Interviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                <span className="text-emerald-400">Market</span>Masters
              </h3>
              <p className="text-sm">
                Your trusted source for trading insights, strategies, and success stories from the world's best traders.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#stories" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
                <li><a href="#topics" className="hover:text-emerald-400 transition-colors">Topics</a></li>
                <li><a href="#articles" className="hover:text-emerald-400 transition-colors">Latest Articles</a></li>
                <li><a href="#subscribe" className="hover:text-emerald-400 transition-colors">Subscribe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Day Trading</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Swing Trading</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Options Trading</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Risk Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Disclaimer</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 MarketMasters. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Disclaimer: Trading involves risk. Past performance does not guarantee future results. 
              This content is for educational purposes only and should not be considered financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
