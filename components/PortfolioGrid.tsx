import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

interface PortfolioGridProps {
  limit?: number;
}

export default function PortfolioGrid({ limit }: PortfolioGridProps) {
  const items = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <div className={`grid gap-8 ${limit === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
      {items.map((item) => (
        <div key={item.slug} className="bg-navy-dark rounded-lg overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-xl hover:border-safety-orange h-full flex flex-col relative">
          <div className="relative h-[400px] overflow-hidden bg-white group">
             {/* Use pointer-events-none so we can click the link overlay if we want, but user asked for the iframe. Wait, actually if they want to interact with the iframe, then making it un-clickable is bad. But it's a portfolio card. The link at the bottom is for the case study. */}
            <div className="absolute inset-0 z-10 hidden sm:block pointer-events-none"></div> 
            <iframe
              src={item.liveUrl}
              width="100%"
              height="100%"
              className="border-b-[1px] border-safety-orange bg-white scale-[0.6] origin-top-left w-[166.66%] h-[166.66%]" 
              title={`${item.title} website preview`}
            ></iframe>
            <div className="absolute top-4 left-4 bg-safety-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md z-20">
              {item.niche}
            </div>
            {/* Overlay link for clicking through to the case study easily from the image area */}
            <Link href={`/portfolio/${item.slug}`} className="absolute inset-0 z-20" aria-label={`View Case Study for ${item.title}`}></Link>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-display font-bold text-2xl text-white mb-2">{item.title}</h3>
            <p className="text-gray-light text-base mb-4 font-medium">{item.tagline}</p>
            <p className="text-gray-medium text-sm mb-6 flex-grow">{item.description}</p>
            <Link href={`/portfolio/${item.slug}`} className="text-safety-orange font-semibold text-sm hover:underline inline-flex items-center">
              View Case Study <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
