import React from "react";
import Slider from "react-slick";
import { FaClock, FaGraduationCap, FaLaptop, FaCreditCard } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Financial Management",
    image: "/images/finance.jpg",
    duration: "2 year | 4 semester",
    approval: "UGC-entitled degree programme",
    mode: "Online (Live/Recorded Lectures)",
    payment: "EMI options available",
    highlighted: true,
  },
  {
    title: "International Trade Management",
    image: "/images/trade.jpg",
    duration: "2 year | 4 semester",
    approval: "UGC-entitled degree programme",
    mode: "Online (Live/Recorded Lectures)",
    payment: "EMI options available",
  },
  {
    title: "Fintech Management",
    image: "/images/fintech.jpg",
    duration: "2 year | 4 semester",
    approval: "UGC-entitled degree programme",
    mode: "Online (Live/Recorded Lectures)",
    payment: "EMI options available",
  },
  {
    title: "Supply Chain Management",
    image: "/images/supply.jpg",
    duration: "2 year | 4 semester",
    approval: "UGC-entitled degree programme",
    mode: "Online (Live/Recorded Lectures)",
    payment: "EMI options available",
  },
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden shadow-lg border ${
        course.highlighted ? "bg-teal-900 text-white" : "bg-white text-gray-800 border-gray-200"
      } p-4 flex flex-col justify-between h-full`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded-md" />
      <h3 className={`mt-4 text-xl font-semibold ${
        course.highlighted ? "text-yellow-400" : "text-teal-800"
      }`}>{course.title}</h3>
      <ul className="mt-4 flex-1 space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <FaClock /> Duration: {course.duration}
        </li>
        <li className="flex items-center gap-2">
          <FaGraduationCap /> Approved: {course.approval}
        </li>
        <li className="flex items-center gap-2">
          <FaLaptop /> Mode: {course.mode}
        </li>
        <li className="flex items-center gap-2">
          <FaCreditCard /> Payment: {course.payment}
        </li>
      </ul>
      <button
        className={`mt-6 px-4 py-2 rounded-md font-medium transition-colors ${
          course.highlighted
            ? "bg-yellow-400 text-teal-900 hover:bg-yellow-300"
            : "bg-teal-700 text-white hover:bg-teal-600"
        }`}
      >
        View Program
      </button>
    </motion.div>
  );
};

export default function CourseCarousel() {
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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
        Discover in-demand courses across industries
      </h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="px-2 h-full">
            <CourseCard course={course} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
