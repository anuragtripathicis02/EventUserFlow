'use client'
import Link from 'next/link';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthorImg from '../../../../public/images/table-img.png'
import CarImg from '../../.././../public/images/car.png'

const BookingDetailsModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className='booking-modal modal-common-sec'>
        <Modal.Header closeButton>
            <div className='modal-head d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-2 w-100'>
                <div className='left-heading'>
                    <h2>Booking Summery</h2>
                </div>
                <div className='right-details'>
                    <div className='copy-details d-flex gap-2 align-items-center'>#SB3456789008 <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 1.04297H9.12C7.58833 1.04297 6.375 1.04297 5.42583 1.17047C4.44917 1.30214 3.65833 1.5788 3.03417 2.20214C2.41083 2.8263 2.13417 3.61714 2.0025 4.5938C1.875 5.5438 1.875 6.7563 1.875 8.28797V13.3346C1.87485 14.0792 2.14055 14.7993 2.62425 15.3654C3.10795 15.9314 3.77786 16.3062 4.51333 16.4221C4.6275 17.0588 4.84833 17.6021 5.29 18.0446C5.79167 18.5463 6.42333 18.7613 7.17333 18.863C7.89583 18.9596 8.815 18.9596 9.95417 18.9596H12.5458C13.685 18.9596 14.6042 18.9596 15.3267 18.863C16.0767 18.7613 16.7083 18.5463 17.21 18.0446C17.7117 17.543 17.9267 16.9113 18.0283 16.1613C18.125 15.4388 18.125 14.5196 18.125 13.3805V9.12214C18.125 7.98297 18.125 7.0638 18.0283 6.3413C17.9267 5.5913 17.7117 4.95964 17.21 4.45797C16.7675 4.0163 16.2242 3.79547 15.5875 3.6813C15.4715 2.94582 15.0968 2.27591 14.5308 1.79222C13.9647 1.30852 13.2446 1.04282 12.5 1.04297ZM14.275 3.56047C14.1483 3.19047 13.909 2.86935 13.5908 2.64207C13.2725 2.41479 12.8911 2.29273 12.5 2.29297H9.16667C7.5775 2.29297 6.44917 2.29464 5.59167 2.40964C4.75417 2.52214 4.27083 2.7338 3.91833 3.0863C3.56583 3.4388 3.35417 3.92214 3.24167 4.75964C3.12667 5.61714 3.125 6.74547 3.125 8.33464V13.3346C3.12476 13.7257 3.24683 14.1071 3.4741 14.4254C3.70138 14.7437 4.0225 14.9829 4.3925 15.1096C4.375 14.6013 4.375 14.0263 4.375 13.3805V9.12214C4.375 7.98297 4.375 7.0638 4.4725 6.3413C4.5725 5.5913 4.78917 4.95964 5.29 4.45797C5.79167 3.9563 6.42333 3.7413 7.17333 3.64047C7.89583 3.54297 8.815 3.54297 9.95417 3.54297H12.5458C13.1917 3.54297 13.7667 3.54297 14.275 3.56047ZM6.17333 5.34297C6.40417 5.11214 6.7275 4.96214 7.34 4.87964C7.96833 4.79547 8.80333 4.7938 9.99917 4.7938H12.4992C13.695 4.7938 14.5292 4.79547 15.1592 4.87964C15.7708 4.96214 16.0942 5.11297 16.325 5.34297C16.5558 5.5738 16.7058 5.89714 16.7883 6.50964C16.8725 7.13797 16.8742 7.97297 16.8742 9.1688V13.3355C16.8742 14.5313 16.8725 15.3655 16.7883 15.9955C16.7058 16.6071 16.555 16.9305 16.325 17.1613C16.0942 17.3921 15.7708 17.5421 15.1583 17.6246C14.5292 17.7088 13.695 17.7105 12.4992 17.7105H9.99917C8.80333 17.7105 7.96833 17.7088 7.33917 17.6246C6.7275 17.5421 6.40417 17.3913 6.17333 17.1613C5.9425 16.9305 5.7925 16.6071 5.71 15.9946C5.62583 15.3655 5.62417 14.5313 5.62417 13.3355V9.1688C5.62417 7.97297 5.62583 7.13797 5.71 6.5088C5.7925 5.89714 5.94333 5.5738 6.17333 5.34297Z" fill="#454545"/></svg></span></div>
                </div>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className='modal-body-inner'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='top-modal d-flex align-items-center justify-content-between gap-2'>
                            <div className='left-dis'>
                                <h6>Dsicount</h6>
                                <div className='author-dis d-flex align-items-center gap-2'>
                                    <div className='left-img'>
                                        <Image src={AuthorImg} alt=""></Image>
                                    </div>
                                    <div className='right-text'>
                                        <h2>Ade Quansah</h2>
                                        <span>#SB3456789008</span>
                                    </div>
                                </div>
                            </div>
                            <div className='right-dis'>
                                <h6>Vehicle Details:</h6>
                                <div className='author-dis d-flex align-items-center gap-2'>
                                    <div className='left-img'>
                                        <Image src={CarImg} alt=""></Image>
                                    </div>
                                    <div className='right-text'>
                                        <h2>Squch Basic</h2>
                                        <p>ISUZU (Career-XL),White</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='top-modal d-flex align-items-center justify-content-between gap-2'>
                            <div className='left-dis'>
                                <h6>Guest Details:</h6>
                                <div className='author-dis d-flex align-items-center gap-2'>
                                    <div className='left-img'>
                                        <Image src={AuthorImg} alt=""></Image>
                                    </div>
                                    <div className='right-text'>
                                        <h2>Ade Karl</h2>
                                        <span>#SB3456789008</span>
                                    </div>
                                </div>
                            </div>
                            <div className='right-dis'>
                                <h6>Booking Summery:</h6>
                                <div className='author-dis without-img'>
                                    <div className='right-text'>
                                        <h2>Taxi Partner</h2>
                                        <p>27-02-2025 at 12:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-modal'>
                            <div className='review-top'>
                                <h6>Reviews</h6>
                            </div>
                            <div className='review-bottom'>
                                <div className='review-common d-flex align-items-center gap-2'>
                                    <div className='left-review'>4.8<span>/5</span></div>
                                    <div className='review-details'>
                                        <h5>For Taxi Partner</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur. Posuere egestas cras  arcu lectus nunc. Pharetra tempor faucibus id mattis fermentum</p>
                                    </div>
                                </div>
                                <div className='review-common d-flex align-items-center gap-2'>
                                    <div className='left-review'>4.8<span>/5</span></div>
                                    <div className='review-details'>
                                        <h5>For Guest</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur. Posuere egestas cras  arcu lectus nunc. Pharetra tempor faucibus id mattis fermentum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 mt-lg-0 mt-4'>
                        <div className='top-modal location-modal d-flex align-items-center justify-content-between gap-2'>
                            <div className='left-dis'>
                                <h6>Pickup Location</h6>
                                <h5>Zogbeli Blk A & D JHS</h5>
                                <span>W Hospital Rd, Tamale, Ghana</span>
                            </div>
                            <div className='mid-dis'>
                                <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4189 6.375L34.9458 12.9019L28.4189 19.4288" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.16113 12.9023L34.8386 12.9023" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <h4>14.2 km</h4>
                                <span className='btn-grey'>Completed</span>
                            </div>
                            <div className='right-dis'>
                                <h6>Drop Location</h6>
                                <h5>Hamzah en house</h5>
                                <span>F5HW+2HR, Tamale, Ghana</span>
                            </div>
                        </div>
                        <div className='payment-details'>
                            <h6>Payout Details:</h6>
                            <div className='bg-light payment-dis'>
                                <ul className='main-details d-flex align-items-center justify-content-between gap-2'>
                                    <li>Distance : <span> 14.2 KM</span></li>
                                    <li>Total Trip Fair : <span> ₵120</span></li>
                                </ul>
                                <ul className='field-details d-flex align-items-center justify-content-between gap-2'>
                                    <li>Rider Pramotion</li>
                                    <li>- ₵15</li>
                                </ul>
                                <ul className='field-details d-flex align-items-end justify-content-between gap-2'>
                                    <li>Rider Pramotion <span>SQCHFIRST20</span></li>
                                    <li>- ₵20</li>
                                </ul>
                                <ul className='field-details d-flex align-items-center justify-content-between gap-2'>
                                    <li>Total Payable</li>
                                    <li> ₵85</li>
                                </ul>
                            </div>
                        </div>
                        <div className='bottom-payment-description'>
                            <ul className='d-flex flex-md-nowrap flex-wrap align-items-center gap-2 justify-content-between'>
                                <li> Payment Type <span>Pre-Paid</span></li>
                                <li> Payment Mode <span>Credit Card</span></li>
                                <li> Partner Share <span>₵70 + ₵5</span></li>
                                <li> Admin Earnings <span>₵15</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='modal-foot w-100 d-flex align-items-center flex-md-nowrap flex-wrap justify-content-between gap-2'>
                <div className='left-foot'>
                    <Link href="" className='btn btn-grey'>Raise Ticket</Link>
                </div>
                <div className='right-foot flex-md-nowrap flex-wrap d-flex align-items-center gap-2'>
                    <Link href="" className='btn btn-grey'>Download Invoice</Link>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                </div>
            </div>
        </Modal.Footer>
      </Modal>
  )
}

export default BookingDetailsModal