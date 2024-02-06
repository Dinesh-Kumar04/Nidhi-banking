import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
import RupayCardOffer from './RupayCardOffer'
import Services from './Services'
import Advances from './Advances'
import Deposit from './Deposit'
import Interest from './Interest'
import Download from './Download'
import ContactUs from './ContactUs'

// Import About pages
import AboutBankHistory from './About/AboutBankHistory'
import AboutChairman from './About/AboutChairman'
import AboutBoardOfDirectors from './About/AboutBoardOfDirectors'
import AboutManagement from './About/AboutManagement'
import AboutFinancialStrength from './About/AboutFinancialStrength'
import AboutPhotoGallery from './About/AboutPhotoGallery'
import AboutKnowYourBank from './About/AboutKnowYourBank'

const PageRoutes = () => {
  return (
    <>
    {/* Main page routes */}
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/advances' element={<Advances />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/interest' element={<Interest />} />
        <Route path='/download' element={<Download />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/rupay_card_offer' element={<RupayCardOffer />} />
    </Routes>

    {/* About page routes */}
    <Routes>
        <Route path='/bank_history' element={<AboutBankHistory />} />
        <Route path='/chairman_message' element={<AboutChairman />} />
        <Route  path='/board_of_directors' element={<AboutBoardOfDirectors />} />
        <Route  path='/management' element={<AboutManagement />} />
        <Route  path='/financial_strength' element={<AboutFinancialStrength />} />
        <Route  path='/photo_gallery' element={<AboutPhotoGallery />} />
        <Route  path='/know_your_bank' element={<AboutKnowYourBank />} />
    </Routes>
    </>
  )
}

export default PageRoutes
