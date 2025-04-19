import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Globe, 
  Search, 
  Newspaper, 
  BookText, 
  Info, 
  Mail, 
  ArrowRight,
  Filter,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Card, CardContent } from '@/components/ui/card';
import WorldMap from '@/components/WorldMap';
import NewsCard from '@/components/NewsCard';
import DataChart from '@/components/DataChart';
import RegionFilter from '@/components/RegionFilter';
import Globe3D from '@/components/Globe3D';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations and active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for "${searchQuery}"...`,
    });
  };

  // Scroll to maps section
  const scrollToMaps = () => {
    const mapsSection = document.getElementById("maps");
    if (mapsSection) {
      mapsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter news by region
  const handleRegionFilter = (region: string) => {
    setSelectedRegion(region);
    toast({
      title: "Region Filter Applied",
      description: `Showing news for ${region === 'all' ? 'all regions' : region}`,
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Hero Section with Navigation */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A2238] to-[#2D3A5F] text-white overflow-hidden"
      >
        {/* Replace the background div with Globe3D */}
        <Globe3D />

        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Globe className="text-[#F4CE75] h-8 w-8" />
                <h1 className="text-3xl font-bold font-['Montserrat']">GeoVista</h1>
              </div>

              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex space-x-8">
                  {[
                    { name: "Home", href: "#hero", icon: <Globe className="w-4 h-4" /> },
                    { name: "Maps", href: "#maps", icon: <Globe className="w-4 h-4" /> },
                    { name: "News", href: "#news", icon: <Newspaper className="w-4 h-4" /> },
                    { name: "Analysis", href: "#analysis", icon: <BookText className="w-4 h-4" /> },
                    { name: "About", href: "#about", icon: <Info className="w-4 h-4" /> },
                    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> }
                  ].map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <a 
                        href={item.href}
                        className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium transition-colors hover:text-[#F4CE75] ${activeSection === item.href.replace('#', '') ? 'text-[#F4CE75]' : 'text-white'}`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleDarkMode}
                className="text-white border-white hover:bg-white hover:text-[#2D3A5F]"
              >
                {darkMode ? '☀️' : '🌙'}
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Montserrat']">
            Explore the World's Geopolitics
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Insights, analysis, and visualizations to understand global politics and international relations
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input 
                type="text" 
                placeholder="Search countries, regions, or topics..." 
                className="w-full pl-10 py-6 text-lg bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#F4CE75] text-[#1A2238] hover:bg-[#e9c56b]"
              >
                Search
              </Button>
            </div>
          </form>

          {/* CTA Button */}
          <Button 
            onClick={scrollToMaps}
            className="bg-[#F4CE75] text-[#1A2238] text-lg px-8 py-6 rounded-full hover:bg-[#e9c56b] hover:scale-105 transition-all duration-300"
          >
            Explore Geopolitics <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-2 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-20 bg-[#EEF2F6] dark:bg-[#121826]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat'] dark:text-white">
              Interactive World Map
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore countries, conflicts, alliances and economic data with our interactive visualization tool
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <WorldMap />
          </div>

          {/* Data visualization charts */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Global Military Expenditure</h3>
                <DataChart type="military" />
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Economic Indicators</h3>
                <DataChart type="economic" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white dark:bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat'] dark:text-white">
              Latest Geopolitical News
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest developments in global politics
            </p>
          </div>

          {/* Filter Component */}
          <div className="mb-8">
            <RegionFilter selectedRegion={selectedRegion} onFilterChange={handleRegionFilter} />
          </div>

          {/* News Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Shifting Alliances in Southeast Asia",
                category: "Asia Pacific",
                image: "https://images.unsplash.com/photo-1619618099588-61a29e0aebd7",
                date: "April 12, 2025",
                excerpt: "Analysis of recent developments and their implications for global politics in the rapidly evolving landscape of Southeast Asia."
              },
              {
                title: "Energy Security in Europe",
                category: "Europe",
                image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
                date: "April 15, 2025",
                excerpt: "European nations navigate complex energy arrangements amid geopolitical tensions and climate priorities."
              },
              {
                title: "Middle East Peace Initiatives",
                category: "Middle East",
                date: "April 10, 2025",
                image: "https://images.unsplash.com/photo-1579615759991-7ce48be56a0f",
                excerpt: "A comprehensive look at the latest diplomatic efforts to foster stability in the Middle East region."
              },
              {
                title: "African Union Summit Outcomes",
                category: "Africa",
                date: "April 8, 2025",
                image: "https://images.unsplash.com/photo-1605197138006-18029c2626e6",
                excerpt: "Key decisions and strategic directions from the recent African Union leadership summit."
              },
              {
                title: "Arctic Council Expansion Plans",
                category: "Arctic",
                date: "April 5, 2025",
                image: "https://images.unsplash.com/photo-1520262454473-a1a82276a574",
                excerpt: "Growing interest in Arctic governance as climate change transforms the region's accessibility and resources."
              },
              {
                title: "Latin American Trade Agreement",
                category: "Americas",
                date: "April 3, 2025",
                image: "https://images.unsplash.com/photo-1547064663-da2digs42ek8",
                excerpt: "Historic multi-nation trade agreement promises economic integration across Latin American countries."
              }
            ]
            .filter(article => selectedRegion === 'all' || article.category === selectedRegion)
            .map((article, index) => (
              <NewsCard 
                key={index} 
                title={article.title} 
                category={article.category} 
                image={article.image} 
                date={article.date}
                excerpt={article.excerpt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section id="analysis" className="py-20 bg-[#F8F9FA] dark:bg-[#131A28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat'] dark:text-white">
              Expert Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              In-depth perspectives on global affairs from leading geopolitical analysts
            </p>
          </div>

          {/* Featured Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-2/3">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Featured Analysis" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="md:w-1/3 p-8">
                <span className="text-[#F97316] font-semibold">Featured Analysis</span>
                <h2 className="text-2xl font-bold mt-2 dark:text-white">The New Global Order: Multipolarity and Strategic Competition</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 font-serif">
                  An in-depth examination of the shifting balance of power in international relations and its implications for global stability and cooperation.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                    alt="Author" 
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="font-medium dark:text-white">Dr. Sarah Reynolds</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Foreign Policy Advisor</p>
                  </div>
                </div>
                <Button className="mt-6 bg-[#0EA5E9] text-white hover:bg-[#0b8bc7]">
                  Read Analysis <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* More Analysis Articles */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technological Sovereignty and National Security",
                author: "Michael Chen",
                role: "Tech Policy Expert",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              },
              {
                title: "Resource Competition in a Changing Climate",
                author: "Elena Martinez",
                role: "Environmental Security Analyst",
                image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              }
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 font-serif">
                    Examining the complex interplay between technological innovation, national security concerns, and global governance frameworks.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={article.avatar} 
                        alt={article.author} 
                        className="rounded-full w-10 h-10 object-cover"
                      />
                      <div>
                        <p className="font-medium dark:text-white">{article.author}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{article.role}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-[#0EA5E9] hover:text-[#0b8bc7]">
                      Read <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Contact Section */}
      <section id="about" className="py-20 bg-[#1A2238] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">About GeoVista</h2>
              <p className="text-gray-300 mb-6 font-serif leading-relaxed">
                GeoVista is a premier destination for geopolitical analysis, providing insightful perspectives on global affairs, international relations, and regional dynamics.
              </p>
              <p className="text-gray-300 mb-8 font-serif leading-relaxed">
                Our team of expert analysts and researchers brings decades of experience in diplomacy, intelligence, academia, and journalism to deliver nuanced understanding of complex geopolitical issues.
              </p>
              <Button className="bg-[#F4CE75] text-[#1A2238] hover:bg-[#e9c56b]">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div id="contact">
              <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F4CE75]" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#F4CE75] text-[#1A2238] hover:bg-[#e9c56b]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[#0EA5E9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 font-['Montserrat']">Stay Informed</h2>
          <p className="mb-6 max-w-2xl mx-auto">Subscribe to our newsletter for weekly geopolitical insights and analysis delivered to your inbox.</p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                required
              />
              <Button 
                type="submit"
                className="bg-[#F4CE75] text-[#1A2238] hover:bg-[#e9c56b]"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121826] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="text-[#F4CE75] h-6 w-6" />
                <h3 className="text-xl font-bold">GeoVista</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted source for global geopolitical analysis and insights.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#F4CE75] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F4CE75] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F4CE75] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F4CE75] transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#maps" className="hover:text-white transition-colors">Maps</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#analysis" className="hover:text-white transition-colors">Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Sets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expert Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 GeoVista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
