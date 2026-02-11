import Link from 'next/link'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#faf7f2] via-[#fef8f0] to-[#fff5eb] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-300/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-brand-100/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#faf7f2]/80 border-b border-brand-200/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display font-extrabold text-2xl text-brand-900 tracking-tight">
            LaunchList
          </div>
          <div className="flex items-center gap-8">
            <Link href="#features" className="font-sans text-sm text-brand-800 hover:text-brand-900 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="font-sans text-sm text-brand-800 hover:text-brand-900 transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-sans font-medium text-sm rounded-full transition-all hover:shadow-lg hover:shadow-brand-600/25">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-100/50 border border-brand-200/50 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <span className="font-sans text-sm text-brand-700 font-medium">Join 12,847 makers building hype</span>
            </div>
            <h1 className="font-display font-black text-7xl leading-none tracking-tighter text-brand-950 mb-6">
              Turn waitlist signups into viral growth
            </h1>
            <p className="font-sans text-xl leading-relaxed text-brand-700 mb-10 max-w-lg">
              Launch a beautiful branded waitlist in 5 minutes. Built-in referral tracking rewards early adopters and turns every signup into 3 more.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/login" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-sans font-semibold text-base rounded-full transition-all hover:shadow-xl hover:shadow-brand-600/30 hover:scale-105">
                Create Your Waitlist
              </Link>
              <Link href="#features" className="px-8 py-4 bg-white/80 hover:bg-white border border-brand-200 text-brand-900 font-sans font-semibold text-base rounded-full transition-all hover:shadow-lg backdrop-blur-sm">
                See How It Works
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            {/* Mockup of a waitlist page */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-900/10 p-8 border border-brand-100">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 ml-4 h-7 bg-[#faf7f2] rounded-lg flex items-center px-3">
                  <span className="font-sans text-xs text-brand-400">launchlist.app/your-product</span>
                </div>
              </div>

              {/* Mock waitlist content */}
              <div className="space-y-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl" />
                <div>
                  <div className="h-6 bg-brand-100 rounded-lg w-3/4 mb-3" />
                  <div className="h-4 bg-brand-50 rounded-lg w-full mb-2" />
                  <div className="h-4 bg-brand-50 rounded-lg w-5/6" />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 h-12 bg-brand-50 rounded-xl" />
                  <div className="w-32 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-lg shadow-brand-500/25" />
                </div>
                <div className="pt-6 border-t border-brand-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 bg-brand-100 rounded w-24" />
                    <div className="h-8 w-8 bg-brand-100 rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-xl p-3">
                      <div className="h-3 bg-brand-200 rounded w-16 mb-2" />
                      <div className="h-5 bg-brand-300 rounded w-12" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-xl p-3">
                      <div className="h-3 bg-brand-200 rounded w-16 mb-2" />
                      <div className="h-5 bg-brand-300 rounded w-12" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating referral card */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-56 bg-white rounded-2xl shadow-xl shadow-brand-900/15 p-5 border border-brand-100 animate-fade-in [animation-delay:300ms]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full" />
                  <div className="flex-1">
                    <div className="h-3 bg-brand-100 rounded w-20 mb-1.5" />
                    <div className="h-2 bg-brand-50 rounded w-16" />
                  </div>
                </div>
                <div className="bg-brand-50 rounded-lg p-3">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display font-black text-3xl text-brand-900">47</span>
                    <span className="font-sans text-xs text-brand-600">referrals</span>
                  </div>
                  <div className="h-1.5 bg-brand-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up [animation-delay:200ms]">
          <div className="text-center">
            <div className="font-display font-black text-5xl text-brand-900 mb-2">12,847</div>
            <div className="font-sans text-brand-700">Active waitlists launched</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-5xl text-brand-900 mb-2">2.3M+</div>
            <div className="font-sans text-brand-700">Signups collected</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-5xl text-brand-900 mb-2">34%</div>
            <div className="font-sans text-brand-700">Average referral rate</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-brand-100/50 border border-brand-200/50 rounded-full mb-6">
            <span className="font-sans text-sm text-brand-700 font-medium tracking-wide uppercase">Everything you need</span>
          </div>
          <h2 className="font-display font-black text-6xl tracking-tighter text-brand-950 mb-6">
            One tool. One link. Explosive growth.
          </h2>
          <p className="font-sans text-xl text-brand-700 max-w-2xl mx-auto leading-relaxed">
            Stop cobbling together landing page builders, email tools, and referral scripts. LaunchList has it all built in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all animate-fade-up [animation-delay:100ms]">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Launch in 5 minutes</h3>
            <p className="font-sans text-brand-700 leading-relaxed">Pick a template, customize your headline and colors, and publish. Your branded waitlist page is live with a shareable link instantly.</p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all animate-fade-up [animation-delay:150ms]">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Built-in viral referrals</h3>
            <p className="font-sans text-brand-700 leading-relaxed">Every signup gets a unique referral link. Share it, climb the leaderboard, unlock priority access. Your users do the marketing for you.</p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all animate-fade-up [animation-delay:200ms]">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Real-time analytics</h3>
            <p className="font-sans text-brand-700 leading-relaxed">Watch signups roll in, track referral performance, and see who's driving the most growth. Daily snapshots show exactly what's working.</p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all animate-fade-up [animation-delay:250ms]">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Manage subscribers</h3>
            <p className="font-sans text-brand-700 leading-relaxed">See position tracking, export CSVs for launch day, send updates via webhooks. Control who gets early access based on referral performance.</p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all animate-fade-up [animation-delay:300ms]">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Custom branding</h3>
            <p className="font-sans text-brand-700 leading-relaxed">Upload your logo, choose your brand color, customize button text. Your waitlist page looks 100% like your brand, not a template.</p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all animate-fade-up [animation-delay:350ms]">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Embeddable widget</h3>
            <p className="font-sans text-brand-700 leading-relaxed">Already have a landing page? Drop the LaunchList widget anywhere with one line of code. Collect signups without leaving your site.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display font-black text-6xl tracking-tighter text-brand-950 mb-6">
            From zero to waitlist in three steps
          </h2>
          <p className="font-sans text-xl text-brand-700 max-w-2xl mx-auto leading-relaxed">
            No dev work. No complicated setup. Just fast, viral growth.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex gap-8 items-start animate-fade-up [animation-delay:100ms]">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/25">
              <span className="font-display font-black text-3xl text-white">1</span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-display font-extrabold text-3xl text-brand-950 mb-3">Create your campaign</h3>
              <p className="font-sans text-lg text-brand-700 leading-relaxed">Choose a template, write your headline, pick your brand color. Customize the CTA text and upload your logo. Takes 2 minutes.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start animate-fade-up [animation-delay:200ms]">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/25">
              <span className="font-display font-black text-3xl text-white">2</span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-display font-extrabold text-3xl text-brand-950 mb-3">Share your link</h3>
              <p className="font-sans text-lg text-brand-700 leading-relaxed">Post your waitlist URL on Twitter, LinkedIn, Product Hunt, your newsletter. Every signup gets a referral link to share with friends.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start animate-fade-up [animation-delay:300ms]">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/25">
              <span className="font-display font-black text-3xl text-white">3</span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-display font-extrabold text-3xl text-brand-950 mb-3">Watch it grow</h3>
              <p className="font-sans text-lg text-brand-700 leading-relaxed">Referrals compound. Your top advocates drive hundreds of signups. When you launch, you have thousands of excited users ready to pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-brand-100/50 border border-brand-200/50 rounded-full mb-6">
            <span className="font-sans text-sm text-brand-700 font-medium tracking-wide uppercase">Simple pricing</span>
          </div>
          <h2 className="font-display font-black text-6xl tracking-tighter text-brand-950 mb-6">
            Start free. Scale when you're ready.
          </h2>
          <p className="font-sans text-xl text-brand-700 max-w-2xl mx-auto leading-relaxed">
            Launch unlimited waitlists. Upgrade when you need advanced analytics and custom branding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 animate-fade-up [animation-delay:100ms]">
            <div className="mb-8">
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-2">Free</h3>
              <p className="font-sans text-brand-700 mb-6">Perfect for getting started</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-5xl text-brand-950">$0</span>
                <span className="font-sans text-brand-600">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">1 active waitlist</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Unlimited signups</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Viral referral engine</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Basic analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">LaunchList branding</span>
              </li>
            </ul>
            <Link href="/login" className="block w-full px-6 py-3 bg-brand-100 hover:bg-brand-200 text-brand-900 font-sans font-semibold text-center rounded-full transition-all">
              Start Free
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full">
              <span className="font-sans text-sm text-white font-semibold tracking-wide">MOST POPULAR</span>
            </div>
            <div className="mb-8">
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-2">Pro</h3>
              <p className="font-sans text-brand-700 mb-6">For serious launches</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-5xl text-brand-950">$29</span>
                <span className="font-sans text-brand-600">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">5 active waitlists</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Unlimited signups</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Advanced analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Custom branding</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Webhook notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">CSV export</span>
              </li>
            </ul>
            <Link href="/login" className="block w-full px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-sans font-semibold text-center rounded-full transition-all shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-600/40">
              Start Pro Trial
            </Link>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-100 animate-fade-up [animation-delay:300ms]">
            <div className="mb-8">
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-2">Agency</h3>
              <p className="font-sans text-brand-700 mb-6">For teams and agencies</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-5xl text-brand-950">$99</span>
                <span className="font-sans text-brand-600">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Unlimited waitlists</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Team collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">White-label option</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-brand-700">Custom integrations</span>
              </li>
            </ul>
            <Link href="/login" className="block w-full px-6 py-3 bg-brand-100 hover:bg-brand-200 text-brand-900 font-sans font-semibold text-center rounded-full transition-all">
              Start Agency Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="relative bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl shadow-brand-900/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-900/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative text-center animate-fade-up">
            <h2 className="font-display font-black text-5xl md:text-6xl tracking-tighter text-white mb-6">
              Ready to build hype?
            </h2>
            <p className="font-sans text-xl text-brand-50 max-w-2xl mx-auto leading-relaxed mb-10">
              Join 12,847 makers who launched successful waitlists. Start collecting signups in the next 5 minutes — completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login" className="px-10 py-4 bg-white hover:bg-brand-50 text-brand-900 font-sans font-bold text-lg rounded-full transition-all hover:shadow-2xl hover:scale-105">
                Create Your Waitlist Free
              </Link>
              <Link href="#features" className="px-10 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-sans font-semibold text-lg rounded-full transition-all">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-brand-200/30 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display font-extrabold text-2xl text-brand-900 tracking-tight">
              LaunchList
            </div>
            <div className="flex items-center gap-8">
              <Link href="#features" className="font-sans text-sm text-brand-700 hover:text-brand-900 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="font-sans text-sm text-brand-700 hover:text-brand-900 transition-colors">
                Pricing
              </Link>
              <Link href="/login" className="font-sans text-sm text-brand-700 hover:text-brand-900 transition-colors">
                Sign In
              </Link>
            </div>
            <div className="font-sans text-sm text-brand-600">
              © 2024 LaunchList. Built with{' '}
              <a href="https://usezero.co" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:text-brand-900 font-medium transition-colors">
                ZERO
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}