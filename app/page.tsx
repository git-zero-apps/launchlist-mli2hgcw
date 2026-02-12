import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f2] via-[#fff9f0] to-[#fff5eb]">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-brand-300/15 blur-3xl" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-brand-100/25 blur-3xl" />
      </div>

      {/* Subtle grain texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#faf7f2]/80 border-b border-brand-200/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-shadow duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-brand-900">LaunchList</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-sm font-sans font-normal text-brand-800/70 hover:text-brand-900 transition-colors duration-200">Features</Link>
            <Link href="#pricing" className="text-sm font-sans font-normal text-brand-800/70 hover:text-brand-900 transition-colors duration-200">Pricing</Link>
            <Link href="/login" className="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-sans font-medium text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/60 backdrop-blur-sm border border-brand-200/40 mb-8 [animation-delay:150ms] animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-sm font-sans font-medium text-brand-800 tracking-wide">TRUSTED BY 12,847 CREATORS</span>
              </div>
              
              <h1 className="font-display font-black text-7xl lg:text-8xl leading-none tracking-tighter text-brand-950 mb-6">
                Turn signups into <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-500 to-brand-700">viral growth</span>
              </h1>
              
              <p className="text-xl font-sans font-normal leading-relaxed text-brand-800/80 mb-10 max-w-xl">
                Launch beautiful waitlist pages in minutes. Your subscribers become your marketing team with built-in referral tracking that rewards people for spreading the word.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 [animation-delay:300ms] animate-fade-up">
                <Link href="/login" className="px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-sans font-semibold text-base shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300 text-center">
                  Create Your Waitlist
                </Link>
                <Link href="#features" className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-brand-200/40 text-brand-900 font-sans font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  See How It Works
                </Link>
              </div>
              
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-brand-200/30 [animation-delay:450ms] animate-fade-in">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-300 to-brand-400 border-2 border-[#faf7f2]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 border-2 border-[#faf7f2]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 border-2 border-[#faf7f2]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-brand-700 border-2 border-[#faf7f2]" />
                </div>
                <div>
                  <div className="text-sm font-sans font-semibold text-brand-900">4.9/5 rating</div>
                  <div className="text-xs font-sans font-normal text-brand-700/70">from 1,247 reviews</div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative [animation-delay:300ms] animate-fade-in">
              {/* Floating mockup */}
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-brand-600/30 blur-3xl rounded-3xl scale-110" />
                
                {/* Main card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-900/10 p-8 border border-brand-200/30">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 mb-4 shadow-lg shadow-brand-500/30" />
                      <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-2">Join the Waitlist</h3>
                      <p className="font-sans text-sm text-brand-700/70">Be first to try our new product</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-brand-100 text-brand-800 font-sans font-semibold text-xs tracking-wide">
                      #247
                    </div>
                  </div>
                  
                  {/* Form */}
                  <div className="space-y-4 mb-6">
                    <div className="h-12 rounded-xl bg-brand-50/50 border border-brand-200/40 flex items-center px-4">
                      <span className="text-sm font-sans text-brand-400">Your name</span>
                    </div>
                    <div className="h-12 rounded-xl bg-brand-50/50 border border-brand-200/40 flex items-center px-4">
                      <span className="text-sm font-sans text-brand-400">Email address</span>
                    </div>
                    <button className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-sans font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300">
                      Join Waitlist
                    </button>
                  </div>
                  
                  {/* Referral section */}
                  <div className="pt-6 border-t border-brand-200/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="font-sans font-semibold text-brand-900 text-sm">Move up the list faster</span>
                    </div>
                    <p className="font-sans text-xs text-brand-700/70 leading-relaxed">
                      Refer friends and jump ahead in line. Each signup moves you up 3 spots!
                    </p>
                  </div>
                </div>
                
                {/* Floating stat cards */}
                <div className="absolute -right-4 top-12 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-900/10 p-4 border border-brand-200/30 [animation-delay:600ms] animate-scale-in">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="font-sans font-semibold text-sm text-brand-900">+127 today</span>
                  </div>
                  <p className="font-sans text-xs text-brand-700/70">New signups</p>
                </div>
                
                <div className="absolute -left-4 bottom-20 w-44 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-900/10 p-4 border border-brand-200/30 [animation-delay:750ms] animate-scale-in">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-300 to-brand-400 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 border-2 border-white" />
                    </div>
                    <span className="font-sans font-semibold text-sm text-brand-900">83% viral</span>
                  </div>
                  <p className="font-sans text-xs text-brand-700/70">Referral signups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 px-6 border-y border-brand-200/30 bg-white/40 backdrop-blur-sm animate-fade-in [animation-delay:600ms]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display font-black text-5xl text-brand-950 mb-2">12,847</div>
              <div className="font-sans text-sm text-brand-700/70 tracking-wide uppercase">Active Campaigns</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-brand-950 mb-2">2.4M+</div>
              <div className="font-sans text-sm text-brand-700/70 tracking-wide uppercase">Total Signups Generated</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-brand-950 mb-2">67%</div>
              <div className="font-sans text-sm text-brand-700/70 tracking-wide uppercase">Avg. Referral Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-brand-100/60 border border-brand-200/40 font-sans font-semibold text-sm text-brand-800 tracking-widest uppercase mb-6">
              Everything You Need
            </div>
            <h2 className="font-display font-black text-6xl lg:text-7xl leading-none tracking-tighter text-brand-950 mb-6">
              Launch in minutes.<br />Grow forever.
            </h2>
            <p className="text-xl font-sans font-normal leading-relaxed text-brand-800/70 max-w-2xl mx-auto">
              Every tool you need to build, launch, and scale viral waitlist campaigns that turn casual signups into engaged advocates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 animate-fade-up [animation-delay:150ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">One-Click Campaigns</h3>
              <p className="font-sans font-normal leading-relaxed text-brand-800/70">
                Create a fully-branded waitlist page in under 60 seconds. No coding, no design skills, no headaches.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 animate-fade-up [animation-delay:300ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Viral Referral Engine</h3>
              <p className="font-sans font-normal leading-relaxed text-brand-800/70">
                Every subscriber gets a unique referral link. They move up the waitlist when friends join—67% of users refer at least one person.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 animate-fade-up [animation-delay:450ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Real-Time Analytics</h3>
              <p className="font-sans font-normal leading-relaxed text-brand-800/70">
                Watch your waitlist grow with live dashboards showing signup sources, referral performance, and viral coefficient in real-time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 animate-fade-up [animation-delay:600ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Subscriber Management</h3>
              <p className="font-sans font-normal leading-relaxed text-brand-800/70">
                Manage your entire waitlist from one dashboard. Export CSVs, track positions, send bulk updates, and segment by referral performance.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 animate-fade-up [animation-delay:750ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Custom Branding</h3>
              <p className="font-sans font-normal leading-relaxed text-brand-800/70">
                Upload your logo, set your brand colors, and customize every word on the page. Make it feel 100% yours, not another generic waitlist.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 animate-fade-up [animation-delay:900ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-3">Webhook Notifications</h3>
              <p className="font-sans font-normal leading-relaxed text-brand-800/70">
                Connect to your existing tools with webhook support. Get instant notifications in Slack, update your CRM, or trigger custom workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 bg-gradient-to-br from-white/60 to-brand-50/40 backdrop-blur-sm relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='1'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-brand-100/60 border border-brand-200/40 font-sans font-semibold text-sm text-brand-800 tracking-widest uppercase mb-6">
              How It Works
            </div>
            <h2 className="font-display font-black text-6xl leading-none tracking-tighter text-brand-950 mb-6">
              Launch to viral growth<br />in 3 simple steps
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start animate-fade-up [animation-delay:150ms]">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/30">
                <span className="font-display font-black text-2xl text-white">1</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display font-extrabold text-3xl text-brand-950 mb-3">Create your campaign</h3>
                <p className="font-sans text-lg font-normal leading-relaxed text-brand-800/70">
                  Name your campaign, write your headline, add your logo. Takes 60 seconds, looks like you spent $10K on a designer.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start animate-fade-up [animation-delay:300ms]">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/30">
                <span className="font-display font-black text-2xl text-white">2</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display font-extrabold text-3xl text-brand-950 mb-3">Share your waitlist</h3>
                <p className="font-sans text-lg font-normal leading-relaxed text-brand-800/70">
                  Get a custom URL (launchlist.page/yourname) and an embeddable widget. Post it everywhere—social, email, your website.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start animate-fade-up [animation-delay:450ms]">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-xl shadow-brand-500/30">
                <span className="font-display font-black text-2xl text-white">3</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display font-extrabold text-3xl text-brand-950 mb-3">Watch it grow virally</h3>
                <p className="font-sans text-lg font-normal leading-relaxed text-brand-800/70">
                  Every signup gets a unique referral link and moves up when friends join. Your audience does the marketing. You watch the numbers explode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-brand-100/60 border border-brand-200/40 font-sans font-semibold text-sm text-brand-800 tracking-widest uppercase mb-6">
              Pricing
            </div>
            <h2 className="font-display font-black text-6xl lg:text-7xl leading-none tracking-tighter text-brand-950 mb-6">
              Start free. Scale as you grow.
            </h2>
            <p className="text-xl font-sans font-normal leading-relaxed text-brand-800/70 max-w-2xl mx-auto">
              No credit card required. Upgrade when you're ready to launch more campaigns or collect unlimited signups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up [animation-delay:150ms]">
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-2">Free</h3>
                <p className="font-sans text-sm text-brand-700/70 mb-6">Perfect for testing the waters</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-brand-950">$0</span>
                  <span className="font-sans text-brand-700/70">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">1 campaign</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Up to 500 subscribers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Viral referral engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Basic analytics</span>
                </li>
              </ul>
              
              <Link href="/login" className="block w-full py-3 px-6 rounded-full bg-brand-100 hover:bg-brand-200 text-brand-900 font-sans font-semibold text-center transition-all duration-300 border border-brand-200/50">
                Start Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 shadow-2xl shadow-brand-500/30 relative overflow-hidden animate-fade-up [animation-delay:300ms] scale-105">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-sans font-semibold text-xs tracking-wide">
                MOST POPULAR
              </div>
              
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">Pro</h3>
                <p className="font-sans text-sm text-white/80 mb-6">For serious launches</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-white">$29</span>
                  <span className="font-sans text-white/80">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white">5 campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white">Up to 5,000 subscribers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white">Remove LaunchList branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white">Webhook integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white">Priority support</span>
                </li>
              </ul>
              
              <Link href="/login" className="block w-full py-3 px-6 rounded-full bg-white hover:bg-white/90 text-brand-600 font-sans font-semibold text-center transition-all duration-300 shadow-lg">
                Start Pro Trial
              </Link>
            </div>

            {/* Growth Tier */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-200/30 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up [animation-delay:450ms]">
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-2xl text-brand-950 mb-2">Growth</h3>
                <p className="font-sans text-sm text-brand-700/70 mb-6">For scaling fast</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-brand-950">$99</span>
                  <span className="font-sans text-brand-700/70">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Unlimited campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Unlimited subscribers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">White-label everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Custom domain support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-brand-800/80">Dedicated support</span>
                </li>
              </ul>
              
              <Link href="/login" className="block w-full py-3 px-6 rounded-full bg-brand-100 hover:bg-brand-200 text-brand-900 font-sans font-semibold text-center transition-all duration-300 border border-brand-200/50">
                Start Growth Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-up">
          <h2 className="font-display font-black text-6xl lg:text-7xl leading-none tracking-tighter text-white mb-8">
            Ready to make your<br />launch go viral?
          </h2>
          <p className="text-xl font-sans font-normal leading-relaxed text-white/90 mb-12 max-w-2xl mx-auto">
            Join 12,847 creators who've generated 2.4M+ signups with LaunchList. Start your free campaign today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center [animation-delay:300ms] animate-fade-up">
            <Link href="/login" className="px-10 py-5 rounded-full bg-white hover:bg-white/95 text-brand-600 font-sans font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300">
              Create Free Campaign
            </Link>
            <Link href="#features" className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-sans font-semibold text-lg transition-all duration-300">
              See Live Demo
            </Link>
          </div>
          
          <p className="mt-8 text-sm font-sans text-white/70">
            Free forever · No credit card · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-200/30 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-brand-900">LaunchList</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <Link href="#features" className="font-sans text-brand-700/70 hover:text-brand-900 transition-colors">Features</Link>
              <Link href="#pricing" className="font-sans text-brand-700/70 hover:text-brand-900 transition-colors">Pricing</Link>
              <Link href="/login" className="font-sans text-brand-700/70 hover:text-brand-900 transition-colors">Login</Link>
            </div>
            
            <div className="text-sm font-sans text-brand-700/70">
              © 2024 LaunchList. Built with{' '}
              <a 
                href="https://usezero.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 font-semibold transition-colors"
              >
                ZERO
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}