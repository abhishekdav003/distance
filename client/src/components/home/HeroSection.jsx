import React, { useEffect, useState } from 'react';
import { Phone, GraduationCap, Star, Award, ChevronRight } from 'lucide-react';

const universities = [
  {
    name: "Manipal University Jaipur",
    image: "/images/manipal.webp",
    tagline: "NIRF Top 150, NAAC A+ | ₹7,292 / Month",
    highlight: "Top Engineering Programs",
    rating: "4.8"
  },
  {
    name: "Lovely Professional University",
    image: "/images/lpu.webp",
    tagline: "NIRF 50, NAAC A++ | ₹7,333 / Month",
    highlight: "Excellence in Technology",
    rating: "4.9"
  },
  {
    name: "Chandigarh University",
    image: "/images/cu.webp",
    tagline: "NIRF 27, NAAC A+ | ₹7,500 / Month",
    highlight: "Innovation Hub",
    rating: "4.7"
  },
  {
    name: "Amity University",
    image: "/images/amity.webp",
    tagline: "NIRF Top 50, NAAC A+ | ₹8,000 / Month",
    highlight: "Global Recognition",
    rating: "4.6"
  },
  {
    name: "Sikkim Manipal University",
    image: "/images/smu.webp",
    tagline: "NAAC A+ | ₹6,500 / Month",
    highlight: "Distance Learning Pioneer",
    rating: "4.5"
  },
  {
    name: "Shoolini University",
    image: "/images/shoolini.webp",
    tagline: "NIRF Top 100, NAAC A+ | ₹6,800 / Month",
    highlight: "Research Excellence",
    rating: "4.4"
  },
  {
    name: "DY Patil Vidyapeeth, Pune",
    image: "/images/dypatil.webp",
    tagline: "NAAC A++, NIRF Top 50 | ₹8,500 / Month"
  },
];


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % universities.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const currentUniversity = universities[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-600">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-white">
              {/* University Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="w-4 h-4 text-red-300" />
                <span className="text-sm font-medium">Premium Institution</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block text-white">
                    {currentUniversity.name.split(' ')[0]}
                  </span>
                  <span className="block bg-gradient-to-r from-red-300 to-white bg-clip-text text-transparent">
                    {currentUniversity.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                {/* Rating and Highlight */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-xl font-bold">{currentUniversity.rating}</span>
                  </div>
                  <div className="h-6 w-px bg-white/30"></div>
                  <span className="text-red-200 font-medium">{currentUniversity.highlight}</span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-red-100 font-light max-w-xl leading-relaxed">
                {currentUniversity.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 z-20">
                <button className="group relative bg-white text-red-800 font-bold px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Apply Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button className="group bg-red-700/80 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-red-500/50 hover:bg-red-600/80 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Talk to Counsellor
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - University Showcase */}
            <div className="relative">
              {/* Main University Card */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-800/30 to-transparent rounded-2xl z-10"></div>
                <img
                  src={currentUniversity.image}
                  alt={currentUniversity.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-red-800 text-lg">{currentUniversity.name}</h3>
                        <p className="text-red-600 text-sm">{currentUniversity.highlight}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-bold text-red-800">{currentUniversity.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* University Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {universities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Thumbnails */}
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-40">
                {universities.slice(0, 3).map((uni, index) => {
                  const actualIndex = (currentIndex + index + 1) % universities.length;
                  return (
                    <div
                      key={actualIndex}
                      onClick={() => setCurrentIndex(actualIndex)}
                      className="w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 border-white/30 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <img
                        src={universities[actualIndex].image}
                        alt={universities[actualIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center lg:justify-between items-center text-white">
            <div className="hidden lg:flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-red-200">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-red-200">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-red-200">Placement Rate</div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-sm text-red-200">Scroll to explore more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;