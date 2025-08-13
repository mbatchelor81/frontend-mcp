"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // For demo purposes, accept any email/password
      if (email && password) {
        // Store simple auth state
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", email);
        router.push("/");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "conic-gradient(from 13deg at 29% 107%, rgba(97, 0, 194, 1) 49%, rgba(25, 24, 23, 1) 95%)"
        }}
      />
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/insider.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Login Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {/* Logo and Branding */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 relative">
                  <Image 
                    src="/icons/coffee-icon.svg" 
                    alt="Coffee" 
                    width={32} 
                    height={32}
                    className="filter invert"
                  />
                </div>
                <h1 className="text-white text-2xl font-bold tracking-wider">WATCH</h1>
              </div>
            </div>
            <p className="text-white text-lg font-normal">Enjoy the newest movies</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-medium py-4 px-6 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-white font-medium">
              No account?{" "}
              <button 
                onClick={() => router.push("/signup")}
                className="text-purple-300 hover:text-purple-200 underline transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
