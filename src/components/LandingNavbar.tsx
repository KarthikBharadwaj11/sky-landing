'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useScrollAnimations';

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();
  const pathname = usePathname();

  const navLinks = [
    { href: '/copy-trading', label: 'Copy Trading' },
    { href: '/paper-trading', label: 'Paper Trading' },
    { href: '/about', label: 'About' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className={`navbar-glass rounded-2xl shadow-2xl ${isScrolled ? 'scrolled' : ''}`}>
        <div className="px-6 py-3">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="Sky Logo"
                width={100}
                height={35}
                className="object-contain"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-col space-y-3 pb-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-link px-4 py-3 text-left ${pathname === link.href ? 'nav-link-active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
