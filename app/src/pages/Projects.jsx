import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const allProjects = [
  { id: 1, title: 'The Emerald Villa', category: 'Residential', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000' },
  { id: 2, title: 'Organic Workspace', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000' },
  { id: 3, title: 'Sage Kitchen', category: 'Kitchen', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000' },
  { id: 4, title: 'Urban Jungle Loft', category: 'Residential', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000' },
  { id: 5, title: 'Biophilic Cafe', category: 'Commercial', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000' },
  { id: 6, title: 'Minimalist Pantry', category: 'Kitchen', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000' },
];

const categories = ['All', 'Residential', 'Commercial', 'Kitchen'];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
      <HelmetProvider>
      <Helmet>
          <title>Projects | Green Decors</title>
          <meta name="description" content="This is a dynamic description for SEO!" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <div className="bg-stone-50 min-h-screen">

      
      {/* Header Section */}
    <header className="relative pt-40 pb-32 px-8 text-center overflow-hidden min-h-[60vh] flex flex-col justify-center items-center">
  {/* Background Image Wrapper */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" 
      alt="Luxury Interior Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark/Green Gradient Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/40 to-stone-50"></div>
  </div>

  {/* Content (Z-index ensures text is above image) */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-emerald-400 font-bold tracking-[0.4em] uppercase text-xs drop-shadow-md"
    >
      Our Portfolio
    </motion.span>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-8xl font-serif mt-6 text-white leading-tight"
    >
      Crafted <span className="italic text-emerald-200">Spaces</span>
    </motion.h1>
    
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: 100 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="h-px bg-emerald-500/50 mx-auto mt-8"
    />
  </div>
</header>

      {/* Filter Bar */}
      <div className="flex justify-center space-x-6 md:space-x-12 mb-16 px-8 py-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm uppercase tracking-widest transition-all pb-2 border-b-2 ${
              filter === cat ? 'border-emerald-800 text-emerald-900 font-bold' : 'border-transparent text-stone-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 uppercase text-xs tracking-widest">View Case Study</span>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-emerald-700 text-[10px] uppercase font-bold tracking-widest mb-1">{project.category}</p>
                  <h3 className="text-xl font-serif text-stone-800">{project.title}</h3>
                </div>
                <div className="h-px w-8 bg-stone-300 group-hover:w-16 group-hover:bg-emerald-800 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
         </HelmetProvider>
  );
};

export default ProjectsPage;