import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import LanguageSwitcher from "../LanguageSwitcher";
import { Image } from "react-bootstrap";
import FileUpload from "./FileUpload";

const PayoutBankDetails = () => {
  return (
    <div className='basic-details-sec'>
    <div className='card-box'>
        <div className='table-top d-flex align-items-center justify-content-between gap-3'>
            <div className='left-table  position-relative'>
                <h2>Payout Bank Details</h2>
            </div>
            <div className='right-box'>
                <div className='tabs-progress'>
                    <h3><span>0</span> / 100%</h3>
                    <ul className="list-unstyled d-flex align-items-center progress-list-box">
                        <li className='active-progress'>
                            <span className="bar"></span>
                        </li>
                        <li className='active-progress'><span className="bar"></span></li>
                        <li className='active-progress'><span className="bar"></span></li>
                        <li className='active-progress'><span className="bar"></span></li>
                        <li className='active-progress'><span className="bar"></span></li>
                        <li className='active-progress'><span className="bar"></span></li>
                        <li className='active-progress'><span className="bar"></span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='card-form-box'>
            <div className='row'>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label >Payout Method</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">Select</option>
                        </Form.Select>                            
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">Select</option>
                        </Form.Select>  
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label>Branch Name</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">Select</option>
                        </Form.Select>  
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="text" aria-describedby="" placeholder='Account' />
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control type="text" aria-describedby="" placeholder='Account' />  
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label>Swift Code</Form.Label>
                        <Form.Control type="text" aria-describedby="" placeholder='Select' />
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                    <div className="form-group">
                        <Form.Label>IBAN Code</Form.Label>
                        <Form.Control type="text" aria-describedby="" placeholder='1234567890SQUCH' />
                    </div>
                </div>
                

                

            </div>
        </div>
        <div className="card-footer border-top pt-4">
            <div className="d-flex gap-3 justify-content-end">
                <button className="btn btn-grey">Update Info</button>
                <button className="btn btn-secondary">Save & Next</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default PayoutBankDetails
