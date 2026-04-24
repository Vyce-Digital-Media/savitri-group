import { motion } from 'framer-motion';

const collections = [
  { 
    name: 'Grey Satin Brasso', 
    desc: 'Luxurious finish with intricate semi-transparent burn-out velvet patterns over a smooth glossy grey satin base.',
    image: '/brasso.png'
  },
  { 
    name: 'Russian Silk', 
    desc: 'Premium texture in subtle navy or deep blue shades for high-end fashion and corporate elegance.',
    image: '/silk.png'
  },
  { 
    name: 'Viscose Jute', 
    desc: 'Eco-friendly, breathable, and durable woven texture with a natural warm beige glow.',
    image: '/jute.png'
  },
  { 
    name: 'Bridal Crepe', 
    desc: 'Elegant drape for special occasions in pure white with a soft, matte textured flow.',
    image: '/crepe.png'
  },
];

export default function Collections() {
  return (
    <div className="w-full bg-slate-50 pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-brand-gradient text-sm font-bold uppercase tracking-[0.2em] mb-4">Premium Fabrics</h1>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 mb-6">Our Signature Collections</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Explore our diverse range of high-quality fabrics, meticulously crafted to elevate every design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden bg-white border border-slate-200 cursor-pointer rounded-2xl drop-shadow-md hover:drop-shadow-2xl transition-all"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 z-10" />
              
              <div className="absolute bottom-0 left-0 p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h4 className="text-3xl font-heading font-bold text-white mb-3">{item.name}</h4>
                <p className="text-white/80 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-pre-wrap">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
