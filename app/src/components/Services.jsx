import { motion } from 'framer-motion';
import { Leaf, Home, Layout, PenTool, ArrowRight } from 'lucide-react';

const services = [
  { 
    id: "01",
    title: "Expert Consultation", 
    icon: <PenTool size={20} />, 
    desc: "Personalized deep-dives into color psychology, spatial flow, and material selection to ground your vision.",
    align: "start" 
  },
  { 
    id: "02",
    title: "Biophilic Eco-Design", 
    icon: <Leaf size={20} />, 
    desc: "Integrating living systems and sustainable materials that improve air quality and mental well-being.",
    align: "end" 
  },
  { 
    id: "03",
    title: "Bespoke Home Styling", 
    icon: <Home size={20} />, 
    desc: "Curating furniture, art, and finishing touches that tell your unique story through texture and light.",
    align: "start" 
  },
  { 
    id: "04",
    title: "Turnkey Solutions", 
    icon: <Layout size={20} />, 
    desc: "Comprehensive project management from the first blueprint to the final leaf on the planter.",
    align: "end" 
  }
];

const Services = () => (
  <section className="py-32 bg-stone-50 px-6 md:px-8">
    <div className="max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-800 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
          >
            Capabilities
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">
            How we bring <br /> 
            <span className="italic text-emerald-800">Nature Home.</span>
          </h2>
        </div>
        <p className="text-stone-500 text-lg max-w-xs pb-2 border-l-2 border-emerald-800 pl-6">
          Our services are designed to be as organic and adaptive as the spaces we create.
        </p>
      </div>

      {/* Asymmetrical Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-32">
        {services.map((s, idx) => (
          <motion.div 
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className={`relative group flex flex-col ${s.align === 'end' ? 'md:mt-24' : ''}`}
          >
            {/* Background Number Watermark */}
            <span className="absolute -top-12 -left-6 text-8xl font-serif text-stone-200/60 pointer-events-none group-hover:text-emerald-100 transition-colors duration-500">
              {s.id}
            </span>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full text-emerald-800 shadow-sm mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              
              <h4 className="text-3xl font-serif text-stone-900 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {s.title}
              </h4>
              
              <p className="text-stone-500 leading-relaxed mb-8 max-w-sm">
                {s.desc}
              </p>

              <button className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-900 group-hover:space-x-5 transition-all">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Subtle decorative line */}
            <div className="absolute -bottom-8 left-0 w-0 h-px bg-emerald-800 group-hover:w-full transition-all duration-700"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;