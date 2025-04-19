
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#eee]">
      {/* Header */}
      <header className="bg-[#222222] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">GeoVista</h1>
          <nav className="mt-4">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-[#0EA5E9]">World</a></li>
              <li><a href="#" className="hover:text-[#0EA5E9]">Analysis</a></li>
              <li><a href="#" className="hover:text-[#0EA5E9]">Regions</a></li>
              <li><a href="#" className="hover:text-[#0EA5E9]">Conflicts</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Featured Article" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/3 p-6">
              <span className="text-[#F97316] font-semibold">Featured</span>
              <h2 className="text-2xl font-bold mt-2">Global Economic Summit: Key Takeaways</h2>
              <p className="text-gray-600 mt-4">World leaders gather to address pressing economic challenges and geopolitical tensions in an unprecedented summit.</p>
              <button className="mt-6 bg-[#0EA5E9] text-white px-6 py-2 rounded hover:bg-[#0b8bc7] transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Latest Analysis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Shifting Alliances in Southeast Asia",
              category: "Asia Pacific",
              image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            },
            {
              title: "Energy Security in Europe",
              category: "Europe",
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            },
            {
              title: "Middle East Peace Initiatives",
              category: "Middle East",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
            }
          ].map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-[#0EA5E9] text-sm font-semibold">{article.category}</span>
                <h3 className="text-xl font-bold mt-2">{article.title}</h3>
                <p className="text-gray-600 mt-2">Analysis of recent developments and their implications for global politics.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#222222] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-6">Subscribe to our newsletter for daily geopolitical insights.</p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded text-black"
                required
              />
              <button 
                type="submit"
                className="bg-[#F97316] px-6 py-2 rounded hover:bg-[#ea580c] transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GeoVista</h3>
              <p className="text-gray-400">Your source for global geopolitical analysis and insights.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 GeoVista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
