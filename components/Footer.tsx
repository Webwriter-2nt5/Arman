import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="font-display font-bold text-2xl text-white inline-block">
              Arman Rahman
            </Link>
            <p className="text-gray-light max-w-sm">
              More Calls. More Booked Jobs.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-light hover:text-white transition-colors">Services & Pricing</Link></li>
              <li><Link href="/portfolio" className="text-gray-light hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-light hover:text-white transition-colors">About & Contact</Link></li>
              <li><Link href="/about" className="text-gray-light hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact.arman.r@gmail.com" className="text-gray-light hover:text-white transition-colors">
                  contact.arman.r@gmail.com
                </a>
              </li>
              <li>
                <a href="https://m.me/61590923174340" target="_blank" rel="noopener noreferrer" className="text-safety-orange hover:text-orange-light transition-colors font-medium">
                  Message on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-sm text-gray-medium space-y-2">
          <p>Remote service for trade businesses across TX, NC, FL, TN, OH, IN</p>
          <p>© 2026 Arman Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
