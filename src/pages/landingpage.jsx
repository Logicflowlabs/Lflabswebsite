import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingCard from '../components/landingcard'
import Cards from '../components/card'
import LandingCardSec from '../components/landingimage'

const Landingpage = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <LandingCardSec />
            <LandingCard />
          <div className="mt-8 mb-8">  <Cards /> </div>
            <Footer />
        </div>
    </div>
  )
}

export default Landingpage 