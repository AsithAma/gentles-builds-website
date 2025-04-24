
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from 'lucide-react';

// Gallery images
const galleryImages = [
  {
    id: "img1",
    url: "https://images.unsplash.com/photo-1604748308951-5d8fad4e5205?q=80&w=800&auto=format&fit=crop",
    alt: "Home Extension Project"
  },
  {
    id: "img2",
    url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop",
    alt: "Domestic Building"
  },
  {
    id: "img3",
    url: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=800&auto=format&fit=crop",
    alt: "New Build Project"
  },
  {
    id: "img4",
    url: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop",
    alt: "Landscaping Project"
  },
  {
    id: "img5",
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    alt: "Commercial Building"
  },
  {
    id: "img6",
    url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=800&auto=format&fit=crop",
    alt: "Loft Conversion"
  },
  {
    id: "img7",
    url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=800&auto=format&fit=crop",
    alt: "Construction Project"
  },
  {
    id: "img8",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    alt: "Architecture"
  },
  {
    id: "img9",
    url: "https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Building"
  }
];

const servicesData = [
  {
    id: "home-extensions",
    title: "Home Extensions",
    image: "https://images.unsplash.com/photo-1604748308951-5d8fad4e5205?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Are you looking for a single extension or double extension, or perhaps, a rear extension or multi-storey extension to expand and liven up your spaces?",
    fullDescription: "At Gentles Construction, we specialize in transforming your existing space with high-quality home extensions. Whether you're looking to add an extra bedroom, expand your kitchen, or create a multi-story addition to your property, our team brings decades of expertise to every project. We handle the complete process from planning and permissions to the final finishes, ensuring a seamless addition that complements your existing structure.",
    features: [
      "Single and double-story extensions",
      "Rear and side extensions",
      "Kitchen and living space extensions",
      "Planning and building regulations assistance",
      "Architectural design services",
      "Full project management"
    ]
  },
  {
    id: "domestic-building",
    title: "Domestic Building",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Having years of knowledge and expertise while working on a variety of residential building projects, our certified team of domestic builders can undertake all kinds of domestic building projects.",
    fullDescription: "Our domestic building services cover all aspects of residential construction and renovation. With 23+ years of experience in the residential sector, our team has the skill and knowledge to tackle projects of any size. From internal remodeling to complete home renovations, we deliver quality craftsmanship with meticulous attention to detail, ensuring your living space is exactly as you envisioned.",
    features: [
      "Complete home renovations",
      "Interior remodeling",
      "Structural alterations",
      "Kitchen and bathroom installations",
      "Custom carpentry and joinery",
      "Electrical and plumbing services"
    ]
  },
  {
    id: "new-builds",
    title: "New Builds",
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=800&auto=format&fit=crop",
    shortDescription: "GCL is proud to offer new builds hire to help you complete and deliver a variety of domestic and commercial new builds projects. As a respected new builds company, we can bring your vision to life.",
    fullDescription: "Building your dream home from the ground up is an exciting journey, and Gentles Construction is here to guide you through every step. Our new build services combine innovative design with quality construction to create homes that are both beautiful and functional. We work closely with you from initial concept to final handover, ensuring your new property meets all your requirements while adhering to the highest industry standards.",
    features: [
      "Custom home design and build",
      "Energy-efficient construction",
      "Modern and traditional building styles",
      "Sustainable building practices",
      "High-quality materials and finishes",
      "Comprehensive warranties"
    ]
  },
  {
    id: "garden-walls-landscaping",
    title: "Garden Walls & Landscaping",
    image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop",
    shortDescription: "When it comes to landscaping and gardening services, our team has vast experience in coming up with stunning designs and features.",
    fullDescription: "Transform your outdoor space with our expert landscaping and garden wall services. We create beautiful, functional outdoor areas that extend your living space and enhance your property's appeal. From decorative garden walls and patios to complete landscape redesigns, our team combines artistic vision with practical know-how to deliver outdoor spaces that you'll love spending time in year-round.",
    features: [
      "Garden design and implementation",
      "Brick and stone garden walls",
      "Patio and driveway installation",
      "Fencing and decking",
      "Outdoor lighting systems",
      "Water features and irrigation"
    ]
  },
  {
    id: "commercial-building",
    title: "Commercial Building",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Whether you want to see through an entire project from scratch, where you need concerting, brick & mortar laying and structural work done – or need remedial and maintenance work done.",
    fullDescription: "Our commercial building services are designed to meet the unique needs of businesses across Cardiff and surrounding areas. We understand the importance of minimizing disruption to your operations while delivering high-quality construction solutions. From office fit-outs to new commercial premises, our team works efficiently and professionally to create functional, impressive spaces that reflect your brand and business requirements.",
    features: [
      "New commercial builds",
      "Office renovations and fit-outs",
      "Retail space construction",
      "Industrial building services",
      "Building maintenance and repairs",
      "Project management for commercial projects"
    ]
  },
  {
    id: "loft-conversions",
    title: "Loft Conversions",
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=800&auto=format&fit=crop",
    shortDescription: "GCL are loft conversion experts. We have a team ready to assist, from planning to final build we can help you build the best loft conversions to suit your needs. With over 23 years experience.",
    fullDescription: "Unlock the potential of your home with our expert loft conversion services. We specialize in transforming underutilized attic spaces into beautiful, functional rooms that add significant value to your property. Whether you're looking for an additional bedroom, home office, or recreational space, our team handles the entire conversion process, ensuring structural integrity while creating a space that seamlessly integrates with the rest of your home.",
    features: [
      "Dormer loft conversions",
      "Hip-to-gable conversions",
      "Mansard conversions",
      "Velux/roof light conversions",
      "Custom staircase installation",
      "Insulation and soundproofing"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Discover our comprehensive range of construction services, tailored to meet your specific needs.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Construction Services</h2>
            <p className="text-gray-600">
              Gentles Construction Ltd offer a wide range of services, from home extensions, new builds, loft conversions to landscape gardening and brickwork. All fully insured.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.shortDescription}
                link={`#${service.id}`}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section className="py-20 px-4 md:px-8 bg-gray-50" id="detailed-services">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Explore Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Detailed Service Information</h2>
            <p className="text-gray-600">
              Select a service to learn more about our expertise and offerings in that area.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <Tabs defaultValue={servicesData[0].id} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full bg-gray-100">
                {servicesData.map((service) => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    onClick={() => setActiveService(service)}
                    className="py-4 text-sm md:text-base"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {servicesData.map((service) => (
                <TabsContent key={service.id} value={service.id} className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{ maxHeight: '500px' }}
                      />
                    </div>
                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-8">
                        {service.fullDescription}
                      </p>
                      
                      <h4 className="text-lg font-bold mb-4">Features & Benefits</h4>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="bg-construction-500 text-white p-0.5 rounded-full mt-1 flex-shrink-0">
                              <Check size={16} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/contact" className="btn-primary">
                        Enquire About This Service
                      </a>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Projects</h2>
            <p className="text-gray-600">
              Browse through a selection of our recent construction projects that showcase our quality and craftsmanship.
            </p>
          </div>
          
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Client Feedback
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Clients Say About Our Services</h2>
            <p className="text-gray-600">
              Don't take our word for it - hear directly from our satisfied clients about their experience working with Gentles Construction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="We hired Gentles for our kitchen extension and are thrilled with the results. Jason's team were professional throughout and completed the work to an exceptional standard."
              author="David Williams"
              location="Cardiff"
              rating={5}
            />
            <TestimonialCard
              quote="From planning to completion, our loft conversion was handled efficiently and professionally. The team was respectful of our home and the craftsmanship is outstanding."
              author="Rebecca Thomas"
              location="Newport"
              rating={5}
            />
            <TestimonialCard
              quote="Our commercial office renovation was completed on time and within budget. The attention to detail and quality of workmanship has transformed our workspace."
              author="James Harrison"
              location="Swansea"
              rating={4}
            />
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Process</h2>
            <p className="text-gray-600">
              We follow a proven process to ensure every project is delivered to the highest standards, on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-construction-100 rounded-full flex items-center justify-center">
                <span className="text-construction-500 text-4xl font-bold relative top-6 left-6">1</span>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                <p className="text-gray-600">
                  We begin with a detailed discussion about your project requirements, budget, and timeline to ensure we understand your vision.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-construction-100 rounded-full flex items-center justify-center">
                <span className="text-construction-500 text-4xl font-bold relative top-6 left-6">2</span>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3">Design & Planning</h3>
                <p className="text-gray-600">
                  Our experts develop detailed plans and secure necessary approvals while keeping you involved in the design process.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-construction-100 rounded-full flex items-center justify-center">
                <span className="text-construction-500 text-4xl font-bold relative top-6 left-6">3</span>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3">Construction</h3>
                <p className="text-gray-600">
                  Our skilled team executes the construction phase with precision, maintaining regular communication throughout.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-construction-100 rounded-full flex items-center justify-center">
                <span className="text-construction-500 text-4xl font-bold relative top-6 left-6">4</span>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3">Completion & Handover</h3>
                <p className="text-gray-600">
                  Final inspections ensure everything meets our high standards before we hand over your completed project with pride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title="Ready to Start Your Construction Project?"
        description="Contact Gentles Construction today for a free consultation and quote on any of our services."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default Services;
