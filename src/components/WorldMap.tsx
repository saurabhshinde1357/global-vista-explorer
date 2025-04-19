
import React, { useEffect, useRef } from 'react';
import { Card } from './ui/card';

const WorldMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This is a placeholder for actual map integration
    // In a real implementation, you would integrate a library like MapboxGL, react-simple-maps, or D3
    const mapContainer = mapContainerRef.current;
    if (!mapContainer) return;
    
    // Simulate map rendering with a simple placeholder
    const createPlaceholderMap = () => {
      const mapElement = document.createElement('div');
      mapElement.className = 'w-full h-full flex items-center justify-center bg-[#EAF2F8] dark:bg-[#203040]';
      mapElement.innerHTML = `
        <div class="text-center p-8">
          <h3 class="text-lg font-medium mb-4">Interactive Map Placeholder</h3>
          <p class="mb-4">In a production environment, this would be an interactive world map using MapBox or D3.js</p>
          <p class="text-sm text-gray-500">Hover over countries to see details, click for more information</p>
        </div>
      `;
      
      // Add world map image for visualization
      const mapImage = document.createElement('img');
      mapImage.src = 'https://images.unsplash.com/photo-1589519160732-57fc6ea83bc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80';
      mapImage.className = 'absolute inset-0 w-full h-full object-cover opacity-60';
      
      mapElement.prepend(mapImage);
      mapContainer.appendChild(mapElement);
    };
    
    createPlaceholderMap();
    
    return () => {
      // Cleanup if needed
      while (mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild);
      }
    };
  }, []);
  
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-[600px] relative">
        {/* Map will be rendered here */}
      </div>
      
      {/* Country info tooltip - would be dynamic in a real implementation */}
      <div className="absolute top-10 right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs z-10">
        <h4 className="font-bold text-lg mb-2 dark:text-white">United States</h4>
        <div className="space-y-1 text-sm">
          <p className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">GDP:</span>
            <span className="font-medium dark:text-white">$23.0 trillion</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Population:</span>
            <span className="font-medium dark:text-white">331.9 million</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Government:</span>
            <span className="font-medium dark:text-white">Federal Republic</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Alliances:</span>
            <span className="font-medium dark:text-white">NATO, UN, G7</span>
          </p>
        </div>
        <button className="w-full mt-3 text-xs text-center text-blue-600 dark:text-blue-400 hover:underline">
          View detailed profile
        </button>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow p-3 text-sm">
        <h5 className="font-medium mb-2 dark:text-white">Legend</h5>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-sm mr-2"></span>
            <span className="dark:text-gray-200">Allies</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-red-500 rounded-sm mr-2"></span>
            <span className="dark:text-gray-200">Strategic competitors</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 rounded-sm mr-2"></span>
            <span className="dark:text-gray-200">Neutral states</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 border border-dashed border-blue-500 rounded-sm mr-2"></span>
            <span className="dark:text-gray-200">Trade routes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
