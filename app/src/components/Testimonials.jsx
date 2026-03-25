import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    quote: "Green Decors didn't just design my house; they gave it a soul. The biophilic elements make me feel like I'm living in a resort.",
    name: "Priya Sharma",
    location: "Luxury Penthouse, Bangalore"
  },
  {
    quote: "The attention to detail is unmatched. They managed to bring a forest-like serenity into our modern office space perfectly.",
    name: "Arjun Mehta",
    location: "CEO, TechPark Mumbai"
  },
  {
    quote: "Sustainable, elegant, and timeless. Their team understood our vision for a 'green' home better than anyone else in India.",
    name: "Sneha Kapoor",
    location: "Eco-Villa, Goa"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  return (
    <section className="py-18 bg-stone-50 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-8 text-center relative h-[350px] flex flex-col justify-center">
        
        {/* Navigation Arrows */}
        <button onClick={prevStep} className="absolute left-0 z-10 p-2 text-stone-300 hover:text-emerald-800 transition">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextStep} className="absolute right-0 z-10 p-2 text-stone-300 hover:text-emerald-800 transition">
          <ChevronRight size={32} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="flex justify-center mb-8 text-emerald-800">
              {[...Array(5)].map((_, i) => <span key={i} className="mx-0.5 text-lg">★</span>)}
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif italic leading-snug text-stone-800 min-h-[120px]">
              "{reviews[index].quote}"
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <p className="font-bold tracking-[0.2em] uppercase text-xs text-emerald-900">
                {reviews[index].name}
              </p>
              <p className="text-stone-400 text-sm mt-1">
                {reviews[index].location}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {reviews.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-emerald-800' : 'w-2 bg-stone-300'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;