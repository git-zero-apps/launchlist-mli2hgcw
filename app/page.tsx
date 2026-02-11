import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f2] via-[#fff5f0] to-[#fef3f8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#faf7f2]/80 border-b border-brand-200/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-display font-extrabold text-2xl text-brand-900 tracking-tight">
              LaunchList
            </div>
            <div className="flex items-center gap-8">
              <Link href="#features" className="font-sans text-brand-800 hover:text-brand-900 transition-colors text-sm">
                Features
              </Link>
              <Link href="#pricing" className="font-sans text-brand-800 hover:text-brand-900 transition-colors text-sm">
                Pricing
              </Link>
              <Link href="/login" className="font-sans font-semibold text-sm px-5 py-2.5 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:scale-105">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl animate-fade-in" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-400/15 rounded-full blur-3xl animate-fade-in [animation-delay:150ms]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/60 border border-brand-300/40 mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="font-sans text-sm text-brand-800 font-medium">Join 12,847 founders building hype</span>
              </div>
              <h1 className="font-display font-black text-6xl lg:text-7xl text-brand-950 leading-none tracking-tighter mb-6">
                Turn signups into <span className="text-brand-600">viral growth</span>
              </h1>
              <p className="font-sans text-xl text-brand-700 leading-relaxed mb-8 max-w-xl">
                Beautiful waitlist pages with built-in referral rewards that turn every subscriber into your marketing team. Launch in 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/login" className="font-sans font-semibold text-lg px-8 py-4 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/50 hover:scale-105 text-center">
                  Create Your Waitlist
                </Link>
                <Link href="#features" className="font-sans font-semibold text-lg px-8 py-4 bg-white/60 text-brand-900 rounded-full hover:bg-white/80 transition-all backdrop-blur-sm border border-brand-300/40 text-center">
                  See How It Works
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm font-sans text-brand-700">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Setup in 60 seconds</span>
                </div>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-500/20 p-8 border border-brand-200/50 backdrop-blur-sm">
                {/* Mini waitlist page mockup */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-32 bg-brand-900 rounded-full" />
                      <div className="h-2 w-24 bg-brand-300 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 w-full bg-brand-900 rounded-lg" />
                    <div className="h-6 w-4/5 bg-brand-900 rounded-lg" />
                    <div className="h-4 w-full bg-brand-200 rounded-lg" />
                    <div className="h-4 w-3/4 bg-brand-200 rounded-lg" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-12 bg-brand-100 rounded-xl border-2 border-brand-300" />
                    <div className="h-12 px-6 bg-brand-600 rounded-xl flex items-center justify-center">
                      <div className="h-3 w-16 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-brand-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-24 bg-brand-300 rounded-full" />
                      <div className="h-5 w-12 bg-brand-500 rounded-full" />
                    </div>
                    <div className="bg-gradient-to-r from-brand-100 to-brand-50 rounded-xl p-4 space-y-2">
                      <div className="h-2.5 w-32 bg-brand-600 rounded-full" />
                      <div className="h-8 w-full bg-white rounded-lg border border-brand-300/50" />
                      <div className="h-2 w-40 bg-brand-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl shadow-brand-500/20 p-4 border border-brand-200/50 backdrop-blur-sm animate-scale-in [animation-delay:300ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-900 text-lg">+347%</div>
                    <div className="font-sans text-xs text-brand-600">Avg. referrals</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-brand-500/20 p-4 border border-brand-200/50 backdrop-blur-sm animate-scale-in [animation-delay:450ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-900 text-lg">4.9/5</div>
                    <div className="font-sans text-xs text-brand-600">User rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-brand-200/40 bg-white/40 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            <div className="text-center animate-fade-up">
              <div className="font-display font-black text-4xl lg:text-5xl text-brand-900 mb-2">12,847</div>
              <div className="font-sans text-brand-600 text-sm lg:text-base">Active campaigns</div>
            </div>
            <div className="text-center animate-fade-up [animation-delay:100ms]">
              <div className="font-display font-black text-4xl lg:text-5xl text-brand-900 mb-2">2.4M+</div>
              <div className="font-sans text-brand-600 text-sm lg:text-base">Waitlist subscribers</div>
            </div>
            <div className="text-center animate-fade-up [animation-delay:200ms]">
              <div className="font-display font-black text-4xl lg:text-5xl text-brand-900 mb-2">99.9%</div>
              <div className="font-sans text-brand-600 text-sm lg:text-base">Uptime guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-300/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block font-sans text-sm font-bold tracking-widest uppercase text-brand-600 mb-4">
              Everything you need
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-brand-950 tracking-tighter mb-6">
              Built-in viral growth engine
            </h2>
            <p className="font-sans text-xl text-brand-700 max-w-2xl mx-auto leading-relaxed">
              Every feature designed to maximize signups and turn subscribers into your best marketers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 hover:shadow-xl hover:shadow-brand-500/20 transition-all hover:scale-105 animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-950 mb-3">Launch in 60 seconds</h3>
              <p className="font-sans text-brand-700 leading-relaxed">
                Choose your design, add your headline, and get a shareable link. Your viral waitlist is live before your coffee gets cold.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 hover:shadow-xl hover:shadow-brand-500/20 transition-all hover:scale-105 animate-fade-up [animation-delay:100ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-950 mb-3">Automatic referral rewards</h3>
              <p className="font-sans text-brand-700 leading-relaxed">
                Every subscriber gets a unique link. Share it, move up the waitlist. Your users do your growth marketing for you.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 hover:shadow-xl hover:shadow-brand-500/20 transition-all hover:scale-105 animate-fade-up [animation-delay:200ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-950 mb-3">Real-time analytics dashboard</h3>
              <p className="font-sans text-brand-700 leading-relaxed">
                Watch signups roll in, track referral sources, see your leaderboard. Know exactly which subscribers are driving growth.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 hover:shadow-xl hover:shadow-brand-500/20 transition-all hover:scale-105 animate-fade-up [animation-delay:300ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-950 mb-3">Full brand customization</h3>
              <p className="font-sans text-brand-700 leading-relaxed">
                Custom colors, your logo, personalized copy. Your waitlist page looks like you built it from scratch, not a template.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 hover:shadow-xl hover:shadow-brand-500/20 transition-all hover:scale-105 animate-fade-up [animation-delay:400ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-950 mb-3">Automated email sequences</h3>
              <p className="font-sans text-brand-700 leading-relaxed">
                Welcome emails, position updates, milestone celebrations, daily digests. Keep subscribers engaged without lifting a finger.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 hover:shadow-xl hover:shadow-brand-500/20 transition-all hover:scale-105 animate-fade-up [animation-delay:500ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-950 mb-3">Export & integrations</h3>
              <p className="font-sans text-brand-700 leading-relaxed">
                CSV export, webhook notifications, embeddable widgets. Get your subscriber data wherever you need it, however you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-1/4 left-1/4 opacity-5" width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="currentColor" className="text-brand-600" strokeWidth="2" />
            <circle cx="200" cy="200" r="120" stroke="currentColor" className="text-brand-600" strokeWidth="2" />
            <circle cx="200" cy="200" r="60" stroke="currentColor" className="text-brand-600" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block font-sans text-sm font-bold tracking-widest uppercase text-brand-600 mb-4">
              How it works
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-brand-950 tracking-tighter mb-6">
              Three steps to viral growth
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative animate-fade-up">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/40">
                <span className="font-display font-black text-3xl text-white">1</span>
              </div>
              <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg shadow-brand-500/10 border border-brand-200/50">
                <h3 className="font-display font-bold text-2xl text-brand-950 mb-4">Create your campaign</h3>
                <p className="font-sans text-brand-700 leading-relaxed mb-6">
                  Pick your colors, write your headline, customize your message. Your branded waitlist page goes live in under a minute.
                </p>
                <div className="bg-brand-50 rounded-xl p-4 border border-brand-200/50">
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 bg-brand-300 rounded-full" />
                    <div className="h-2 w-1/2 bg-brand-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/40">
                <span className="font-display font-black text-3xl text-white">2</span>
              </div>
              <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg shadow-brand-500/10 border border-brand-200/50">
                <h3 className="font-display font-bold text-2xl text-brand-950 mb-4">Share your link</h3>
                <p className="font-sans text-brand-700 leading-relaxed mb-6">
                  Post it on Twitter, LinkedIn, your newsletter. Every signup automatically gets their own referral link to climb the waitlist.
                </p>
                <div className="bg-brand-50 rounded-xl p-4 border border-brand-200/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-brand-400" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 w-full bg-brand-300 rounded-full" />
                      <div className="h-2 w-2/3 bg-brand-200 rounded-full" />
                    </div>
                  </div>
                  <div className="h-8 bg-brand-600 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up [animation-delay:300ms]">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/40">
                <span className="font-display font-black text-3xl text-white">3</span>
              </div>
              <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg shadow-brand-500/10 border border-brand-200/50">
                <h3 className="font-display font-bold text-2xl text-brand-950 mb-4">Watch it grow</h3>
                <p className="font-sans text-brand-700 leading-relaxed mb-6">
                  Track referrals in real-time, see your leaderboard, export your data. Your subscribers become your growth team.
                </p>
                <div className="bg-brand-50 rounded-xl p-4 border border-brand-200/50">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-20 bg-brand-300 rounded-full" />
                      <div className="h-3 w-12 bg-brand-600 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-24 bg-brand-300 rounded-full" />
                      <div className="h-3 w-10 bg-brand-500 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 bg-brand-300 rounded-full" />
                      <div className="h-3 w-8 bg-brand-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-300/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block font-sans text-sm font-bold tracking-widest uppercase text-brand-600 mb-4">
              Pricing
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-brand-950 tracking-tighter mb-6">
              Start free, scale as you grow
            </h2>
            <p className="font-sans text-xl text-brand-700 max-w-2xl mx-auto leading-relaxed">
              Launch your first campaign in minutes. Upgrade when you're ready to scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free tier */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 animate-fade-up">
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-brand-950 mb-2">Free</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-brand-950">$0</span>
                  <span className="font-sans text-brand-600">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1 campaign</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 100 subscribers</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Viral referral engine</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>LaunchList branding</span>
                </li>
              </ul>
              <Link href="/login" className="block w-full text-center font-sans font-semibold px-6 py-3 bg-brand-100 text-brand-900 rounded-xl hover:bg-brand-200 transition-colors border border-brand-300/40">
                Start Free
              </Link>
            </div>

            {/* Pro tier - highlighted */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 shadow-2xl shadow-brand-500/40 relative animate-fade-up [animation-delay:150ms] transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-900 text-white rounded-full font-sans text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-white mb-2">Pro</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-white">$29</span>
                  <span className="font-sans text-brand-100">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 font-sans text-white">
                  <svg className="w-6 h-6 text-brand-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5 campaigns</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-white">
                  <svg className="w-6 h-6 text-brand-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 5,000 subscribers</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-white">
                  <svg className="w-6 h-6 text-brand-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Remove LaunchList branding</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-white">
                  <svg className="w-6 h-6 text-brand-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-white">
                  <svg className="w-6 h-6 text-brand-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>CSV export</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-white">
                  <svg className="w-6 h-6 text-brand-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Webhook integrations</span>
                </li>
              </ul>
              <Link href="/login" className="block w-full text-center font-sans font-semibold px-6 py-3 bg-white text-brand-900 rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
                Start Pro Trial
              </Link>
            </div>

            {/* Growth tier */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-200/50 shadow-lg shadow-brand-500/10 animate-fade-up [animation-delay:300ms]">
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-brand-950 mb-2">Growth</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-brand-950">$99</span>
                  <span className="font-sans text-brand-600">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited subscribers</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom domain support</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-brand-700">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>API access</span>
                </li>
              </ul>
              <Link href="/login" className="block w-full text-center font-sans font-semibold px-6 py-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
                Start Growth Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700" />
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 opacity-10" width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="100" cy="100" r="300" stroke="white" strokeWidth="2" />
            <circle cx="500" cy="500" r="200" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="animate-fade-up">
            <h2 className="font-display font-black text-5xl lg:text-6xl text-white tracking-tighter mb-6">
              Ready to go viral?
            </h2>
            <p className="font-sans text-xl text-brand-50 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join thousands of founders who've turned their waitlists into growth engines. Create your first campaign in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/login" className="font-sans font-semibold text-lg px-10 py-4 bg-white text-brand-900 rounded-full hover:bg-brand-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
                Create Your Waitlist
              </Link>
              <Link href="#features" className="font-sans font-semibold text-lg px-10 py-4 bg-brand-500/20 text-white rounded-full hover:bg-brand-500/30 transition-all backdrop-blur-sm border border-white/20">
                Watch Demo
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm font-sans text-brand-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-200/40 bg-white/40 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display font-extrabold text-xl text-brand-900 tracking-tight">
              LaunchList
            </div>
            <div className="flex items-center gap-8 text-sm font-sans text-brand-600">
              <Link href="#features" className="hover:text-brand-900 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="hover:text-brand-900 transition-colors">
                Pricing
              </Link>
              <Link href="/login" className="hover:text-brand-900 transition-colors">
                Login
              </Link>
            </div>
            <div className="text-sm font-sans text-brand-600">
              Built with <a href="https://usezero.co" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-900 hover:text-brand-700 transition-colors">ZERO</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-200/40 text-center text-sm font-sans text-brand-500">
            © {new Date().getFullYear()} LaunchList. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}