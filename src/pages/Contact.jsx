import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
// import { Resend } from 'resend';

// Note: To use Resend securely, this should be called from a backend API route
// Example Serverless Function usage:
// const resend = new Resend('re_123456789');
// await resend.emails.send({...})

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending error:', error);
      setStatus('error');
      // Reset error status after 5 seconds to let user try again
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full pt-32 pb-20 min-h-screen relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Whether you're looking for premium fabrics or a strategic partnership, the Savitri Group is ready to weave excellence into your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 border border-slate-200 bg-white shadow-xl shadow-slate-200/50 rounded-2xl h-fit"
          >
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8">Headquarters</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#1D4ED8]/30 flex items-center justify-center shrink-0 bg-[#1D4ED8]/5">
                  <MapPin className="text-[#1D4ED8]" size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Location</h4>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Savitri Group Textile Hub<br />
                    Ring Road, Surat<br />
                    Gujarat, India 395002
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#1D4ED8]/30 flex items-center justify-center shrink-0 bg-[#1D4ED8]/5">
                  <Mail className="text-[#1D4ED8]" size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-600 font-light">contact@savitrigroup.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#1D4ED8]/30 flex items-center justify-center shrink-0 bg-[#1D4ED8]/5">
                  <Phone className="text-[#1D4ED8]" size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-600 font-light">+91 98765 43210</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-10 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-slate-700 text-sm font-bold uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 focus:outline-none focus:border-[#1D4ED8] transition-colors placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-slate-700 text-sm font-bold uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 focus:outline-none focus:border-[#1D4ED8] transition-colors placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-700 text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-b border-slate-300 px-0 py-3 text-slate-900 focus:outline-none focus:border-[#1D4ED8] transition-colors resize-none placeholder:text-slate-400"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-[#1D4ED8] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#1E3A8A] transition-colors shadow-lg shadow-[#1D4ED8]/20 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : status === 'success' ? (
                  'Message Sent Successfully'
                ) : (
                  <>
                    Send Inquiry <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-emerald-600 text-sm font-medium text-center mt-2">
                  Thank you! We'll get back to you shortly.
                </p>
              )}

              {status === 'error' && (
                <p className="text-rose-600 text-sm font-medium text-center mt-2">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
