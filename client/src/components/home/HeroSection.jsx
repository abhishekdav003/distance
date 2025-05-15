import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const universities = [
  {
    name: "Manipal University Jaipur",
    image: "/images/manipal.webp",
    tagline: "NIRF Top 150, NAAC A+ | ₹7,292 / Month",
  },
  {
    name: "Lovely Professional University",
    image: "/images/lpu.webp",
    tagline: "NIRF 50, NAAC A++ | ₹7,333 / Month",
  },
  {
    name: "Chandigarh University",
    image: "/images/cu.webp",
    tagline: "NIRF 27, NAAC A+ | ₹7,500 / Month",
  },
  {
    name: "Amity University",
    image: "/images/amity.webp",
    tagline: "NIRF Top 50, NAAC A+ | ₹8,000 / Month",
  },
  {
    name: "Sikkim Manipal University",
    image: "/images/smu.webp",
    tagline: "NAAC A+ | ₹6,500 / Month",
  },
  {
    name: "Shoolini University",
    image: "/images/shoolini.webp",
    tagline: "NIRF Top 100, NAAC A+ | ₹6,800 / Month",
  },
  {
    name: "DY Patil Vidyapeeth, Pune",
    image: "/images/dypatil.webp",
    tagline: "NAAC A++, NIRF Top 50 | ₹8,500 / Month",
  },
  {
    name: "IMT Ghaziabad",
    image: "/images/imt.webp",
    tagline: "AACSB, AICTE | ₹9,000 / Month",
  },
  {
    name: "Narsee Monjee Institute of Management Studies (NMIMS)",
    image: "/images/nmims.webp",
    tagline: "NAAC A+, NIRF Top 100 | ₹4,000 / Month",
  },
  {
    name: "Institute of Management Technology, Ghaziabad (IMT)",
    image: "/images/imt.webp",
    tagline: "AACSB, AICTE | ₹6,000 / Month",
  },
];


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % universities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={universities[currentIndex].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${universities[currentIndex].image})` }}
        />
      </AnimatePresence>

      {/* Content */}
<motion.div
  key={currentIndex}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 30 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 p-6 md:p-12 bg-black/50 h-full flex flex-col justify-center"
>
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold"
  >
    {universities[currentIndex].name.split(' ')[0]}{' '}
    <span className="text-yellow-400">
      {universities[currentIndex].name.split(' ').slice(1).join(' ')}
    </span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="mt-2 md:text-xl text-sm max-w-xl"
  >
    {universities[currentIndex].tagline}
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="flex gap-4 mt-6"
  >
    <button className="bg-white text-black font-semibold px-4 py-2 border border-white hover:bg-gray-200 transition">
      Apply To University
    </button>
    <button className="bg-teal-700 text-yellow-400 flex items-center gap-2 px-4 py-2 hover:bg-teal-600 transition">
      <FaPhoneAlt /> Talk To Counsellor
    </button>
  </motion.div>
</motion.div>


      {/* Thumbnails */}
      <div className="hidden absolute bottom-10 right-4 md:flex gap-2 overflow-hidden z-20">
        {universities.map((u, i) => (
          <motion.img
            key={u.name}
            src={u.image}
            alt={u.name}
            onClick={() => setCurrentIndex(i)}
            className={`rounded-md cursor-pointer transition-all duration-500 border-2 ${
              i === currentIndex ? 'border-yellow-400' : 'border-transparent opacity-60'
            } w-16 h-12 md:w-24 md:h-36 object-cover`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
