
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image?: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  image,
  rating,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden card-hover",
      className
    )}>
      {/* Quote mark decoration */}
      <div className="absolute -top-4 -left-4 text-gray-100 opacity-80 select-none pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5Z" fill="currentColor"/>
          <path d="M17 10.5C17 11.3284 16.3284 12 15.5 12C14.6716 12 14 11.3284 14 10.5C14 9.67157 14.6716 9 15.5 9C16.3284 9 17 9.67157 17 10.5Z" fill="currentColor"/>
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.0415 15.5129C10.6411 15.8464 10.0602 15.7961 9.7129 15.3957C9.36565 14.9954 9.41593 14.4145 9.81626 14.0671C10.5275 13.4921 11 12.636 11 11.7C11 10.7317 10.6056 9.83156 9.9346 9.1606C9.26364 8.48964 8.36345 8.09524 7.39522 8.095C6.42699 8.09476 5.52661 8.48892 4.85531 9.15969C4.18402 9.83046 3.78921 10.7304 3.789 11.6986C3.78879 11.9488 3.58871 12.1486 3.33857 12.1484C3.08842 12.1482 2.88864 11.9481 2.889 11.6979C2.8893 10.4879 3.37996 9.32766 4.25211 8.45631C5.12425 7.58497 6.28493 7.09537 7.495 7.09501C8.70507 7.09464 9.86599 7.5835 10.7386 8.45423C11.6112 9.32495 12.1025 10.4848 12.1035 11.6948C12.1046 13.0098 11.4963 14.2403 10.5 15.0341C10.6683 15.1332 10.8396 15.2267 11.0128 15.3129C11.4131 15.5366 11.565 16.1008 11.3413 16.5011C11.1176 16.9014 10.5534 17.0533 10.1531 16.8296C9.52827 16.4518 8.95872 15.9637 8.46967 15.393C8.17678 15.0535 8.21774 14.5622 8.55724 14.2694C8.89674 13.9765 9.38806 14.0174 9.68096 14.3569C9.95424 14.6765 10.2546 14.9552 10.5769 15.1889C10.7321 15.3009 10.8903 15.4083 11.0415 15.5129Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
        </svg>
      </div>
      
      {/* Rating stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      
      {/* Author info */}
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-construction-500"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-construction-100 flex items-center justify-center mr-4 border-2 border-construction-500">
            <span className="text-construction-500 font-bold text-xl">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
