
import React from 'react';

const CertificationsBanner = () => {
  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl mb-12">
          <span className="text-gray-300">Serving </span>
          <span className="font-bold">Domestic & Commercial</span>
          <span className="text-gray-300"> customers in South Wales</span>
        </h2>
        
        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img
            src="/lovable-uploads/b9147c35-a2e5-471d-ab11-8daf94d4a594.png"
            alt="Construction Certifications"
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsBanner;
