'use client'
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RideShareRideChargesModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    
    <Modal show={show} onHide={handleClose} centered className='modal-form-modal modal-tablets-sec modal-common-sec
     modal-width-fixed'>
        <Modal.Header closeButton>
            <div className='modal-head d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-2 w-100'>
                <div className='left-heading'>
                    <h2>Ride Charges Angola</h2>
                </div>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className='modal-body-inner'>
                <div className='row'>
                    <div className='col-lg-2 col-md-12 mb-4'>
                        <div className='label-heading'>
                            <span className='d-block'>Squch </span>
                            <h6>Normal</h6>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Minimum Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Per Kilometer Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-12 mb-4'>
                        <div className='label-heading'>
                            <span className='d-block'>Squch </span>
                            <h6>Basic</h6>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Minimum Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Per Kilometer Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-12 mb-4'>
                        <div className='label-heading'>
                            <span className='d-block'>Squch </span>
                            <h6>Luxury</h6>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Minimum Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Per Kilometer Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-12 mb-4'>
                        <div className='label-heading'>
                            <span className='d-block'>Squch </span>
                            <h6>Light</h6>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Minimum Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Per Kilometer Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-12 mb-4'>
                        <div className='label-heading'>
                            <span className='d-block'>Squch </span>
                            <h6>Scooter</h6>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Minimum Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Per Kilometer Charge</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
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

export default RideShareRideChargesModal