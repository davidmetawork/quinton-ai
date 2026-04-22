import Link from 'next/link'
import { QuintonMark } from '@/components/product-mock/QuintonMark'

export default function Footer() {
  const productLinks = [
    { name: 'Features', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'University', href: '/university' },
    { name: 'Integrations', href: '/university/docs/integrations/crm-setup' },
  ]

  const comparisonLinks = [
    { name: 'vs Apollo', href: '/about' },
    { name: 'vs Instantly', href: '/about' },
    { name: 'vs Smartlead', href: '/about' },
  ]

  const resourceLinks = [
    { name: 'Documentation', href: '/university/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Getting Started', href: '/university/docs/getting-started/quick-start' },
    { name: 'Video Tutorials', href: '/university/videos' },
  ]

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Status', href: '/status' },
    { name: 'Community', href: 'https://www.facebook.com/groups/quintonai' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="bg-cream-50 text-ink-700 border-t border-ink-100">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 mb-4 group w-fit">
              <QuintonMark className="w-5 h-5" />
              <span className="text-xl font-semibold tracking-tight text-ink-900">
                Quinton
              </span>
            </Link>
            <p className="text-ink-500 mb-6 max-w-sm text-sm leading-relaxed">
              The AI Coworker built for recruiting agencies. Automate prospecting, personalize
              outreach, and close more placements.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/quintonai" target="_blank" rel="noopener noreferrer" className="text-ink-300 hover:text-ink-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/quintonai" target="_blank" rel="noopener noreferrer" className="text-ink-300 hover:text-ink-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.facebook.com/groups/quintonai" target="_blank" rel="noopener noreferrer" className="text-ink-300 hover:text-ink-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Compare" links={comparisonLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="border-t border-ink-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-ink-500">
              © 2025 Quinton AI Corp. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-ink-500 hover:text-ink-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-sm text-ink-900">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-ink-500 hover:text-ink-900 transition-colors text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
