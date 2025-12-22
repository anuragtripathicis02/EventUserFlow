'use client'
import Link from 'next/link';
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Flag1 from '../../../../public/images/Ghana.png'
import Dropdown from 'react-bootstrap/Dropdown';
const RideShareCitiesTableModal =  ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className='modal-form-modal modal-common-sec modal-width-fixed'>
        <Modal.Header closeButton>
            <div className='modal-head d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-2 w-100'>
                <div className='left-heading'>
                    <h2>Add City</h2>
                </div>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className='modal-body-inner'>
                <div className='row'>
                    <div className='col-md-12 mb-4 '>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Select Country</Form.Label>
                            <Dropdown className="dropdown-box Country-box" align={'end' }>
                                <Dropdown.Toggle id="dropdown-basic" className='w-100 text-start d-flex align-items-center'>
                                    <span>
                                        <Image src={Flag1} alt=""></Image>
                                    </span>
                                    Ghana
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-100'>
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
                    <div className='col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Add City Name</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text3">Status</Form.Label>
                            <Form.Select aria-label="Default select example" id='text3'>
                                <option>Select</option>
                                <option value="1">Active </option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='modal-foot w-100 d-flex align-items-center flex-md-nowrap flex-wrap justify-content-end gap-2'>
                <Button variant="" className='btn btn-grey' onClick={handleClose}> Close </Button>
                <Link href="" className='btn btn-secondary'>Create</Link>
            </div>
        </Modal.Footer>
    </Modal>
  )
}

export default RideShareCitiesTableModal