
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
        "bg-white rounded-xl overflow-hidden group h-full flex flex-col transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
        className
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 bg-white flex flex-col flex-grow border-t border-gray-100">
        <p className="text-gray-600 mb-6 flex-grow text-base leading-relaxed">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-construction-500 font-semibold hover:text-construction-700 group/btn transition-colors"
        >
          LEARN MORE
          <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
