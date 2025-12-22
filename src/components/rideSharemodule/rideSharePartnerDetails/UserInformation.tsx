'use client'
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import LanguageSwitcher from "../LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import '../../../app/flags.css'
import CardFromImg from '../../../../public/images/card-from-img.png'


const UserInformation = () => {
  return (
    <div className="user-information-sec">
        <div className="card-box mb-4">
            <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                <div className='left-table position-relative'>
                    <h2>Basic User Details</h2>
                </div>
                <div className='right-box'>
                    <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2503H18.3337M5.19416 12.0884C4.80331 12.4801 4.58376 13.0109 4.58366 13.5642V16.5003H7.53808C8.09174 16.5003 8.62249 16.2803 9.01391 15.888L17.7222 7.17506C18.113 6.78327 18.3324 6.25254 18.3324 5.69922C18.3324 5.14591 18.113 4.61518 17.7222 4.22339L16.8624 3.36172C16.6685 3.16771 16.4382 3.01383 16.1848 2.90886C15.9314 2.8039 15.6598 2.74991 15.3855 2.75C15.1112 2.75009 14.8396 2.80424 14.5862 2.90936C14.3329 3.01448 14.1027 3.16851 13.9089 3.36264L5.19416 12.0884Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>Edit Details</span>
                    </Link>
                </div>
            </div>
            <div className='card-form-box'>
                <div className='row'>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">First Name</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Ade' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text2">Last Name</Form.Label>
                            <Form.Control type="text" id="text2" aria-describedby="" placeholder='Quansah' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4 '>
                        <div className="form-group">
                            <Form.Label htmlFor="text3">Phone Number</Form.Label>
                            <Form.Control type="text" id="text3" aria-describedby="" placeholder='+233 12345 12345' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text4">Email Address</Form.Label>
                            <Form.Control type="text" id="text4" aria-describedby="" placeholder='adequansah@gmial.com' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text5">Gender</Form.Label>
                            <Form.Select aria-label="Default select example" id='text5'>
                                <option>Male</option>
                                <option value="1">Female</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4 '>
                        <div className="form-group">
                            <Form.Label htmlFor="text3">Member Type</Form.Label>
                            <Form.Control type="text" id="text3" aria-describedby="" placeholder='Taxi Partner' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4 '>
                        <div className="form-group">
                            <Form.Label htmlFor="text3">Date of Birth</Form.Label>
                            <Form.Control type="text" id="text3" aria-describedby="" placeholder='23-04-1996' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4 '>
                        <div className="form-group">
                            <Form.Label htmlFor="text3">City</Form.Label>
                            <Form.Control type="text" id="text3" aria-describedby="" placeholder='Kumasi' />
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4 position-relative'>
                        <div className="flag-box form-group country-flag">
                            <Form.Label htmlFor="text3">Country</Form.Label>
                            <div className="d-flex border-outer">
                                <LanguageSwitcher />
                                <div className="flex-grow-1">
                                    <Form.Control type="text" id="text3" aria-describedby="" placeholder='12345 12345' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-6 col-md-12 mb-4 '>
                        <div className="form-group">
                            <Form.Label htmlFor="text3">Postal Code</Form.Label>
                            <Form.Control type="text" id="text3" aria-describedby="" placeholder='AK-039-5028' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text4">Full Address</Form.Label>
                            <Form.Control type="text" id="text4" aria-describedby="" placeholder='House number, Street, Area, Landmark...' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-box">
            <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                <div className='left-table position-relative'>
                    <h2>Vehicle Information</h2>
                </div>
                <div className='right-box'>
                    <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2503H18.3337M5.19416 12.0884C4.80331 12.4801 4.58376 13.0109 4.58366 13.5642V16.5003H7.53808C8.09174 16.5003 8.62249 16.2803 9.01391 15.888L17.7222 7.17506C18.113 6.78327 18.3324 6.25254 18.3324 5.69922C18.3324 5.14591 18.113 4.61518 17.7222 4.22339L16.8624 3.36172C16.6685 3.16771 16.4382 3.01383 16.1848 2.90886C15.9314 2.8039 15.6598 2.74991 15.3855 2.75C15.1112 2.75009 14.8396 2.80424 14.5862 2.90936C14.3329 3.01448 14.1027 3.16851 13.9089 3.36264L5.19416 12.0884Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>Edit Details</span>
                    </Link>
                </div>
            </div>
            <div className='card-form-box card-form-bottom'>
                <div className='row'>
                    <div className="col-xxl-3 col-xl-5 col-md-12 mb-xl-0 mb-4">
                        <div className="card-img-left-box">
                            <Image src={CardFromImg} alt="" className="w-100 d-vblock object-cover h-auto"/>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-xl-7 col-md-12">
                        <div className="row">
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                                <div className="form-group">
                                    <Form.Label htmlFor="text1">Vehicle Type</Form.Label>
                                    <Form.Control type="text" id="text1" aria-describedby="" placeholder='Squch Basic' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                                <div className="form-group">
                                    <Form.Label htmlFor="text2">Vehicle Company</Form.Label>
                                    <Form.Control type="text" id="text2" aria-describedby="" placeholder='ISUZU' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 '>
                                <div className="form-group">
                                    <Form.Label htmlFor="text3">Model Name</Form.Label>
                                    <Form.Control type="text" id="text3" aria-describedby="" placeholder='Carrier-xl' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                                <div className="form-group">
                                    <Form.Label htmlFor="text4">Vehicle Year</Form.Label>
                                    <Form.Control type="text" id="text4" aria-describedby="" placeholder='2018' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 '>
                                <div className="form-group">
                                    <Form.Label htmlFor="text3">Vehicle Color</Form.Label>
                                    <Form.Control type="text" id="text3" aria-describedby="" placeholder='White' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 '>
                                <div className="form-group">
                                    <Form.Label htmlFor="text3">VIN Number</Form.Label>
                                    <Form.Control type="text" id="text3" aria-describedby="" placeholder='1234567890SQUCH' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 '>
                                <div className="form-group">
                                    <Form.Label htmlFor="text3">Licence Plate Number</Form.Label>
                                    <Form.Control type="text" id="text3" aria-describedby="" placeholder='AK-039-5028' />
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 '>
                                <div className="form-group">
                                    <Form.Label htmlFor="text3">Child Car Seat</Form.Label>
                                    <Form.Control type="text" id="text3" aria-describedby="" placeholder='01' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInformation