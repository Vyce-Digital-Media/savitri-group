import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center mb-6 gap-2">
            <img src="/logo.png" alt="Savitri Group" className="h-16 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <h1 className="font-heading font-extrabold text-2xl md:text-3xl tracking-tighter text-white mt-1.5 leading-none">
                SAVITRI <span className="text-[#1D4ED8]">GROUP</span>
              </h1>
              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-white uppercase  opacity-80">
                Quality in everything we do.
              </p>
            </div>
          </Link>
          <p className="text-slate-300 max-w-sm text-sm leading-relaxed mb-6 font-light">
            Pioneering excellence in textile manufacturing. Bringing the finest fabrics of Surat to the world with unparalleled quality and craftsmanship.
          </p>
          <a
            href="https://www.instagram.com/savitrigroup?igsh=bW00aTBndTNwOHdz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-[#1D4ED8] rounded-full text-white transition-all hover:bg-[#1D4ED8]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            <span className="text-sm font-medium">Follow us on Instagram</span>
          </a>
        </div>

        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Our Legacy</Link></li>
            <li><Link to="/collections" className="text-slate-400 hover:text-white transition-colors text-sm">Collections</Link></li>
            <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin size={18} className="text-[#06B6D4] shrink-0" />
              <span>Surat, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail size={18} className="text-[#06B6D4] shrink-0" />
              <span>contact@savitrigroup.com</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone size={18} className="text-[#06B6D4] shrink-0" />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} Savitri Group. All rights reserved.</p>
        <p className="text-slate-500 text-xs tracking-wider">DEVELOPED BY KUSH MODY</p>
      </div>
    </footer>
  );
}
