import Link from "next/link"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 font-sans text-slate-900">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-brand-300/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-rose-300/15 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-orange-200/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">LaunchList</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#features" className="hidden font-medium text-slate-700 transition-colors hover:text-slate-900 md:inline-block">
              Features
            </Link>
            <Link href="#pricing" className="hidden font-medium text-slate-700 transition-colors hover:text-slate-900 md:inline-block">
              Pricing
            </Link>
            <Link href="/login" className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-2.5 font-display font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-up space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/60 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
                </span>
                Join 12,847 makers building their audience
              </div>
              <h1 className="font-display text-6xl font-black leading-none tracking-tighter text-slate-900 lg:text-7xl">
                Turn waitlist signups into{" "}
                <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
                  viral growth
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-slate-600 lg:text-2xl">
                Beautiful waitlist pages with a built-in referral engine. Every signup becomes a growth channel. Launch in 60 seconds.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/login" className="group rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 font-display text-lg font-bold text-white shadow-xl shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/40">
                  Create Your Waitlist
                  <svg className="ml-2 inline h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="#features" className="rounded-full border-2 border-slate-200 bg-white/80 px-8 py-4 font-display text-lg font-bold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in [animation-delay:300ms]">
              <div className="relative rounded-3xl border border-orange-200/50 bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600">
                        <span className="font-display text-lg font-bold text-white">A</span>
                      </div>
                      <div>
                        <div className="font-display text-sm font-bold text-slate-900">AI SaaS Launch</div>
                        <div className="text-xs text-slate-500">2,847 signups</div>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Live</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">Total Signups</span>
                      <span className="font-display text-2xl font-black text-slate-900">2,847</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Viral Rate</div>
                        <div className="mt-1 font-display text-2xl font-black text-slate-900">2.4x</div>
                        <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          <span className="font-semibold">+18%</span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Top Referrer</div>
                        <div className="mt-1 font-display text-2xl font-black text-slate-900">127</div>
                        <div className="mt-1 text-xs text-slate-600">referrals</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50/50 p-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-brand-900">68% of signups came from referrals</span>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-rose-300/40 to-orange-300/40 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 to-purple-300/40 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="animate-fade-up border-y border-orange-200/50 bg-white/60 py-8 backdrop-blur-sm [animation-delay:150ms]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="font-display text-4xl font-black text-slate-900">12,847</div>
              <div className="mt-1 text-sm font-medium text-slate-600">Active campaigns</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-black text-slate-900">4.2M</div>
              <div className="mt-1 text-sm font-medium text-slate-600">Waitlist signups collected</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-black text-slate-900">2.6x</div>
              <div className="mt-1 text-sm font-medium text-slate-600">Average viral coefficient</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="animate-fade-up font-display text-5xl font-black leading-tight tracking-tighter text-slate-900 lg:text-6xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
                build hype
              </span>
            </h2>
            <p className="animate-fade-up mt-6 text-xl leading-relaxed text-slate-600 [animation-delay:150ms]">
              Launch beautiful waitlist pages that turn every subscriber into a growth channel
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="animate-fade-up group rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl [animation-delay:150ms]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Viral Referral Engine</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Every subscriber gets a unique referral link. The more friends they invite, the higher they climb on your waitlist. Built-in viral growth.
              </p>
            </div>

            <div className="animate-fade-up group rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl [animation-delay:300ms]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Real-Time Analytics</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Watch your waitlist grow in real-time. Track signup sources, referral performance, and viral coefficients. Daily snapshots show growth trends.
              </p>
            </div>

            <div className="animate-fade-up group rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl [animation-delay:450ms]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">One-Click Launch</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Create a stunning waitlist page in under 60 seconds. Add your brand colors, customize the copy, and share your unique link. No code required.
              </p>
            </div>

            <div className="animate-fade-up group rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl [animation-delay:600ms]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Position Tracking</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Subscribers see exactly where they stand. Automated position updates via email keep them engaged and motivated to share their referral link.
              </p>
            </div>

            <div className="animate-fade-up group rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl [animation-delay:750ms]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Subscriber Management</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Full dashboard to manage your waitlist. Search, filter, and export subscribers. CSV export for your email tool. Webhook notifications for new signups.
              </p>
            </div>

            <div className="animate-fade-up group rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl [animation-delay:900ms]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Custom Branding</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Make it yours. Upload your logo, set brand colors, customize button text. Remove LaunchList branding on Pro plans. Perfect match for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative border-y border-orange-200/50 bg-white/60 px-6 py-20 backdrop-blur-sm lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="animate-fade-up font-display text-5xl font-black leading-tight tracking-tighter text-slate-900 lg:text-6xl">
              Launch to viral growth in{" "}
              <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
                three steps
              </span>
            </h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="animate-fade-up space-y-4 [animation-delay:150ms]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 font-display text-3xl font-black text-white shadow-xl shadow-brand-500/30">
                1
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Create Your Campaign</h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Add your product name, headline, and brand colors. Customize the signup form and call-to-action. Takes less than a minute.
              </p>
            </div>

            <div className="animate-fade-up space-y-4 [animation-delay:300ms]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 font-display text-3xl font-black text-white shadow-xl shadow-emerald-500/30">
                2
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Share Your Link</h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Get your unique waitlist URL. Share it on social media, in newsletters, or embed the widget on your site. Every signup gets a referral link automatically.
              </p>
            </div>

            <div className="animate-fade-up space-y-4 [animation-delay:450ms]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 font-display text-3xl font-black text-white shadow-xl shadow-orange-500/30">
                3
              </div>
              <h3 className="font-display text-2xl font-black text-slate-900">Watch It Go Viral</h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Subscribers share their referral links to climb the waitlist. Real-time dashboard shows viral growth. Export your list when you're ready to launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="animate-fade-up font-display text-5xl font-black leading-tight tracking-tighter text-slate-900 lg:text-6xl">
              Simple pricing that{" "}
              <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
                scales with you
              </span>
            </h2>
            <p className="animate-fade-up mt-6 text-xl leading-relaxed text-slate-600 [animation-delay:150ms]">
              Start free, upgrade when you're ready to scale
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm [animation-delay:150ms]">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-slate-900">Free</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl font-black text-slate-900">$0</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Perfect for testing the waters</p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">1 campaign</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Up to 500 subscribers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Viral referral engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Basic analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-400">LaunchList branding</span>
                </li>
              </ul>
              <Link href="/login" className="block w-full rounded-full border-2 border-slate-200 bg-white py-3 text-center font-display font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50">
                Start Free
              </Link>
            </div>

            <div className="animate-fade-up relative rounded-2xl border-2 border-brand-500 bg-white p-8 shadow-2xl [animation-delay:300ms]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-1 text-sm font-bold text-white shadow-lg">
                  Most Popular
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-slate-900">Pro</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl font-black text-slate-900">$29</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">For serious product launches</p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">5 campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Up to 5,000 subscribers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Remove LaunchList branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">CSV export</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Webhook notifications</span>
                </li>
              </ul>
              <Link href="/login" className="block w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 py-3 text-center font-display font-bold text-white shadow-xl shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/40">
                Start Pro Trial
              </Link>
            </div>

            <div className="animate-fade-up rounded-2xl border border-orange-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm [animation-delay:450ms]">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-slate-900">Growth</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl font-black text-slate-900">$99</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">For scaling companies</p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Unlimited campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Up to 50,000 subscribers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Custom domain support</span>
                </li>
              </ul>
              <Link href="/login" className="block w-full rounded-full border-2 border-slate-200 bg-white py-3 text-center font-display font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50">
                Start Growth Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-orange-200/50 bg-gradient-to-br from-brand-500 to-brand-600 px-6 py-20 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="animate-fade-up font-display text-5xl font-black leading-tight tracking-tighter text-white lg:text-6xl">
            Ready to turn signups into viral growth?
          </h2>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90 [animation-delay:150ms]">
            Join 12,847 makers who've launched successful waitlists with LaunchList. Your first 500 subscribers are free.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:300ms]">
            <Link href="/login" className="group rounded-full bg-white px-10 py-5 font-display text-lg font-bold text-slate-900 shadow-2xl transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)]">
              Create Your Waitlist
              <svg className="ml-2 inline h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <p className="animate-fade-up mt-6 text-sm text-white/70 [animation-delay:450ms]">
            No credit card required • Free forever plan • 60-second setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-200/50 bg-white/60 px-6 py-12 backdrop-blur-sm lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-slate-900">LaunchList</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <Link href="#features" className="transition-colors hover:text-slate-900">
                Features
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-slate-900">
                Pricing
              </Link>
              <Link href="/login" className="transition-colors hover:text-slate-900">
                Sign In
              </Link>
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} LaunchList. Built with{" "}
              <a href="https://usezero.co" className="font-medium text-brand-600 hover:text-brand-700">
                ZERO
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}