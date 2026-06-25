'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit includes a comprehensive consultation, 3D digital scanning, and a personalized discussion about your dental goals. We prioritize understanding your needs in a relaxed, unhurried environment.',
  },
  {
    question: 'Do you offer sedation dentistry for anxious patients?',
    answer: 'Yes. We offer several levels of sedation, from laughing gas to IV sedation, administered by certified specialists to ensure your complete comfort and peace of mind.',
  },
  {
    question: 'How long do porcelain veneers last?',
    answer: 'With proper care and maintenance, our premium porcelain veneers typically last 10-15 years or longer. We provide detailed aftercare instructions to help maximize their longevity.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'We are an out-of-network provider for most major PPO plans. Our concierge team will submit claims on your behalf to help you maximize your benefits while ensuring you receive the highest standard of care without restrictions.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
            Common Inquiries
          </span>
          <h2 className="mt-4 text-4xl font-serif text-teal-950 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-medium pr-8 transition-colors ${openIndex === index ? 'text-teal-900' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-amber-500">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
