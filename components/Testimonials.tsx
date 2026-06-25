'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Patient',
    content: 'The most luxurious and pain-free dental experience I have ever had. The team at Lumina truly treats dentistry as an art form.',
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    content: 'From the calming ambiance to the state-of-the-art equipment, everything is meticulously designed to make you feel at ease.',
  },
  {
    name: 'Emma Thompson',
    role: 'Patient',
    content: 'I used to have severe dental anxiety. Dr. Anderson and her team completely changed my perspective. My smile has never looked better.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-teal-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">
            Patient Stories
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-serif mb-6 leading-tight">
            Hear from our <br />
            <span className="italic text-teal-200">radiant smiles.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-serif text-lg">{testimonial.name}</p>
                <p className="text-sm text-teal-200/60 uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
