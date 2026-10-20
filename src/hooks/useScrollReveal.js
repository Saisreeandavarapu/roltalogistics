import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to trigger scroll-based animations when an element enters the viewport.
 * Uses IntersectionObserver with once: true for high performance and zero scroll-event overhead.
 * 
 * @param {Object} options IntersectionObserver options
 * @param {number} options.threshold Ratio of the element that needs to be visible (default: 0.12)
 * @param {string} options.rootMargin Margin around the root (default: '0px 0px -40px 0px')
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If browser doesn't support IntersectionObserver, reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}
