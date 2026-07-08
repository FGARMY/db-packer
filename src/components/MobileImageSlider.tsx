import { useState, useRef, useCallback } from 'react';
import './MobileImageSlider.css';

interface MobileImageSliderProps {
  images: string[];
  alt: string;
}

const MobileImageSlider = ({ images, alt }: MobileImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (diff > threshold && currentIndex < images.length - 1) {
      // Swiped left → next image
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -threshold && currentIndex > 0) {
      // Swiped right → previous image
      setCurrentIndex((prev) => prev - 1);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [currentIndex, images.length]);

  // Prevent the parent Link from navigating on swipe
  const handleClick = useCallback((e: React.MouseEvent) => {
    // Only prevent if we just finished a swipe
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  if (images.length <= 1) {
    return <img src={images[0]} alt={alt} loading="lazy" />;
  }

  return (
    <div
      className="mobile-image-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <div
        className="mobile-slider-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} ${i + 1}`}
            loading="lazy"
            className="mobile-slider-image"
            draggable={false}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="mobile-slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`mobile-slider-dot ${i === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileImageSlider;
