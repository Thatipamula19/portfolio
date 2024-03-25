import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Navbar from './navBar/NavBar'
import Experiences from './experience/Experiences'
import ProfExp from './profExp/ProfExp'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

const HomePage = () => {
  return (
      <>
          <Navbar />
          <HeroSection />
          <Experiences />
          <ProfExp />
          <Contact />
          <Footer />
      </>
  )
}

export default HomePage
