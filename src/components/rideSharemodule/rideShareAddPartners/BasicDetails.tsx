import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import LanguageSwitcher from "../LanguageSwitcher";
import { Image } from "react-bootstrap";

const BasicDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [passwordVisibility, setPasswordVisibility] = useState({
        password1: false,
        password2: false,
        password3: false
    });

    // Toggle function
    const togglePasswordVisibility = (field) => {
        setPasswordVisibility(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };
    return (
        <div className='basic-details-sec'>
            <div className='card-box'>
                <div className='table-top d-flex align-items-center justify-content-between gap-3'>
                    <div className='left-table  position-relative'>
                        <h2>Add User Basic Details</h2>
                    </div>
                    <div className='right-box'>
                        <div className='tabs-progress'>
                            <h3><span>0</span> / 100%</h3>
                            <ul className="list-unstyled d-flex align-items-center progress-list-box">
                                <li className='active-progress'>
                                    <span className="bar"></span>
                                </li>
                                <li><span className="bar"></span></li>
                                <li><span className="bar"></span></li>
                                <li><span className="bar"></span></li>
                                <li><span className="bar"></span></li>
                                <li><span className="bar"></span></li>
                                <li><span className="bar"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card-form-box'>
                    <div className='row'>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group">
                                <Form.Label htmlFor="text1">First Name</Form.Label>
                                <Form.Control type="text" id="text1" aria-describedby="" placeholder='John' />
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group">
                                <Form.Label htmlFor="text2">Last Name</Form.Label>
                                <Form.Control type="text" id="text2" aria-describedby="" placeholder='Smith' />
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 position-relative'>
                            <div className="flag-box form-group">
                                <Form.Label htmlFor="text3">Phone Number</Form.Label>
                                <div className="d-flex border-outer">
                                    <LanguageSwitcher />
                                    <div className="flex-grow-1">
                                        <Form.Control type="text" id="text3" aria-describedby="" placeholder='12345 12345' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group">
                                <Form.Label htmlFor="text4">Email Address</Form.Label>
                                <Form.Control type="text" id="text4" aria-describedby="" placeholder='Johnsmith1001@gmail.com' />
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group">
                                <Form.Label htmlFor="text5">Gender</Form.Label>
                                <Form.Select aria-label="Default select example" id='text5'>
                                    <option>Male</option>
                                    <option value="1">Female</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group position-relative filed-datePicker">
                                <Form.Label htmlFor="text6">Date of Birth</Form.Label>
                                <div className="d-flex">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id='text6' />
                                    <span className="icon-datepicker">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11C1 7.229 1 5.343 2.172 4.172C3.344 3.001 5.229 3 9 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H9C5.229 21 3.343 21 2.172 19.828C1.001 18.656 1 16.771 1 13V11Z" stroke="#838383" stroke-width="1.5" /><path d="M6 3V1.5M16 3V1.5M1.5 8H20.5" stroke="#838383" stroke-width="1.5" stroke-linecap="round" /><path d="M17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16ZM17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13C15.7348 13 15.4804 12.8946 15.2929 12.7071C15.1054 12.5196 15 12.2652 15 12C15 11.7348 15.1054 11.4804 15.2929 11.2929C15.4804 11.1054 15.7348 11 16 11C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12ZM12 16C12 16.2652 11.8946 16.5196 11.7071 16.7071C11.5196 16.8946 11.2652 17 11 17C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15C11.2652 15 11.5196 15.1054 11.7071 15.2929C11.8946 15.4804 12 15.7348 12 16ZM12 12C12 12.2652 11.8946 12.5196 11.7071 12.7071C11.5196 12.8946 11.2652 13 11 13C10.7348 13 10.4804 12.8946 10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929C10.4804 11.1054 10.7348 11 11 11C11.2652 11 11.5196 11.1054 11.7071 11.2929C11.8946 11.4804 12 11.7348 12 12ZM7 16C7 16.2652 6.89464 16.5196 6.70711 16.7071C6.51957 16.8946 6.26522 17 6 17C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16C5 15.7348 5.10536 15.4804 5.29289 15.2929C5.48043 15.1054 5.73478 15 6 15C6.26522 15 6.51957 15.1054 6.70711 15.2929C6.89464 15.4804 7 15.7348 7 16ZM7 12C7 12.2652 6.89464 12.5196 6.70711 12.7071C6.51957 12.8946 6.26522 13 6 13C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12Z" fill="#838383" /></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group">
                                <Form.Label htmlFor="text6">Member type</Form.Label>
                                <Form.Select aria-label="Default select example" id='text6'>
                                    <option>Delivery Partner</option>
                                    <option value="1">Delivery Partner 1</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group position-relative password-fild">
                                <span className={`password-indicator password-strong d-flex position-absolute top-0 right-0 align-items-center gap-1`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><g clip-path="url(#a)"><mask id="b" width="12" height="12" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="2" d="M6 11a4.984 4.984 0 0 0 3.536-1.464A4.984 4.984 0 0 0 11 6a4.984 4.984 0 0 0-1.464-3.535A4.985 4.985 0 0 0 6 1a4.985 4.985 0 0 0-3.535 1.465A4.985 4.985 0 0 0 1 6a4.985 4.985 0 0 0 1.465 3.536A4.984 4.984 0 0 0 6 11Z" /><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6 1.5 1.5 3-3" /></mask><g mask="url(#b)"><path fill="#20A66A" d="M0 0h12v12H0V0Z" /></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z" /></clipPath></defs></svg>
                                    Good Password
                                </span>
                                <Form.Label htmlFor="text7">Create Password</Form.Label>
                                <div className="password-field-box position-relative">
                                    <Form.Control
                                        type={passwordVisibility.password1 ? 'text' : 'password'}
                                        id="password1"
                                        placeholder="Password@01"
                                    />
                                    <span
                                        className={`show-pw password-container  ${passwordVisibility.password1 ? 'hide-pw' : ''}`}
                                        onClick={() => togglePasswordVisibility('password1')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Image
                                            src={passwordVisibility.password1 ? '/images/eye.png' : '/images/eye-slash.png'}
                                            alt={passwordVisibility.password1 ? 'Show Password' : 'Hide Password'}
                                            width="24"
                                            height="24"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group position-relative password-fild">
                                <span className={`password-indicator password-worng d-flex position-absolute top-0 right-0 align-items-center gap-1`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_921_26312)">
                                            <mask id="mask0_921_26312" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8.25 3.75L3.75 8.25M3.75 3.75L8.25 8.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </mask>
                                            <g mask="url(#mask0_921_26312)">
                                                <path d="M0 0H12V12H0V0Z" fill="#E03C22" />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_921_26312">
                                                <rect width="12" height="12" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Doesn’t Match
                                </span>
                                <Form.Label htmlFor="text7">Confirm Password</Form.Label>
                                <div className="password-field-box invalid-error position-relative">
                                    <Form.Control
                                        type={passwordVisibility.password2 ? 'text' : 'password'}
                                        id="password2"
                                        placeholder="Password@01"
                                    />
                                    <span
                                        className={`show-pw password-container  ${passwordVisibility.password2 ? 'hide-pw' : ''}`}
                                        onClick={() => togglePasswordVisibility('password2')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Image
                                            src={passwordVisibility.password2 ? '/images/eye.png' : '/images/eye-slash.png'}
                                            alt={passwordVisibility.password2 ? 'Show Password' : 'Hide Password'}
                                            width="24"
                                            height="24"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4 position-relative'>
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
                        <div className='col-xxl-4 col-xl-6 col-md-12 mb-4'>
                            <div className="form-group">
                            <Form.Label htmlFor="text10">City</Form.Label>
                            <Form.Select aria-label="Default select example" id='text10'>
                                <option>Kumasi</option>
                                <option value="1">Kumasi new</option>
                            </Form.Select>
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

export default BasicDetails