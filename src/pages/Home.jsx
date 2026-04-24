import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Light Overlay over a premium textile background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white z-10" />
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero-backdrop.png")' }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.p 
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1D4ED8] text-sm md:text-base tracking-[0.2em] uppercase mb-4 font-bold"
            >
              Excellence Since Inception
            </motion.p>
            <motion.h1 
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-slate-900 mb-6 uppercase tracking-wide leading-tight"
            >
              The Fabric <br/> <span className="text-slate-500 italic font-light lowercase">of</span> Surat
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl text-slate-600 text-lg md:text-xl font-body mb-10 leading-relaxed"
            >
              Premium textile manufacturing blending traditional craftsmanship with modern innovation to dress the world in quality.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-6">
              <Link to="/collections" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1D4ED8] text-white font-bold uppercase tracking-widest rounded-sm overflow-hidden shadow-xl shadow-[#1D4ED8]/20">
                <span className="relative z-10">Explore Collections</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-[#0F172A]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-4 px-8 py-4 border border-slate-300 text-slate-700 font-bold uppercase tracking-widest rounded-sm hover:bg-slate-50 transition-colors">
                Our Legacy
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span className="text-[20vw] font-heading font-bold whitespace-nowrap text-slate-900">SAVITRI GROUP</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8 text-[#8B5CF6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            See the Fabric <br/> in Motion.
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
            Explore our latest threads, behind-the-scenes manufacturing, and premium textiles on our Instagram profile.
          </p>
          <a filter="none" href="https://www.instagram.com/savitrigroup?igsh=bW00aTBndTNwOHdz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F172A] text-white font-semibold uppercase tracking-widest rounded-full hover:bg-[#1D4ED8] shadow-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Follow @savitrigroup
          </a>
        </div>
      </section>
    </div>
  );
}
