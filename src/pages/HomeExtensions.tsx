
import React from 'react';
import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Building, Check } from 'lucide-react';
import Home_1 from "../assets/Home 1.avif";
import Home_Extension_Project_1 from "../assets/Home Extension Project 1.avif"

const galleryImages = [
  {
    id: "ext1",
    url: Home_Extension_Project_1,
    alt: "Home Extension Project 1"
  },
  {
    id: "ext2",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    alt: "Kitchen Extension"
  },
  {
    id: "ext3",
    url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Home Extension"
  },
  {
    id: "ext4",
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    alt: "Double Story Extension"
  },
  {
    id: "ext5",
    url: "https://images.unsplash.com/photo-1574739782594-db4ead022697?q=80&w=800&auto=format&fit=crop",
    alt: "Rear Extension"
  },
  {
    id: "ext6",
    url: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=800&auto=format&fit=crop",
    alt: "Kitchen Extension Project"
  },
];

const benefits = [
  "Single and double-story extensions",
  "Rear and side extensions",
  "Kitchen and living space extensions",
  "Additional bedrooms and bathrooms",
  "Accessible modifications for elderly and disabled",
  "Independent annex properties",
  "Increased property value up to 20%"
];

const HomeExtensions = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <img 
            src={Home_1}
            alt="Home Extensions"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Home Extensions</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Transform your living space with our expert home extension services.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expand Your Living Space</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                  Are you looking for a single extension or double extension, or perhaps, a rear extension or multi-storey extension to expand and liven up your spaces?
                </p>
                
                <p className="mb-4">
                  Whether you have plans to extend the downstairs footprint in order to have a larger, roomier kitchen or dining space, or want a more spacious lounge or guest toilet, perhaps, our team would love to offer their home extension expertise. Many homeowners have opted for double storey extensions, for instance, to create room for additional bedrooms and bathrooms as well as en-suites and home workspaces.
                </p>
                
                <p className="mb-4">
                  With Cardiff's ageing population, we have also seen many homeowners go for house extensions to accommodate the disabled or elderly members of their family. If you require, we can expertly convert bathrooms through practical solutions, hand railing, insertion of hoists, etc.
                </p>
                
                <p>
                  Our team also has plenty of experience in building annex properties to provide completely independent living facilities for the elderly in your family. No matter what your end goal, our home extensions team is ready to assist.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                alt="Home Extension" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Home Extension Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Building size={40} className="text-construction-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Home Extensions Expert</h3>
              <p className="text-gray-600 mb-6">
                At GCL, we are proud to carry the label of "house extensions expert", owing to not only the reputation we've built based on serving many satisfied clients over the years but also on the fact that we love creating spectacular spaces to accommodate your lifestyle and living preferences.
              </p>
              <p className="text-gray-600">
                We undertake all kinds of home extension projects across Cardiff and surrounding regions, helping homeowners come up with beautiful brand new spaces which boast a perfect balance of form and function.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Building size={40} className="text-construction-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Added Value</h3>
              <p className="text-gray-600 mb-6">
                Our expertise as home extension specialists can add as much as 20% to your property's value, and we also ensure that the house extensions we work on are built to the highest quality standard.
              </p>
              <p className="text-gray-600">
                With multiple building materials available, such as brick, glass, timber and block & render, you can easily create your dream home extension.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Our Home Extension Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Home Extension Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent home extension projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      <CallToAction
        title="Ready to Expand Your Living Space?"
        description="Contact Gentles Construction today for a free consultation and quote on your home extension project."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default HomeExtensions;
