import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
import RupayCardOffer from './RupayCardOffer'
const PageRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/rupay_card_offer' element={<RupayCardOffer />} />
    </Routes>
    </>
  )
}

export default PageRoutes
