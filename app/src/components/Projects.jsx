import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const projects = [
  { id: 1, title: 'The Emerald Villa', category: 'Residential', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Organic Workspace', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Sage Kitchen', category: 'Kitchen', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Nordic Living', category: 'Residential', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Azure Lounge', category: 'Commercial', img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Green Oasis', category: 'Residential', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Modern Zen', category: 'Studio', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800' },
];

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const scrollWidth = carousel.current.scrollWidth;
    const offsetWidth = carousel.current.offsetWidth;
    const totalScroll = scrollWidth - offsetWidth;
    setWidth(totalScroll);

    // Initial Auto-play animation
    controls.start({
      x: -totalScroll,
      transition: {
        duration: 30, // Adjust this for speed (higher = slower)
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror", // Swings back and forth smoothly
      },
    });
  }, [controls]);

  // Pause animation on hover or drag
  const pauseAnimation = () => controls.stop();
  
  // Resume animation when leaving
  const resumeAnimation = () => {
    controls.start({
      x: -width,
      transition: { duration: 30, ease: "linear", repeat: Infinity, repeatType: "mirror" }
    });
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-serif">Recent Works</h2>
          <p className="text-gray-500 mt-2 text-lg italic">Our signature designs in motion</p>
        </div>
        <div className="hidden md:block text-emerald-900 font-semibold border-b-2 border-emerald-900 pb-1 cursor-pointer hover:text-emerald-700 transition">
          View All Projects
        </div>
      </div>

      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing"
        onHoverStart={pauseAnimation}
        onHoverEnd={resumeAnimation}
        onDragStart={pauseAnimation}
      >
        <motion.div 
          drag="x" 
          animate={controls}
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-8 px-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="min-w-[300px] md:min-w-[450px] group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={project.img} 
                  draggable="false"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition duration-[1.5s] ease-out" 
                  alt={project.title} 
                />
              </div>
              
              <div className="flex justify-between items-start pr-4">
                <div>
                  <span className="text-[10px] uppercase text-emerald-700 font-bold tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif mt-1 group-hover:text-emerald-900 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <motion.div 
                  initial={{ width: 20 }}
                  whileHover={{ width: 40 }}
                  className="h-px bg-emerald-800 mt-6 hidden md:block"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;