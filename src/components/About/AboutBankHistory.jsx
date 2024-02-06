import React from 'react'
import AboutSideNav from './AboutSideNav'
import AboutBanner from './AboutBanner'

const AboutBankHistory = () => {
  return (
    <div className='about-container'>
      <AboutBanner imageUrl='images/about/banner.png' h4='Bank History' imageAlt='bank-history-banner' />
      <div className="about-section-2">
        <AboutSideNav />
        <div className="about-company-section">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit ex quasi assumenda esse maiores laboriosam quae, velit eius exercitationem ab deleniti sapiente quas possimus optio unde adipisci asperiores. Ea nostrum aperiam pariatur atque voluptas dolorum suscipit quibusdam consequuntur! Dolorem maxime voluptatem rerum dolorum laborum officia ea, amet excepturi corrupti modi obcaecati aspernatur tempore odio pariatur reiciendis aliquam ullam neque voluptates aut iste ratione autem adipisci numquam! Nesciunt pariatur mollitia similique officiis. Magni optio dignissimos, quia culpa dolore rem obcaecati nisi nihil, deserunt illo pariatur itaque ducimus omnis corrupti quisquam repellendus aut? Ipsa nam maiores impedit accusantium provident quod dignissimos. Similique vero perferendis nam quaerat odio porro sit, alias iure? Quasi aliquid cupiditate commodi impedit laudantium quas odio provident necessitatibus.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutBankHistory
