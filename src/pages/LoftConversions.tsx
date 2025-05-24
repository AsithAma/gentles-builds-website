
import React from 'react';
import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Check } from 'lucide-react';
import Loft_1 from "../assets/Loft Bedroom.avif";
import Loft_2 from "../assets/Loft 1.jpg";
import Loft_3 from "../assets/Loft 2.jpg";

const galleryImages = [
  {
    id: "loft1",
    url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Loft Conversion"
  },
  {
    id: "loft2",
    url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
    alt: "Attic Bedroom Conversion"
  },
  {
    id: "loft3",
    url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=800&auto=format&fit=crop",
    alt: "Loft Home Office"
  },
  {
    id: "loft4",
    url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    alt: "Loft Bathroom"
  },
  {
    id: "loft5",
    url: Loft_1,
    alt: "Dormer Loft Conversion"
  },
  {
    id: "loft6",
    url: Loft_3,
    alt: "Mansard Loft Conversion"
  },
];

const loftTypes = [
  {
    title: "Dormer Conversions",
    description: "Extends the existing roof to create additional floor space and headroom, ideal for most properties."
  },
  {
    title: "Hip-to-Gable Conversions",
    description: "Extends the sloping side of your roof to create a vertical wall, perfect for semi-detached or detached homes."
  },
  {
    title: "Mansard Conversions",
    description: "Changes the slope of your roof to create a nearly vertical wall with a flat roof, maximizing space in your loft."
  },
  {
    title: "Velux/Roof Light Conversions",
    description: "The simplest type of conversion that adds windows to your roof without altering the structure, suitable for homes with adequate loft space."
  }
];

const LoftConversions = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1700&auto=format&fit=crop"
            alt="Loft Conversion"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Loft Conversions</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Transform your unused attic space into beautiful, functional living areas.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Unlock Your Home's Full Potential</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                  Welcome to Gentles Construction, where we specialise in transforming your unused loft space into beautiful, functional living areas.
                </p>
                
                <p className="mb-4">
                  Our loft conversions are designed to enhance your home while providing you with extra space for relaxation, work, or play.
                </p>
                
                <p className="mb-4">
                  With a commitment to quality craftsmanship and customer satisfaction, we guide you through every step of the process to create a space that reflects your style and meets your needs.
                </p>
                
                <p>
                  Let us help you unlock the full potential of your home with our expert loft conversion services.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-xl">
              <img 
                src= {Loft_2}
                alt="Loft Conversion" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Types of Loft Conversions</h2>
            <p className="text-gray-600">
              We offer a range of loft conversion options to suit different property types and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loftTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop" 
                alt="Attic Bedroom Conversion" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Expert Loft Conversion Services</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="mb-6">
                  When considering a loft conversion project, choosing our company means partnering with a team of experienced professionals dedicated to delivering exceptional results. We prioritize quality craftsmanship, ensuring that every detail of your conversion meets the highest standards.
                </p>
                
                <p className="mb-6">
                  Our commitment to customer satisfaction means we work closely with you throughout the entire process, from design to completion. Trust us to transform your loft into a beautiful and functional space that enhances your home.
                </p>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">Expert planning and design services</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">High-quality materials and craftsmanship</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">Fully insured and guaranteed work</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">Assistance with building regulations and planning permission</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Loft Conversion Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent loft conversion projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      <CallToAction
        title="Ready to Transform Your Loft Space?"
        description="Contact Gentles Construction today for a free consultation and quote on your loft conversion project."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default LoftConversions;
