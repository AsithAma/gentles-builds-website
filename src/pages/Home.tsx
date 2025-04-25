import React from "react";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsCounter from "@/components/StatsCounter";
import CallToAction from "@/components/CallToAction";
import CertificationsBanner from "@/components/CertificationsBanner";
import { Building, Check, ArrowRight, ImageOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Home_Extensions from "../assets/Home Extensions 1.avif";
import Domestic_Building from "../assets/Domestic Building 1.avif";
import New_Builds from "../assets/New Builds 1.avif";
import Commercial_Building from "../assets/Commercial Building 1.avif";
import Loft_Conversions from "../assets/Loft Conversions 1.avif";
import Garden_Walls from "../assets/Garden Walls 1.avif"
import Your_Project from "../assets/Your Construction Project.avif"

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop"
                alt="About Gentles Construction"
                className="rounded-lg shadow-xl relative z-10 md:max-w-md lg:max-w-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-construction-500 text-white p-6 rounded-lg shadow-lg hidden md:block z-20">
                <p className="font-bold text-2xl">23+</p>
                <p>Years Experience</p>
              </div>
              <div className="absolute -z-10 top-10 -left-10 w-72 h-72 bg-construction-100 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div>
              <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                About Gentles Construction
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Premium Construction Services Since 2009
              </h2>
              <p className="text-gray-600 mb-6">
                Gentles Construction Ltd was formed in 2009, with Jason bringing
                over 20 years of experience in the building sector. We provide
                all aspects of building projects, including New Builds,
                Extensions, Garage Conversions, Conservatories, Concrete Print
                Driveways and Block Paved Drives to clients throughout Cardiff
                and surrounding areas.
              </p>
              <p className="text-gray-600 mb-8">
                Before starting Gentles Construction Ltd, Jason worked building
                houses for numerous prestigious companies including David Wilson
                Homes, Redrow, Persimmon and Barratts Homes all over South Wales
                for approximately 10 years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-construction-500 text-white p-0.5 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">Fully Qualified Team</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-construction-500 text-white p-0.5 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">Quality Materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-construction-500 text-white p-0.5 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-construction-500 text-white p-0.5 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">Affordable Prices</span>
                </div>
              </div>

              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              High-Quality Construction Services
            </h2>
            <p className="text-gray-600">
              Gentles Construction Ltd offer a wide range of services, from home
              extensions, new builds, loft conversions to landscape gardening
              and brickwork. All fully insured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image={Home_Extensions}
              title="Home Extensions"
              description="Are you looking for a single extension or double extension, or perhaps, a rear extension or multi-storey extension to expand and liven up your spaces? GCL can guide you through the process."
              link="/services"
              delay={0}
            />
            <ServiceCard
              image={Domestic_Building}
              title="Domestic Building"
              description="Having years of knowledge and expertise while working on a variety of residential building projects, our certified team of domestic builders can undertake all kinds of domestic building projects."
              link="/services"
              delay={200}
            />
            <ServiceCard
              image={New_Builds}
              title="New Builds"
              description="GCL is proud to offer new builds hire to help you complete and deliver a variety of domestic and commercial new builds projects. As a respected new builds company, we can bring your vision to life."
              link="/services"
              delay={400}
            />
            <ServiceCard
              image={Garden_Walls}
              title="Garden Walls & Landscaping"
              description="When it comes to landscaping and gardening services, our team has vast experience in coming up with stunning designs and features."
              link="/services"
              delay={600}
            />
            <ServiceCard
              image={Commercial_Building}
              title="Commercial Building"
              description="Whether you want to see through an entire project from scratch, where you need concerting, brick & mortar laying and structural work done – or need remedial and maintenance work done."
              link="/services"
              delay={800}
            />
            <ServiceCard
              image={Loft_Conversions}
              title="Loft Conversions"
              description="CL are loft conversion experts. We have a team ready to assist, from planning to final build we can help you build the best loft conversions to suit your needs. With over 23 years experience."
              link="/services"
              delay={1000}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              View All Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter value={23} suffix="+" title="Years of Experience" />
            <StatsCounter value={500} suffix="+" title="Projects Completed" />
            <StatsCounter value={95} suffix="%" title="Client Satisfaction" />
            <StatsCounter value={35} suffix="+" title="Expert Team Members" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-construction-50 to-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Gentles Construction Difference
            </h2>
            <p className="text-gray-600">
              We stand apart from other construction companies with our
              commitment to quality, transparency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Qualified Tradesmen</h3>
              <p className="text-gray-600">
                Our team of fully qualified tradesmen guarantees a high standard
                of workmanship on every project we undertake.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Free Quotation</h3>
              <p className="text-gray-600">
                Contact Gentles Construction for a free no-obligation project
                consultation and detailed quote.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-construction-100 text-construction-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 12 2 2 4-4"></path>
                  <path d="M12 3c-4.3 0-7.8 3.5-7.8 7.8 0 1.8.6 3.5 1.8 5l-1.8 5.2c-.2.6.3 1 .9.8l5.2-1.8c1.4 1.1 3.1 1.7 4.9 1.7 4.3 0 7.8-3.5 7.8-7.8C22 6.5 18.5 3 14.2 3c-.8 0-1.5.1-2.2.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
              <p className="text-gray-600">
                We are fully insured up to £10 million of public liability, so
                you're always in safe hands with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <CertificationsBanner />

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our construction services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Gentles Construction took our home renovation project from concept to completion with exceptional professionalism. The quality of work exceeded our expectations and the team was a pleasure to work with."
              author="Sarah Johnson"
              location="Cardiff"
              rating={5}
            />
            <TestimonialCard
              quote="We hired Gentles for our garage conversion and couldn't be happier. Jason and his team were punctual, tidy, and delivered the project on schedule and within budget."
              author="Michael Thomas"
              location="Newport"
              rating={5}
            />
            <TestimonialCard
              quote="The team's attention to detail on our new build was impressive. They were responsive to our questions and made helpful suggestions throughout the process."
              author="Emma Wilson"
              location="Penarth"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Start Your Construction Project?"
        description="Contact Gentles Construction for a free consultation and quote. We're ready to bring your vision to life with our expertise and dedication to quality."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        backgroundImage={Your_Project}
      />
    </Layout>
  );
};

export default Home;
