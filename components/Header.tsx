"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const signupUrl = 'https://dev.quinton.ai/sign-up'

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'University', href: '/university' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-[#0a0a0f] rounded-full p-1 border border-white/10">
                <Sparkles className="w-5 h-5 text-violet-400" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Quinton<span className="text-violet-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5" asChild>
              <Link href="https://dev.quinton.ai" target="_blank" rel="noopener noreferrer">
                Login
              </Link>
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 font-medium" asChild>
              <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-[#0a0a0f] border-t border-white/5">
              <Link
                href="/"
                className="block px-3 py-3 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-4 space-y-3">
                <Button variant="outline" className="w-full border-white/10 text-gray-300 hover:bg-white/5" asChild>
                  <Link href="https://dev.quinton.ai" target="_blank" rel="noopener noreferrer">
                    Login
                  </Link>
                </Button>
                <Button className="w-full bg-white text-black hover:bg-gray-100" asChild>
                  <Link href={signupUrl} target="_blank" rel="noopener noreferrer">
                    Sign Up
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
