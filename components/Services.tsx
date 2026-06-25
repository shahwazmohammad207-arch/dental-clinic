'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, teeth whitening, and complete smile makeovers crafted for perfection.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
  },
  {
    title: 'Implantology',
    description: 'Permanent, natural-looking tooth replacements using advanced titanium implants.',
    image: 'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?auto=format&fit=crop&q=80',
  },
  {
    title: 'Invisalign & Orthodontics',
    description: 'Clear, comfortable aligners for a perfectly straight smile without traditional braces.',
    image: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebe2?auto=format&fit=crop&q=80',
  },
  {
    title: 'Preventive Care',
    description: 'Comprehensive exams, professional cleanings, and proactive oral health management.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-teal-950 leading-tight">
              Comprehensive care for <br />
              <span className="italic">lasting vitality.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 text-teal-900 font-medium hover:text-amber-600 transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white h-[400px]"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/40 to-transparent" />
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
                <p className="text-teal-50/80 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>
                <Link
                  href="#booking"
                  className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
