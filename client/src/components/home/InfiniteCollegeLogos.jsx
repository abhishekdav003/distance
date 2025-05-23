import { useEffect, useRef } from 'react';

const InfiniteCollegeLogos = () => {
  const scrollRef = useRef(null);

  // Sample college logos - replace with your university data
  const colleges = [
    { name: "amity", logo: "/logos/amity.webp" },
    { name: "MIT", logo: "logos/amrita.webp" },
    { name: "Stanford University", logo: "logos/amu.webp" },
    { name: "Yale University", logo: "logos/cu.webp" },
    { name: "Princeton University", logo: "logos/dpu-logo.webp" },
    { name: "Columbia University", logo: "logos/du.webp" },
    { name: "University of Chicago", logo: "logos/jain.webp" },
    { name: "Cornell University", logo: "logos/lpu.webp" },
    { name: "UC Berkeley", logo: "logos/manipal.webp" },
    { name: "UCLA", logo: "logos/smu.webp" },
    { name: "University of Pennsylvania", logo: "logos/su-logo.webp" },
    { name: "Duke University", logo: "logos/upes.webp" },
    { name: "Duke University", logo: "logos/uu.webp" },
    { name: "Duke University", logo: "logos/vgu.webp" }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.4; // Adjust speed here (higher = faster)

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Calculate the width of one set of logos
      const singleSetWidth = scrollContainer.scrollWidth / 2;
      
      // Reset position when we've scrolled past one complete set
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      animate();
    }, 100);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  // Double the array for seamless infinite scroll
  const doubledColleges = [...colleges, ...colleges];

  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-logos {
          animation: scroll 40s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden scrollbar-hide scrolling-logos"
        style={{ 
          width: 'max-content',
          willChange: 'transform'
        }}
      >
        {doubledColleges.map((college, index) => (
          <div
            key={`${college.name}-${index}`}
            className="flex-shrink-0 w-25 h-11 md:w-32 md:h-15 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-2 border border-gray-100"
          >
            <img
              src={college.logo}
              alt={college.name}
              className="max-w-full max-h-full object-contain filter hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback for broken images
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div 
              className="hidden w-full h-full items-center justify-center text-xs font-semibold text-gray-600 text-center"
            >
              {college.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCollegeLogos;