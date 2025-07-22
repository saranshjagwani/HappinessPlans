

import PopularTours from "../components/PopularTours"
import HeroCarousel from "../components/HeroCarousel"
import React from 'react'
import TestimonialsSection from "../components/TestimonalSection"

const Home = () => {
  return (
    <div>
      <HeroCarousel/>
      <PopularTours/>
      <TestimonialsSection/>
    </div>
  )
}

export default Home