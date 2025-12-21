import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- DATA: IMAGES ---
const fullGallery = [
  { src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac", category: "Reception" },
  { src: "https://images.unsplash.com/photo-1601482441062-b9f13131f33a", category: "Stage Decor" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552", category: "Audience" },
  { src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866", category: "Entrance" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf", category: "Couple" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800", category: "Haldi Ceremony" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800", category: "Wide Hall View" },
];

// --- 1. HOME PAGE COMPONENT ---
function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // STATE FOR MOBILE MENU

  const whatsappNumber = "918330019991"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello, I want to check availability.`;
  const instagramLink = "https://www.instagram.com/grandauditorium";
  const facebookLink = "https://facebook.com";

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "Features", id: "#features" },
    { name: "Gallery", id: "#gallery" },
    { name: "Location", id: "#location" },
    { name: "Contact", id: "#contact" },
  ];

  const previewImages = fullGallery.slice(0, 6);

  return (
    <div className="bg-neutral-950 font-sans text-amber-50 selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-neutral-950/95 backdrop-blur-md border-b border-amber-900/30 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <span className="text-xl md:text-2xl font-bold text-amber-500 tracking-wider uppercase z-50 relative">
            Grand Auditorium
          </span>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.id} className="text-sm font-medium text-amber-100/80 hover:text-amber-400 transition tracking-wide">
                {link.name}
              </a>
            ))}
            <a href={whatsappLink} className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-black px-6 py-2 rounded-full font-bold transition text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              Check Availability
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="md:hidden text-amber-500 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-neutral-950 flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in z-40">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.id} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-amber-100 hover:text-amber-500 transition"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappLink} 
                className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold text-lg mt-4"
              >
                Check Availability
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src="https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=1920" alt="Grand Auditorium" className="absolute inset-0 w-full h-full object-cover z-0" />
        
        <div className="relative z-20 max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 mb-6 leading-tight drop-shadow-sm tracking-tight">
            ROYALTY REDEFINED
          </h1>
          <p className="text-lg md:text-2xl text-amber-100/80 mb-10 font-light tracking-wide px-2">
            Most Luxurious Venue.<br/>
            <span className="text-amber-400 font-normal">AC Hall • 1000+ Seating • Premium Dining</span>
          </p>
          <a href={whatsappLink} className="bg-amber-500 hover:bg-amber-400 text-black px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] transition transform hover:scale-105 inline-block border-2 border-amber-400">
            Book Your Date
          </a>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-16 md:py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">World-Class Facilities</h2>
            <p className="text-amber-100/60">Designed for those who demand excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard icon="❄️" title="Centralized AC" desc="Premium climate control ensures guests stay cool in luxury." />
            <FeatureCard icon="🚗" title="Massive Parking" desc="Secure, lit parking for 250+ cars with valet capability." />
            <FeatureCard icon="🍽️" title="Royal Dining" desc="Separate 500-seat dining hall with modern hygiene standards." />
            <FeatureCard icon="⚡" title="24/7 Generator" desc="Uninterrupted power backup for seamless celebrations." />
            <FeatureCard icon="🛋️" title="Bridal Suites" desc="Luxury AC green rooms with private restrooms for the couple." />
            <FeatureCard icon="🔊" title="Pro Audio/Visual" desc="Concert-grade sound system and intelligent stage lighting." />
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW SECTION --- */}
      <section id="gallery" className="py-16 md:py-24 bg-neutral-950 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">The Experience</h2>
            <p className="text-amber-100/60">A glimpse into recent celebrations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewImages.map((img, index) => (
              <div key={index} className="group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-amber-900/30 cursor-pointer shadow-lg">
                <img src={img.src} alt={img.category} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <span className="text-amber-400 font-bold border-l-4 border-amber-500 pl-3">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-neutral-800 border border-amber-500/50 text-amber-500 px-8 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-black transition duration-300">
              View More Wedding Images →
            </Link>
          </div>
        </div>
      </section>

      {/* --- LOCATION SECTION --- */}
      <section id="location" className="py-16 md:py-24 bg-neutral-900 border-t border-amber-900/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Find Us</h2>
              
              <div className="bg-neutral-800/50 p-6 rounded-xl border border-amber-900/30 flex items-start gap-5">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-bold text-xl text-amber-400 mb-1">Address</h4>
                  <p className="text-gray-400 leading-relaxed">Grand Auditorium,<br/>Manjeshwar-Hosangadi Old Highway,<br/>Bangramanjeshwar, Kerala 671323</p>
                </div>
              </div>
              
              <div className="bg-neutral-800/50 p-6 rounded-xl border border-amber-900/30 flex items-start gap-5">
                <span className="text-3xl">🚗</span>
                <div>
                  <h4 className="font-bold text-xl text-amber-400 mb-1">Accessibility</h4>
                  <p className="text-gray-400">Direct Highway Access<br/><span className="text-sm opacity-70">30 mins from Mangalore • 20 mins from Kasaragod</span></p>
                </div>
              </div>
            </div>

            {/* REAL MAP EMBED */}
            <div className="h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl relative">
              <iframe 
                title="Grand Auditorium Location"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                allowFullScreen 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.495048695844!2d74.9074!3d12.7047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQyJzE2LjkiTiA3NMKwNTQnMjYuNiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="bg-neutral-950 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Start Your Journey</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Dates fill up fast during wedding season. Contact us directly to reserve your day.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
            
            {/* WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noreferrer" 
               className="group flex items-center gap-4 bg-neutral-800 hover:bg-neutral-700 border border-amber-900/50 hover:border-green-500/50 px-8 py-4 rounded-xl transition-all justify-center shadow-lg">
              <WhatsAppIcon />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Chat on</p>
                <p className="text-lg font-bold text-green-400">WhatsApp</p>
              </div>
            </a>

            {/* Instagram */}
            <a href={instagramLink} target="_blank" rel="noreferrer" 
               className="group flex items-center gap-4 bg-neutral-800 hover:bg-neutral-700 border border-amber-900/50 hover:border-pink-500/50 px-8 py-4 rounded-xl transition-all justify-center shadow-lg">
              <InstaIcon />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Follow on</p>
                <p className="text-lg font-bold text-pink-400">Instagram</p>
              </div>
            </a>

            {/* Facebook */}
            <a href={facebookLink} target="_blank" rel="noreferrer" 
               className="group flex items-center gap-4 bg-neutral-800 hover:bg-neutral-700 border border-amber-900/50 hover:border-blue-500/50 px-8 py-4 rounded-xl transition-all justify-center shadow-lg">
              <FacebookIcon />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Like us on</p>
                <p className="text-lg font-bold text-blue-400">Facebook</p>
              </div>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-800">
            <p className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">+91 83300 19991</p>
            <p className="text-gray-500 tracking-wider">bookings@grandauditorium.com</p>
          </div>
        </div>
      </section>
      
      <footer className="bg-black py-8 text-center text-neutral-600 text-xs tracking-widest uppercase border-t border-neutral-900">
         © 2025 Grand Auditorium • Excellence in Hospitality
      </footer>
    </div>
  );
}

// --- 2. GALLERY PAGE COMPONENT ---
function GalleryPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-amber-50">
      <div className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-amber-900/30 py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-amber-500">Full Wedding Collection</h1>
        <Link to="/" className="text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2">← Back to Home</Link>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fullGallery.map((img, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden mb-4 break-inside-avoid shadow-lg border border-amber-900/20">
              <img src={img.src} alt={img.category} className="w-full h-auto object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-amber-400 font-bold">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-neutral-900 p-8 rounded-2xl border border-amber-900/30">
          <h3 className="text-2xl font-bold text-white mb-4">Liked what you saw?</h3>
          <Link to="/" className="text-amber-500 font-bold hover:underline">Book a Site Visit Now</Link>
        </div>
      </div>
    </div>
  );
}

// --- 3. UTILITIES & ICONS ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-neutral-800/50 p-6 md:p-8 rounded-2xl border border-neutral-700 hover:border-amber-500/50 transition duration-500 hover:bg-neutral-800 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.1)] group">
      <div className="text-4xl mb-6  group-hover:grayscale-0 transition duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-amber-50 group-hover:text-amber-400 transition">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

// Simple SVG Icons for the Menu
const MenuIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const CloseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

// Social Icons (Same as before)
const WhatsAppIcon = () => (<svg className="w-8 h-8 fill-green-500" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);
const InstaIcon = () => (<svg className="w-8 h-8 fill-pink-500" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
const FacebookIcon = () => (<svg className="w-8 h-8 fill-blue-500" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;