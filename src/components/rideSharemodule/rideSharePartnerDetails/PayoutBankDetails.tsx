import React from "react";
import Form from 'react-bootstrap/Form';
import Link from "next/link";

const PayoutBankDetails = () => {
  return (
    <div className='payout-bank-detail-sec mt-4'>
        <div className="card-box">
            <div className='row'>
                <div className="col-md-12">
                    <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                        <div className='left-table position-relative'>
                            <h2>Payout Bank Details</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2503H18.3337M5.19416 12.0884C4.80331 12.4801 4.58376 13.0109 4.58366 13.5642V16.5003H7.53808C8.09174 16.5003 8.62249 16.2803 9.01391 15.888L17.7222 7.17506C18.113 6.78327 18.3324 6.25254 18.3324 5.69922C18.3324 5.14591 18.113 4.61518 17.7222 4.22339L16.8624 3.36172C16.6685 3.16771 16.4382 3.01383 16.1848 2.90886C15.9314 2.8039 15.6598 2.74991 15.3855 2.75C15.1112 2.75009 14.8396 2.80424 14.5862 2.90936C14.3329 3.01448 14.1027 3.16851 13.9089 3.36264L5.19416 12.0884Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Edit Details</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label htmlFor="text1">Bank Name</Form.Label>
                        <Form.Select aria-label="Default select example" id='text1'>
                            <option>Select</option>
                            <option value="1">Bank Name </option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label htmlFor="text2">Branch Name</Form.Label>
                        <Form.Select aria-label="Default select example" id='text2'>
                            <option>Select</option>
                            <option value="1">Branch Name </option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label htmlFor="text3">Account Number</Form.Label>
                        <Form.Control type="text" id="text3" aria-describedby="" placeholder='Select' />
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label htmlFor="text4">IFSC Code</Form.Label>
                        <Form.Control type="text" id="text4" aria-describedby="" placeholder='YYYY' />
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label htmlFor="text4">Swift Code</Form.Label>
                        <Form.Control type="text" id="text4" aria-describedby="" placeholder='Select' />
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label htmlFor="text4">IBAN Code</Form.Label>
                        <Form.Control type="text" id="text4" aria-describedby="" placeholder='1234567890SQUCH' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PayoutBankDetails