'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
              Request an Appointment
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-teal-950 mb-6 leading-tight">
              Begin your journey to a <br />
              <span className="italic text-teal-800">radiant smile.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              Schedule your private consultation today. Our concierge team will reach out within 24 hours to confirm your preferred time and discuss any preliminary questions.
            </p>
            
            <div className="space-y-6 text-teal-950">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-500 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Clinic Hours</p>
                  <p className="text-gray-500 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-500 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Direct Line</p>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-teal-900/5 relative overflow-hidden"
          >
            {status === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center p-8">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-teal-950 mb-2">Request Received</h3>
                <p className="text-gray-600 font-light">Our concierge will contact you shortly to confirm your appointment details.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-teal-700 font-medium hover:text-amber-600 transition-colors"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input required type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-900/20 transition-all outline-none" placeholder="Jane" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input required type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-900/20 transition-all outline-none" placeholder="Doe" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input required type="email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-900/20 transition-all outline-none" placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input required type="tel" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-900/20 transition-all outline-none" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Service of Interest</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-900/20 transition-all outline-none text-gray-700 appearance-none">
                    <option>General Consultation</option>
                    <option>Cosmetic Dentistry (Veneers)</option>
                    <option>Invisalign / Orthodontics</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-teal-950 text-white rounded-xl font-medium hover:bg-teal-900 transition-colors disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Request Appointment'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
