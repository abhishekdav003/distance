import React from 'react'
import HeroSection from '../components/home/HeroSection'
import CourseCarousel from '../components/home/CourseCarousel'
import CoursesCarousel from '../components/home/CoursesCarousel'
import UniversityCarousel from '../components/home/UniversityCarousel'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <CourseCarousel />
        <CoursesCarousel />
        <UniversityCarousel />
    </div>
  )
}

export default Home