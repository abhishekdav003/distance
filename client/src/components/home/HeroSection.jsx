// import React, { useEffect, useState } from 'react';
// import { Phone, GraduationCap, Star, Award, ChevronRight } from 'lucide-react';

// const universities = [
//   {
//     name: "Manipal University Jaipur",
//     image: "/images/manipal.webp",
//     tagline: "NIRF Top 150, NAAC A+ | ₹7,292 / Month",
//     highlight: "Top Engineering Programs",
//     rating: "4.8"
//   },
//   {
//     name: "Lovely Professional University",
//     image: "/images/lpu.webp",
//     tagline: "NIRF 50, NAAC A++ | ₹7,333 / Month",
//     highlight: "Excellence in Technology",
//     rating: "4.9"
//   },
//   {
//     name: "Chandigarh University",
//     image: "/images/cu.webp",
//     tagline: "NIRF 27, NAAC A+ | ₹7,500 / Month",
//     highlight: "Innovation Hub",
//     rating: "4.7"
//   },
//   {
//     name: "Amity University",
//     image: "/images/amity.webp",
//     tagline: "NIRF Top 50, NAAC A+ | ₹8,000 / Month",
//     highlight: "Global Recognition",
//     rating: "4.6"
//   },
//   {
//     name: "Sikkim Manipal University",
//     image: "/images/smu.webp",
//     tagline: "NAAC A+ | ₹6,500 / Month",
//     highlight: "Distance Learning Pioneer",
//     rating: "4.5"
//   },
//   {
//     name: "Shoolini University",
//     image: "/images/shoolini.webp",
//     tagline: "NIRF Top 100, NAAC A+ | ₹6,800 / Month",
//     highlight: "Research Excellence",
//     rating: "4.4"
//   },
//   {
//     name: "DY Patil Vidyapeeth, Pune",
//     image: "/images/dypatil.webp",
//     tagline: "NAAC A++, NIRF Top 50 | ₹8,500 / Month"
//   },
// ];


// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % universities.length);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isHovered]);

//   const currentUniversity = universities[currentIndex];

//   return (
//     <div className="relative w-full h-auto py-24 overflow-hidden bg-red-300">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-20 right-20 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Content */}
//             <div className="space-y-8 text-gray-800">
//               {/* University Badge */}
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//                 <Award className="w-4 h-4 text-gray-900" />
//                 <span className="text-sm font-medium">Premium Institution</span>
//               </div>

//               {/* Main Heading */}
//               <div className="space-y-4">
//                 <h1 className="text-5xl lg:text-6xl font-black leading-tight">
//                   <span className="block text-black">
//                     {currentUniversity.name.split(' ')[0]}
//                   </span>
//                   <span className="block bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                     {currentUniversity.name.split(' ').slice(1).join(' ')}
//                   </span>
//                 </h1>
                
//                 {/* Rating and Highlight */}
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center gap-1">
//                     <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                     <span className="text-xl font-bold">{currentUniversity.rating}</span>
//                   </div>
//                   <div className="h-6 w-px bg-white/30"></div>
//                   <span className="text-gray-900 font-medium">{currentUniversity.highlight}</span>
//                 </div>
//               </div>

//               {/* Tagline */}
//               <p className="text-xl lg:text-2xl text-gray-900 font-light max-w-xl leading-relaxed">
//                 {currentUniversity.tagline}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4 z-20">
//                 <button className="group relative bg-white text-gray-800 font-bold px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//                   <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
//                   <div className="relative flex items-center gap-2">
//                     <GraduationCap className="w-5 h-5" />
//                     Apply Now
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </button>
                
//                 <button className="group bg-red-700/80 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-red-500/50 hover:bg-red-600/80 transition-all duration-300 hover:scale-105">
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-5 h-5" />
//                     Talk to Counsellor
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - University Showcase */}
//             <div className="relative">
//               {/* Main University Card */}
//               <div
//                 className="relative group cursor-pointer"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t  to-transparent rounded-2xl z-10"></div>
//                 <img
//                   src={currentUniversity.image}
//                   alt={currentUniversity.name}
//                   className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
//                 />
                
//                 {/* Floating Info Card */}
//                 <div className="absolute bottom-6 left-6 right-6 z-20">
//                   <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-gray-900 text-lg">{currentUniversity.name}</h3>
//                         <p className="text-red-600 text-sm">{currentUniversity.highlight}</p>
//                       </div>
//                       <div className="text-right">
//                         <div className="flex items-center gap-1">
//                           <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                           <span className="font-bold text-red-800">{currentUniversity.rating}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* University Navigation Dots */}
//               <div className="flex justify-center gap-3 mt-8">
//                 {universities.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentIndex
//                         ? 'bg-white w-8'
//                         : 'bg-white/40 hover:bg-white/60'
//                     }`}
//                   />
//                 ))}
//               </div>

//               {/* Floating Thumbnails */}
//               <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-40">
//                 {universities.slice(0, 3).map((uni, index) => {
//                   const actualIndex = (currentIndex + index + 1) % universities.length;
//                   return (
//                     <div
//                       key={actualIndex}
//                       onClick={() => setCurrentIndex(actualIndex)}
//                       className="w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 border-white/30 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg"
//                     >
//                       <img
//                         src={universities[actualIndex].image}
//                         alt={universities[actualIndex].name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Stats Bar */}
//       <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-center lg:justify-between items-center text-gray-900">
//             <div className="hidden lg:flex items-center gap-8">
//               <div className="text-center">
//                 <div className="text-2xl font-bold">150+</div>
//                 <div className="text-sm text-black">Universities</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold">50K+</div>
//                 <div className="text-sm text-black">Students</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold">95%</div>
//                 <div className="text-sm text-black">Placement Rate</div>
//               </div>
//             </div>
//             <div className="text-center lg:text-right">
//               <div className="text-sm text-black">Scroll to explore more</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;































import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Replace with your actual image paths
  const desktopBanner = "/bann.jpg";
  const mobileBanner = "/ubann.jpg";

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full">
      {/* Desktop Banner Container - Full height on desktop */}
      <div className="hidden md:block relative w-full h-screen">
        <img
          src={desktopBanner}
          alt="Desktop Banner"
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
        />
      </div>

      {/* Mobile Banner Container - Optimized for 320x400 aspect ratio */}
      <div className="block md:hidden relative w-full">
        {/* Container with proper aspect ratio for mobile banner (4:5 ratio) */}
        <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
          <img
            src={mobileBanner}
            alt="Mobile Banner"
            className="absolute inset-0 w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      {/* Alternative: If you want mobile banner to fill more of the screen */}
      {/* Uncomment this section and comment out the above mobile container */}
      {/*
      <div className="block md:hidden relative w-full min-h-[400px] max-h-[80vh]">
        <img
          src={mobileBanner}
          alt="Mobile Banner"
          className="w-full h-full object-cover object-center"
          onLoad={handleImageLoad}
        />
      </div>
      */}

      {/* Alternative: Using background images for better performance */}
      {/* Uncomment this section and remove the img tags above if preferred */}
      {/*
      <div 
        className="hidden md:block w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${desktopBanner})` }}
      ></div>
      
      <div 
        className="block md:hidden w-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${mobileBanner})`,
          aspectRatio: '4/5'
        }}
      ></div>
      */}

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      )}

      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Content overlay - Add your content here */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
        {/* Your hero content goes here */}
        {/* Example: */}
        {/*
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Title</h1>
        <p className="text-lg md:text-xl mb-8">Your subtitle</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold">
          Call to Action
        </button>
        */}
      </div>
    </div>
  );
};

export default HeroSection;