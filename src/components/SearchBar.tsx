
import { useState } from 'react';
import { Search, Calendar, Users, DollarSign } from 'lucide-react';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('destination');

  return (
    <div className="relative -mt-28 z-10 max-w-5xl mx-auto px-6 md:px-8">
      <div className="glass rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-wrap gap-4 mb-6">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'destination' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveTab('destination')}
          >
            Destinations
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'hotels' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveTab('hotels')}
          >
            Hotels
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'flights' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveTab('flights')}
          >
            Flights
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'experiences' 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-foreground hover:bg-secondary'
            }`}
            onClick={() => setActiveTab('experiences')}
          >
            Experiences
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-foreground/70 mb-2">Where</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search destinations" 
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background/80"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">When</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Select dates" 
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background/80"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">Travelers</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background/80 appearance-none"
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">Budget</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background/80 appearance-none"
              >
                <option>Any budget</option>
                <option>$0 - $500</option>
                <option>$500 - $1000</option>
                <option>$1000 - $2000</option>
                <option>$2000+</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center md:justify-end">
          <button className="btn-primary">
            <Search size={18} className="mr-2 inline" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
