import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-white pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 mb-6">Our Legacy</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Decades of trust, quality, and innovation in continuous pursuit of textile excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#8B5CF6] text-sm font-bold uppercase tracking-[0.2em] mb-4">The Foundation</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-snug">
              Woven with Passion. <br/> Crafted for Perfection.
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 font-light">
              Savitri Group stands as a pillar of quality in Surat's booming textile industry. We specialize in producing high-grade fabrics that serve as the canvas for designers, fashion houses, and retailers globally.
            </p>
            <p className="text-slate-600 leading-relaxed font-light mb-8">
              From our state-of-the-art manufacturing units to our rigorous quality control, every thread embodies our commitment to excellence. Our infrastructure includes world-class looms, dyeing facilities, and cutting-edge checking mechanisms.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold text-sm uppercase tracking-widest rounded-sm transition-all shadow-lg shadow-[#1D4ED8]/20">
              Partner With Us
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[600px] bg-slate-200 rounded-lg overflow-hidden relative shadow-2xl"
          >
            <img 
              src="/manufacturing.png" 
              alt="Textile Manufacturing" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
