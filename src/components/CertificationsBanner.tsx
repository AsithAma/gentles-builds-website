import React from "react";
import Logo_1 from "../assets/federation-of-master-builders.avif";
import Logo_2 from "../assets/ebc.avif";
import Logo_3 from "../assets/labc.avif";
import Logo_4 from "../assets/yell.avif";

const CertificationsBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center">
        <div className="inline-block bg-construction-100/80 text-construction-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Customers
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl mb-12">
          Serving Domestic & Commercial customers in South Wales
        </h2>

        {/* Certifications Grid */}
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
  );
};

export default CertificationsBanner;
