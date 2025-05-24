import React from "react";
import Layout from "@/components/Layout";
import StatsCounter from "@/components/StatsCounter";
import CurvedSection from "@/components/CurvedSection";
import CallToAction from "@/components/CallToAction";
import Home_Extensions from "../assets/Home Extensions 1.avif";
import New_Builds from "../assets/New Builds 1.avif";
import Logo_1 from "../assets/federation-of-master-builders.avif";
import Logo_2 from "../assets/ebc.avif";
import Logo_3 from "../assets/labc.avif";
import Logo_4 from "../assets/yell.avif";
import Jason_Gentles from "../assets/Jason Gentles.jpg";

const AboutUs = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1700&auto=format&fit=crop&h=900&q=80"
            alt="Construction background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              About Gentles Construction
            </h1>
            <p className="text-xl text-white/90 animate-slide-in">
              Learn about our history, our values, and the team behind Gentles
              Construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Excellence Since 2009
              </h2>
              <p className="text-gray-600 mb-6">
                Gentles Construction Ltd was formed in 2009, with Jason bringing
                over 20 years of experience in the building sector. We provide
                all aspects of building projects, including New Builds,
                Extensions, Garage Conversions, Conservatories, Concrete Print
                Driveways and Block Paved Drives to clients throughout Cardiff
                and surrounding areas.
              </p>
              <p className="text-gray-600 mb-6">
                Before starting Gentles Construction Ltd, Jason worked building
                houses for numerous prestigious companies including David Wilson
                Homes, Redrow, Persimmon and Barratts Homes all over South Wales
                for approximately 10 years.
              </p>
              <p className="text-gray-600">
                Throughout our journey, we've maintained our commitment to
                quality, reliability, and customer satisfaction, which has
                allowed us to build a strong reputation in the Cardiff
                construction industry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="animate-float delay-100">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                  alt="Construction site"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="transform translate-y-12 animate-float delay-300">
                <img
                  src={Home_Extensions}
                  alt="Building exterior"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
              <div className="transform translate-y-6 animate-float delay-200">
                <img
                  src={New_Builds}
                  alt="Blueprint planning"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
              <div className="animate-float delay-400">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop"
                  alt="Team working"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurvedSection
        className="py-24 px-4 md:px-8 bg-gray-50"
        bgColor="gray-50"
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Meet The Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Jason Gentles</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src= {Jason_Gentles}
                    alt="Jason Gentles"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-600 mb-6">
                  GCL is owned by Jason, a commercial and domestic building
                  expert with 23 years' experience in the building industry.
                  Throughout his career, he has had the privilege of working on
                  numerous sites throughout South Wales and South West England.
                </p>
                <p className="text-gray-600 mb-6">
                  Gentles Construction Ltd. was founded in 2009 to directly
                  address the home renovation and building needs of both
                  commercial and residential property owners, but at an
                  affordable price while still providing quality building and
                  construction services.
                </p>
                <p className="text-gray-600 mb-6">
                  Jason is well-respected in the Cardiff building industry,
                  having demonstrated unmatched expertise and building strong
                  relationships with the region's leading architects and
                  suppliers. GCL is proud to have a long list of satisfied
                  clients, and has built its reputation based on the highest
                  standard of workmanship, materials and delivery timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CurvedSection>

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

      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-gray-600">
              At Gentles Construction, our core values define how we operate and
              serve our clients. These principles guide every aspect of our
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <path d="M7 11v4a1 1 0 0 0 1 1h3"></path>
                  <path d="M6.59 9H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h15"></path>
                  <rect width="13" height="13" x="9" y="1" rx="2"></rect>
                  <path d="m14 14 3-3"></path>
                  <path d="m14 14 3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From materials to workmanship,
                we ensure everything meets our high standards to deliver results
                that last.
              </p>
            </div>

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
                  <path d="M12.3 12.22A4 4 0 0 0 14 8V6a4 4 0 0 0-8 0v2a4 4 0 0 0 1.7 3.22A8 8 0 0 0 4 15.5V18h16v-2.5a8 8 0 0 0-7.7-3.28Z"></path>
                  <circle cx="12" cy="4" r="1"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and honesty in all our dealings,
                ensuring our clients can trust us every step of the way.
              </p>
            </div>

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
                  <path d="M2 2a26.6 26.6 0 0 1 10 10M3.6 10A23 23 0 0 0 12 22c5-3 8-10 8-16a8 8 0 0 0-16 0v1"></path>
                  <path d="M12 12a3 3 0 0 0 0-6 3 3 0 0 0-3 3v5.17"></path>
                  <path d="M12 12a3 3 0 0 1 0 6 3 3 0 0 1-3-3v-5.17"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of construction techniques and
                materials, bringing innovative solutions to every project we
                undertake.
              </p>
            </div>

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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-600">
                The safety of our team, clients, and the public is paramount. We
                maintain rigorous safety protocols on every site.
              </p>
            </div>

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
                  <path d="M7 20h10"></path>
                  <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices that
                minimize our ecological footprint while maximizing efficiency.
              </p>
            </div>

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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p className="text-gray-600">
                Our clients' needs and satisfaction drive everything we do. We
                listen carefully and deliver solutions tailored to each unique
                requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Credentials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certificates & Affiliations
            </h2>
            <p className="text-gray-600">
              Gentles Construction is proud to be associated with these industry
              leading organizations, confirming our commitment to quality and
              professionalism.
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-6 lg:gap-12">
          <img
            src={Logo_1}
            alt="Construction Certifications"
            className="w-36 md:w-40 lg:w-44"
          />
          <img
            src={Logo_2}
            alt="Construction Certifications"
            className="w-36 md:w-40 lg:w-44"
          />
          <img
            src={Logo_3}
            alt="Construction Certifications"
            className="w-36 md:w-40 lg:w-44"
          />
          <img
            src={Logo_4}
            alt="Construction Certifications"
            className="w-36 md:w-40 lg:w-44"
          />
        </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Work With Us?"
        description="Contact Gentles Construction today for a free consultation and quote on your next construction project."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1700&auto=format&fit=crop"
      />
    </Layout>
  );
};

export default AboutUs;
