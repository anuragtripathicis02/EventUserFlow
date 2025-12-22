'use client'
import React from 'react'
import TopDetailsBox from './TopDetailsBox'
import PendingVerifications from './PendingVerifications'
import TopRatedPartners from './TopRatedPartners'
import BarChart from './BarChart'
import TotalRidesChart from './TotalRidesChart'
import RidesChart from './RidesChart'
import TotalOrdersCard from './TotalOrdersCard'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className='dashboard-details'>
        <div className='dashboard-pages-heading'>
            <div className='page-details'>
               <h2>Dashboard</h2>
            </div>
        </div>
        <div className='top-dashboard mb-4'>
          <TopDetailsBox />
        </div>
        <div className='bottom-dashboard-box'>
          <div className='row'>
            <div className=' col-md-12'>
                <PendingVerifications />
            </div>
            <div className='col-xl-7 col-md-12'>
              <div className='chart-ride mt-4'>
                  <div className='card-box'>
                    <BarChart />
                  </div>
              </div>
            </div>
            <div className='col-xl-5 col-md-12'> 
                <div className='chart-ride mt-4'>
                    <div className='card-box'>
                        <TotalRidesChart />
                    </div>
                </div>
            </div>
            <div className='col-xl-7 col-md-12'>
              <div className='chart-ride mt-4'>
                <TopRatedPartners />
              </div>
            </div>
            <div className='col-xl-5 col-md-12'>
              <div className='cart-box mt-4'>
                <div className='card-box'>
                  <RidesChart />
                </div>
              </div>
              <div className='cart-box mt-4'>
                <div className='card-box'>
                  <TotalOrdersCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home