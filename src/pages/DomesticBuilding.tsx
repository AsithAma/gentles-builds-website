
import React from 'react';
import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Check } from 'lucide-react';

const galleryImages = [
  {
    id: "dom1",
    url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop",
    alt: "Domestic Building Project"
  },
  {
    id: "dom2",
    url: "https://images.unsplash.com/photo-1503011510-c0e00592713b?q=80&w=800&auto=format&fit=crop",
    alt: "Home Renovation"
  },
  {
    id: "dom3",
    url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=800&auto=format&fit=crop",
    alt: "Kitchen Renovation"
  },
  {
    id: "dom4",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    alt: "Bathroom Renovation"
  },
  {
    id: "dom5",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    alt: "Home Interior"
  },
  {
    id: "dom6",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Property Renovation"
  },
];

const services = [
  "Complete home renovations",
  "Kitchen and bathroom installations",
  "Interior remodeling",
  "Custom carpentry and joinery",
  "Home improvements",
  "Property maintenance",
  "Conversions and extensions",
  "New builds"
];

const DomesticBuilding = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1700&auto=format&fit=crop"
            alt="Domestic Building"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Domestic Building</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Create spaces where you truly feel at home.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Expert Domestic Building Services</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                  At GCL, our team loves creating spaces which you can not only call "home" but also truly feel at home when you set foot inside them.
                </p>
                
                <p className="mb-4">
                  Having years of knowledge and expertise while working on a variety of residential building projects, our certified team of domestic builders can undertake all kinds of domestic building projects for homeowners who are either looking to spruce up their existing space or bring their dream project to life from the ground up.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" 
                alt="Domestic Building" 
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
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Domestic Building Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Your Home, Your Investment</h3>
              <p className="text-gray-600 mb-6">
                We believe that your home is without a doubt the most life-changing investment you will probably ever make – with maintenance and ongoing improvements often taking centre stage every from time to time. This could mean a fairly simple improvement to one of the rooms, an overhaul to more than one room or a renovation/refurbishment of the entire property. It could even mean a new build or extension.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Expert Team, Quality Work</h3>
              <p className="text-gray-600 mb-6">
                No matter what residential building plans you have in mind, our team at GCL has the expertise, specialised equipment and experience to make it a reality. They can also help with the full design and planning of whatever domestic building works you have in mind. When you hire a domestic builder with us, you can be rest assured that all building or renovation works will be carried out to the highest workmanship and materials standard.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Our Comprehensive Services</h3>
            <p className="text-gray-600 mb-6">
              Whether it's bespoke bathroom and kitchen installation, conversions and extensions planned and built from the ground up, new builds or any kind of carpentry or restoration job – our team brings many years of expertise in domestic building projects to the table.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Domestic Building Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent domestic building projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      <CallToAction
        title="Ready to Transform Your Home?"
        description="Contact Gentles Construction today for a free consultation and quote on your domestic building project."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default DomesticBuilding;
