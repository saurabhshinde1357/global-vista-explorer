
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  category: string;
  image: string;
  date: string;
  excerpt: string;
}

const NewsCard = ({ title, category, image, date, excerpt }: NewsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div 
          className="w-full h-48 bg-cover bg-center transform transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="inline-block bg-[#0EA5E9] text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white/80 text-xs">{date}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
        <Button 
          variant="ghost" 
          className="text-[#0EA5E9] hover:text-[#0b8bc7] p-0 hover:bg-transparent"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
