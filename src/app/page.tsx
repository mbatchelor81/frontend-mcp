"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("isAuthenticated");
    const email = localStorage.getItem("userEmail");
    
    if (authStatus === "true" && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
    } else {
      // Redirect to login if not authenticated
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  // Show loading or redirect while checking auth
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins'] flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-black/50 backdrop-blur-lg border-r border-white/10 p-6 flex flex-col">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold">WATCH</h1>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <Image src="/icons/home-icon.svg" alt="Home" width={20} height={20} />
              <span className="font-medium">Home</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer">
              <Image src="/icons/favourites-icon.svg" alt="Favourites" width={20} height={20} />
              <span>Favourites</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer">
              <Image src="/icons/trending-icon.svg" alt="Trending" width={20} height={20} />
              <span>Trending</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer">
              <Image src="/icons/calendar-icon.svg" alt="Coming soon" width={20} height={20} />
              <span>Coming soon</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer">
              <Image src="/icons/community-icon.svg" alt="Community" width={20} height={20} />
              <span>Community</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer">
              <Image src="/icons/social-icon.svg" alt="Social" width={20} height={20} />
              <span>Social</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer">
              <Image src="/icons/settings-icon.svg" alt="Settings" width={20} height={20} />
              <span>Settings</span>
            </div>
          </div>
          
          {/* Bottom menu items */}
          <div className="mt-auto pt-8">
            <div 
              className="flex items-center space-x-3 text-white/80 hover:text-white cursor-pointer"
              onClick={handleLogout}
            >
              <Image src="/icons/logout-icon.svg" alt="Logout" width={20} height={20} />
              <span>Logout</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Header */}
        <header className="flex items-center justify-between p-6 relative z-10">
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <span className="text-white font-medium">Movies</span>
              <span className="text-white/80">Series</span>
              <span className="text-white/80">Documentaries</span>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Image src="/icons/search-icon.svg" alt="Search" width={20} height={20} className="cursor-pointer" />
            <Image src="/icons/alert-icon.svg" alt="Notifications" width={20} height={20} className="cursor-pointer" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image src="/images/avatar.png" alt="User" width={32} height={32} className="object-cover" />
              </div>
              <span className="text-white font-medium">{userEmail.split('@')[0]}</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative h-[500px] mx-6 mb-8 rounded-2xl overflow-hidden">
          <Image 
            src="/images/insider.png" 
            alt="Insider" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute bottom-8 left-8 space-y-4">
            <h1 className="text-5xl font-semibold">Insider</h1>
            <p className="text-white/80">2022 | Comedy horror | 1 Season</p>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-medium transition-colors">
                Watch now
              </button>
              <button className="bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-2xl hover:bg-white/30 transition-colors">
                <Image src="/icons/favourites-icon.svg" alt="Add to favorites" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div className="px-6">
          <h2 className="text-xl font-semibold mb-6">Trending</h2>
          <div className="grid grid-cols-4 gap-6">
            {/* Tokyo Train */}
            <div className="relative group cursor-pointer">
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/tokyo-train.png" 
                  alt="Tokyo Train" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                    <Image src="/icons/favourites-icon.svg" alt="Add to favorites" width={16} height={16} />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-white/90 backdrop-blur-sm p-4 rounded-b-2xl flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-black">Tokyo Train</h3>
                  <p className="text-sm text-black/70">2022 | Action, Thriller | 2h 15m</p>
                </div>
              </div>
            </div>

            {/* Moonfall */}
            <div className="relative group cursor-pointer">
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/moonfall.png" 
                  alt="Moonfall" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                    <Image src="/icons/favourites-icon.svg" alt="Add to favorites" width={16} height={16} />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-white/90 backdrop-blur-sm p-4 rounded-b-2xl flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-black">Moonfall</h3>
                  <p className="text-sm text-black/70">2022 | Sci-Fi</p>
                </div>
              </div>
            </div>

            {/* Life in Paris */}
            <div className="relative group cursor-pointer">
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/life-in-paris.png" 
                  alt="Life in Paris" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                    <Image src="/icons/favourites-icon.svg" alt="Add to favorites" width={16} height={16} />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-white/90 backdrop-blur-sm p-4 rounded-b-2xl flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-black">Life in Paris</h3>
                  <p className="text-sm text-black/70">2023 | Romance, Drama | 1h 45m</p>
                </div>
              </div>
            </div>

            {/* House of Gucci */}
            <div className="relative group cursor-pointer">
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/house-of-gucci.png" 
                  alt="House of Gucci" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                    <Image src="/icons/favourites-icon.svg" alt="Add to favorites" width={16} height={16} />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-white/90 backdrop-blur-sm p-4 rounded-b-2xl flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-black">House of Gucci</h3>
                  <p className="text-sm text-black/70">2021 | Drama, Crime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
