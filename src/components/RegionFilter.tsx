
import { Button } from './ui/button';
import { Filter } from 'lucide-react';

interface RegionFilterProps {
  selectedRegion: string;
  onFilterChange: (region: string) => void;
}

const RegionFilter = ({ selectedRegion, onFilterChange }: RegionFilterProps) => {
  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'Asia Pacific', name: 'Asia Pacific' },
    { id: 'Europe', name: 'Europe' },
    { id: 'Middle East', name: 'Middle East' },
    { id: 'Africa', name: 'Africa' },
    { id: 'Americas', name: 'Americas' },
    { id: 'Arctic', name: 'Arctic' },
  ];
  
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <h3 className="text-lg font-medium dark:text-white">Filter by Region</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
          {regions.map((region) => (
            <Button
              key={region.id}
              variant={selectedRegion === region.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(region.id)}
              className={selectedRegion === region.id 
                ? "bg-[#0EA5E9] hover:bg-[#0b8bc7]" 
                : "hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
              }
            >
              {region.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionFilter;
