import React from 'react'
import '../css/LandingPage.css'
import ServicesImageBox from './ServicesImageBox'
import IconBox from './IconBox'

const LandingPage = () => {

  const serviceImages = [
    'images/landing/section-3-img-1.png',
    'images/landing/section-3-img-2.png',
    'images/landing/section-3-img-3.png',
    'images/landing/section-3-img-4.png'
  ]

  const data = [
    {
      imageUrl: 'images/landing/icon-1.png',
      tittle: 1400,
      paraTag: 'Share Capital'
    },
    {
      imageUrl: 'images/landing/icon-2.png',
      tittle: 4230,
      paraTag: 'Deposit (in lakh)'
    },
    {
      imageUrl: 'images/landing/icon-3.png',
      tittle: 200,
      paraTag: 'Net Profit (in lakh)'
    },
    {
      imageUrl: 'images/landing/icon-4.png',
      tittle: 4890,
      paraTag: 'Advances (in lakh)'
    },
    {
      imageUrl: 'images/landing/icon-5.png',
      tittle: '12.5%',
      paraTag: 'Interest rate'
    },
    {
      imageUrl: 'images/landing/icon-6.png',
      tittle: '500,000',
      paraTag: 'Fund Reserve'
    },
    {
      imageUrl: 'images/landing/icon-7.png',
      tittle: 45,
      paraTag: 'Loan Approved'
    },
    {
      imageUrl: 'images/landing/icon-8.png',
      tittle: '8%',
      paraTag: 'Efficiency Rate'
    }
  ]
  return (
    <div className='landing-container'>
      <div className="banner-section">
        <img src="images/landing/banner.png" alt="banner-img" />
        <div className="banner-text">
          <h1>Vehicle Loan</h1>
          <h3>Buying Your Dream Car</h3>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-text">
          <h2>Welcome To DemoApp Pvt Ltd.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt voluptate commodi aspernatur, tempore cumque eum. Assumenda dicta fugiat aliquid harum molestias! Facere minima qui incidunt quisquam, maiores unde voluptatem!</p>
          <button>Read More</button>
        </div>
        <img src="images/landing/info-img.png" alt="company-img" />
      </div>
      <div className="section-3">
        <div className="section-3-heading">
          <h3>Banking Products</h3>
          <div className="section-3-heading-buttons">
            <button>Services</button>
            <button>Advances</button>
            <button>Deposit</button>
          </div>
        </div>
        <div className="section-3-img-boxes">
          {
            serviceImages.map((items, index)=>{
              return(
                <ServicesImageBox imagePath={items} id={index} />
              )
            })
          }
        </div>
      </div>
      <div className="section-4">
        <h3>Financial Strength: 2021-22</h3>
        <div className="section-4-boxes">
          {
            data.map((item, index) => {
              return (
                <IconBox id={index} imagePath={item.imageUrl} iconTitle={item.tittle} iconParaTag={item.paraTag} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LandingPage
