import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] flex justify-center transition-all duration-700 pointer-events-none">
      {/* 
          Main Container: 
          Transitions from wide/transparent to a narrow floating "Island" on scroll.
      */}
      <div className={`
        flex items-center justify-between transition-all duration-500 pointer-events-auto
        ${isScrolled 
          ? 'mt-6 w-[92%] md:w-[85%] max-w-6xl rounded-full bg-[#005e44] backdrop-blur-xl  px-6 py-3 shadow-2xl shadow-emerald-950/20' 
          : 'mt-0 w-full px-8 md:px-16 py-8 bg-transparent'
        }
      `}>
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/greendecors.png" 
            alt="Logo" 
            className={`transition-all duration-500 ${isScrolled ? 'h-8  opacity-90' : 'h-12'}`} 
          />
        </Link>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`
                  relative px-5 py-2 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-300
                  ${isScrolled ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:text-emerald-900'}
                `}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className={`absolute bottom-1 left-5 right-5 h-[1.5px] ${isScrolled ? 'bg-emerald-400' : 'bg-emerald-800'}`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* 3. CTA & Menu */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="/profile.pdf"
            target="_blank"
            className={`
              hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-bold transition-all duration-300 border
              ${isScrolled 
                ? 'bg-[#96ba8c] border-emerald-900 text-white hover:bg-[] hover:border-white' 
                : 'bg-emerald-950 border-emerald-900 text-white hover:bg-emerald-800'
              }
            `}
          >
            <span>Company Profile</span>
            <ArrowUpRight size={14} />
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${isScrolled ? 'text-white' : 'text-stone-900'} md:hidden`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 h-screen bg-emerald-950 z-[90] flex flex-col p-12 pointer-events-auto"
          >
            <div className="mt-20 flex flex-col space-y-6">
              <p className="text-emerald-500/50 text-[10px] uppercase tracking-[0.5em] mb-4">Menu</p>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-5xl font-serif text-stone-100 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto border-t border-emerald-900 pt-8 flex flex-col space-y-4">
              <p className="text-stone-400 text-sm">Inquiry: info@greendecors.india</p>
              <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-emerald-500">
                <a href="#">Instagram</a>
                <a href="#">Pinterest</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;