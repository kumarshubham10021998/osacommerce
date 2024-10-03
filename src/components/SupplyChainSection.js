import React, { useEffect, useRef, useState } from 'react';
import './assets/css/styles.css'; // Import your CSS file

// Custom hook for IntersectionObserver
const useVisibilityObserver = (ref, options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [ref, options]);

  return isVisible;
};

export const SupplyChainSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useVisibilityObserver(sectionRef);

  return (
    <div ref={sectionRef} className="mt-20">
      <div className="flex flex-col lg:flex-row lg:max-w-7xl mx-auto p-10 bg-gray-800 h-[400px]">
        {/* Text Section */}
        <div className="flex-1 text-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold leading-tight mb-4">
              Stop Supply Chain Chaos. <br /> Be One Step Ahead with Osa.
            </h2>
            <p className="text-xl text-purple-600 mb-4">
              <strong>Connect the dots across manufacturing, selling channels, warehouses, and last mile.</strong>
            </p>
            <p className="text-base leading-6 mb-4">
              Don't sacrifice functionality for cost. <br />
              The <a href="/osa-unified-commerce-platform" rel="noopener" target="_blank" className="text-white underline">Osa Collaborative Visibility Platform</a> brings agility, savings, and peace of mind to the most successful omnichannel businesses.
            </p>
          </div>
          <div className="button-wrapper">
            <a href="/" className="text-white py-2 px-4 rounded hover:bg-purple-700 transition bg-purple-700">
              Save with Osa
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 h-full flex justify-center">
            <a href="/" target="_blank" className="relative block">
              <img
                src="https://8211470.fs1.hubspotusercontent-na1.net/hub/8211470/hubfs/Brand%202023/OSa%20Commerce%20Unified%20Commerce%20Platform%20Laptop.png?width=1622&height=973&name=OSa%20Commerce%20Unified%20Commerce%20Platform%20Laptop.png"
                alt="Osa Commerce Unified Commerce Platform Dashboard"
                loading="lazy"
                className={`w-full h-auto w-[1000px] transition-opacity duration-500 ease-in-out ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
