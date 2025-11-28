'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in' | 'scale-in';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-in-up': 'animate-fade-in-up',
  'fade-in': 'animate-fade-in',
  'scale-in': 'animate-scale-in',
};

export default function ScrollReveal({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.2,
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only animate once
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before fully in view
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : 'scroll-hidden'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

// Convenience component for staggered children
interface ScrollRevealGroupProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
  itemClassName?: string;
}

export function ScrollRevealGroup({
  children,
  animation = 'fade-in-up',
  staggerDelay = 0.1,
  threshold = 0.2,
  className = '',
  itemClassName = '',
}: ScrollRevealGroupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${itemClassName} ${isVisible ? animationClasses[animation] : 'scroll-hidden'}`}
          style={{ animationDelay: `${index * staggerDelay}s` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

