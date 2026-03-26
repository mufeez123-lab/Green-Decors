const Footer = () => (
  <footer className="bg-emerald-950 text-stone-200 pt-20 pb-10 px-8">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-emerald-900 pb-16">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-serif text-white mb-6">GREEN DECORS</h2>
        <p className="text-emerald-200/60 text-sm leading-relaxed">
          Crafting sustainable luxury interiors across India since 2015.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-medium mb-6">Quick Links</h4>
        <ul className="space-y-4 text-sm text-emerald-200/60">
          <li className="hover:text-white transition cursor-pointer"><a href="/about">About Us</a></li>
          <li className="hover:text-white transition cursor-pointer"><a href="/projects">Projects</a></li>
          <li className="hover:text-white transition cursor-pointer"><a href="/contact">Contact Us</a></li>
     
        </ul>
      </div>

      <div>
        <h4 className="text-white font-medium mb-6">Contact</h4>
        <ul className="space-y-4 text-sm text-emerald-200/60">
          <li>info@greendecors.india</li>
          <li>+91 70900 38818</li>
          <li>Mangalore | Bangalore | Puttur</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-medium mb-6">Stay Inspired</h4>
        <div className="flex border-b border-emerald-800 pb-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-transparent outline-none text-sm w-full placeholder:text-emerald-800"
          />
          <button className="text-xs uppercase tracking-widest font-bold">Join</button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-emerald-700">
      <p>© 2026 Green Decors India. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;