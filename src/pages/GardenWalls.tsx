import React from 'react';
import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Check } from 'lucide-react';
import Garden_1 from "../assets/Garden 1.avif";
import Garden_2 from "../assets/Garden 2.avif";
import Garden_3 from "../assets/Garden 3.avif";
import Garden_4 from "../assets/Garden 4.avif";
import Our_Services from "../assets/Our Services.avif";
import Garden_5 from "../assets/Garden 5.jpg";
import Garden_6 from "../assets/Garden 6.jpg";
import Garden_7 from "../assets/Garden 7.jpg";

const galleryImages = [
  {
    id: "garden1",
    url: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop",
    alt: "Garden Wall Project"
  },
  {
    id: "garden2",
    url: Garden_2,
    alt: "Landscaped Garden"
  },
  {
    id: "garden3",
    url: Garden_3,
    alt: "Garden Patio Design"
  },
  {
    id: "garden4",
    url: Garden_4,
    alt: "Garden Wall Feature"
  },
  {
    id: "garden5",
    url: Our_Services,
    alt: "Garden Landscaping"
  },
  {
    id: "garden6",
    url: Garden_5,
    alt: "Garden Design"
  },
];

const services = [
  "Garden design and implementation",
  "Bespoke garden walls",
  "Brick and stone work",
  "Patio and driveway installation",
  "Fencing and decking",
  "Planting and soft landscaping",
  "Water features",
  "Outdoor lighting"
];

const GardenWalls = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=1700&auto=format&fit=crop"
            alt="Garden Walls & Landscaping"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Garden Walls & Landscaping</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Transform your outdoor spaces with our expert garden design and construction services.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Expert Garden Design & Construction</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                  Our garden walls and landscaping experts have been renovating gardens according to our clients' specifications for years.
                </p>
                
                <p className="mb-4">
                  We're proud to have successfully delivered a variety of garden wall and landscaping projects to date, where we not only met but also exceeded our clients' expectations in extraordinary ways.
                </p>
                
                <p className="mb-4">
                  When it comes to landscaping and gardening services, our team has vast experience in coming up with stunning designs and features, lush planting and colouring, and smooth architectural lines – all done while keeping the property's aesthetics and client preferences at the forefront.
                </p>
                
                <p>
                  Creating bespoke garden walls & landscaping is among our specialties, and no project is too big or small for us. We're keen on taking down your specifications and transforming your outdoor spaces beyond belief.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-xl">
              <img 
                src= {Garden_7}
                alt="Garden Landscaping" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Personalized Garden Design Services</h2>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Your Vision, Our Expertise</h3>
                <p className="text-gray-600 mb-6">
                  Designing and building absolutely stunning gardens is something we're very passionate about. As your go-to gardening consultant, you can expect nothing less than a highly personalised service, where we involve you at each stage – from initial consultation and planning through to production of your completely bespoke garden.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Garden Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 rounded-xl overflow-hidden shadow-xl">
              <img 
                src={Garden_6}
                alt="Garden Patio" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Our Garden Design Process</h3>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-construction-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <h4 className="text-xl font-semibold">Initial Consultation</h4>
                  </div>
                  <p className="mt-4 text-gray-600">
                    We begin with an in-depth discussion about your garden dreams, preferences, and requirements. Our team will assess your outdoor space and discuss potential designs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-construction-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <h4 className="text-xl font-semibold">Design Development</h4>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Our experienced designers will create detailed plans for your garden, incorporating your ideas and our professional expertise to create a beautiful and functional outdoor space.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-construction-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <h4 className="text-xl font-semibold">Construction</h4>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Our skilled team will implement the design with meticulous attention to detail, from groundwork and hard landscaping to planting and final touches.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-construction-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <h4 className="text-xl font-semibold">Completion & Maintenance</h4>
                  </div>
                  <p className="mt-4 text-gray-600">
                    After completion, we'll provide guidance on caring for your new garden and can offer ongoing maintenance services if required.
                  </p>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Garden Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent garden wall and landscaping projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      <CallToAction
        title="Ready to Transform Your Garden?"
        description="Contact Gentles Construction today for a free consultation and quote on your garden project."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1572057425242-cb610283e458?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default GardenWalls;
