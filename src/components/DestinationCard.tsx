
import { Star, MapPin, Tag } from 'lucide-react';
import { Destination } from '@/lib/destinations';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  index?: number;
}

const DestinationCard = ({ destination, className, index = 0 }: DestinationCardProps) => {
  const animationDelay = `${index * 0.1}s`;

  return (
    <div
      className={cn(
        "group rounded-2xl overflow-hidden card-hover",
        className
      )}
      style={{ 
        animationDelay,
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${animationDelay} forwards`
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white/90 mb-1">
            <MapPin size={16} className="mr-1 text-white/70" />
            <span className="text-sm font-medium">{destination.location}</span>
          </div>
          <h3 className="text-2xl font-display text-white font-medium">{destination.name}</h3>
        </div>
      </div>
      
      <div className="p-5 bg-card">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <Star size={18} className="text-yellow-400 mr-1 fill-yellow-400" />
            <span className="text-sm font-medium">{destination.rating}</span>
            <span className="text-sm text-muted-foreground ml-1">(128 reviews)</span>
          </div>
          <div className="text-primary font-semibold">
            ${destination.pricePerDay}
            <span className="text-sm text-muted-foreground font-normal"> / day</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">
          {destination.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground flex items-center"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full btn-primary py-2">
          Explore Destination
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
