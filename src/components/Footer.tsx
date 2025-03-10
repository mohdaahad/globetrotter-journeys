
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-medium mb-6">Globetrotter</h3>
            <p className="text-primary-foreground/80 mb-6">
              Discover the world's most breathtaking destinations with our curated travel experiences 
              and personalized itineraries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Trip Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-foreground/80 mr-3 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Travel Street, Explorer City, World 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-foreground/80 mr-3" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-foreground/80 mr-3" />
                <span className="text-primary-foreground/80">info@globetrotter.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="btn-primary bg-white text-primary hover:bg-white/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Globetrotter. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
