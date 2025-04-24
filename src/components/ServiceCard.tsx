
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
        "relative group overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-construction-lg",
        className
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <Link
            to={link}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 w-fit"
          >
            Learn More
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
