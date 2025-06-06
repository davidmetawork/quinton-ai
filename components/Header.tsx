"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'University', href: '/university' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon-32x32.png" alt="Quinton" className="w-8 h-8" />
            <span className="text-xl font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Quinton</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  item.name === 'University' 
                    ? "text-gray-600 hover:text-gray-900 transition-colors drop-shadow-[0_0_12px_rgba(79,70,229,0.6)] hover:drop-shadow-[0_0_16px_rgba(79,70,229,0.8)] tracking-wide"
                    : "text-gray-600 hover:text-gray-900 transition-colors"
                }
                style={
                  item.name === 'University' 
                    ? {
                        WebkitTextStroke: '1px rgb(79, 70, 229)',
                        textShadow: '0 0 1px rgb(79, 70, 229)'
                      }
                    : undefined
                }
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
              <Link href="https://dev.quinton.ai" target="_blank" rel="noopener noreferrer">
                Login
              </Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/signup">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    item.name === 'University'
                      ? "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors drop-shadow-[0_0_12px_rgba(79,70,229,0.6)] hover:drop-shadow-[0_0_16px_rgba(79,70,229,0.8)] tracking-wide"
                      : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  }
                  style={
                    item.name === 'University' 
                      ? {
                          WebkitTextStroke: '1px rgb(79, 70, 229)',
                          textShadow: '0 0 1px rgb(79, 70, 229)'
                        }
                      : undefined
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 mb-3" asChild>
                  <Link href="https://dev.quinton.ai" target="_blank" rel="noopener noreferrer">
                    Login
                  </Link>
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/signup">
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