import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-purple-900 flex flex-col items-center">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full py-6 px-10 flex justify-between items-center transition-all duration-300 z-50 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      >
        <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 661 230"
            className={`mook transition-all duration-200 ease-in-out hover:fill-black ${isScrolled ? 'fill-black' : 'fill-white'}`}
            width="150"
            height="50"
          >
            <g>
              <path
                d="m546.8,0c-35.8,0-72.4,19.1-94.2,50.6l28.7,42.5c9.1-27.7,35-47.6,65.5-47.6,38.1,0,66.4,31.1,66.4,69.6s-28.3,69.3-66.4,69.3c-23.6,0-42.9-11.6-56.8-29.9l-46.7-69.1-30.4-45C392.3,9.4,366.4.9,331.4.9H117.4C52.5.9,0,52.2,0,115.4s52.6,114.5,117.4,114.5,117.4-51.3,117.4-114.5c0-14.9-2.9-29-8.2-42.1h-58.5c8.2,11.7,13.1,26.2,13.1,42.1,0,38.2-28.6,69.2-63.9,69.2s-63.9-31-63.9-69.2,28.6-69.2,63.9-69.2h134c-3.4,8.2-4.9,16.3-4.9,23.1,0,2.6.2,5.1.6,7.6.6,4.9,1.9,11.6,8.6,22.2,11.3,16.5,30.9,26.5,47.3,32.7l32.1,12.2c13.5,5.6,23,9.7,23.9,20.7,1.4,17.3-17.4,22.3-33,22.3s-29.8-6.7-35.9-18.8l-46.7,20.3c9.8,22.1,36.6,41.5,82.1,41.5s86-23.5,86-66.9c0-5-.7-9.9-2.4-15.7-1.2-3.9-4.3-10.8-6.5-14-7.9-12.2-22.1-21.5-47.1-29.8l-32.3-12c-12.2-4.4-23.2-13.9-22-24.6,1.6-15.1,19.7-21,33.6-21,8.6,0,26.8,1,41.5,19.1l72.5,108.6h0c22.3,32.2,56.4,56.2,98.1,56.2,26.5,0,50.8-9.1,70.2-24.3v19.9h44v-110.5c-.1-63.5-51.2-115-114.2-115Z"
              />
            </g>
          </svg>
        </div>

        <nav className={`hidden md:flex space-x-8 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <a href="#" className="font-medium hover:underline">Platform</a>
          <a href="#" className="font-medium hover:underline">Orchestration Management</a>
          <a href="#" className="font-medium hover:underline">Solutions</a>
          <a href="#" className="font-medium hover:underline">Insights</a>
          <a href="#" className="font-medium hover:underline">Company</a>
        </nav>

        <button className={`rounded-full px-5 py-2 font-medium ${isScrolled ? 'bg-purple-700 text-white' : 'bg-white text-purple-700'}`}>
          Request demo
        </button>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-5 md:px-20 mt-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          The Orchestration Platform that Enhances Supply Chain Precision
        </h1>
        <p className="mt-6 text-white text-lg md:text-xl max-w-3xl">
          Optimize your operational efficiency, whether you're a 3PL or a brand, with Osa's advanced collaborative visibility platform powered by AI.
        </p>
        <button className="mt-8 bg-black text-white rounded-full px-10 py-4 font-bold hover:bg-gray-800">
          Learn More
        </button>
      </div>
    </div>
  );
}
