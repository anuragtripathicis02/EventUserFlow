import React from 'react'
import AdminEarning from './AdminEarning'
import EarningReport from './EarningReport'
import PayoutBankDetails from './PayoutBankDetails'

const FinancialDetails = () => {
  return (
    <div className='inner-financial-detail'>
        <div className='row'>
            <div className='col-lg-7 col-md-12'>
                <div className='admin-earning-box'>
                    <AdminEarning />
                </div>
            </div>
            <div className='col-lg-5 col-md-12 mt-lg-0 mt-4'>
                <div className='earning-report-box'>
                    <EarningReport />
                </div>
            </div>
            <div className='col-lg-12 col-md-12'>
                <div className='earning-report-box'>
                   <PayoutBankDetails />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinancialDetails