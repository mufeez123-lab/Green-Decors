const Footer = () => (
  <footer className="bg-[#96ba8c] text-emerald-950 pt-20 pb-10 px-8 border-t border-emerald-800/10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-emerald-900/20 pb-16">
      
      {/* 1. Brand Section */}
      <div className="md:col-span-1">
        <img src="/greendecors.png" alt="Green Decors" className="h-20 mb-6 object-contain" />
        <p className="text-emerald-900/70 text-sm leading-relaxed max-w-xs">
          Crafting sustainable luxury interiors across India since 2015.
        </p>
      </div>
      
      {/* 2. Quick Links */}
      <div>
        <h4 className="text-emerald-950 font-bold text-xs uppercase tracking-widest mb-8">Quick Links</h4>
        <ul className="space-y-4 text-sm text-emerald-900/80">
          <li className="hover:text-white transition-colors cursor-pointer"><a href="/about">About Us</a></li>
          <li className="hover:text-white transition-colors cursor-pointer"><a href="/projects">Projects</a></li>
          <li className="hover:text-white transition-colors cursor-pointer"><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* 3. Contact Details */}
      <div>
        <h4 className="text-emerald-950 font-bold text-xs uppercase tracking-widest mb-8">Contact</h4>
        <ul className="space-y-4 text-sm text-emerald-900/80">
          <li className="hover:text-white transition-colors"><a href="mailto:info@greendecors.india">info@greendecors.india</a></li>
          <li className="hover:text-white transition-colors"><a href="tel:+917090038818">+91 70900 38818</a></li>
          <li className="pt-2 italic">Mangalore | Bangalore | Puttur</li>
        </ul>
      </div>

      {/* 4. Newsletter */}
      <div>
        <h4 className="text-emerald-950 font-bold text-xs uppercase tracking-widest mb-8">Stay Inspired</h4>
        <div className="flex border-b border-emerald-900/30 pb-2 group focus-within:border-emerald-950 transition-all">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-transparent outline-none text-sm w-full placeholder:text-emerald-900/40 text-emerald-950"
          />
          <button className="text-[10px] uppercase tracking-widest font-black hover:text-white transition-colors">Join</button>
        </div>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-emerald-900/60 font-medium">
      <p>© 2026 Green Decors India. All rights reserved.</p>
      <div className="flex space-x-8 mt-6 md:mt-0">
        <a href="#" className="hover:text-emerald-950 transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;