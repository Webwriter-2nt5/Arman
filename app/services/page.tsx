import Link from 'next/link';
import Card from '@/components/Card';
import Accordion from '@/components/Accordion';
import faqData from '@/data/faq.json';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-dark py-20 lg:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">What&apos;s Included in a Site</h1>
          <p className="text-xl text-gray-light">Everything a trade business needs to start getting calls online</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-navy-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg text-gray-light leading-relaxed">
            <p>
              I don&apos;t do complex, bloated websites that take 6 months to build. A standard build takes about <strong className="text-white">2 to 4 weeks</strong> depending on the size of the site.
            </p>
            <div className="w-12 h-1 bg-safety-orange rounded"></div>
            <p>
              The process is simple: we start with a conversation, I build a mockup of your homepage so you can see exactly what you&apos;re getting, and once you approve it, we move into the full build.
            </p>
            <div className="w-12 h-1 bg-safety-orange rounded"></div>
            <p>
              Every site comes with post-launch support to ensure everything runs smoothly. After the initial period, you can choose to maintain it yourself or have me handle updates for you.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-navy-dark py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Transparent Pricing</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="flex flex-col h-full border border-white/10">
              <div className="mb-4">
                <span className="inline-block bg-white/10 text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded mb-4">
                  Best for Single Page
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Starter</h3>
                <p className="text-3xl font-bold text-safety-orange">Starting at $250</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-gray-light">
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> 1-page website (Home with embedded contact)</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Mobile-optimized design</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Contact form + Messenger integration</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> 1 round of revisions</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Basic launch support</li>
              </ul>
              <a href="https://m.me/61590923174340" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-safety-orange hover:bg-orange-light text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </a>
            </Card>

            {/* Growth */}
            <div className="bg-navy-light rounded-lg p-6 shadow-2xl border-2 border-safety-orange flex flex-col h-full relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-safety-orange text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                Most Popular
              </div>
              <div className="mb-4 mt-2">
                <h3 className="font-display font-bold text-2xl text-white mb-2">Growth</h3>
                <p className="text-4xl font-bold text-safety-orange">Starting at $550</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-gray-light">
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Multi-page site (Home, Services, Portfolio, Contact)</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Local SEO setup (Google My Business basics, keywords)</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Service-area map</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> 2 rounds of revisions</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Embedded portfolio/before-after gallery</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> 30-day post-launch support</li>
              </ul>
              <a href="https://m.me/61590923174340" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-safety-orange hover:bg-orange-light text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg">
                Get Started
              </a>
            </div>

            {/* Custom */}
            <Card className="flex flex-col h-full border border-white/10">
              <div className="mb-4">
                <span className="inline-block bg-white/10 text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded mb-4">
                  Enterprise/Large
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Custom</h3>
                <p className="text-3xl font-bold text-safety-orange">Custom Quote</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-gray-light">
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Larger builds (5+ pages, complex features)</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Ongoing maintenance retainer</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Copywriting/SEO content help</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Advanced analytics integration</li>
                <li className="flex items-start"><span className="text-safety-orange mr-2">✓</span> Scaling/optimization support</li>
              </ul>
              <a href="https://m.me/61590923174340" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-transparent border-2 border-safety-orange text-safety-orange hover:bg-safety-orange hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Message Me to Discuss
              </a>
            </Card>
          </div>
          
          <div className="mt-12 text-center text-gray-medium text-sm max-w-2xl mx-auto">
            <p>No hidden fees. Prices shown are starting points — final quote depends on scope. All sites include 6 months free hosting + 1-year domain.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy-light py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Common Questions</h2>
          </div>
          <div className="space-y-1">
            {faqData.slice(0, 5).map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-safety-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">Ready to talk about your site?</h2>
          <a 
            href="https://m.me/61590923174340" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-navy-dark text-white hover:bg-white hover:text-navy-dark font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-xl"
          >
            Message Me on Facebook
          </a>
        </div>
      </section>
    </>
  );
}
