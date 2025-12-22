
import React from 'react'
import Form from 'react-bootstrap/Form';
import Image from "next/image";
import Link from 'next/link';
import CardInentity from '../../../../public/images/card-inentity.png'
import Licence from '../../../../public/images/Licence.png'
import Registration from '../../../../public/images/registration.png'

const Documents = () => {
  return (
    <div className='document-tabs-sec'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='document-box card-box'>
                    <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                        <div className='left-table position-relative'>
                            <h2>User ID Proof</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3337 10.0827C18.1095 8.46952 17.3611 6.97485 16.2039 5.82886C15.0467 4.68288 13.5448 3.94917 11.9295 3.74075C10.3143 3.53233 8.67531 3.86077 7.26509 4.67547C5.85487 5.49017 4.75164 6.74593 4.12533 8.24932M3.66699 4.58266V8.24932H7.33366M3.66699 11.916C3.89117 13.5291 4.63951 15.0238 5.79674 16.1698C6.95397 17.3158 8.45588 18.0495 10.0711 18.2579C11.6864 18.4663 13.3253 18.1379 14.7356 17.3232C16.1458 16.5085 17.249 15.2527 17.8753 13.7493M18.3337 17.416V13.7493H14.667" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Change</span>
                            </Link>
                        </div>
                    </div>
                    <div className='document-bottom-box'>
                        <div className='img-box verified-box position-relative'>
                            <Image src={CardInentity} alt='' />
                            <div className='Verified-text position-absolute d-flex align-content-center gap-1'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.30033 8.46693L6.36699 7.53359C6.23366 7.40026 6.0781 7.33359 5.90033 7.33359C5.72255 7.33359 5.56699 7.40026 5.43366 7.53359C5.30033 7.66693 5.23366 7.82537 5.23366 8.00893C5.23366 8.19248 5.30033 8.35071 5.43366 8.48359L6.83366 9.90026C6.96699 10.0336 7.12255 10.1003 7.30033 10.1003C7.4781 10.1003 7.63366 10.0336 7.76699 9.90026L10.6003 7.06693C10.7337 6.93359 10.8003 6.77537 10.8003 6.59226C10.8003 6.40915 10.7337 6.25071 10.6003 6.11693C10.467 5.98315 10.3088 5.91648 10.1257 5.91693C9.94255 5.91737 9.7841 5.98404 9.65033 6.11693L7.30033 8.46693ZM8.00033 14.6003C7.92255 14.6003 7.85033 14.5947 7.78366 14.5836C7.71699 14.5725 7.65033 14.5558 7.58366 14.5336C6.08366 14.0336 4.88921 13.1087 4.00033 11.7589C3.11144 10.4092 2.66699 8.95626 2.66699 7.40026V4.25026C2.66699 3.97248 2.74766 3.72248 2.90899 3.50026C3.07033 3.27804 3.27855 3.11693 3.53366 3.01693L7.53366 1.51693C7.68921 1.46137 7.84477 1.43359 8.00033 1.43359C8.15588 1.43359 8.31144 1.46137 8.46699 1.51693L12.467 3.01693C12.7225 3.11693 12.931 3.27804 13.0923 3.50026C13.2537 3.72248 13.3341 3.97248 13.3337 4.25026V7.40026C13.3337 8.95582 12.8892 10.4087 12.0003 11.7589C11.1114 13.1091 9.91699 14.034 8.41699 14.5336C8.35033 14.5558 8.28366 14.5725 8.21699 14.5836C8.15033 14.5947 8.0781 14.6003 8.00033 14.6003Z" fill="#20A66A"/></svg>
                                <span>Verified</span>
                            </div>
                        </div>
                        <div className='text-box mt-3'>      
                            <div className="form-group">
                                <Form.Label htmlFor="text1">VIN Number</Form.Label>
                                <Form.Control type="text" id="text1" aria-describedby="" placeholder='1234567890SQUCH' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 mt-md-0 mt-4'>
                <div className='document-box card-box'>
                    <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                        <div className='left-table position-relative'>
                            <h2>Driving Licence</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3337 10.0827C18.1095 8.46952 17.3611 6.97485 16.2039 5.82886C15.0467 4.68288 13.5448 3.94917 11.9295 3.74075C10.3143 3.53233 8.67531 3.86077 7.26509 4.67547C5.85487 5.49017 4.75164 6.74593 4.12533 8.24932M3.66699 4.58266V8.24932H7.33366M3.66699 11.916C3.89117 13.5291 4.63951 15.0238 5.79674 16.1698C6.95397 17.3158 8.45588 18.0495 10.0711 18.2579C11.6864 18.4663 13.3253 18.1379 14.7356 17.3232C16.1458 16.5085 17.249 15.2527 17.8753 13.7493M18.3337 17.416V13.7493H14.667" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Change</span>
                            </Link>
                        </div>
                    </div>
                    <div className='document-bottom-box'>
                        <div className='img-box position-relative'>
                            <Image src={Licence} alt='' />
                        </div>
                        <div className='text-box mt-3 d-flex flex-lg-nowrap flex-wrap align-items-end gap-2'> 
                            <div className='form-box'>
                                <div className="form-group">
                                    <Form.Label htmlFor="text1">VIN Number</Form.Label>
                                    <Form.Control type="text" id="text1" aria-describedby="" placeholder='1234567890SQUCH' />
                                </div>
                            </div>
                            <div className='btn-box'>
                                <Link href="" className='btn btn-grey d-flex justify-content-center  align-items-center gap-2'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.95 12.6984L9.55 11.2984C9.35 11.0984 9.11667 10.9984 8.85 10.9984C8.58333 10.9984 8.35 11.0984 8.15 11.2984C7.95 11.4984 7.85 11.7361 7.85 12.0114C7.85 12.2868 7.95 12.5241 8.15 12.7234L10.25 14.8484C10.45 15.0484 10.6833 15.1484 10.95 15.1484C11.2167 15.1484 11.45 15.0484 11.65 14.8484L15.9 10.5984C16.1 10.3984 16.2 10.1611 16.2 9.88644C16.2 9.61177 16.1 9.3741 15.9 9.17344C15.7 8.97277 15.4627 8.87277 15.188 8.87344C14.9133 8.8741 14.6757 8.9741 14.475 9.17344L10.95 12.6984ZM12 21.8984C11.8833 21.8984 11.775 21.8901 11.675 21.8734C11.575 21.8568 11.475 21.8318 11.375 21.7984C9.125 21.0484 7.33333 19.6611 6 17.6364C4.66667 15.6118 4 13.4324 4 11.0984V6.37344C4 5.95677 4.121 5.58177 4.363 5.24844C4.605 4.9151 4.91733 4.67344 5.3 4.52344L11.3 2.27344C11.5333 2.1901 11.7667 2.14844 12 2.14844C12.2333 2.14844 12.4667 2.1901 12.7 2.27344L18.7 4.52344C19.0833 4.67344 19.396 4.9151 19.638 5.24844C19.88 5.58177 20.0007 5.95677 20 6.37344V11.0984C20 13.4318 19.3333 15.6111 18 17.6364C16.6667 19.6618 14.875 21.0491 12.625 21.7984C12.525 21.8318 12.425 21.8568 12.325 21.8734C12.225 21.8901 12.1167 21.8984 12 21.8984Z" fill="#20A66A"/></svg>
                                    <span>Mark As Verified</span>
                                </Link>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 mt-4'>
                <div className='document-box card-box'>
                    <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                        <div className='left-table position-relative'>
                            <h2>Vehicle Insurance</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3337 10.0827C18.1095 8.46952 17.3611 6.97485 16.2039 5.82886C15.0467 4.68288 13.5448 3.94917 11.9295 3.74075C10.3143 3.53233 8.67531 3.86077 7.26509 4.67547C5.85487 5.49017 4.75164 6.74593 4.12533 8.24932M3.66699 4.58266V8.24932H7.33366M3.66699 11.916C3.89117 13.5291 4.63951 15.0238 5.79674 16.1698C6.95397 17.3158 8.45588 18.0495 10.0711 18.2579C11.6864 18.4663 13.3253 18.1379 14.7356 17.3232C16.1458 16.5085 17.249 15.2527 17.8753 13.7493M18.3337 17.416V13.7493H14.667" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Change</span>
                            </Link>
                        </div>
                    </div>
                    <div className='document-bottom-box'>
                        <div className='img-box position-relative'>
                            <Image src={Licence} alt='' />
                        </div>
                        <div className='text-box mt-3 d-flex flex-lg-nowrap flex-wrap align-items-end gap-2'> 
                            <div className='form-box'>
                                <div className="form-group">
                                    <Form.Label htmlFor="text1">VIN Number</Form.Label>
                                    <Form.Control type="text" id="text1" aria-describedby="" placeholder='1234567890SQUCH' />
                                </div>
                            </div>
                            <div className='btn-box'>
                                <Link href="" className='btn btn-grey d-flex justify-content-center  align-items-center gap-2'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.95 12.6984L9.55 11.2984C9.35 11.0984 9.11667 10.9984 8.85 10.9984C8.58333 10.9984 8.35 11.0984 8.15 11.2984C7.95 11.4984 7.85 11.7361 7.85 12.0114C7.85 12.2868 7.95 12.5241 8.15 12.7234L10.25 14.8484C10.45 15.0484 10.6833 15.1484 10.95 15.1484C11.2167 15.1484 11.45 15.0484 11.65 14.8484L15.9 10.5984C16.1 10.3984 16.2 10.1611 16.2 9.88644C16.2 9.61177 16.1 9.3741 15.9 9.17344C15.7 8.97277 15.4627 8.87277 15.188 8.87344C14.9133 8.8741 14.6757 8.9741 14.475 9.17344L10.95 12.6984ZM12 21.8984C11.8833 21.8984 11.775 21.8901 11.675 21.8734C11.575 21.8568 11.475 21.8318 11.375 21.7984C9.125 21.0484 7.33333 19.6611 6 17.6364C4.66667 15.6118 4 13.4324 4 11.0984V6.37344C4 5.95677 4.121 5.58177 4.363 5.24844C4.605 4.9151 4.91733 4.67344 5.3 4.52344L11.3 2.27344C11.5333 2.1901 11.7667 2.14844 12 2.14844C12.2333 2.14844 12.4667 2.1901 12.7 2.27344L18.7 4.52344C19.0833 4.67344 19.396 4.9151 19.638 5.24844C19.88 5.58177 20.0007 5.95677 20 6.37344V11.0984C20 13.4318 19.3333 15.6111 18 17.6364C16.6667 19.6618 14.875 21.0491 12.625 21.7984C12.525 21.8318 12.425 21.8568 12.325 21.8734C12.225 21.8901 12.1167 21.8984 12 21.8984Z" fill="#20A66A"/></svg>
                                    <span>Mark As Verified</span>
                                </Link>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 mt-4'>
                <div className='document-box card-box'>
                    <div className='table-top border-0 pb-0 d-flex align-items-center justify-content-between gap-3'>
                        <div className='left-table position-relative'>
                            <h2>Vehicle Registration</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className="btn btn-border d-flex align-items-center gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3337 10.0827C18.1095 8.46952 17.3611 6.97485 16.2039 5.82886C15.0467 4.68288 13.5448 3.94917 11.9295 3.74075C10.3143 3.53233 8.67531 3.86077 7.26509 4.67547C5.85487 5.49017 4.75164 6.74593 4.12533 8.24932M3.66699 4.58266V8.24932H7.33366M3.66699 11.916C3.89117 13.5291 4.63951 15.0238 5.79674 16.1698C6.95397 17.3158 8.45588 18.0495 10.0711 18.2579C11.6864 18.4663 13.3253 18.1379 14.7356 17.3232C16.1458 16.5085 17.249 15.2527 17.8753 13.7493M18.3337 17.416V13.7493H14.667" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Change</span>
                            </Link>
                        </div>
                    </div>
                    <div className='document-bottom-box'>
                        <div className='img-box position-relative'>
                            <Image src={Registration} alt='' />
                        </div>
                        <div className='text-box mt-3 d-flex flex-lg-nowrap flex-wrap align-items-end gap-2'> 
                            <div className='form-box'>
                                <div className="form-group">
                                    <Form.Label htmlFor="text1">VIN Number</Form.Label>
                                    <Form.Control type="text" id="text1" aria-describedby="" placeholder='1234567890SQUCH' />
                                </div>
                            </div>
                            <div className='btn-box'>
                                <Link href="" className='btn btn-grey d-flex justify-content-center align-items-center gap-2'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.95 12.6984L9.55 11.2984C9.35 11.0984 9.11667 10.9984 8.85 10.9984C8.58333 10.9984 8.35 11.0984 8.15 11.2984C7.95 11.4984 7.85 11.7361 7.85 12.0114C7.85 12.2868 7.95 12.5241 8.15 12.7234L10.25 14.8484C10.45 15.0484 10.6833 15.1484 10.95 15.1484C11.2167 15.1484 11.45 15.0484 11.65 14.8484L15.9 10.5984C16.1 10.3984 16.2 10.1611 16.2 9.88644C16.2 9.61177 16.1 9.3741 15.9 9.17344C15.7 8.97277 15.4627 8.87277 15.188 8.87344C14.9133 8.8741 14.6757 8.9741 14.475 9.17344L10.95 12.6984ZM12 21.8984C11.8833 21.8984 11.775 21.8901 11.675 21.8734C11.575 21.8568 11.475 21.8318 11.375 21.7984C9.125 21.0484 7.33333 19.6611 6 17.6364C4.66667 15.6118 4 13.4324 4 11.0984V6.37344C4 5.95677 4.121 5.58177 4.363 5.24844C4.605 4.9151 4.91733 4.67344 5.3 4.52344L11.3 2.27344C11.5333 2.1901 11.7667 2.14844 12 2.14844C12.2333 2.14844 12.4667 2.1901 12.7 2.27344L18.7 4.52344C19.0833 4.67344 19.396 4.9151 19.638 5.24844C19.88 5.58177 20.0007 5.95677 20 6.37344V11.0984C20 13.4318 19.3333 15.6111 18 17.6364C16.6667 19.6618 14.875 21.0491 12.625 21.7984C12.525 21.8318 12.425 21.8568 12.325 21.8734C12.225 21.8901 12.1167 21.8984 12 21.8984Z" fill="#20A66A"/></svg>
                                    <span>Mark As Verified</span>
                                </Link>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Documents