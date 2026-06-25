'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Lumina
              </span>
            </Link>
            <p className="font-light text-sm leading-relaxed mb-6">
              Redefining dental care through artistry, advanced technology, and a commitment to your absolute comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#about" className="hover:text-amber-400 transition-colors">About the Clinic</Link></li>
              <li><Link href="#services" className="hover:text-amber-400 transition-colors">Our Services</Link></li>
              <li><Link href="#gallery" className="hover:text-amber-400 transition-colors">Smile Gallery</Link></li>
              <li><Link href="#reviews" className="hover:text-amber-400 transition-colors">Patient Stories</Link></li>
              <li><Link href="#faq" className="hover:text-amber-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Porcelain Veneers</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Dental Implants</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Invisalign</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Teeth Whitening</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Preventive Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Visit Us</h4>
            <div className="space-y-4 text-sm font-light flex flex-col">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <p>123 Luxury Ave, Suite 400<br />Beverly Hills, CA 90210</p>
              </div>
              <p className="mt-4 text-white/50 text-xs uppercase tracking-wider">Hours</p>
              <p>Monday - Friday<br />9:00 AM - 6:00 PM</p>
              <p>Saturday (Consults only)<br />10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
