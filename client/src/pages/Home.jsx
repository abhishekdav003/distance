import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
// import CourseCarousel from '../components/home/CourseCarousel.jsx'
import CoursesCarousel from '../components/home/CoursesCarousel.jsx'
import UniversityCarousel from '../components/home/UniversityCarousel.jsx'

const Home = () => {
  return (
    <div>
        <HeroSection />
        {/* <CourseCarousel /> */}
        <CoursesCarousel />
        <UniversityCarousel />
    </div>
  )
}

export default Home