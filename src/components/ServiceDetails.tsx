
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceDetailsProps {
  service: {
    id: string;
    title: string;
    image: string;
    fullDescription: string;
    features: string[];
  };
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-[400px] md:h-full">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
          <div className="h-1 w-20 bg-construction-500 rounded-full" />
        </div>
      </div>
      
      <div className="p-8">
        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xl font-bold">Key Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 group">
                <div className="mt-1 bg-construction-500/10 rounded-full p-1 group-hover:bg-construction-500 transition-colors">
                  <Check className="w-4 h-4 text-construction-500 group-hover:text-white" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            size="lg"
            className="mt-8 bg-construction-500 hover:bg-construction-600 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
