import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Optimized Parallax: Reduced movement for mobile to prevent layout breaking
  const y1 = useTransform(scrollY, [0, 500], [0, -50]); // Primary image
  const y2 = useTransform(scrollY, [0, 500], [0, -120]); // Secondary image
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-stone-100 overflow-hidden pt-24 md:pt-32 pb-12"
    >
      {/* Background Watermark: Hidden or smaller on mobile for clarity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
        <h1 className="text-[25vw] md:text-[20vw] font-serif text-stone-200/60 leading-none uppercase tracking-tighter opacity-40 md:opacity-100">
          Evergreen
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
        
        {/* Typography Section: Full width on mobile, 5-cols on desktop */}
        <div className="order-2 md:order-1 col-span-1 md:col-span-5 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-emerald-800"></div>
              <span className="text-emerald-900 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">
                Est. 2015 / India
              </span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
              Design that <br /> 
              <span className="italic font-light text-emerald-800">Breathes.</span>
            </h2>
            
            <p className="text-stone-500 text-base md:text-lg max-w-sm mb-8 md:mb-10 leading-relaxed">
              We don't just fill rooms; we cultivate atmospheres where luxury meets the raw soul of nature.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="group relative py-3 md:py-4 px-6 md:px-8 overflow-hidden bg-stone-900 text-white transition-all">
                <span className="relative z-10 uppercase tracking-widest text-[10px] md:text-xs font-bold group-hover:text-stone-900 transition-colors duration-300">
                  Discuss Project
                </span>
                <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                Scroll to explore <br className="hidden md:block" /> our works
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Grid Section: 1st on mobile to show visuals early, 7-cols on desktop */}
        <div className="order-1 md:order-2 col-span-1 md:col-span-7 relative h-[400px] sm:h-[500px] md:h-[700px] w-full">
          
          {/* Main Large Image */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute right-0 top-0 w-[85%] h-[85%] md:w-4/5 md:h-4/5 rounded-sm overflow-hidden shadow-xl md:shadow-2xl z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" 
              alt="Main Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlapping Small Image */}
          <motion.div 
            style={{ y: y2, rotate: rotate }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute left-0 bottom-4 md:bottom-10 w-1/2 h-1/2 border-[8px] md:border-[12px] border-stone-100 shadow-lg md:shadow-xl z-30 rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=1000" 
              alt="Detail Shot" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Badge: Hidden on very small screens, visible from 'sm' upwards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 md:-right-4 bottom-16 md:bottom-20 bg-[#96ba8c] text-white p-4 md:p-8 z-40 hidden sm:block shadow-xl"
          >
            <p className="text-xl md:text-3xl font-serif italic">100%</p>
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-70">Organic Materials</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;