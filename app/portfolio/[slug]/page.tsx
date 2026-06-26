import Link from 'next/link';
import { notFound } from 'next/navigation';
import portfolioData from '@/data/portfolio.json';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-dark py-20 lg:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <span className="inline-block bg-safety-orange text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md mb-6">
            {project.niche}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-light">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="bg-navy-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-8">Live Website Preview</h2>
          <div className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl relative overflow-hidden bg-white">
             <div className="bg-navy-dark h-8 w-full border-b border-safety-orange flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
             </div>
            <iframe 
              src={project.liveUrl} 
              width="100%" 
              height="600" 
              className="w-full border-2 border-safety-orange bg-white block"
              title={`${project.title} live website preview`}
            ></iframe>
          </div>
          <p className="text-sm text-gray-medium mt-4">
            Click inside the preview above to explore the full website. You can interact with it, click links, and scroll pages.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-gray-light">
              <h2 className="font-display font-bold text-2xl text-white mb-4">Project Overview</h2>
              <p>{project.description}</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-white/5 space-y-4">
              <div>
                <span className="block text-sm text-gray-medium mb-1">Pages</span>
                <span className="font-bold text-white text-xl">{project.pages}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-medium mb-1">Build Time</span>
                <span className="font-bold text-white text-xl">{project.buildTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="bg-navy-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-safety-orange mr-4 inline-block"></span>
                The Challenge
              </h2>
              <p className="text-gray-light text-lg leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-safety-orange mr-4 inline-block"></span>
                The Solution
              </h2>
              <p className="text-gray-light text-lg leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">What This Site Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-navy-light p-6 rounded-lg border-l-2 border-safety-orange">
                <span className="text-safety-orange font-bold text-xl mb-2 block">0{index + 1}</span>
                <h3 className="font-bold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Link */}
      <section className="bg-navy-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-navy-dark p-12 rounded-xl shadow-2xl border border-safety-orange/30">
          <h2 className="font-display font-bold text-3xl text-white mb-4">See It Live</h2>
          <p className="text-gray-light mb-8 text-lg">You can visit the live site and explore it yourself. This is a concept build created for demonstration.</p>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-safety-orange hover:bg-orange-light text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Visit {project.title} <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-safety-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">Want a site like this for your business?</h2>
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

      {/* Footer Nav */}
      <div className="bg-navy-dark py-8 text-center border-t border-white/5">
        <Link href="/portfolio" className="text-safety-orange hover:text-orange-light transition-colors font-semibold">
          ← Back to All Projects
        </Link>
      </div>
    </>
  );
}
