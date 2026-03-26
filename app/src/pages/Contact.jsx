import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ProjectsPage = () => {
  return (
      <HelmetProvider>
      <Helmet>
          <title>Contact Us | Green Decors</title>
          <meta name="description" content="This is a dynamic description for SEO!" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <div className="bg-stone-50 min-h-screen">
      <Navbar />
      
      {/* 1. Header Section (Top) */}
      <header className="relative pt-40 pb-32 px-8 text-center overflow-hidden min-h-[60vh] flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" 
            alt="Luxury Interior Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 font-bold tracking-[0.4em] uppercase text-xs drop-shadow-md"
          >
            Connect With Us
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif mt-6 text-white leading-tight"
          >
            Start Your <span className="italic text-emerald-200">Journey</span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-emerald-500/50 mx-auto mt-8"
          />
        </div>
      </header>

      {/* 2. Contact Form & Info Section (Replaced Grid) */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info & Studio Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="aspect-video rounded-sm overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" 
                alt="Green Decors Studio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-stone-800 border-b border-stone-200 pb-2">Direct Inquiries</h3>
                <div className="flex items-center space-x-3 text-stone-500 hover:text-emerald-800 transition cursor-pointer">
                  <Mail size={18} className="text-emerald-700" />
                  <span className="text-sm">hello@greendecors.in</span>
                </div>
                <div className="flex items-center space-x-3 text-stone-500 hover:text-emerald-800 transition cursor-pointer">
                  <Phone size={18} className="text-emerald-700" />
                  <span className="text-sm">+91 70900 38818</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-stone-800 border-b border-stone-200 pb-2">Visit the Studio</h3>
                <div className="flex items-start space-x-3 text-stone-500 text-sm">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-emerald-700" />
                  <span>102, Green Avenue, Indiranagar, <br />Bangalore - 560038</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: High-End Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-sm rounded-sm border border-stone-100"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-emerald-800 transition">Your Name</label>
                  <input type="text" placeholder="Full Name" className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition bg-transparent text-sm" />
                </div>
                <div className="group flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-emerald-800 transition">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition bg-transparent text-sm" />
                </div>
              </div>

              <div className="group flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-emerald-800 transition">Project Interests</label>
                <select className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition bg-transparent text-stone-500 text-sm appearance-none">
                  <option>Residential Luxury</option>
                  <option>Corporate Spaces</option>
                  <option>Kitchen & Bath Remodel</option>
                  <option>Sustainability Consultation</option>
                </select>
              </div>

              <div className="group flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-emerald-800 transition">Message</label>
                <textarea rows="4" placeholder="How can we help transform your space?" className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition bg-transparent resize-none text-sm"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-emerald-950 text-white py-5 uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-emerald-900 transition shadow-xl"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>


    </div>
      </HelmetProvider>
  );
};

export default ProjectsPage;