'use client'
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import BookingDetailsModal from './BookingDetailsModal';

const BookingTable = () => {    
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
  return (
    <div className='mt-4'>
        <div className='table-section table-scroll-box table-with-border'>
            <Table responsive className='mb-0'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Booking Id</th>
                        <th>Date & time</th>
                        <th>Payment Info</th>
                        <th>Summery</th>
                        <th>Distance</th>
                        <th>Trip Fair</th>
                        <th>Added Tip</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Rating</th>
                        <th>Ticket Tickets</th>
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
                        <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Credit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Taxi</td>
                        <td>
                            <span className='green-text green-btn'>Active</span>
                        </td>
                        <td>
                            <div className='green-text d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#20A66A"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            <span className='green-text green-btn'>Closed</span>
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                        <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Cash <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>10km</td>
                        <td>₵23</td>
                        <td>₵5</td>
                        <td>Taxi</td>
                        <td>
                            <span className='yellow-text yellow-btn'>In-Review</span>
                        </td>
                        <td>
                            <div className='yellow-text d-flex align-items-center gap-1 text-b'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99956 11.5145L10.7662 13.1878C11.2729 13.4945 11.8929 13.0411 11.7596 12.4678L11.0262 9.32115L13.4729 7.20115C13.9196 6.81448 13.6796 6.08115 13.0929 6.03448L9.87289 5.76115L8.61289 2.78781C8.38623 2.24781 7.61289 2.24781 7.38623 2.78781L6.12623 5.75448L2.90623 6.02781C2.31956 6.07448 2.07956 6.80781 2.52623 7.19448L4.97289 9.31448L4.23956 12.4611C4.10623 13.0345 4.72623 13.4878 5.23289 13.1811L7.99956 11.5145Z" fill="#D19C00"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            <span className='red-text red-btn'>Open</span>
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Debit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>₵7</td>
                        <td>Delivery</td>
                        <td>
                            <span className='red-text red-btn'>Blocked</span>
                        </td>
                        <td>
                            <div className=' d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#E03C22"/></svg>
                                <span>1.2</span>
                            </div>
                        </td>
                        <td>
                            <span className='yellow-text yellow-btn'>In-Review</span>
                        </td>
                        <td>Action</td>
                    </tr>
                    
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Credit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            Active
                        </td>
                        <td>
                            <div className='green-text d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#20A66A"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            <span className='blue-text blue-btn'>Un-Assigned</span>
                        </td>
                        <td>Action</td>
                    </tr>
                    
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Credit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            Active
                        </td>
                        <td>
                            <div className='green-text d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#20A66A"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            <span className='grey-text grey-btn'>Rejected</span>
                        </td>
                        <td>Action</td>
                    </tr>
                    
                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Credit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            Active
                        </td>
                        <td>
                            <div className='green-text d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#20A66A"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            --
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Cash <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>10km</td>
                        <td>₵23</td>
                        <td>₵5</td>
                        <td>Taxi</td>
                        <td>
                            Active
                        </td>
                        <td>
                            <div className='yellow-text d-flex align-items-center gap-1 text-b'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99956 11.5145L10.7662 13.1878C11.2729 13.4945 11.8929 13.0411 11.7596 12.4678L11.0262 9.32115L13.4729 7.20115C13.9196 6.81448 13.6796 6.08115 13.0929 6.03448L9.87289 5.76115L8.61289 2.78781C8.38623 2.24781 7.61289 2.24781 7.38623 2.78781L6.12623 5.75448L2.90623 6.02781C2.31956 6.07448 2.07956 6.80781 2.52623 7.19448L4.97289 9.31448L4.23956 12.4611C4.10623 13.0345 4.72623 13.4878 5.23289 13.1811L7.99956 11.5145Z" fill="#D19C00"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            --
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Credit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            Active
                        </td>
                        <td>
                            <div className='green-text d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#20A66A"/></svg>
                                <span>4.8</span>
                            </div>
                        </td>
                        <td>
                            --
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Debit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            <span className='red-text red-btn'>Blocked</span>
                        </td>
                        <td>
                            <div className=' d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#E03C22"/></svg>
                                <span>1.2</span>
                            </div>
                        </td>
                        <td>
                            --
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Debit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            <span className='red-text red-btn'>Blocked</span>
                        </td>
                        <td>
                            <div className=' d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#E03C22"/></svg>
                                <span>1.2</span>
                            </div>
                        </td>
                        <td>
                            --
                        </td>
                        <td>Action</td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Group className="check-box" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                        </td>
                         <td><Link href="" className='modal-text' onClick={handleShow}>#SB3456789008</Link></td>
                        <td>27-03-2025 at 02:13 PM</td>
                        <td>Debit Card <span className='d-block'>Pay After Drop</span></td>
                        <td>Kumasi to Tamele</td>
                        <td>5km</td>
                        <td>₵23</td>
                        <td>--</td>
                        <td>Delivery</td>
                        <td>
                            <span className='red-text red-btn'>Blocked</span>
                        </td>
                        <td>
                            <div className=' d-flex align-items-center gap-1 text-b'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49956 11.5145L11.2662 13.1878C11.7729 13.4945 12.3929 13.0411 12.2596 12.4678L11.5262 9.32115L13.9729 7.20115C14.4196 6.81448 14.1796 6.08115 13.5929 6.03448L10.3729 5.76115L9.11289 2.78781C8.88623 2.24781 8.11289 2.24781 7.88623 2.78781L6.62623 5.75448L3.40623 6.02781C2.81956 6.07448 2.57956 6.80781 3.02623 7.19448L5.47289 9.31448L4.73956 12.4611C4.60623 13.0345 5.22623 13.4878 5.73289 13.1811L8.49956 11.5145Z" fill="#E03C22"/></svg>
                                <span>1.2</span>
                            </div>
                        </td>
                        <td>
                            --
                        </td>
                        <td>Action</td>
                    </tr>

                </tbody>
            </Table>
        </div>
        <div className='table-footer-bottom'>
            <ul className='d-flex align-items-center justify-content-between gap-2'>
                <li>Showing <span>50</span> of <span>247</span> results</li>
                <li className='d-flex align-items-center '>Show More <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_676_39120)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7214 10.0291C14.9789 10.2869 15.1235 10.6364 15.1235 11.0007C15.1235 11.3651 14.9789 11.7146 14.7214 11.9724L9.53669 17.1589C9.27875 17.4167 8.92895 17.5615 8.56425 17.5614C8.19954 17.5613 7.84981 17.4164 7.59199 17.1584C7.33416 16.9005 7.18937 16.5507 7.18945 16.186C7.18954 15.8213 7.3345 15.4716 7.59244 15.2137L11.8054 11.0007L7.59244 6.78773C7.34185 6.52852 7.20309 6.18126 7.20606 5.82074C7.20902 5.46021 7.35346 5.11528 7.60828 4.86022C7.8631 4.60516 8.2079 4.46039 8.56842 4.45709C8.92894 4.45379 9.27633 4.59222 9.53578 4.84257L14.7223 10.0281L14.7214 10.0291Z" fill="#3D3D3D"/></g><defs><clipPath id="clip0_676_39120"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></li>
            </ul>
        </div>
        <BookingDetailsModal show={show} handleClose={handleClose}/>
    </div>
  )
}

export default BookingTable