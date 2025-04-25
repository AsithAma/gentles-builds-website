
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from "../assets/Gentles Construction Logo.avif"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-construction-500 hover:text-construction-600 transition-colors duration-300"
          >
            <img src={Logo} alt="Company Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About Us
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact Us
            </NavLink>
            <a href="/contact" className="btn-primary flex items-center gap-2">
              Get A Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-construction-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-construction-500" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white md:hidden transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-construction-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img src={Logo} alt="Company Logo" className="h-12 w-auto" />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-construction-100 transition-colors"
            >
              <X size={24} className="text-construction-500" />
            </button>
          </div>
          <div className="flex flex-col space-y-6 pt-8">
            <NavLink
              to="/"
              className={({ isActive }) => cn(
                "text-xl font-medium py-3 px-4 rounded-md transition-colors hover:bg-construction-100",
                isActive ? "text-construction-500 bg-construction-50" : "text-gray-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => cn(
                "text-xl font-medium py-3 px-4 rounded-md transition-colors hover:bg-construction-100",
                isActive ? "text-construction-500 bg-construction-50" : "text-gray-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => cn(
                "text-xl font-medium py-3 px-4 rounded-md transition-colors hover:bg-construction-100",
                isActive ? "text-construction-500 bg-construction-50" : "text-gray-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => cn(
                "text-xl font-medium py-3 px-4 rounded-md transition-colors hover:bg-construction-100",
                isActive ? "text-construction-500 bg-construction-50" : "text-gray-700"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <div className="pt-4">
              <a href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
