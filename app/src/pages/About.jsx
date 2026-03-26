import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const aboutElements = [
  { id: 1, x: "12%", y: "15%", w: "320px", type: "image", content: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800", label: "The Design Studio" },
  { id: 2, x: "55%", y: "8%", w: "400px", type: "text", title: "The Vision", desc: "Founded in 2015, we set out to prove that luxury doesn't have to cost the earth. We bridge the gap between high-end architecture and raw nature." },
  { id: 3, x: "70%", y: "45%", w: "300px", type: "image", content: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800", label: "Biophilic Craft" },
  { id: 4, x: "10%", y: "60%", w: "380px", type: "quote", content: "Design is not just what it looks like; it's how it breathes.", author: "Founding Director" },
  { id: 5, x: "35%", y: "55%", w: "280px", type: "stat", value: "250+", label: "Green Projects Completed" },
  { id: 6, x: "25%", y: "30%", w: "220px", type: "badge", label: "Certified Eco-Partner", icon: "🌱" },
  { id: 7, x: "80%", y: "15%", w: "300px", type: "image", content: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200", label: "Material Sourcing" },
  { id: 8, x: "45%", y: "75%", w: "400px", type: "text", title: "Our Process", desc: "From the first charcoal sketch to the final automated irrigation setup, our process is entirely carbon-neutral and circular." },
  { id: 9, x: "60%", y: "60%", w: "200px", type: "stat", value: "15k+", label: "Trees Planted" },
  { id: 10, x: "5%", y: "10%", w: "200px", type: "image", content: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=800", label: "Raw Textures" }
];

const AboutPage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const storyRef = useRef(null);
  
  // Mouse coordinates for Hero Canvas
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Scroll Progress for Story Parallax
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });
  const storyImgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleMouseMove = (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 10;
    const moveY = (e.clientY - window.innerHeight / 2) / 10;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  return (
    <HelmetProvider>
      <Helmet>
          <title>About Us | Green Decors</title>
          <meta name="description" content="This is a dynamic description for SEO!" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <div className="bg-stone-50 min-h-screen selection:bg-emerald-100 text-stone-900">
      <Navbar />

      {/* 1. INFINITE CANVAS HERO */}
      <section onMouseMove={handleMouseMove} className="relative h-screen w-full flex items-center justify-center overflow-hidden cursor-move">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center bg-white/60 backdrop-blur-3xl p-12 md:p-16 border border-emerald-900/10 shadow-2xl">
            <span className="text-emerald-800 font-bold tracking-[0.6em] uppercase text-[10px] mb-4 block">The Manifesto</span>
            <h1 className="text-7xl md:text-9xl font-serif text-stone-900 leading-none">Green <span className="italic text-emerald-800">Decors</span></h1>
            <p className="text-stone-400 text-[10px] mt-8 uppercase tracking-[0.3em] font-medium">Explore our legacy across the canvas</p>
          </motion.div>
        </div>

        <motion.div style={{ x: springX, y: springY }} className="absolute inset-[-30%] w-[160%] h-[160%] z-0">
          {aboutElements.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              transition={{ delay: item.id * 0.1 }}
              className="absolute group transition-z duration-300"
              style={{ left: item.x, top: item.y, width: item.w, zIndex: hoveredId === item.id ? 40 : 10 }}
            >
              {item.type === "image" && (
                <div className="relative border-[10px] border-white shadow-xl grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                  <img src={item.content} className="w-full h-72 object-cover" alt={item.label} />
                  <div className="absolute -bottom-4 -right-4 bg-emerald-900 px-4 py-2 text-[10px] text-white uppercase tracking-widest font-bold shadow-lg">{item.label}</div>
                </div>
              )}
              {item.type === "text" && (
                <div className="p-10 bg-white border border-stone-200 shadow-lg group-hover:border-emerald-800 transition-all duration-500">
                  <h3 className="text-3xl font-serif italic mb-6 text-emerald-900">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              )}
              {item.type === "quote" && (
                <div className="text-left border-l-4 border-emerald-800 pl-8 py-2">
                  <p className="text-2xl md:text-4xl font-serif text-stone-900 italic leading-tight group-hover:text-emerald-800 transition-colors">"{item.content}"</p>
                  <span className="text-emerald-800 uppercase tracking-widest text-[10px] font-bold mt-6 block">— {item.author}</span>
                </div>
              )}
              {item.type === "stat" && (
                <div className="text-center group-hover:scale-110 transition-transform bg-white/40 p-6 rounded-full backdrop-blur-sm border border-stone-200">
                  <h2 className="text-7xl font-serif text-emerald-900 leading-none mb-2">{item.value}</h2>
                  <p className="text-stone-400 uppercase tracking-[0.2em] text-[10px] font-bold">{item.label}</p>
                </div>
              )}
              {item.type === "badge" && (
                <div className="flex items-center space-x-4 bg-emerald-900 px-6 py-4 shadow-xl -rotate-3 group-hover:rotate-0 transition-transform">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white uppercase tracking-widest text-[10px] font-black">{item.label}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute inset-8 border border-emerald-900/5 pointer-events-none z-[60]"></div>
      </section>

      {/* 2. THE STORY SECTION (New) */}
      <section ref={storyRef} className="py-32 md:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-emerald-800 font-bold tracking-[0.4em] uppercase text-[10px]">The Genesis</span>
                  <div className="h-px w-12 bg-emerald-800/20"></div>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9] mb-10">
                  Rooted in <br /> <span className="italic text-emerald-800">Authenticity.</span>
                </h2>
                <div className="space-y-6 text-stone-500 leading-relaxed text-lg font-light">
                  <p>
                    Green Decors India didn't start in a boardroom. It started in a balcony garden in Bangalore, where we realized that modern interiors were becoming increasingly disconnected from the natural world.
                  </p>
                  <p>
                    What began as a passion for biophilic styling evolved into a mission to redefine sustainable luxury. We spent years scouting for local artisans and sustainable nurseries that shared our vision of a circular design economy.
                  </p>
                  <p>
                    Today, we combine cutting-edge architectural logic with the raw, untamed beauty of nature to create spaces that don't just look alive—they sustain it.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Dramatic Image Composition */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] md:h-[700px]">
              <motion.div style={{ y: storyImgY }} className="absolute right-0 top-0 w-4/5 h-4/5 rounded-sm overflow-hidden shadow-2xl z-10">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" alt="Founder's Work" />
              </motion.div>
              <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="absolute left-0 bottom-0 w-3/5 h-3/5 border-[15px] border-stone-50 shadow-2xl z-20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" className="w-full h-full object-cover" alt="Process Detail" />
              </motion.div>
              <div className="absolute -right-8 bottom-10 bg-emerald-900 text-white p-8 hidden md:block z-30 shadow-xl rotate-90 origin-right uppercase tracking-[0.5em] text-[10px] font-bold">
                Since 2015
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="py-24 px-8 max-w-7xl mx-auto border-t border-stone-100">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-12">
            <div className="aspect-video rounded-sm overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" alt="Studio" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-stone-800 border-b border-stone-200 pb-2">Direct Inquiries</h3>
                <div className="flex items-center space-x-3 text-stone-500 hover:text-emerald-800 transition">
                  <Mail size={18} className="text-emerald-700" /> <span className="text-sm">info@greendecors.in</span>
                </div>
                <div className="flex items-center space-x-3 text-stone-500 hover:text-emerald-800 transition">
                  <Phone size={18} className="text-emerald-700" /> <span className="text-sm">+91 70900 38818</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-stone-800 border-b border-stone-200 pb-2">Visit the Studio</h3>
                <div className="flex items-start space-x-3 text-stone-500 text-sm">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-emerald-700" /> <span>Nehrunagar, Puttur, Karnataka <br /></span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 md:p-12 shadow-sm rounded-sm border border-stone-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Name</label>
                  <input type="text" placeholder="Full Name" className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition text-sm bg-transparent" />
                </div>
                <div className="group flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition text-sm bg-transparent" />
                </div>
              </div>
              <div className="group flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Project Interests</label>
                <select className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition text-stone-500 text-sm bg-transparent appearance-none">
                  <option>Residential Luxury</option>
                  <option>Corporate Spaces</option>
                  <option>Sustainability Consultation</option>
                </select>
              </div>
              <div className="group flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Message</label>
                <textarea rows="4" placeholder="How can we help transform your space?" className="border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition resize-none text-sm bg-transparent"></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full bg-emerald-950 text-white py-5 uppercase text-[11px] tracking-[0.3em] font-bold shadow-xl">
                Send Enquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
    </HelmetProvider>
  );
};

export default AboutPage;