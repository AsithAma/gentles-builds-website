
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const companyAddress = "Unit 18, Mill Farm House, Cardiff CF14 0SH, United Kingdom";
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 bg-gradient-construction overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Get in touch with our team to discuss your construction needs or request a quote.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-construction transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Location</h3>
              <p className="text-gray-600">
                {companyAddress}
              </p>
            </div>
            
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-construction transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Number</h3>
              <p className="text-gray-600">
                +44 029 2000 0000
              </p>
              <p className="text-gray-600 mt-2">
                +44 077 1234 5678
              </p>
            </div>
            
            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-construction transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Address</h3>
              <p className="text-gray-600">
                info@gentlesconstruction.com
              </p>
              <p className="text-gray-600 mt-2">
                enquiries@gentlesconstruction.com
              </p>
            </div>
            
            {/* Working Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-construction transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00AM - 5:00PM
              </p>
              <p className="text-gray-600 mt-2">
                Saturday: 9:00AM - 1:00PM
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map and Form Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-10">
                <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below to get in touch with our team. We'll respond to your inquiry as soon as possible.
                </p>
              </div>
              
              <ContactForm />
            </div>
            
            {/* Google Map */}
            <div>
              <div className="mb-10">
                <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Location
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Us on the Map</h2>
                <p className="text-gray-600">
                  We're conveniently located in Cardiff, serving clients throughout the surrounding areas.
                </p>
              </div>
              
              <GoogleMap address={companyAddress} height="500px" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Questions Answered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to the most common questions about our construction services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">
                We primarily serve Cardiff and surrounding areas in South Wales, including Newport, Swansea, and the Vale of Glamorgan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Are you fully insured?</h3>
              <p className="text-gray-600">
                Yes, Gentles Construction is fully insured with £10 million public liability insurance, giving you complete peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">How long has your company been in business?</h3>
              <p className="text-gray-600">
                Gentles Construction was founded in 2009, but our team brings over 23 years of industry experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Do you offer free quotes?</h3>
              <p className="text-gray-600">
                Yes, we provide free, no-obligation quotes for all our construction services. Contact us to schedule a consultation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">What types of projects do you handle?</h3>
              <p className="text-gray-600">
                We handle a wide range of projects including home extensions, new builds, loft conversions, landscaping, and commercial construction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Do you help with planning permission?</h3>
              <p className="text-gray-600">
                Yes, we can assist with the planning permission process, working with local authorities to ensure all regulatory requirements are met.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
