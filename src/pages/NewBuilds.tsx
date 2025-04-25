
import React from 'react';
import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Check } from 'lucide-react';

const galleryImages = [
  {
    id: "new1",
    url: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=800&auto=format&fit=crop",
    alt: "New Build Project"
  },
  {
    id: "new2",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    alt: "Modern New Home"
  },
  {
    id: "new3",
    url: "https://images.unsplash.com/photo-1617850687380-3b118b269861?q=80&w=800&auto=format&fit=crop",
    alt: "Residential New Build"
  },
  {
    id: "new4",
    url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=800&auto=format&fit=crop",
    alt: "Commercial New Build"
  },
  {
    id: "new5",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "New Build Interior"
  },
  {
    id: "new6",
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    alt: "New House Construction"
  },
];

const residentialProjects = [
  "Flats and bungalows",
  "Mid & end-terraced houses",
  "Farms",
  "Barns for conversions",
  "Semi-detached & detached homes",
  "Historic buildings",
  "Pubs for domestic conversion",
  "Gated community homes"
];

const commercialProjects = [
  "Colleges & universities",
  "Tourism, leisure & hospitality",
  "Schools & academic institutions",
  "Social housing",
  "Retail & manufacturing centres/facilities",
  "Student accommodation",
  "Hospitals & care homes",
  "Shopping malls and centres"
];

const NewBuilds = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=1700&auto=format&fit=crop"
            alt="New Builds"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">New Builds</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Building your vision from the ground up with quality and expertise.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">New Build Construction Services</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                  GCL is proud to offer new builds hire to help you complete and deliver a variety of domestic and commercial new builds projects.
                </p>
                
                <p className="mb-4">
                  As a respected new builds company, we can bring your vision to life and help you complete your residential new builds which may include a wide range of property types.
                </p>
                
                <p className="mb-4">
                  Our commercial new builds expertise allows us to offer the team and manpower to help you complete a diverse range of projects, from educational facilities to healthcare buildings and retail centers.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" 
                alt="New Build Construction" 
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
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Residential & Commercial Projects</h2>
            <p className="text-gray-600">
              We handle a wide range of new build projects for both residential and commercial clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Residential New Builds</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {residentialProjects.map((project, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                      <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                    </div>
                    <span className="text-gray-600">{project}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Commercial New Builds</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {commercialProjects.map((project, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                      <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                    </div>
                    <span className="text-gray-600">{project}</span>
                  </div>
                ))}
              </div>
            </div>
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
              
              <h2 className="text-3xl font-bold mb-6">The GCL Difference</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Our team's extraordinary attention to every detail and the ability to work with residential and commercial clients from all walks of life is what sets us apart as a new builds company.
                </p>
                
                <p className="mb-4">
                  We blend traditional craftsmanship and workmanship best practices with modern designs to produce some incredibly amazing projects which clients are not only proud of, but can look back on many years later – where the level of quality in every detail is as evident today as it was, say, 8-10 years back.
                </p>
                
                <p className="mb-4">
                  We collaborate closely with our clients on every project – allowing us to not only uphold the highest standards but also ensure that each valued client is happy with the deliverables from start to finish.
                </p>
                
                <p className="mb-4">
                  Whether you need historic building modifications, sympathetic refurbishments, barn conversions, change of use for your projects, building projects for housing or retail centres – we can provide our expert guidance from planning through to building and delivery. We'll cover all your bases, so that you can focus on other aspects of the project.
                </p>
                
                <p>
                  We are proud to offer our highly experienced and well-trained team for new builds hire, where they will see everything through from planning and permissions to building and delivery sign off.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=800&auto=format&fit=crop" 
                alt="New Build Project" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent New Build Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent new build projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      <CallToAction
        title="Ready to Start Your New Build Project?"
        description="Contact Gentles Construction today for a free consultation and quote on your new build project."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default NewBuilds;
