import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageCarousel.css';

export default function ImageCarousel({ images, alt, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [isTransitioning]);

  const goPrev = useCallback((e) => {
    e.stopPropagation();
    goTo(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, goTo]);

  const goNext = useCallback((e) => {
    e.stopPropagation();
    goTo(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, goTo]);

  if (!images || images.length <= 1) {
    return (
      <img 
        src={images?.[0] || ''} 
        alt={alt} 
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`image-carousel ${className}`}>
      {/* Slides Container */}
      <div className="carousel-track">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`carousel-slide ${idx === currentIndex ? 'active' : ''}`}
          >
            <img 
              src={img} 
              alt={`${alt} - ${idx + 1}`} 
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="carousel-arrow carousel-arrow-left" 
        onClick={goPrev}
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        className="carousel-arrow carousel-arrow-right" 
        onClick={goNext}
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); goTo(idx); }}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
