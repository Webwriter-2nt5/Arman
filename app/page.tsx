import Link from 'next/link';
import PortfolioGrid from '@/components/PortfolioGrid';
import Card from '@/components/Card';
import { Globe, Copy, Smartphone, Zap, Search, LayoutTemplate, Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-dark overflow-hidden py-20 lg:py-32 min-h-[500px] flex items-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-safety-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
                More Calls. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange to-orange-light">More Booked Jobs.</span>
              </h1>
              <p className="text-xl text-gray-light mb-8 max-w-xl">
                Websites built specifically for electricians, plumbers, HVAC & landscaping pros. Stop losing jobs to competitors with better sites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://m.me/61590923174340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center bg-safety-orange hover:bg-orange-light text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-safety-orange/20 text-lg"
                >
                  Message Me on Facebook
                </a>
                <Link 
                  href="/portfolio"
                  className="inline-flex justify-center items-center border border-white/20 hover:bg-white/5 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
                >
                  See My Work
                </Link>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
               {/* Visual right side representing 4 niches */}
               <div className="bg-navy-light/50 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center aspect-square shadow-xl backdrop-blur-sm">
                 <Zap size={48} className="text-safety-orange mb-4" />
                 <span className="text-white font-display font-semibold">Electricians</span>
               </div>
               <div className="bg-navy-light/50 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center aspect-square shadow-xl backdrop-blur-sm translate-y-8">
                 <div className="w-12 h-12 border-4 border-safety-orange rounded-full mb-4 opacity-80"></div>
                 <span className="text-white font-display font-semibold">Plumbers</span>
               </div>
               <div className="bg-navy-light/50 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center aspect-square shadow-xl backdrop-blur-sm">
                 <Globe size={48} className="text-safety-orange mb-4 opacity-80" />
                 <span className="text-white font-display font-semibold">HVAC</span>
               </div>
               <div className="bg-navy-light/50 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center aspect-square shadow-xl backdrop-blur-sm translate-y-8">
                 <LayoutTemplate size={48} className="text-safety-orange mb-4 opacity-80" />
                 <span className="text-white font-display font-semibold">Landscapers</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-navy-light py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Why Most Trade Websites Fail</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <Globe className="text-safety-orange mb-6" size={40} />
              <h3 className="font-display font-bold text-xl text-white mb-3">Outdated or Missing</h3>
              <p className="text-gray-light">Your potential customers judge your reliability based on your site. If it looks like it was built in 2010, they&apos;ll call someone else.</p>
            </Card>
            <Card>
              <Copy className="text-safety-orange mb-6" size={40} />
              <h3 className="font-display font-bold text-xl text-white mb-3">Generic Templates</h3>
              <p className="text-gray-light">Using the same builder template as a bakery doesn&apos;t work for a plumber. Your customers need to see your services and service area immediately.</p>
            </Card>
            <Card>
              <Smartphone className="text-safety-orange mb-6" size={40} />
              <h3 className="font-display font-bold text-xl text-white mb-3">Slow & Mobile-Unfriendly</h3>
              <p className="text-gray-light">Most emergency calls come from a smartphone. If your site takes 5 seconds to load or requires zooming in to read, you&apos;ve lost the lead.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-navy-dark py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Built for Busy Trade Owners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-light border-t-4 border-safety-orange rounded-b-lg p-8 shadow-lg">
              <h3 className="font-display font-bold text-xl text-white mb-3">Mobile-First Design</h3>
              <p className="text-gray-light">I design for the phone first, ensuring your phone number and contact forms are always accessible with one tap.</p>
            </div>
            <div className="bg-navy-light border-t-4 border-safety-orange rounded-b-lg p-8 shadow-lg">
              <h3 className="font-display font-bold text-xl text-white mb-3">Clear Call CTAs</h3>
              <p className="text-gray-light">No hiding your contact info. I strategically place click-to-call buttons so customers can reach you instantly when they need help.</p>
            </div>
            <div className="bg-navy-light border-t-4 border-safety-orange rounded-b-lg p-8 shadow-lg">
              <h3 className="font-display font-bold text-xl text-white mb-3">Local SEO Basics</h3>
              <p className="text-gray-light">Your site is built to be found in your service area. I include proper semantic tags and schema to help Google understand where you work.</p>
            </div>
            <div className="bg-navy-light border-t-4 border-safety-orange rounded-b-lg p-8 shadow-lg">
              <h3 className="font-display font-bold text-xl text-white mb-3">Fast Performance</h3>
              <p className="text-gray-light">Next.js architecture guarantees blazing-fast load times, keeping potential customers on your site and improving your search rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-navy-light py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Recent Work</h2>
            <Link href="/portfolio" className="hidden md:inline-flex text-white hover:text-safety-orange font-semibold transition-colors items-center">
              View All Work <span className="ml-2">→</span>
            </Link>
          </div>
          
          <PortfolioGrid limit={3} />
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/portfolio" className="inline-flex text-white hover:text-safety-orange font-semibold transition-colors items-center">
              View All Work <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-safety-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">Ready to get started?</h2>
          <a 
            href="https://m.me/61590923174340" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy-dark hover:bg-navy-dark hover:text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-xl"
          >
            Message Me on Facebook
          </a>
        </div>
      </section>
    </>
  );
}
