import whatsappImg from '../assets/whatsapp.png'; // Make sure the path is correct

const WhatsAppButton = () => {
  const phoneNumber = "917090038818"; // Your number
  const message = "Hi Green Decors! I'd like to inquire about your interior design services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Elegant Luxury Tooltip */}
      <span className="absolute right-20 bg-emerald-950 text-white text-[10px] uppercase tracking-[0.2em] py-2 px-4 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-emerald-800 shadow-2xl">
        Message Us
      </span>

      {/* The PNG Image */}
      <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110 active:scale-95">
        <img 
          src={whatsappImg} 
          alt="WhatsApp" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
        
        {/* Subtle Pulse Effect (Optional) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping -z-10"></span>
      </div>
    </a>
  );
};

export default WhatsAppButton;