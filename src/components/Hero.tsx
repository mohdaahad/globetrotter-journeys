
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const backgrounds = [
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
];

const headings = [
  "Discover the world's most breathtaking destinations",
  'Experience unforgettable adventures',
  'Create memories that last a lifetime',
];

const subheadings = [
  'Explore curated travel experiences tailored to your desires',
  'Immerse yourself in local cultures and hidden gems',
  'Journey beyond the ordinary with personalized itineraries',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
        setIsChanging(false);
      }, 500);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade Effect */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="hero-overlay" />
      
      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-6 md:px-10">
        <div className="max-w-4xl mx-auto mt-24">
          <span className="inline-block text-white/90 text-sm md:text-base font-medium bg-primary/30 backdrop-blur-md px-4 py-1 rounded-full mb-6 animate-fade-in">
            Explore • Experience • Remember
          </span>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6 transition-opacity duration-500 ${
              isChanging ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {headings[currentIndex]}
          </h1>
          
          <p 
            className={`text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-10 transition-opacity duration-500 ${
              isChanging ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {subheadings[currentIndex]}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <button className="btn-primary w-full sm:w-auto">
              Plan Your Journey
            </button>
            <button className="btn-outline border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
              Explore Destinations <ArrowRight size={18} className="ml-2 inline" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
