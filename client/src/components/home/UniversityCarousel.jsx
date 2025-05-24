import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaGraduationCap,
  FaChartLine,
  FaRupeeSign,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const universities = [
  {
    name: "Manipal University",
    since: 2011,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF in Top #101-150, A+ grade NAAC accredited",
    fee: "₹7,292 / Month",
    image: "/images/manipal.webp",
    logo: "/logos/manipal.webp"
  },
  {
    name: "Lovely Professional University",
    since: 2005,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF 50, A++ grade NAAC accredited",
    fee: "₹7,333 / Month",
    image: "/images/lpu.webp",
    logo: "/logos/lpu.webp"
  },
 
  {
    name: "Amity University",
    since: 2005,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF Top 50, NAAC A+ accredited",
    fee: "₹8,000 / Month",
    image: "/images/amity.webp",
    logo: "/logos/amity.webp"
  },
  {
    name: "Sikkim Manipal University",
    since: 1995,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF Not listed, NAAC A+ accredited",
    fee: "₹6,500 / Month",
    image: "/images/smu.webp",
    logo: "/logos/smu.webp"
  },
  {
    name: "Shoolini University",
    since: 2009,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF Top 100, NAAC A+ accredited",
    fee: "₹6,800 / Month",
    image: "/images/shoolini.webp",
    logo: "/logos/su-logo.webp"
  },
  {
    name: "DY Patil University",
    since: 2003,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF Top 50 (Medical), NAAC A++ accredited",
    fee: "₹8,500 / Month",
    image: "/images/dypatil.webp",
    logo: "/logos/dpu-logo.webp"
  },
   {
    name: "Chandigarh University",
    since: 2012,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF 27, NAAC A+ accredited",
    fee: "₹7,500 / Month",
    image: "/images/cu.webp",
    logo: "/logos/cu.webp"
  },
  {
    name: "IMT Ghaziabad",
    since: 1980,
    courses: "Online PGDM (MBA equivalent)",
    accreditation: "AICTE approved, UGC entitled",
    ranking: "NIRF Top 50 (Management), AACSB accredited",
    fee: "₹9,000 / Month",
    image: "/images/imt.webp",
    logo: "/logos/lpu.webp"
  },
  {
    name: "NMIMS",
    since: 1981,
    courses: "Online Masters/ Bachelors",
    accreditation: "UGC-entitled degree programme",
    ranking: "NIRF Top 100, NAAC A+ accredited",
    fee: "₹4,000 / Month (Approx)",
    image: "/images/nmims.webp",
    logo: "/logos/lpu.webp"
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function UniversityCarousel() {
  const sliderRef = useRef(null);

  // Helper to generate URL-safe slug
  const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="py-10 md:px-10  relative ">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
        Top Online Universities
      </h2>

      {/* Navigation Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-red-500 rounded-full shadow-md hover:bg-red-700"
      >
        <IoIosArrowBack className="text-xl " />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-red-500 rounded-full shadow-md hover:bg-red-700"
      >
        <IoIosArrowForward className="text-xl " />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {universities.map((uni, index) => {
          const slug = generateSlug(uni.name);
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="px-4"
            >
              <div className=" relative max-w-[75vw] md:max-w-[24vw] mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="h-40 w-full object-cover p-4 hover:scale-105 transition-transform duration-300"
                />
                <img src={uni?.logo} alt="" className=" h-10 absolute top-5 right-5 rounded-sm"/>
                <div className="p-4 space-y-2 ">
                  <h3 className="text-sm font-semibold text-red-700">
                    {uni.name}
                  </h3>
                  <p className="text-sm text-gray-500">Since {uni.since}</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="flex items-center gap-2">
                      <FaBookOpen /> Courses: {uni.courses}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaGraduationCap /> Accreditation: {uni.accreditation}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaChartLine /> Ranking: {uni.ranking}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaRupeeSign /> Fee: {uni.fee}
                    </p>
                  </div>
                </div>
                <a href={`/${slug}`}>
                <div className=" bg-red-700 lg:bg-red-600 lg:hover:bg-red-700 flex justify-center items-center py-3 cursor-pointer">
                    <button className=" text-white text-sm cursor-pointer ">
                      Know More
                    </button>
                </div>
                </a>
                {/* <Link to={`/${slug}`}>
               
                </Link> */}
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
}
