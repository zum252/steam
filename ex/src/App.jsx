import React from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, User, Settings, Search, Bell } from 'lucide-react';
//
function App() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-white">
      {/* Header */}
      <header className="bg-[#171a21] border-b border-[#2a475e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-12">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">S</span>
                </div>
                <span className="text-white font-semibold">STEAM</span>
              </div>
              <nav className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="text-white hover:text-[#c7d5e0] transition-colors">STORE</a>
                <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">COMMUNITY</a>
                <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">AUTOPOSTED</a>
                <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">LIBRARY</a>
                <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">DOWNLOADS</a>
              </nav>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Search className="w-4 h-4 text-[#c7d5e0] cursor-pointer hover:text-white" />
              <Bell className="w-4 h-4 text-[#c7d5e0] cursor-pointer hover:text-white" />
              <ShoppingCart className="w-4 h-4 text-[#c7d5e0] cursor-pointer hover:text-white" />
              <User className="w-4 h-4 text-[#c7d5e0] cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Sub Navigation */}
      <div className="bg-[#2a475e]">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-6 text-sm py-2">
            <a href="#" className="text-white hover:text-[#c7d5e0] transition-colors">Home</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">Browse</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">Discover</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">Points Shop</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">Content</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">GG Cards</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">News</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors ml-auto">Wishlist</a>
            <a href="#" className="text-[#c7d5e0] hover:text-white transition-colors">Cart</a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Banner */}
        <div className="relative mb-8 rounded-lg overflow-hidden" style={{background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
          <div className="relative z-10 flex items-center justify-center h-48 md:h-64">
            <div className="text-center">
              <div className="bg-[#4c6b22] px-6 py-3 rounded-lg inline-block mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">SUMMER SALE</h1>
                <p className="text-sm text-white/90">Save up to 90% on thousands of games</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">FEATURED</h2>
          </div>
          
          <div className="bg-gradient-to-r from-[#2a475e] to-[#1e3a52] rounded-lg p-6 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <img 
                  src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" 
                  alt="Elden Ring landscape"
                  className="w-full h-48 lg:h-64 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">ELDEN RING</h3>
                  <p className="text-[#c7d5e0] text-sm mb-4">
                    The acclaimed dark fantasy action RPG, featuring FromSoftware and GRRM collaboration.
                    Experience the Lands Between in this epic adventure.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg" alt="Screenshot 1" className="w-full h-16 object-cover rounded" />
                  <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Screenshot 2" className="w-full h-16 object-cover rounded" />
                  <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt="Screenshot 3" className="w-full h-16 object-cover rounded" />
                  <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg" alt="Screenshot 4" className="w-full h-16 object-cover rounded" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-[#c7d5e0]" />
                    <span className="text-[#c7d5e0] text-sm">Wishlist</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">$59.99</span>
                    <button className="bg-[#5cb85c] hover:bg-[#4cae4c] px-6 py-2 rounded text-white font-medium transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Special Offers</h2>
            <a href="#" className="text-[#c7d5e0] hover:text-white text-sm transition-colors">See more</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg" alt="The Last of Us Part 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">The Last of Us Part 1</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#4c6b22] text-xs px-2 py-1 rounded">-50%</span>
                    <span className="text-[#c7d5e0] line-through text-sm">$69.99</span>
                  </div>
                  <span className="text-white font-bold">$34.99</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt="Icarus: Land of the Dead" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Icarus: Land of the Dead</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#4c6b22] text-xs px-2 py-1 rounded">-75%</span>
                    <span className="text-[#c7d5e0] line-through text-sm">$39.99</span>
                  </div>
                  <span className="text-white font-bold">$9.99</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Beyond: Two Souls" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Beyond: Two Souls</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#4c6b22] text-xs px-2 py-1 rounded">-60%</span>
                    <span className="text-[#c7d5e0] line-through text-sm">$29.99</span>
                  </div>
                  <span className="text-white font-bold">$11.99</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Games Row */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg" alt="Destiny 2" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Destiny 2</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#5cb85c] font-bold">Free</span>
                  <button className="bg-[#5cb85c] hover:bg-[#4cae4c] px-4 py-1 rounded text-white text-sm transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt="Halo Infinite" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Halo Infinite</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#5cb85c] font-bold">Free</span>
                  <button className="bg-[#5cb85c] hover:bg-[#4cae4c] px-4 py-1 rounded text-white text-sm transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Team Fortress 2" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Team Fortress 2</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#5cb85c] font-bold">Free</span>
                  <button className="bg-[#5cb85c] hover:bg-[#4cae4c] px-4 py-1 rounded text-white text-sm transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Updated */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Recently Updated</h2>
            <a href="#" className="text-[#c7d5e0] hover:text-white text-sm transition-colors">See more</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors cursor-pointer">
              <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg" alt="Cyberpunk 2077" className="w-full h-24 object-cover" />
              <div className="p-3">
                <h4 className="text-sm font-medium mb-1">Cyberpunk 2077</h4>
                <p className="text-xs text-[#c7d5e0] mb-2">Major Update 2.1 brings new features...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#c7d5e0]">3h Updated</span>
                  <span className="text-xs text-white">View updates</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors cursor-pointer">
              <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt="Starfield" className="w-full h-24 object-cover" />
              <div className="p-3">
                <h4 className="text-sm font-medium mb-1">Starfield</h4>
                <p className="text-xs text-[#c7d5e0] mb-2">Bug fixes and performance improvements</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#c7d5e0]">In Wishlist</span>
                  <span className="text-xs text-white">View updates</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors cursor-pointer">
              <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="The Elder Scrolls Online" className="w-full h-24 object-cover" />
              <div className="p-3">
                <h4 className="text-sm font-medium mb-1">The Elder Scrolls Online</h4>
                <p className="text-xs text-[#c7d5e0] mb-2">Crown Store New Items and Sales...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#c7d5e0]">5h Library</span>
                  <span className="text-xs text-white">View updates</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors cursor-pointer">
              <img src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg" alt="New World" className="w-full h-24 object-cover" />
              <div className="p-3">
                <h4 className="text-sm font-medium mb-1">New World</h4>
                <p className="text-xs text-[#c7d5e0] mb-2">December Update's fixes and tuning...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#c7d5e0]">2h Library</span>
                  <span className="text-xs text-white">View updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New & Trending */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">New & Trending</h2>
            <a href="#" className="text-[#c7d5e0] hover:text-white text-sm transition-colors">See more</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg" alt="Cities: Skylines II" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Cities: Skylines II</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">$49.99</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt="Wildtmender" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">Wildtmender</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">$24.99</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="bg-[#2a475e] rounded-lg overflow-hidden hover:bg-[#32547a] transition-colors group cursor-pointer">
              <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="The Bloodline" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-white">The Bloodline</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">$19.99</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Sellers */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Top Sellers</h2>
            <a href="#" className="text-[#c7d5e0] hover:text-white text-sm transition-colors">See more</a>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center bg-[#2a475e] rounded-lg p-4 hover:bg-[#32547a] transition-colors cursor-pointer">
              <div className="w-16 h-16 mr-4">
                <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg" alt="Baldur's Gate 3" className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Baldur's Gate 3</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">$59.99</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center bg-[#2a475e] rounded-lg p-4 hover:bg-[#32547a] transition-colors cursor-pointer">
              <div className="w-16 h-16 mr-4">
                <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt="Rust" className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Rust</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">$39.99</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center bg-[#2a475e] rounded-lg p-4 hover:bg-[#32547a] transition-colors cursor-pointer">
              <div className="w-16 h-16 mr-4">
                <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Call of Duty" className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Call of Duty®</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">$69.99</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center bg-[#2a475e] rounded-lg p-4 hover:bg-[#32547a] transition-colors cursor-pointer">
              <div className="w-16 h-16 mr-4">
                <img src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg" alt="Fallout 76" className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Fallout 76</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#4c6b22] text-xs px-2 py-1 rounded">-67%</span>
                    <span className="text-[#c7d5e0] line-through text-sm">$39.99</span>
                  </div>
                  <span className="text-white font-bold">$13.19</span>
                  <Heart className="w-4 h-4 text-[#c7d5e0] hover:text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#171a21] border-t border-[#2a475e] mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About Valve</h4>
              <ul className="space-y-2 text-sm text-[#c7d5e0]">
                <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Steamworks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Steam Distribution</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-[#c7d5e0]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Steam Subscriber Agreement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refunds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-[#c7d5e0]">
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-8 border-t border-[#2a475e]">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">V</span>
                </div>
                <span className="text-white font-semibold">VALVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">S</span>
                </div>
                <span className="text-white font-semibold">STEAM</span>
              </div>
            </div>
            <p className="text-sm text-[#c7d5e0]">
              © 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
