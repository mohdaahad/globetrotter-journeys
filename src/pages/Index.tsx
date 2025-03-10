
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import TrendingDestinations from '@/components/TrendingDestinations';
import Footer from '@/components/Footer';
import { Globe, Compass, HeartHandshake, Clock, Play } from 'lucide-react';

const Index = () => {
  // Enable smooth scrolling effect when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-trigger');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('animate-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SearchBar />
      
      {/* Why Choose Us Section */}
      <section className="section">
        <div className="text-center mb-16 scroll-trigger opacity-0">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Travel With Confidence
          </span>
          <h2 className="section-heading mt-2">Why Choose Globetrotter</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We create memorable journeys with attention to detail, personalized service, 
            and a commitment to excellence in every travel experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 scroll-trigger opacity-0">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Globe className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Curated Destinations</h3>
            <p className="text-muted-foreground">
              Hand-picked destinations that offer authentic and unique travel experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 scroll-trigger opacity-0">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Compass className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Expert Guidance</h3>
            <p className="text-muted-foreground">
              Travel experts with deep destination knowledge to help plan your perfect trip.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 scroll-trigger opacity-0">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <HeartHandshake className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">Personalized Service</h3>
            <p className="text-muted-foreground">
              Tailored travel experiences based on your unique preferences and interests.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 scroll-trigger opacity-0">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Clock className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">
              Round-the-clock assistance for worry-free travel anytime, anywhere.
            </p>
          </div>
        </div>
      </section>
      
      <TrendingDestinations />
      
      {/* Experience Showcase */}
      <section className="py-20 relative overflow-hidden" id="experiences">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Travel experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="section relative z-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="scroll-trigger opacity-0">
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">
                Beyond Destinations
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                Unforgettable Travel Experiences
              </h2>
              <p className="text-white/80 mb-8">
                We believe travel is more than just visiting places. It's about creating moments 
                that become cherished memories, experiencing different cultures, and connecting 
                with people around the world.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span>Immersive cultural experiences</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span>Local guides with insider knowledge</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span>Small group adventures for authentic travel</span>
                </li>
              </ul>
              <button className="btn-primary">
                Explore Experiences
              </button>
            </div>
            
            <div className="relative scroll-trigger opacity-0">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors group">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </button>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Travel experience video" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trip Planning CTA */}
      <section className="section" id="planning">
        <div className="glass rounded-3xl p-8 md:p-12 scroll-trigger opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Plan Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6 mt-2">
                Ready to create memories that last a lifetime?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our travel experts are ready to help you plan the perfect trip based on your 
                interests, preferences, and budget. Let us handle the details while you focus 
                on the experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Start Planning
                </button>
                <button className="btn-outline">
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Trip planning" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <div className="flex items-center text-primary font-medium text-sm mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Available Now
                </div>
                <p className="text-foreground font-medium">
                  Book a free consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
