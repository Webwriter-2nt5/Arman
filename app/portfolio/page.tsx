import PortfolioGrid from '@/components/PortfolioGrid';

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-dark py-20 lg:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Websites I&apos;ve Built</h1>
          <p className="text-xl text-gray-light mb-4">
            Concept builds showcasing design quality across electricians, plumbers, HVAC & landscaping.
          </p>
          <p className="text-sm text-gray-medium italic">
            Click any site below to see details.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="bg-navy-light py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
          
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-medium italic max-w-2xl mx-auto">
              Concept builds created to demonstrate design quality across each niche — not live client accounts. Built for demonstration purposes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
