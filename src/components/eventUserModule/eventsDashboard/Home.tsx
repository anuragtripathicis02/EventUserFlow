'use client'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/Footer';
import TopDetailsBox from './TopDetailsBox';
import PendingVerifications from './PendingVerifications';
import AdminEarning from './AdminEarning';
import TopRatedPartners from './TopRatedPartners';
import RidesChart from './RidesChart';


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
                    <AdminEarning />
              </div>
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
            </div>
          </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Home