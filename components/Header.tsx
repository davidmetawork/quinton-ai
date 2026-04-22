"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { QuintonMark } from '@/components/product-mock/QuintonMark'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigation = [
    { name: 'Product', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'University', href: '/university' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/80 backdrop-blur-xl border-b border-ink-100/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <QuintonMark className="w-5 h-5" />
            <span className="text-[19px] font-semibold tracking-tight text-ink-900">
              Quinton
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ink-700 hover:text-ink-900 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="https://dev.quinton.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-700 hover:text-ink-900 px-3 py-2"
            >
              Login
            </Link>
            <Button
              className="bg-ink-900 text-cream-100 hover:bg-ink-700 h-9 px-4 rounded-full font-medium"
              asChild
            >
              <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                Get started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ink-700 hover:text-ink-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-cream-100 border-t border-ink-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-ink-700 hover:text-ink-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-ink-100 text-ink-700 hover:bg-cream-200"
                  asChild
                >
                  <Link
                    href="https://dev.quinton.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </Link>
                </Button>
                <Button className="w-full bg-ink-900 text-cream-100 hover:bg-ink-700" asChild>
                  <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                    Get started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
