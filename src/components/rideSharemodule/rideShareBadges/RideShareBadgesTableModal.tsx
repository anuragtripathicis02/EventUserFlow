'use client'
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RideShareBadgesTableModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    
    <Modal show={show} onHide={handleClose} centered className='modal-form-modal modal-common-sec modal-width-fixed'>
        <Modal.Header closeButton>
            <div className='modal-head d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-2 w-100'>
                <div className='left-heading'>
                    <h2>Add Badge</h2>
                </div>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className='modal-body-inner'>
                <div className='row'>
                    <div className='col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label htmlFor="text1">Badge Title</Form.Label>
                            <Form.Control type="text" id="text1" aria-describedby="" placeholder='Write here' />
                        </div>
                    </div>
                    <div className='col-md-12 mb-4'>
                        <div className="form-group">
                            <Form.Label>Upload Badge</Form.Label>
                            <div className="custom-file-upload">
                                <Form.Control type="file" className="file-upload d-none" id="fileInput" placeholder='No File Selected'/>
                                <label htmlFor="fileInput" className="file-upload-label">
                                    <span>
                                        <i className="bi bi-folder2"></i>&nbsp;&nbsp; Brows
                                    </span>
                                </label>
                            </div>
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

export default RideShareBadgesTableModal