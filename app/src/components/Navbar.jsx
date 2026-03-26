import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// ... (Previous imports remain the same)

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] flex justify-center transition-all duration-700 pointer-events-none">
      
      <div className={`
        flex items-center justify-between transition-all duration-500 pointer-events-auto
        ${isScrolled 
          ? 'mt-6 w-[92%] md:w-[85%] max-w-6xl rounded-full bg-gray-100 backdrop-blur-xl px-6 py-3 shadow-2xl' 
          : 'mt-0 w-full px-8 md:px-16 py-8 bg-transparent'
        }
      `}>
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center group relative z-[110]">
          <img 
            src="/greendecors.png" 
            alt="Logo" 
            className={`transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'h-8 opacity-90' : 'h-12'}`} 
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
                className={`relative px-5 py-2 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-300
                  ${isScrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-stone-600 hover:text-emerald-900'}
                `}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className={`absolute bottom-1 left-5 right-5 h-[1.5px] ${isScrolled ? 'bg-emerald-800' : 'bg-emerald-800'}`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* 3. CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="/profile.pdf"
            target="_blank"
            className={`hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-bold  transition-all
              ${isScrolled 
                ? 'bg-[#96ba8c]  text-white' 
                : 'bg-emerald-950  text-white hover:bg-emerald-800'
              }
            `}
          >
            <span>Company Profile</span>
            <ArrowUpRight size={14} />
          </motion.a>

          {/* MOBILE TOGGLE - High Z-Index to stay above overlay */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-all duration-500 z-[120] relative rounded-full ${
              isMobileMenuOpen ? 'text-white bg-white/10' : isScrolled ? 'text-stone-700' : 'text-stone-900'
            } md:hidden`}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* 4. Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 h-screen bg-[#002e22] z-[100] flex flex-col p-12 pointer-events-auto"
          >
            <div className="mt-24 flex flex-col space-y-8">
              <p className="text-emerald-500/40 text-[10px] uppercase tracking-[0.5em] mb-2 font-bold">Navigation</p>
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={link.name}
                >
                  <Link 
                    to={link.href}
                    className="text-5xl font-serif text-stone-100 hover:text-[#96ba8c] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto border-t border-white/10 pt-8 flex flex-col space-y-6">
              <div>
                <p className="text-emerald-500/50 text-[10px] uppercase tracking-widest mb-2">Inquiries</p>
                <p className="text-stone-300 text-lg">info@greendecors.india</p>
              </div>
              <div className="flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-400">
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">Pinterest</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;