'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed w-full z-50 border-b border-white/10 transition-all duration-300 nav-animate",
        isSticky
          ? "bg-background/75 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-background/50 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              &lt;Malu's/&gt;
            </span>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {link.label}
                </a>
              ))}
              <Button asChild variant="outline" className="bg-primary/10 text-primary border-primary/50 hover:bg-primary hover:text-card transition-all rounded-full text-sm font-medium">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              {isMenuOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-card border-b border-white/10 absolute w-full", { "hidden": !isMenuOpen })}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-white/5">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-white/5">
            Contact
          </a>
        </div>
      </div>
      <style>{`
        .nav-animate {
          animation: navIn .35s ease;
        }
        @keyframes navIn {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-animate { animation: none; }
        }
      `}</style>
    </header>
  );
}
