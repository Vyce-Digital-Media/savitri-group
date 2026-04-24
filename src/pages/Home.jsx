import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
              The Fabric <br /> <span className="text-slate-500 italic font-light lowercase">of</span> Surat
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
      <section className="min-h-screen bg-slate-50 relative overflow-hidden border-t border-slate-200 flex items-center justify-center py-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[20vw] font-heading font-bold whitespace-nowrap text-slate-900 select-none">SAVITRI GROUP</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="flex justify-center mb-6 text-[#8B5CF6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            See the Fabric in Motion.
          </h2>
          {/* Instagram Fragment (Post Embed) */}
          <div className="relative w-full max-w-md mx-auto mb-8 px-4">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B5CF6]/15 to-[#1D4ED8]/15 blur-3xl opacity-50 -z-10 rounded-full" />
            <div className="bg-white p-1 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.08)] border border-slate-100 overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/DKud28KJre0/embed"
                width="100%"
                height="420"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                className="w-full rounded-xl"
              ></iframe>
            </div>
          </div>
          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-xl mx-auto font-light">
            Explore our latest threads, behind-the-scenes manufacturing, and premium textiles on our Instagram profile.
          </p>
          <a filter="none" href="https://www.instagram.com/savitrigroup?igsh=bW00aTBndTNwOHdz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0F172A] text-white font-semibold uppercase tracking-widest rounded-full hover:bg-[#1D4ED8] shadow-lg transition-colors text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            Follow @savitrigroup
          </a>
        </div>
      </section>
    </div>
  );
}
