import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Building size={30} className="text-construction-500" strokeWidth={1.5} />
            <span className="font-montserrat font-bold text-2xl">
              Gentles <span className="text-white">Construction</span>
            </span>
          </Link>
          <p className="text-gray-300 mt-4">
            Providing premium construction services throughout Cardiff and surrounding areas since 2009. Quality and client satisfaction is our top priority.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-construction-500 rounded-full p-2 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-construction-500 rounded-full p-2 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-construction-500 rounded-full p-2 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-construction-500 rounded-full p-2 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-montserrat font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-construction-500 after:rounded-full pb-2">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-montserrat font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-construction-500 after:rounded-full pb-2">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/services/home-extensions" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Home Extensions
              </Link>
            </li>
            <li>
              <Link to="/services/domestic-building" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Domestic Building
              </Link>
            </li>
            <li>
              <Link to="/services/new-builds" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                New Builds
              </Link>
            </li>
            <li>
              <Link to="/services/garden-walls" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Garden Walls & Landscaping
              </Link>
            </li>
            <li>
              <Link to="/services/commercial-building" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Commercial Building
              </Link>
            </li>
            <li>
              <Link to="/services/loft-conversions" className="text-gray-300 hover:text-construction-500 transition-colors flex items-center gap-2">
                <ArrowRight size={14} className="text-construction-500" />
                Loft Conversions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-montserrat font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-construction-500 after:rounded-full pb-2">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={20} className="text-construction-500 flex-shrink-0" />
              <span className="text-gray-300">Unit 18, Mill Farm House, Cardiff CF14 0SH, United Kingdom</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-construction-500 flex-shrink-0" />
              <span className="text-gray-300">+44 029 2000 0000</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-construction-500 flex-shrink-0" />
              <span className="text-gray-300">info@gentlesconstruction.com</span>
            </li>
          </ul>
        </div>

        {/* Credentials */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-10">
            <img src="https://placehold.co/120x60/333/FFF/svg?text=CREDENTIAL" alt="Certification" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://placehold.co/120x60/333/FFF/svg?text=CREDENTIAL" alt="Certification" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://placehold.co/120x60/333/FFF/svg?text=CREDENTIAL" alt="Certification" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://placehold.co/120x60/333/FFF/svg?text=CREDENTIAL" alt="Certification" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Gentles Construction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
