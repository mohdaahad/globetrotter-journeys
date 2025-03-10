
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Search, MapPin, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4',
        {
          'bg-transparent': !isScrolled && !isMenuOpen,
          'glass shadow-md': isScrolled || isMenuOpen,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-display text-foreground font-semibold">
          Globetrotter
        </a>

        <nav className={cn('hidden md:flex items-center space-x-8 text-sm font-medium')}>
          <a href="#destinations" className="text-foreground/80 hover:text-foreground transition-colors">
            Destinations
          </a>
          <a href="#experiences" className="text-foreground/80 hover:text-foreground transition-colors">
            Experiences
          </a>
          <a href="#planning" className="text-foreground/80 hover:text-foreground transition-colors">
            Trip Planning
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About Us
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
            <MapPin size={20} />
          </button>
          <button className="btn-outline py-2 px-4">
            <User size={18} className="mr-2 inline" />
            Sign In
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass mt-4 rounded-xl p-4 mx-4 animate-slide-down">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            <a href="#destinations" className="text-foreground/80 hover:text-foreground transition-colors p-2">
              Destinations
            </a>
            <a href="#experiences" className="text-foreground/80 hover:text-foreground transition-colors p-2">
              Experiences
            </a>
            <a href="#planning" className="text-foreground/80 hover:text-foreground transition-colors p-2">
              Trip Planning
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors p-2">
              About Us
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
                <MapPin size={20} />
              </button>
              <button className="btn-outline py-2 px-4 flex-1 flex items-center justify-center">
                <User size={18} className="mr-2" />
                Sign In
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
