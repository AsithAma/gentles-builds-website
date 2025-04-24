
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
  backgroundImage,
  overlay = true,
}) => {
  return (
    <div 
      className={cn(
        "relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden",
        className
      )}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          {overlay && (
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          )}
        </>
      )}
      
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 ${backgroundImage ? 'text-gray-200' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryButtonLink} className="btn-primary">
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink} className={backgroundImage ? "btn-secondary" : "btn-outline"}>
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
