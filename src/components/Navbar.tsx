
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const handleScrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <Link to="/" className="text-2xl font-display text-foreground font-semibold">
          Globetrotter
        </Link>

        <nav className={cn('hidden md:flex items-center space-x-8 text-sm font-medium')}>
          <button 
            onClick={() => handleScrollToSection('destinations')} 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Destinations
          </button>
          <button 
            onClick={() => handleScrollToSection('experiences')} 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Experiences
          </button>
          <button 
            onClick={() => handleScrollToSection('planning')} 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Trip Planning
          </button>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
            <MapPin size={20} />
          </button>
          <Link to="/signin" className="btn-outline py-2 px-4">
            <User size={18} className="mr-2 inline" />
            Sign In
          </Link>
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
            <button 
              onClick={() => handleScrollToSection('destinations')} 
              className="text-foreground/80 hover:text-foreground transition-colors p-2 text-left"
            >
              Destinations
            </button>
            <button 
              onClick={() => handleScrollToSection('experiences')} 
              className="text-foreground/80 hover:text-foreground transition-colors p-2 text-left"
            >
              Experiences
            </button>
            <button 
              onClick={() => handleScrollToSection('planning')} 
              className="text-foreground/80 hover:text-foreground transition-colors p-2 text-left"
            >
              Trip Planning
            </button>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors p-2">
              About Us
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors hover:bg-accent">
                <MapPin size={20} />
              </button>
              <Link to="/signin" className="btn-outline py-2 px-4 flex-1 flex items-center justify-center">
                <User size={18} className="mr-2" />
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
