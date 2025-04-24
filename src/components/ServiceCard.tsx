
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  image, 
  title, 
  description, 
  link, 
  className,
  delay = 0,
}) => {
  return (
    <div 
      className={cn(
        "card-service overflow-hidden group h-full flex flex-col",
        className,
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <div className="relative overflow-hidden h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-construction-500 font-medium hover:text-construction-700 group/btn transition-colors"
        >
          READ MORE
          <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
