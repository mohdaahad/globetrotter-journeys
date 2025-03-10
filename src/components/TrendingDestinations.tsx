
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { destinations } from '@/lib/destinations';
import DestinationCard from './DestinationCard';

const TrendingDestinations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.tags.includes(activeFilter));

  return (
    <section className="section" id="destinations">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Popular Places
          </span>
          <h2 className="section-heading mt-2">Trending Destinations</h2>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <button 
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === 'Beach' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveFilter('Beach')}
          >
            Beach
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === 'Culture' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveFilter('Culture')}
          >
            Culture
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === 'Food' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveFilter('Food')}
          >
            Food
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((destination, index) => (
          <DestinationCard 
            key={destination.id} 
            destination={destination}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="btn-outline flex items-center">
          View All Destinations
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default TrendingDestinations;
