'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 z-50">
            <span className={`font-serif text-2xl font-semibold tracking-tight ${isScrolled ? 'text-teal-950' : 'text-teal-950 lg:text-white'}`}>
              Lumina
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-800 lg:text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#booking"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? 'bg-teal-900 text-white hover:bg-teal-800'
                  : 'bg-white text-teal-900 hover:bg-gray-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <button
              className={`lg:hidden p-2 z-50 ${isScrolled ? 'text-teal-950' : 'text-teal-950 lg:text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-teal-950 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-teal-900 text-white rounded-full font-medium"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
