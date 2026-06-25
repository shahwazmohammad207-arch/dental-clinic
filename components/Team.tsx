'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const team = [
  {
    name: 'Dr. Sarah Anderson',
    role: 'Principal Dentist & Founder',
    description: 'DDS, specializing in cosmetic dentistry and full-mouth rehabilitation.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
  },
  {
    name: 'Dr. James Mitchell',
    role: 'Implant Specialist',
    description: 'Over 10 years of experience in advanced implantology and oral surgery.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Orthodontist',
    description: 'Board-certified orthodontist specializing in Invisalign and clear aligners.',
    image: 'https://images.unsplash.com/photo-1594824432258-0ceae91c7f99?auto=format&fit=crop&q=80',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
            Meet the Masters
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-teal-950 leading-tight">
            The artisans behind <br />
            <span className="italic text-teal-800">your smile.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-serif text-teal-950">{member.name}</h3>
              <p className="text-amber-600 text-sm font-medium uppercase tracking-wider mt-2 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
