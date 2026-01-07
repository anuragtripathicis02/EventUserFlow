'use client'
import React from 'react'
import Image from "next/image";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Flag1 from '../../../../public/images/Ghana.png'
import TableImg from '../../../../public/images/table-img.png'
import Link from 'next/link';
import { Form } from 'react-bootstrap';

const PendingVerifications = () => {
  return (
    <div className='dashboard-table-sec'>
        <div className='card-box'>
            <div className='table-top d-flex align-items-center justify-content-between gap-3'>
                <div className='left-table  position-relative'>
                    <h2>Events In-Review</h2>
                </div>
                <div className='right-box'>
                    <Dropdown className="dropdown-box" align={'end' }>
                        <Dropdown.Toggle id="dropdown-basic" >
                            <span>
                                <Image src={Flag1} alt=""></Image>
                            </span>
                            Ghana
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#" className='d-flex align-items-center gap-2'>
                                <span>
                                    <Image src={Flag1} alt=""></Image>
                                </span>
                                Ghana
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className='d-flex align-items-center gap-2'>
                                <span>
                                    <Image src={Flag1} alt=""></Image>
                                </span>
                                Ghana
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className='d-flex align-items-center gap-2'>
                                <span>
                                    <Image src={Flag1} alt=""></Image>
                                </span>
                                Ghana
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='table-section table-scroll-fixed'>
                <Table responsive className='mb-0 table-text-start'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Venue</th>
                            <th>Category</th>
                            <th>Created On</th>
                            <th>Status</th>
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
                                <strong>International Band Music</strong>
                                <span className='d-block'>SQEV1234567890</span>
                            </td>
                            <td>L'amour Events Garden</td>
                            <td>Jazz - Music</td>
                            <td>27-01-2025</td>
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
                            <td>
                                <strong>International Band Music</strong>
                                <span className='d-block'>SQEV1234567890</span>
                            </td>
                            <td>L'amour Events Garden</td>
                            <td>Jazz - Music</td>
                            <td>27-01-2025</td>
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
                            <td>
                                <strong>International Band Music</strong>
                                <span className='d-block'>SQEV1234567890</span>
                            </td>
                            <td>L'amour Events Garden</td>
                            <td>Jazz - Music</td>
                            <td>27-01-2025</td>
                            <td>
                                <span className='yellow-text yellow-btn'>In-Review</span>
                            </td>
                            <td>Action</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    </div>
  )
}

export default PendingVerifications