'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

const cases = [
  {
    id: 1,
    title: 'Porcelain Veneers',
    description: 'A complete smile makeover using ultra-thin porcelain veneers to correct discoloration and alignment.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Invisalign Treatment',
    description: '12 months of clear aligner therapy to resolve crowding and create a broader, more balanced smile.',
    image: 'https://images.unsplash.com/photo-1549420078-472a1d2e1fde?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Professional Whitening',
    description: 'In-clinic laser whitening session achieving a shade 4 times brighter while maintaining enamel health.',
    image: 'https://images.unsplash.com/photo-1522849696084-818b98d1a1b5?auto=format&fit=crop&q=80',
  },
];

export default function Gallery() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
            Smile Gallery
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-teal-950 mb-6 leading-tight">
            Transformations that <br />
            <span className="italic text-teal-800">speak for themselves.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            {cases.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeId === item.id
                    ? 'bg-teal-50 border-l-4 border-amber-500'
                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <h3 className={`text-xl font-serif mb-2 ${activeId === item.id ? 'text-teal-950' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <AnimateHeight isOpen={activeId === item.id}>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </AnimateHeight>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              {cases.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimateHeight({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
