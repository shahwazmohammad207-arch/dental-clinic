'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=2069&auto=format&fit=crop"
                alt="Clinic Interior"
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-teal-900 p-8 rounded-2xl text-white hidden md:block max-w-xs">
              <p className="font-serif text-4xl mb-2">15+</p>
              <p className="text-teal-100 text-sm leading-relaxed">
                Years of transforming smiles with precision and artistry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
              The Lumina Experience
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-teal-950 mb-6 leading-tight">
              Redefining the modern <br />
              <span className="italic text-teal-800">dental visit.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              We believe that exceptional dental care should be a serene and empowering experience. 
              From the moment you step into our thoughtfully designed space, you are welcomed into 
              an environment where clinical excellence meets luxurious comfort.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: 'Advanced Technology',
                  description: 'State-of-the-art equipment for precise diagnostics and minimally invasive treatments.',
                },
                {
                  title: 'Comfort-First Approach',
                  description: 'Spa-like amenities and gentle techniques to ensure zero anxiety during your visit.',
                },
                {
                  title: 'Bespoke Treatment Plans',
                  description: 'Personalized care designed around your unique aesthetic and functional goals.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-serif text-xl">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-teal-950 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
