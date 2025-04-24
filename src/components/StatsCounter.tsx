
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  title: string;
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ 
  value, 
  suffix = "", 
  prefix = "", 
  duration = 2000, 
  title,
  className
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;
    let start = 0;
    const step = Math.ceil(value / (duration / 16));
    
    const counter = setInterval(() => {
      start += step;
      if (start > value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(counter);
  }, [isVisible, value, duration]);

  return (
    <div 
      ref={counterRef} 
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center",
        className
      )}
    >
      <div className="text-4xl md:text-5xl font-bold text-construction-500 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{title}</div>
    </div>
  );
};

export default StatsCounter;
