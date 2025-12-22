'use client'
import React from 'react'
import Image from "next/image";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import GhanaImg from '../../../../public/images/Ghana.png'
import IndiaImg from '../../../../public/images/india.png'
import ZimbabweImg from '../../../../public/images/zimbabwe.png'
import AlgeriaImg from '../../../../public/images/algeria.png'
import AngolaImg from '../../../../public/images/angola.png'

const RideShareRideCharges = () => {
  return (
    <div className='mt-4'>
        <div className='table-section table-scroll-box table-with-border'>
            <Table responsive className='mb-0'>
                <thead>
                    <tr>
                        <th className='text-start'>#</th>
                        <th className='text-start'>Country</th>
                        <th>Squch Normal</th>
                        <th>Squch Basic</th>
                        <th>Squch Luxury</th>
                        <th>Squch Light</th>
                        <th>Squch Scooter</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                        <td>
                            <div className='text-img-box d-flex justify-content-start text-start align-items-center gap-2'>
                                <div className='table-img fixed-map'>
                                    <Image src={IndiaImg} alt=''></Image>
                                </div>
                                <div className='table-text text-start'>
                                    <p>India</p>
                                </div>
                            </div>
                        </td>
                        <td>min :₹80 ₹10/km</td>
                        <td>min :₹200 ₹15/km</td>
                        <td>min :₹500 ₹40/km</td>
                        <td>min :₹20 ₹5/km</td>
                        <td>min :₹15 ₹5/km</td>
                        <td><span className="green-text green-btn">Active</span></td>
                        <td>27-03-2025</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                        <td>
                            <div className='text-img-box d-flex justify-content-start text-start align-items-center gap-2'>
                                <div className='table-img fixed-map'>
                                    <Image src={ZimbabweImg} alt=''></Image>
                                </div>
                                <div className='table-text text-start'>
                                    <p>Zimbabwe</p>
                                </div>
                            </div>
                        </td>
                        <td>min :₹80 ₹10/km</td>
                        <td>min :₹200 ₹15/km</td>
                        <td>min :₹500 ₹40/km</td>
                        <td>min :₹20 ₹5/km</td>
                        <td>min :₹15 ₹5/km</td>
                        <td><span className="green-text green-btn">Active</span></td>
                        <td>27-03-2025</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                        <td>
                            <div className='text-img-box d-flex justify-content-start text-start align-items-center gap-2'>
                                <div className='table-img fixed-map'>
                                    <Image src={GhanaImg} alt=''></Image>
                                </div>
                                <div className='table-text text-start'>
                                    <p>Ghana</p>
                                </div>
                            </div>
                        </td>
                        <td>min :₹80 ₹10/km</td>
                        <td>min :₹200 ₹15/km</td>
                        <td>min :₹500 ₹40/km</td>
                        <td>min :₹20 ₹5/km</td>
                        <td>min :₹15 ₹5/km</td>
                        <td><span className="green-text green-btn">Active</span></td>
                        <td>27-03-2025</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                        <td>
                            <div className='text-img-box d-flex justify-content-start text-start align-items-center gap-2'>
                                <div className='table-img fixed-map'>
                                    <Image src={AlgeriaImg} alt=''></Image>
                                </div>
                                <div className='table-text text-start'>
                                    <p>Algeria</p>
                                </div>
                            </div>
                        </td>
                        <td>min :₹80 ₹10/km</td>
                        <td>min :₹200 ₹15/km</td>
                        <td>min :₹500 ₹40/km</td>
                        <td>min :₹20 ₹5/km</td>
                        <td>min :₹15 ₹5/km</td>
                        <td><span className="green-text green-btn">Active</span></td>
                        <td>27-03-2025</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                        <td>
                            <div className='text-img-box d-flex justify-content-start text-start align-items-center gap-2'>
                                <div className='table-img fixed-map'>
                                    <Image src={AngolaImg} alt=''></Image>
                                </div>
                                <div className='table-text text-start'>
                                    <p>Angola</p>
                                </div>
                            </div>
                        </td>
                        <td>min :₹-- ₹--/km</td>
                        <td>min :₹-- ₹--/km</td>
                        <td>min :₹-- ₹--/km</td>
                        <td>min :₹-- ₹--/km</td>
                        <td>min :₹-- ₹--/km</td>
                        <td><span className="grey-text grey-btn">In-Active</span></td>
                        <td>27-03-2025</td>
                        <td>Action</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className='table-footer-bottom'>
            <ul className='d-flex align-items-center justify-content-between gap-2'>
                <li>Showing <span>4</span> of <span>4</span> results</li>
                <li className='d-flex align-items-center '>Show More <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_676_39120)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7214 10.0291C14.9789 10.2869 15.1235 10.6364 15.1235 11.0007C15.1235 11.3651 14.9789 11.7146 14.7214 11.9724L9.53669 17.1589C9.27875 17.4167 8.92895 17.5615 8.56425 17.5614C8.19954 17.5613 7.84981 17.4164 7.59199 17.1584C7.33416 16.9005 7.18937 16.5507 7.18945 16.186C7.18954 15.8213 7.3345 15.4716 7.59244 15.2137L11.8054 11.0007L7.59244 6.78773C7.34185 6.52852 7.20309 6.18126 7.20606 5.82074C7.20902 5.46021 7.35346 5.11528 7.60828 4.86022C7.8631 4.60516 8.2079 4.46039 8.56842 4.45709C8.92894 4.45379 9.27633 4.59222 9.53578 4.84257L14.7223 10.0281L14.7214 10.0291Z" fill="#3D3D3D"/></g><defs><clipPath id="clip0_676_39120"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></li>
            </ul>
        </div>
    </div>
  )
}

export default RideShareRideCharges