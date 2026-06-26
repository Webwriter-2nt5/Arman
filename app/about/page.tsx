import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import Accordion from '@/components/Accordion';
import ContactForm from '@/components/ContactForm';
import faqData from '@/data/faq.json';
import PortfolioGrid from '@/components/PortfolioGrid';

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative bg-navy-dark overflow-hidden py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-safety-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">I Only Build for One Kind of Business</h1>
          <p className="text-2xl text-safety-orange italic font-display">(And I&apos;m damn good at it.)</p>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="bg-navy-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl text-lg text-gray-light leading-relaxed space-y-6">
              <p>
                I don&apos;t design websites for everyone — I build them exclusively for electricians, plumbers, HVAC companies, and landscapers.
              </p>
              <p>
                That focus means every site is built around how your customers actually search and call. Not a generic template. Not &quot;design trends.&quot; Just tools built for the work you do.
              </p>
              <p>
                Before you commit to anything, I&apos;ll build you a free working mockup of your homepage. You&apos;ll see exactly what your new site looks like — with your business name, your service area, your phone number prominently displayed. No payment. No obligation.
              </p>
              <p>
                If you hate it, no hard feelings. But most business owners see it and think <strong className="text-white">&quot;yeah, I need this.&quot;</strong>
              </p>
            </div>
            
            <div className="bg-navy-dark p-4 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-safety-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                Generic vs. Built for Your Business
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="opacity-80 grayscale-[50%] blur-[0.5px] hover:blur-none hover:grayscale-0 transition-all duration-300">
                  <div className="bg-white/5 aspect-[3/4] rounded-lg relative overflow-hidden border border-white/20">
                    <Image
                      src="/bad_electrician_site.jpg"
                      alt="Unresponsive template site"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-navy-light aspect-[3/4] rounded-lg border-2 border-safety-orange shadow-lg relative overflow-hidden group">
                     <div className="absolute inset-0 z-10 pointer-events-none"></div>
                     <iframe
                        src="https://brightvolt-electrician.vercel.app"
                        width="100%"
                        height="100%"
                        className="w-[250%] h-[250%] scale-[0.4] origin-top-left border-0 bg-white"
                        title="BrightVolt Electrical Services preview"
                     ></iframe>
                     <div className="absolute bottom-4 left-0 w-full text-center z-20">
                        <span className="bg-safety-orange text-white font-bold px-4 py-2 rounded shadow-lg text-sm">CUSTOM NEXT.JS SITE</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="bg-navy-dark py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">How I Build Your Site</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-light rounded-lg p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-9xl font-display font-bold text-white/5 group-hover:text-safety-orange/10 transition-colors">1</div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Free Mockup Call</h3>
              <ul className="space-y-2 text-gray-light relative z-10">
                <li>• You tell me about your business (10 minutes)</li>
                <li>• I ask about your biggest frustration</li>
                <li>• We set expectations</li>
              </ul>
            </div>
            
            <div className="bg-navy-light rounded-lg p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-9xl font-display font-bold text-white/5 group-hover:text-safety-orange/10 transition-colors">2</div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Design Mockup</h3>
              <ul className="space-y-2 text-gray-light relative z-10">
                <li>• I build a working homepage mockup</li>
                <li>• Real phone number, service area, vibe</li>
                <li>• Takes me 3-4 days</li>
              </ul>
            </div>
            
            <div className="bg-navy-light rounded-lg p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-9xl font-display font-bold text-white/5 group-hover:text-safety-orange/10 transition-colors">3</div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Review & Revise</h3>
              <ul className="space-y-2 text-gray-light relative z-10">
                <li>• You see the mockup (live link)</li>
                <li>• Feedback round(s) — I adjust colors, copy, layout</li>
                <li>• Once you love it, we go to build</li>
              </ul>
            </div>
            
            <div className="bg-navy-light rounded-lg p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-9xl font-display font-bold text-white/5 group-hover:text-safety-orange/10 transition-colors">4</div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 relative z-10">Site Goes Live</h3>
              <ul className="space-y-2 text-gray-light relative z-10">
                <li>• I build out the full site</li>
                <li>• Launch to your domain</li>
                <li>• 30 days of support included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Specialize Section */}
      <section className="bg-navy-light py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Why Trade Businesses Specifically?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card hover={false}>
              <h3 className="font-display font-bold text-xl text-white mb-4 border-b border-safety-orange pb-2 inline-block">The Problem</h3>
              <ul className="space-y-3 text-gray-light">
                <li>• You&apos;re busy. You&apos;re not a marketer.</li>
                <li>• You don&apos;t need a &quot;brand refresh&quot; or &quot;web presence strategy.&quot;</li>
                <li>• You need calls. That&apos;s it.</li>
              </ul>
            </Card>
            
            <Card hover={false}>
              <h3 className="font-display font-bold text-xl text-white mb-4 border-b border-safety-orange pb-2 inline-block">What Doesn&apos;t Work</h3>
              <ul className="space-y-3 text-gray-light">
                <li>• Generic templates look generic</li>
                <li>• Agencies charge $3k–$10k and take 3 months</li>
                <li>• WordPress/Wix sites break, slow down, and feel outdated</li>
              </ul>
            </Card>
            
            <Card hover={false}>
              <h3 className="font-display font-bold text-xl text-white mb-4 border-b border-safety-orange pb-2 inline-block">Why Me</h3>
              <ul className="space-y-3 text-gray-light">
                <li>• Optimized for actual search behavior</li>
                <li>• Fast, mobile-first design</li>
                <li>• Simple to update</li>
                <li>• Built to rank locally</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust / Proof Section */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">What You Can Count On</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-white/5 rounded-lg bg-navy-light/50">
              <div className="bg-navy-dark w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center border border-safety-orange text-safety-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Specialization, Not Generalism</h3>
                <p className="text-gray-light">I build ONLY for trade businesses. That means every design decision is made with YOUR customer in mind, not some generic small business.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-white/5 rounded-lg bg-navy-light/50">
              <div className="bg-navy-dark w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center border border-safety-orange text-safety-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Free Mockup Guarantee</h3>
                <p className="text-gray-light">You see exactly what your site will look like before we sign anything. If you don&apos;t like the direction, we iterate or part ways — no charge.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-white/5 rounded-lg bg-navy-light/50">
              <div className="bg-navy-dark w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center border border-safety-orange text-safety-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Quick Turnaround</h3>
                <p className="text-gray-light">Most builds go live in 3–4 weeks. Emergency fixes same-day. You&apos;re not waiting months for a fancy agency.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-white/5 rounded-lg bg-navy-light/50">
              <div className="bg-navy-dark w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center border border-safety-orange text-safety-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3z"/><path d="M3 4h8"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">No Bullshit Pricing</h3>
                <p className="text-gray-light">You get a clear quote upfront. No hidden hourly charges, no surprise fees, no upselling. What we quote is what you pay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview in About */}
      <section className="bg-navy-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 sm:mb-0">Real Examples</h2>
            <Link href="/portfolio" className="text-safety-orange hover:text-orange-light font-semibold transition-colors flex items-center">
              See Full Portfolio <span className="ml-2">→</span>
            </Link>
          </div>
          
          <PortfolioGrid limit={2} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy-dark py-20 lg:py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-4xl text-white mb-4">Let&apos;s Talk About Your Site</h2>
            <p className="text-lg text-gray-light">The best first step is a free conversation. Tell me about your business, and I&apos;ll tell you if I can help.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Facebook */}
            <div className="bg-navy-light p-8 rounded-lg border-t-4 border-[#1877F2] flex flex-col items-center text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#1877F2" className="mb-6"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              <h3 className="font-display font-bold text-xl text-white mb-2">Message me on Facebook</h3>
              <p className="text-sm text-gray-medium mb-6">Fastest response — I check Messenger throughout the day</p>
              <a 
                href="https://m.me/61590923174340" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto"
              >
                Open Messenger
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-navy-light p-8 rounded-lg border-t-4 border-safety-orange flex flex-col items-center text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-safety-orange mb-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <h3 className="font-display font-bold text-xl text-white mb-2">Send me an email</h3>
              <p className="text-sm text-gray-medium mb-6">I respond within 24 hours</p>
              <a 
                href="mailto:contact.arman.r@gmail.com"
                className="w-full bg-transparent border-2 border-safety-orange text-safety-orange hover:bg-safety-orange hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto break-all"
              >
                contact.arman.r@gmail.com
              </a>
            </div>
            
            {/* Form */}
            <div className="bg-navy-light p-8 rounded-lg border border-white/5 shadow-lg lg:col-span-1">
              <div className="flex flex-col items-center text-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <h3 className="font-display font-bold text-xl text-white">Quick message form</h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-1">
            {faqData.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
