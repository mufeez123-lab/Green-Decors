import React, { useState, useEffect } from 'react';
import { User, Menu, FileText, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Crucial for SPAs
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white/70 backdrop-blur-xl shadow-sm' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12">
        
        {/* 1. Logo Section */}
        <Link to="/"> {/* Use Link here to prevent refresh */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group cursor-pointer"
          >
            <h1 className="text-xl md:text-2xl font-serif tracking-tighter text-stone-900 group-hover:text-emerald-900 transition-colors">
              GREEN <span className="italic font-light">DECORS</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-800 group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        </Link>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {/* CHANGED FROM <a> TO <Link> */}
                <Link 
                  to={link.href} 
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 hover:text-emerald-900 transition-colors"
                >
                  {link.name}
                </Link>
                <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-1 group-hover:left-1/2"></span>
              </li>
            ))}
          </ul>

          {/* 3. Company Profile PDF Button */}
          <motion.a
            href="/profile.pdf" // Ensure this file is in your 'public' folder
            target="_blank"
            rel="noopener noreferrer"
            download // Forces download in most browsers
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-emerald-900 text-white px-6 py-3 rounded-full shadow-lg shadow-emerald-900/20 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <FileText size={16} className="relative z-10 text-emerald-200" />
            <span className="relative z-10 text-[9px] uppercase tracking-widest font-black">
              Company Profile
            </span>
          </motion.a>
        </div>

        {/* 4. Utility Icons */}
        <div className="flex items-center space-x-6">
          <button className="hidden md:block p-2 text-stone-400 hover:text-emerald-900 transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-900 z-[110]"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 h-screen bg-white z-[90] flex flex-col justify-center items-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-4xl font-serif text-stone-900 hover:text-emerald-800 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/profile.pdf" 
              target="_blank"
              className="mt-8 bg-emerald-900 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl"
            >
              Download Profile PDF
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;