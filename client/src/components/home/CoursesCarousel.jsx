import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaClock, FaGraduationCap, FaLaptop, FaCreditCard } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const courses = [
  {
    title: 'MBA - Finance Management',
    duration: '2 years',
    eligibility: 'Bachelor’s Degree with minimum 50%',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  {
    title: 'MCA - Computer Applications',
    duration: '2 years',
    eligibility: 'Bachelor’s Degree in relevant field',
    mode: 'Online (Live/Recorded Lectures)',
    payment: 'EMI options available',
  },
  // Add more courses as needed
];

const CoursesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" relative bg-teal-900 py-12 overflow-hidden ">
        <div className=' w-full h-auto bg-amber-600 flex justify-center items-center'>
        <div className=' absolute bg-gradient-to-br from-blue-50 to-indigo-100 h-[300vw] w-[300vw] rounded-[150Vw] z-10 -translate-y-[48.2%]'></div>
        </div>
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
        Explore Our Distance Education Courses
      </h2>
<div className='px-4 md:px-10 py-10'>
          <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="px-2 h-full">
            <motion.div
              className="rounded-2xl  shadow-lg border bg-white text-gray-800 border-gray-200 p-4 flex flex-col justify-between h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mt-4 text-xl font-semibold text-teal-800">{course.title}</h3>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FaClock /> Duration: {course.duration}
                </li>
                <li className="flex items-center gap-2">
                  <FaGraduationCap /> Eligibility: {course.eligibility}
                </li>
                <li className="flex items-center gap-2">
                  <FaLaptop /> Mode: {course.mode}
                </li>
                <li className="flex items-center gap-2">
                  <FaCreditCard /> Payment: {course.payment}
                </li>
              </ul>
              <button
                className="mt-6 px-4 py-2 rounded-md font-medium bg-teal-700 text-white hover:bg-teal-600 transition-colors"
              >
                View Program
              </button>
            </motion.div>
          </div>
        ))}
      </Slider>
</div>
     <div className=' w-full h-auto flex justify-center items-center py-20'>
        <div className=' absolute bg-gradient-to-br from-blue-50 to-indigo-100 h-[300vw] w-[300vw] rounded-[150Vw] z-10 translate-y-[48.2%]'></div>
        </div>
    </div>
  );
};

export default CoursesCarousel;
