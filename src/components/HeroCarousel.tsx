
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1541972289614-0cf03270573a?q=80&w=1700&auto=format&fit=crop&h=900&q=80",
    title: "Building Tomorrow's Legacy",
    subtitle: "Premium construction services in Cardiff and surrounding areas"
  },
  {
    image: "https://images.unsplash.com/photo-1541970160705-169c7d64fcb6?q=80&w=1700&auto=format&fit=crop&h=900&q=80",
    title: "Expert Construction Solutions",
    subtitle: "Over 23 years of experience in building excellence"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1700&auto=format&fit=crop&h=900&q=80",
    title: "Craftsmanship & Innovation",
    subtitle: "Transforming your vision into reality with precision"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 6000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  useEffect(() => {
    startSlideTimer();
    return stopSlideTimer;
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 object-cover w-full h-full transform scale-105 transition-transform duration-10000 ease-linear"
            style={{
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-white container mx-auto px-4 text-center">
            <h1 
              className={`font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl mb-6 transition-all duration-700 delay-100
                ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {slide.title}
            </h1>
            <p 
              className={`text-xl md:text-2xl max-w-3xl transition-all duration-700 delay-300
                ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {slide.subtitle}
            </p>
            <div className={`flex gap-4 mt-12 transition-all duration-700 delay-500
                ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="/contact" className="btn-primary">Get A Free Quote</a>
              <a href="/services" className="btn-secondary">Our Services</a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-12 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-construction-500 w-16' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
