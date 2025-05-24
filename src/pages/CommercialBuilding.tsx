import React from 'react';
import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Check } from 'lucide-react';
import Commercial_Building_1 from "../assets/Commercial Building 1.avif";
import Commercial_1 from "../assets/Commercial 1.avif";
import Commercial_2 from "../assets/Commercial 2.avif";
import Commercial_3 from "../assets/Commercial 3.avif";

const galleryImages = [
  {
    id: "comm1",
    url: Commercial_2,
    alt: "Commercial Building Project"
  },
  {
    id: "comm2",
    url: Commercial_3,
    alt: "Office Renovation"
  },
  {
    id: "comm3",
    url: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop",
    alt: "Retail Space Construction"
  },
  {
    id: "comm4",
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    alt: "Commercial Interior"
  },
  {
    id: "comm5",
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    alt: "Office Space Design"
  },
  {
    id: "comm6",
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    alt: "Commercial Building"
  },
];

const services = [
  {
    title: "Commercial Building Services",
    description: "Whether you want to see through an entire project from scratch, where you need concerting, brick & mortar laying and structural work done – or need remedial and maintenance work done, our team is available to assist."
  },
  {
    title: "Commercial Building Equipment Hire",
    description: "Need specialised equipment for your project? We'd be happy to supply that along with our expert team."
  },
  {
    title: "Demolition and Waste Removal",
    description: "Whether you are in the final stages of your project or need professional demolition removal after seeing your project through from start to finish, our team is at your disposal."
  },
  {
    title: "Project Management",
    description: "No matter how large or small your project, our dedicated project manager will see it through, providing you with regular updates."
  }
];

const CommercialBuilding = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <img 
            src= {Commercial_1}
            alt="Commercial Building"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Commercial Building</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Expert commercial construction services for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Commercial Building Solutions</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                  At Gentles Construction Ltd, we are commercial builders who have the team, capacity and equipment to help you with all aspects of commercial building projects.
                </p>
                
                <p className="mb-4">
                  From high-end and large scale commercial building projects to executing plans for smaller independent businesses – our team has worked on a broad range of projects across Cardiff and beyond.
                </p>
                
                <p className="mb-4">
                  We not only meet the required timeframe with each project but also do our best to exceed client expectations, all the while keeping our rates as economical as possible.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src= {Commercial_Building_1}
                alt="Commercial Construction" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commercial Building Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of commercial building services to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Expert Commercial Building Services</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="mb-6">
                  Tired of spending hours online while looking for a commercial builder near me? Your cumbersome search ends right here with us.
                </p>
                
                <p className="mb-6">
                  Working with our team is an insightful and hassle-free experience, where we begin each commercial building project with a detailed consultation to understand your underlying goals. Once we have accurately captured your initial plans, we will discuss the best way to move forward. Next, we will propose a clear timeline and keep you posted on your commercial building project's progress, making adjustments where necessary to make sure everything is on-track.
                </p>
                
                <p className="mb-6">
                  We offer comprehensive commercial building services which include everything from electric works, plumbing and carpentry to roofing, painting, masonry, plastering, decoration – and any other job required to deliver the project to the highest standard.
                </p>
                
                <p className="mb-6">
                  We have built our reputation on being experienced commercial builders who have delivered each project to a very high level of workmanship and commercial building standard. We pride ourselves in providing impeccable solutions as a commercial builder, where practical designs and exceptional quality finishes come together beautifully, thanks to our knowledgeable and highly motivated team.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">Expert project management</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">Comprehensive building services</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">High-quality workmanship</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                    <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-600">On-time project delivery</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop" 
                alt="Commercial Building" 
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
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Commercial Building Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent commercial building projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      <CallToAction
        title="Ready to Start Your Commercial Building Project?"
        description="Contact Gentles Construction today for a free consultation and quote on your commercial building project."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default CommercialBuilding;
