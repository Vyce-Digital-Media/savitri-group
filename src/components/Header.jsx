import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-2 md:px-12 md:py-3 ${scrolled ? 'glass shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center z-50 gap-2">
          <img src="/logo.png" alt="Savitri Group" className="h-12 md:h-16 w-auto object-contain" />
          <div className="flex flex-col justify-center">
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl tracking-tighter text-[#101b3b] mt-1.5 leading-none">
              SAVITRI <span className="text-[#1D4ED8]">GROUP</span>
            </h1>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-[#1e293b] uppercase  opacity-80">
              Quality in everything we do.
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold tracking-wide uppercase transition-colors ${location.pathname === '/' ? 'text-[#1D4ED8]' : 'text-slate-600 hover:text-[#1D4ED8]'}`}>Home</Link>
          <Link to="/about" className={`text-sm font-semibold tracking-wide uppercase transition-colors ${location.pathname === '/about' ? 'text-[#1D4ED8]' : 'text-slate-600 hover:text-[#1D4ED8]'}`}>About</Link>
          <Link to="/collections" className={`text-sm font-semibold tracking-wide uppercase transition-colors ${location.pathname === '/collections' ? 'text-[#1D4ED8]' : 'text-slate-600 hover:text-[#1D4ED8]'}`}>Collections</Link>
          <Link to="/contact" className={`px-6 py-2 uppercase tracking-widest rounded-sm transition-all shadow-lg text-sm font-semibold ${location.pathname === '/contact' ? 'bg-[#1E3A8A] text-white shadow-[#1D4ED8]/40' : 'bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white hover:shadow-[#1D4ED8]/20'}`}>Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 -z-10 pointer-events-none data-[open=true]:pointer-events-auto"
        data-open={isOpen}
      >
        <Link to="/" className={`text-2xl font-heading font-bold ${location.pathname === '/' ? 'text-[#1D4ED8]' : 'text-slate-900 hover:text-[#1D4ED8]'}`} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className={`text-2xl font-heading font-bold ${location.pathname === '/about' ? 'text-[#1D4ED8]' : 'text-slate-900 hover:text-[#1D4ED8]'}`} onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/collections" className={`text-2xl font-heading font-bold ${location.pathname === '/collections' ? 'text-[#1D4ED8]' : 'text-slate-900 hover:text-[#1D4ED8]'}`} onClick={() => setIsOpen(false)}>Collections</Link>
        <Link to="/contact" className={`text-2xl font-heading font-bold mt-4 ${location.pathname === '/contact' ? 'text-[#1E3A8A]' : 'text-[#1D4ED8]'}`} onClick={() => setIsOpen(false)}>Contact Us</Link>
      </motion.div>
    </motion.header>
  );
}
