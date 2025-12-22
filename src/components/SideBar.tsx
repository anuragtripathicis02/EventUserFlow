'use client'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from "react";

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove("menu-open"); // Ensure class is removed
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [menuOpen]);
  

  return (
    <>
        <button className="btn bg-transparent btn-button-box border-0 p-0" type="button"  onClick={toggleMenu}>
            <span className="mobile-nav">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="1.60156" width="16.5" height="14.25" rx="1.25" stroke="#3D3D3D" stroke-width="1.5"/><line x1="6.375" y1="1.97656" x2="6.375" y2="16.6016" stroke="#3D3D3D" stroke-width="1.5"/></svg>
            </span>
        </button>



        {menuOpen && <div className="overlay-box" onClick={closeMenu}></div>}


        <div className={` side-menu-sec mobile-menu ${menuOpen ? "show" : ""}`}>
            <div className='inner-side-menu'>           
            <Accordion>
                <div className='side-box'>
                    <ul>
                        <li>
                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5178 3.8125H19.5079C19.7822 3.8125 19.9998 4.04904 19.9998 4.34728V17.6757C19.9998 17.9739 19.7822 18.2104 19.5079 18.2104H2.5178C2.24346 18.2104 2.02588 17.9739 2.02588 17.6757V4.34728C2.02588 4.04904 2.24346 3.8125 2.5178 3.8125Z" stroke="#3D3D3D" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.0127 6.64062V8.69747" stroke="#3D3D3D" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.0127 13.8398V15.3825" stroke="#3D3D3D" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.7427 6.64062V7.3708" stroke="#3D3D3D" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.28271 9.72656V15.3829" stroke="#3D3D3D" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.28291 8.18185C6.80536 8.18185 7.22891 7.7214 7.22891 7.15342C7.22891 6.58545 6.80536 6.125 6.28291 6.125C5.76046 6.125 5.33691 6.58545 5.33691 7.15342C5.33691 7.7214 5.76046 8.18185 6.28291 8.18185Z" fill="#652669"/><path d="M11.0129 12.2951C11.5354 12.2951 11.9589 11.8347 11.9589 11.2667C11.9589 10.6987 11.5354 10.2383 11.0129 10.2383C10.4904 10.2383 10.0669 10.6987 10.0669 11.2667C10.0669 11.8347 10.4904 12.2951 11.0129 12.2951Z" fill="#652669"/><path d="M15.7429 10.4553C16.2653 10.4553 16.6889 9.9948 16.6889 9.4269C16.6889 8.8589 16.2653 8.39844 15.7429 8.39844C15.2204 8.39844 14.7969 8.8589 14.7969 9.4269C14.7969 9.9948 15.2204 10.4553 15.7429 10.4553Z" fill="#652669"/><path d="M15.7427 11.4844V15.3821" stroke="#3D3D3D" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </span>
                                <span className='text'>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='side-box'>
                    <div className='heading'>
                        <h6>Members</h6>
                        <span></span>
                    </div>
                    <div className='menu-dropdown'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2 '>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_744_33663)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.2715 5.12164V11.5224C3.2715 16.3016 7.50503 18.5992 10.9054 20.4457L10.9961 20.4942L11.0881 20.4457C14.4885 18.5992 18.722 16.3016 18.722 11.5224V5.12164L10.9961 1.48231L3.2715 5.12164ZM10.9961 21.8615C10.8913 21.8615 10.7866 21.8347 10.6907 21.7836L10.2959 21.5689C6.792 19.6662 1.99365 17.0619 1.99365 11.5224V4.71655C1.99365 4.46865 2.13678 4.24374 2.36039 4.13768L10.7252 0.198054C10.8965 0.116274 11.0971 0.116274 11.2683 0.198054L19.6331 4.1377C19.8568 4.24376 19.9999 4.46867 19.9999 4.71657V11.5224C19.9999 17.0619 15.2003 19.6662 11.6977 21.5689L11.3028 21.7836C11.207 21.8347 11.1022 21.8615 10.9961 21.8615Z" fill="#3D3D3D" stroke="#3D3D3D" stroke-width="0.3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9368 14.9564H12.8077L11.8933 14.0431V13.2065H10.7273V12.0407H9.8918L9.30771 11.4567C9.28854 11.4578 9.26937 11.4578 9.2502 11.4578C7.49229 11.4578 6.0625 10.0282 6.0625 8.2705C6.0625 6.51279 7.49229 5.08203 9.2502 5.08203C11.0081 5.08203 12.4379 6.51279 12.4379 8.2705C12.4379 8.28967 12.4379 8.30883 12.4368 8.32687L15.9368 11.8276L15.9368 14.9564ZM13.2746 13.8289H14.8092V12.2944L11.2607 8.74403L11.3002 8.37197C11.3103 7.13514 10.3857 6.2095 9.2502 6.2095C8.11472 6.2095 7.19009 7.13514 7.19009 8.2705C7.19009 9.40698 8.11472 10.3304 9.2502 10.3304L9.72154 10.2774L10.3586 10.9133H11.8549V12.0791H13.0209V13.5763L13.2746 13.8289ZM10.1456 8.30274C10.1456 8.76952 9.76675 9.14834 9.29993 9.14834C8.8331 9.14834 8.45424 8.76952 8.45424 8.30274C8.45424 7.83597 8.8331 7.45715 9.29993 7.45715C9.76675 7.45715 10.1456 7.83597 10.1456 8.30274Z" fill="#652669"/></g><defs><clipPath id="clip0_744_33663"><rect width="22" height="22" fill="white"/></clipPath></defs></svg>
                                    </span>
                                    <span className='text'>Admin</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Partners</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Promo Codes</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Type</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Companies</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Model</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Color</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Features</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Charges</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Support Tickets</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Countries</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Cities</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Badges</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Banks</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Tutorials</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>

                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9998 10.9987C13.5311 10.9987 15.5832 8.94667 15.5832 6.41536C15.5832 3.88406 13.5311 1.83203 10.9998 1.83203C8.46853 1.83203 6.4165 3.88406 6.4165 6.41536C6.4165 8.94667 8.46853 10.9987 10.9998 10.9987Z" stroke="#652669" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.8743 20.1667C18.8743 16.6192 15.3451 13.75 11.0001 13.75C6.65514 13.75 3.12598 16.6192 3.12598 20.1667" stroke="#3D3D3D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </span>
                                <span className='text'>Users</span>
                            </Link>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_744_4835)"><path d="M10.2074 12.3443C9.97513 12.1953 9.77972 11.9845 9.64025 11.7319C9.54161 11.5532 9.34862 11.4595 9.15755 11.4791C7.25689 11.4185 5.38115 11.2623 3.58242 11.0148C3.31187 10.9778 3.06289 11.1666 3.02567 11.4369C2.98846 11.7072 3.17744 11.9564 3.44772 11.9936C3.48943 11.9993 3.53104 12.005 3.57281 12.0107C3.99486 15.1713 6.38096 17.72 9.50039 18.3526V18.4527C9.50039 18.7256 9.72154 18.9467 9.9944 18.9467C10.2673 18.9467 10.4884 18.7256 10.4884 18.4527V12.8025C10.4885 12.7958 10.4885 12.7891 10.4883 12.7823C10.4854 12.5891 10.3714 12.4228 10.2074 12.3443ZM9.50044 17.3413C6.9741 16.7471 5.03836 14.6951 4.59189 12.1378C6.00766 12.3001 7.46201 12.4082 8.93162 12.4601C9.09119 12.6879 9.28319 12.8885 9.50044 13.0544V17.3413ZM19.0323 11.4256C18.9946 11.1554 18.7449 10.9669 18.4748 11.0045C16.5864 11.2678 14.6266 11.4398 12.8068 11.502C12.7876 11.5024 12.7684 11.5038 12.7494 11.5063C12.6784 11.5156 12.6122 11.54 12.5543 11.576C12.4964 11.6118 12.4452 11.66 12.4052 11.7192C12.3949 11.7344 12.3854 11.7503 12.3768 11.7667C12.2613 11.976 12.0969 12.159 11.9005 12.2968C11.8821 12.3091 11.8645 12.3227 11.848 12.3373C11.806 12.3743 11.7715 12.4173 11.745 12.464C11.7089 12.5278 11.6865 12.6003 11.6819 12.6777C11.6811 12.69 11.6808 12.7022 11.681 12.7145V18.4528C11.681 18.7256 11.9021 18.9468 12.175 18.9468C12.4478 18.9468 12.669 18.7256 12.669 18.4528V18.3162C14.1773 17.9737 15.5224 17.184 16.5664 16.0263C17.5883 14.8934 18.2285 13.5091 18.4277 12.0084C18.489 12 18.5502 11.9916 18.6113 11.9831C18.8815 11.9454 19.0699 11.6958 19.0323 11.4256ZM12.6689 17.2986V12.9489C12.8291 12.8108 12.9723 12.6528 13.094 12.4802C14.488 12.4253 15.956 12.3085 17.4077 12.1377C16.9708 14.6068 15.0992 16.6529 12.6689 17.2986ZM12.3666 10.2189C12.378 10.2406 12.391 10.2613 12.4055 10.281C12.4474 10.3383 12.5002 10.3845 12.5592 10.4181C12.62 10.4528 12.6888 10.475 12.7619 10.4811C12.7855 10.4831 12.8094 10.4835 12.8332 10.4821C15.0396 10.3982 16.9557 10.2293 18.5287 9.98012C18.7982 9.93741 18.9821 9.68437 18.9394 9.41492C18.8967 9.14547 18.6438 8.96148 18.3742 9.00429C18.3259 9.01192 18.2773 9.0195 18.2283 9.02702C17.8154 7.522 16.9278 6.16409 15.7049 5.17647C14.3788 4.10547 12.7079 3.51562 11.0001 3.51562C7.60846 3.51562 4.6582 5.77531 3.77063 9.03031C3.72826 9.02367 3.68583 9.01697 3.64356 9.01028C3.37433 8.96713 3.12091 9.15096 3.07793 9.42035C3.03495 9.68981 3.21855 9.94301 3.48801 9.98599C5.28114 10.2719 7.17615 10.4525 9.12028 10.523C9.12637 10.5232 9.13241 10.5234 9.1385 10.5234C9.1867 10.5234 9.23335 10.5164 9.27754 10.5034C9.41394 10.4772 9.53859 10.394 9.61313 10.2641C9.89631 9.77071 10.433 9.45422 11.0139 9.43814C11.5702 9.42293 12.089 9.72164 12.3666 10.2189ZM10.9865 8.45051C10.1638 8.47329 9.395 8.87865 8.91686 9.5264C7.49412 9.468 6.10048 9.34922 4.75727 9.17225C5.56613 6.41055 8.09686 4.50363 11.0002 4.50363C13.9196 4.50363 16.43 6.39946 17.2403 9.16221C16.0159 9.31145 14.6185 9.41931 13.0679 9.48397C12.586 8.81739 11.8139 8.42746 10.9865 8.45051Z" fill="#652669" stroke="#652669" stroke-width="0.2"/><path d="M11.0001 1.00781C5.48607 1.00781 1 5.49381 1 11.0078C1 16.5219 5.48601 21.0078 11.0001 21.0078C16.514 21.0078 21 16.5218 21 11.0078C21.0001 5.49381 16.5141 1.00781 11.0001 1.00781ZM11.0001 20.0198C6.03085 20.0198 1.98801 15.977 1.98801 11.0078C1.98801 6.03859 6.03085 1.99582 11.0001 1.99582C15.9693 1.99582 20.012 6.03859 20.012 11.0078C20.012 15.977 15.9693 20.0198 11.0001 20.0198Z" fill="#3D3D3D" stroke="#3D3D3D" stroke-width="0.3"/></g><defs><clipPath id="clip0_744_4835"><rect width="22" height="22" fill="white"/></clipPath></defs></svg>
                                    </span>
                                    <span className='text'>Providers</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>
                    </div>
                </div>
                <div className='side-box'>
                    <div className='heading'>
                        <h6>Services</h6>
                        <span></span>
                    </div>
                    <div className='menu-dropdown'>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2  active'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.06507 10.6337C4.25863 10.6337 3.59863 11.2937 3.59863 12.1001C3.59863 12.9065 4.25863 13.5665 5.06507 13.5665C5.87151 13.5665 6.53151 12.9065 6.53151 12.1001C6.53151 11.2937 5.87151 10.6337 5.06507 10.6337ZM5.06507 12.8337C4.66151 12.8337 4.33151 12.5037 4.33151 12.1001C4.33151 11.6965 4.66151 11.3665 5.06507 11.3665C5.46863 11.3665 5.79863 11.6965 5.79863 12.1001C5.79863 12.5037 5.46863 12.8337 5.06507 12.8337Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M16.7975 10.6337C15.9911 10.6337 15.3311 11.2937 15.3311 12.1001C15.3311 12.9065 15.9911 13.5665 16.7975 13.5665C17.6039 13.5665 18.2639 12.9065 18.2639 12.1001C18.2639 11.2937 17.6039 10.6337 16.7975 10.6337ZM16.7975 12.8337C16.3939 12.8337 16.0639 12.5037 16.0639 12.1001C16.0639 11.6965 16.3939 11.3665 16.7975 11.3665C17.2011 11.3665 17.5311 11.6965 17.5311 12.1001C17.5311 12.5037 17.2011 12.8337 16.7975 12.8337Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M18.3013 7.70005L17.6777 4.76649C17.4212 3.81292 16.6877 3.30005 15.6977 3.30005H6.16412C5.13769 3.30005 4.55056 3.81361 4.25769 4.76649L3.59769 7.70005H1.03125V8.43361H3.41481V8.47005C2.27838 8.54361 1.39837 9.49649 1.39837 10.67V15.7665H2.49838V16.8665C2.49838 17.8929 3.30481 18.7001 4.33194 18.7001C5.35906 18.7001 6.1655 17.8936 6.1655 16.8665V15.7665H15.6991V16.8665C15.6991 17.8929 16.5055 18.7001 17.5326 18.7001C18.5597 18.7001 19.3662 17.8936 19.3662 16.8665V15.7665H20.4662V10.67C20.4662 9.53361 19.5862 8.58005 18.4862 8.47005V8.43361H20.8326V7.70005H18.3026H18.3013ZM4.95481 4.98649C5.17481 4.32649 5.50481 4.03292 6.16481 4.03292H15.6984C16.3948 4.03292 16.7984 4.32649 16.9819 4.94936L17.7155 8.46936H4.14906L4.9555 4.9858L4.95481 4.98649ZM5.43125 16.8665C5.43125 17.4901 4.95481 17.9665 4.33125 17.9665C3.70769 17.9665 3.23125 17.4901 3.23125 16.8665V15.7665H5.43125V16.8665ZM18.6313 16.8665C18.6313 17.4901 18.1548 17.9665 17.5312 17.9665C16.9077 17.9665 16.4312 17.4901 16.4312 16.8665V15.7665H18.6313V16.8665ZM19.7313 10.67V15.0336H2.13125V10.67C2.13125 9.86361 2.79125 9.20361 3.59769 9.20361H18.2641C19.0706 9.20361 19.7306 9.86361 19.7306 10.67H19.7313Z" fill="#3D3D3D" stroke="#3D3D3D" stroke-width="0.5"/></svg>
                                    </span>
                                    <span className='text'>Ride Share</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Partners</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Promo Codes</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Type</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Companies</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Model</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Color</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Features</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Charges</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Support Tickets</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Countries</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Cities</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Badges</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Banks</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Tutorials</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1052 10.9999C18.1052 10.081 18.7684 9.30413 19.64 9.14308C19.8579 9.10518 20 8.90624 20 8.68834V5.79888C20 5.53362 19.7916 5.3252 19.5263 5.3252H2.47368C2.20842 5.3252 2 5.53362 2 5.79888V8.68834C2 8.90624 2.15158 9.10518 2.36 9.14308C3.23158 9.3136 3.89473 10.081 3.89473 10.9999C3.89473 11.9189 3.23158 12.6957 2.36 12.8568C2.14211 12.8947 2 13.0936 2 13.3115V16.201C2 16.4662 2.20842 16.6746 2.47368 16.6746H19.5263C19.7916 16.6746 20 16.4662 20 16.201V13.3115C20 13.0936 19.8484 12.8947 19.64 12.8568C18.7684 12.6957 18.1052 11.9283 18.1052 10.9999Z" stroke="#3D3D3D" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.4219 8.63135H15.264V13.3682H12.4219" stroke="#652669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.57843 13.3682H6.73633V8.63135H9.57843" stroke="#652669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </span>
                                    <span className='text'>Bus Ticket</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7692 10.4314H18.7307C19.1 9.04679 19.4 7.80064 19.4692 7.36218C19.6769 6.11603 19.0538 4.91603 18.0384 4.31603C18.2923 4.2468 18.5461 4.13142 18.8 3.96988C19.5846 3.39296 19.7692 2.3545 19.7692 2.30834C19.7692 2.23911 19.7692 2.19296 19.7231 2.12373C19.6769 2.07757 19.6307 2.03142 19.5615 2.03142C19.5154 2.03142 18.8 1.93911 18.1307 2.23911C18.0846 1.47758 17.6692 0.877576 17.6461 0.854499C17.6 0.808345 17.5538 0.762191 17.4846 0.762191C17.4154 0.762191 17.3692 0.762191 17.3 0.808345C17.2769 0.831422 16.7 1.26988 16.4231 1.98527C15.8692 1.50065 15.1538 1.36219 15.1077 1.33911C15.0384 1.33911 14.9923 1.33911 14.9231 1.38527C14.8538 1.43142 14.8307 1.47758 14.8307 1.54681C14.8307 1.59296 14.6923 2.63142 15.2461 3.41603C15.4307 3.66988 15.6384 3.85449 15.8461 3.99296C15.4538 4.08526 15.0846 4.2468 14.7615 4.47757C14.3461 4.77757 14.0231 5.16988 13.8154 5.63142C13.5384 4.77757 12.8923 4.08526 12.0615 3.76219C12.2923 3.6468 12.5461 3.50834 12.7538 3.30065C13.4461 2.60834 13.4692 1.54681 13.4692 1.50065C13.4692 1.43142 13.4461 1.38527 13.4 1.33911C13.3538 1.29296 13.2846 1.26988 13.2384 1.26988C13.1923 1.26988 12.4769 1.29296 11.8308 1.68527C11.6692 0.946807 11.1615 0.416038 11.1384 0.392961C11.0461 0.300654 10.8846 0.300654 10.8154 0.392961C10.7923 0.416038 10.2846 0.946807 10.1231 1.68527C9.47691 1.29296 8.73845 1.26988 8.71537 1.26988C8.64614 1.26988 8.59999 1.29296 8.55384 1.33911C8.50768 1.38527 8.48461 1.4545 8.48461 1.50065C8.48461 1.54681 8.50768 2.60834 9.19999 3.30065C9.40768 3.50834 9.66153 3.66988 9.8923 3.76219C9.06153 4.08526 8.41537 4.77757 8.13845 5.63142C7.93076 5.16988 7.60768 4.77757 7.1923 4.47757C6.86922 4.2468 6.49999 4.06219 6.10769 3.99296C6.31538 3.85449 6.54615 3.66988 6.70769 3.41603C7.26153 2.63142 7.14615 1.59296 7.12307 1.54681C7.12307 1.47758 7.07692 1.43142 7.03076 1.38527C6.98461 1.33911 6.91538 1.33911 6.84615 1.33911C6.79999 1.33911 6.10769 1.47757 5.53076 1.98527C5.25384 1.29296 4.67692 0.831422 4.65384 0.808345C4.63077 0.739115 4.56153 0.739114 4.4923 0.739114C4.42307 0.739114 4.37692 0.785268 4.33077 0.831422C4.30769 0.854499 3.8923 1.47757 3.84615 2.21604C3.15384 1.91604 2.43846 2.00834 2.41538 2.00834C2.34615 2.00834 2.3 2.0545 2.25385 2.10065C2.23077 2.16988 2.23077 2.23911 2.23077 2.30834C2.23077 2.3545 2.43846 3.39296 3.2 3.96988C3.43077 4.15449 3.70769 4.2468 3.96154 4.31603C2.94615 4.91603 2.34615 6.11603 2.53077 7.36218C2.6 7.80064 2.9 9.04679 3.26923 10.4314H2.23077C2.09231 10.4314 2 10.5237 2 10.6622V12.0468C2 12.1853 2.09231 12.2776 2.23077 12.2776H2.48461L3.38461 19.2699C3.54615 20.5391 4.63077 21.5083 5.92307 21.5083H16.1231C17.3923 21.5083 18.5 20.5391 18.6615 19.2699L19.5154 12.2776H19.7692C19.9077 12.2776 20 12.1853 20 12.0468V10.6622C20 10.5237 19.9077 10.4314 19.7692 10.4314ZM18.5231 3.57757C18.2 3.80834 17.8307 3.90065 17.5307 3.92373C17.7615 3.6468 18.0154 3.2545 18.1077 2.76988C18.5 2.53911 18.9615 2.49296 19.2384 2.49296C19.1461 2.76988 18.9384 3.27757 18.5231 3.57757ZM17.3923 1.33911C17.5307 1.61604 17.7154 2.12373 17.6461 2.63142C17.5769 3.13911 17.2307 3.5545 17 3.78526C16.8615 3.50834 16.6769 3.00065 16.7461 2.49296C16.8384 1.98527 17.1846 1.56988 17.3923 1.33911ZM15.6615 3.11603C15.3615 2.70065 15.3154 2.1468 15.3154 1.84681C15.5923 1.93911 16.0077 2.12373 16.3077 2.46988C16.2384 2.9545 16.3769 3.41603 16.5154 3.76219C16.2154 3.6468 15.8923 3.43911 15.6615 3.11603ZM15.0846 4.82372C15.6154 4.43142 16.2846 4.26988 16.9307 4.38526C18.2923 4.61603 19.2154 5.90834 19.0077 7.29295C18.9384 7.66218 18.6615 8.86218 18.2461 10.4314H17.8077C17.8307 10.4083 17.8307 10.3853 17.8307 10.3622C17.8538 10.2468 17.7615 10.1083 17.6461 10.1083L16.3077 9.90064C16.1923 9.87756 16.0538 9.96987 16.0538 10.0853C16.0538 10.2006 16.1231 10.3391 16.2384 10.3391L16.8615 10.4314H13.7692C13.8615 8.56218 13.9769 6.96987 14.0461 6.48526C14.1615 5.81603 14.5308 5.21603 15.0846 4.82372ZM12.4769 2.93142C12.2 3.20834 11.8308 3.36988 11.5308 3.43911C11.7154 3.13911 11.9231 2.70065 11.9231 2.19296C12.2923 1.89296 12.7308 1.77757 13.0308 1.73142C12.9846 2.03142 12.8461 2.56219 12.4769 2.93142ZM11 0.877576C11.1846 1.13142 11.4615 1.59296 11.4615 2.12373C11.4615 2.6545 11.1846 3.11603 11 3.36988C10.8154 3.11603 10.5384 2.6545 10.5384 2.12373C10.5384 1.59296 10.8154 1.13142 11 0.877576ZM8.96922 1.70834C9.24614 1.7545 9.70768 1.86988 10.0769 2.16988C10.1 2.67757 10.2846 3.11603 10.4692 3.41603C10.1692 3.3468 9.79999 3.18526 9.52307 2.90834C9.15384 2.56219 9.01537 2.03142 8.96922 1.70834ZM11 3.96988C12.4077 3.96988 13.5384 5.10065 13.5384 6.50834C13.5384 6.99295 13.4231 8.56218 13.2154 10.4314H8.78461C8.57691 8.56218 8.46153 6.99295 8.46153 6.50834C8.46153 5.10065 9.5923 3.96988 11 3.96988ZM6.68461 1.84681C6.68461 2.16988 6.63845 2.70065 6.33845 3.11603C6.10769 3.43911 5.78461 3.62373 5.50769 3.76219C5.64615 3.41603 5.76153 2.9545 5.71538 2.46988C5.9923 2.12373 6.43076 1.93911 6.68461 1.84681ZM4.60769 1.33911C4.83846 1.56988 5.16153 1.98527 5.25384 2.49296C5.32307 3.00065 5.13846 3.50834 5 3.78526C4.76923 3.5545 4.44615 3.13911 4.35384 2.63142C4.26154 2.12373 4.44615 1.61604 4.60769 1.33911ZM2.76154 2.46988C3.03846 2.46988 3.5 2.51604 3.89231 2.7468C3.98461 3.23142 4.23846 3.6468 4.46923 3.92373C4.16923 3.90065 3.77692 3.80834 3.47692 3.57757C3.06154 3.27757 2.85384 2.76988 2.76154 2.46988ZM2.99231 7.29295C2.78461 5.90834 3.70769 4.61603 5.06923 4.38526C5.71538 4.26988 6.38461 4.43142 6.91538 4.82372C7.46922 5.21603 7.81538 5.81603 7.93076 6.48526C7.99999 6.96987 8.13845 8.56218 8.20768 10.4314H5.16153L5.78461 10.3391C5.89999 10.316 5.9923 10.2006 5.96923 10.0853C5.94615 9.96987 5.83076 9.87756 5.71538 9.90064L4.37692 10.1083C4.26153 10.1314 4.16923 10.2468 4.1923 10.3622C4.1923 10.3853 4.21538 10.4083 4.21538 10.4314H3.77692C3.33846 8.86218 3.06154 7.66218 2.99231 7.29295ZM18.1769 19.2237C18.0384 20.2622 17.1615 21.0468 16.1 21.0468H5.89999C4.86153 21.0468 3.96154 20.2622 3.82307 19.2237L2.94615 12.2776H8.6923H13.3077H19.0538L18.1769 19.2237ZM19.5384 11.816H19.3077H13.3077H8.6923H2.69231H2.46154V10.8929H19.5384V11.816Z" fill="#3D3D3D" stroke="#3D3D3D" stroke-width="0.5"/><path d="M9.38507 6.73888H10.7697C10.9081 6.73888 11.0004 6.64657 11.0004 6.50811C11.0004 6.36965 10.9081 6.27734 10.7697 6.27734H9.38507C9.2466 6.27734 9.1543 6.36965 9.1543 6.50811C9.1543 6.64657 9.2466 6.73888 9.38507 6.73888Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M11.4612 8.58507H12.8459C12.9843 8.58507 13.0766 8.49277 13.0766 8.3543C13.0766 8.21584 12.9843 8.12354 12.8459 8.12354H11.4612C11.3228 8.12354 11.2305 8.21584 11.2305 8.3543C11.2305 8.49277 11.3228 8.58507 11.4612 8.58507Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M10.7697 9.5083H9.38507C9.2466 9.5083 9.1543 9.60061 9.1543 9.73907C9.1543 9.87753 9.2466 9.96984 9.38507 9.96984H10.7697C10.9081 9.96984 11.0004 9.87753 11.0004 9.73907C11.0004 9.60061 10.9081 9.5083 10.7697 9.5083Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M5.46212 6.87763C5.43904 6.76224 5.32366 6.66994 5.20828 6.69301L3.86982 6.90071C3.75443 6.92378 3.66212 7.03917 3.6852 7.15455C3.70828 7.26994 3.80058 7.33917 3.91597 7.33917C3.93905 7.33917 3.93905 7.33917 3.96212 7.33917L5.30058 7.13147C5.41597 7.13147 5.4852 7.01609 5.46212 6.87763Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M6.19953 8.86211C6.22261 8.86211 6.22261 8.86211 6.24569 8.86211L7.58415 8.65442C7.69953 8.63135 7.79184 8.51596 7.76876 8.40058C7.74568 8.28519 7.6303 8.19289 7.51492 8.21596L6.17646 8.42365C6.06107 8.44673 5.96876 8.56212 5.99184 8.6775C5.99184 8.76981 6.08415 8.86211 6.19953 8.86211Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M16.7227 7.15442L18.0611 7.36212C18.0842 7.36212 18.0842 7.36212 18.1073 7.36212C18.2227 7.36212 18.315 7.29288 18.338 7.1775C18.3611 7.06212 18.2688 6.92365 18.1534 6.92365L16.815 6.71596C16.6996 6.69289 16.5611 6.78519 16.5611 6.90058C16.515 7.01596 16.5842 7.13135 16.7227 7.15442Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M14.416 8.63147L15.7545 8.83917C15.7775 8.83917 15.7775 8.83917 15.8006 8.83917C15.916 8.83917 16.0083 8.76994 16.0314 8.65455C16.0545 8.53917 15.9622 8.40071 15.8468 8.40071L14.5083 8.19301C14.3929 8.16994 14.2545 8.26224 14.2545 8.37763C14.2083 8.49301 14.2776 8.6084 14.416 8.63147Z" fill="#652669" stroke="#652669" stroke-width="0.4"/></svg>
                                    </span>
                                    <span className='text'>Food/Grocery</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Partners</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Promo Codes</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Type</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Companies</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Model</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Color</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Vehicle Features</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Charges</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Support Tickets</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Countries</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Cities</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Badges</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Banks</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Tutorials</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_744_20746)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1862 0.358394C18.3182 0.0892263 18.6133 -0.0505424 18.9135 0.0167524C19.206 0.0866367 19.4118 0.346752 19.4118 0.646984V6.53652C20.8871 6.83675 22 8.14382 22 9.70581C22 11.2678 20.8871 12.5762 19.4118 12.8764V18.7646C19.4118 19.0649 19.206 19.3263 18.9135 19.3949C18.8647 19.4061 18.8148 19.4118 18.7647 19.4117C18.5227 19.4117 18.2975 19.2771 18.1862 19.0545C15.8038 14.2909 11.0479 14.2352 11 14.2352H6.47059V20.7058H7.47612C7.34023 19.6731 7.27553 17.8756 8.20341 16.6876C8.80388 15.9189 9.68906 15.5293 10.8382 15.5293V16.8235C10.0993 16.8235 9.57128 17.0396 9.22447 17.4822C8.43636 18.489 8.70812 20.5052 8.87764 21.1976C8.92554 21.3904 8.88154 21.5949 8.75988 21.7515C8.63694 21.908 8.448 21.9999 8.25 21.9999H5.82353C5.46636 21.9999 5.17647 21.7113 5.17647 21.3529V14.2352H4.52942C2.74482 14.2352 1.29412 12.7845 1.29412 10.9999V10.3529H0.647064C0.289884 10.3529 0 10.0643 0 9.7058C0 9.34862 0.289884 9.05874 0.647052 9.05874H1.29412V8.41169C1.29412 6.62838 2.74482 5.17638 4.52941 5.17638H10.9987C11.1928 5.1751 15.8167 5.09616 18.1862 0.358394ZM18.1176 2.86123C15.8866 5.63839 12.936 6.27769 11.6471 6.42523V12.9877C12.936 13.1352 15.8866 13.7732 18.1176 16.5517V2.86123ZM10.3529 6.47052H4.52941C3.45918 6.47052 2.58823 7.34147 2.58823 8.41169V10.9999C2.58823 12.0702 3.45918 12.9411 4.52941 12.9411H10.3529V6.47052ZM19.4118 7.88498V11.5279C20.1637 11.26 20.7059 10.5483 20.7059 9.70581C20.7059 8.86334 20.1637 8.15287 19.4118 7.88498Z" fill="#3D3D3D"/><path d="M15 7.32373L15 12.3237" stroke="#652669" stroke-width="1.4" stroke-linecap="round"/></g><defs><clipPath id="clip0_744_20746"><rect width="22" height="22" fill="white"/></clipPath></defs></svg>
                                    </span>
                                    <span className='text'>Buy/Sell</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_744_20754)"><path d="M15.8125 20.625H14.4375V19.25C14.4369 18.7032 14.2194 18.1789 13.8327 17.7923C13.4461 17.4056 12.9218 17.1881 12.375 17.1875H9.625C9.07818 17.1881 8.55392 17.4056 8.16726 17.7923C7.78059 18.1789 7.5631 18.7032 7.5625 19.25V20.625H6.1875V19.25C6.18857 18.3386 6.55108 17.4649 7.19551 16.8205C7.83993 16.1761 8.71365 15.8136 9.625 15.8125H12.375C13.2864 15.8136 14.1601 16.1761 14.8045 16.8205C15.4489 17.4649 15.8114 18.3386 15.8125 19.25V20.625Z" fill="#652669"/><path d="M11 8.9375C11.4079 8.9375 11.8067 9.05846 12.1459 9.28509C12.485 9.51172 12.7494 9.83384 12.9055 10.2107C13.0616 10.5876 13.1025 11.0023 13.0229 11.4024C12.9433 11.8025 12.7469 12.17 12.4584 12.4584C12.17 12.7469 11.8025 12.9433 11.4024 13.0229C11.0023 13.1025 10.5876 13.0616 10.2107 12.9055C9.83384 12.7494 9.51173 12.485 9.2851 12.1459C9.05847 11.8067 8.9375 11.4079 8.9375 11C8.9375 10.453 9.1548 9.92839 9.54159 9.54159C9.92839 9.1548 10.453 8.9375 11 8.9375ZM11 7.5625C10.3201 7.5625 9.65552 7.76411 9.09023 8.14182C8.52494 8.51954 8.08434 9.0564 7.82417 9.68453C7.56399 10.3126 7.49592 11.0038 7.62855 11.6706C7.76119 12.3374 8.08858 12.9499 8.56932 13.4307C9.05007 13.9114 9.66257 14.2388 10.3294 14.3714C10.9962 14.5041 11.6874 14.436 12.3155 14.1758C12.9436 13.9157 13.4805 13.4751 13.8582 12.9098C14.2359 12.3445 14.4375 11.6799 14.4375 11C14.4375 10.0883 14.0753 9.21398 13.4307 8.56932C12.786 7.92466 11.9117 7.5625 11 7.5625Z" fill="#652669"/><path d="M20.625 20.625H19.25V9.94397L11 2.96317L2.75 9.94397V20.625H1.375V9.62504C1.37499 9.52513 1.39676 9.42642 1.4388 9.33578C1.48083 9.24514 1.54211 9.16475 1.61838 9.10021L10.5559 1.53771C10.68 1.43265 10.8374 1.375 11 1.375C11.1626 1.375 11.32 1.43265 11.4441 1.53771L20.3816 9.10021C20.4579 9.16475 20.5192 9.24514 20.5612 9.33578C20.6032 9.42642 20.625 9.52513 20.625 9.62504V20.625Z" fill="#3D3D3D"/></g><defs><clipPath id="clip0_744_20754"><rect width="22" height="22" fill="white"/></clipPath></defs></svg>
                                    </span>
                                    <span className='text'>Squch Stay</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Bookings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7648 13.9017L8.84322 15.2987L9.57712 13.0398C9.63067 12.875 9.57201 12.6945 9.43183 12.5927L7.51001 11.1962H9.88559C10.0589 11.1962 10.2125 11.0846 10.266 10.9198L11 8.66074L11.734 10.9198C11.7875 11.0846 11.9411 11.1962 12.1144 11.1962L14.489 11.1962L12.5682 12.5917C12.428 12.6936 12.3693 12.8741 12.4229 13.0389L13.1568 15.298L11.2352 13.9017C11.0949 13.7998 10.905 13.7998 10.7648 13.9017ZM10.6196 11.4777L10.5456 11.7053H10.3082C9.9207 11.7053 9.75958 12.2011 10.073 12.4289L10.2657 12.5689L10.1923 12.7944C10.0723 13.1629 10.4939 13.4696 10.8075 13.2421L11 13.1024L11.1925 13.2421C11.5061 13.4696 11.9277 13.1629 11.8077 12.7944L11.7343 12.5688L11.9268 12.4288C12.24 12.2009 12.0788 11.7053 11.6915 11.7053L11.4544 11.7053L11.3804 11.4777C11.2606 11.1093 10.7394 11.1093 10.6196 11.4777Z" fill="#652669" stroke="#652669" stroke-width="0.4"/><path d="M18.2727 3.34709C18.2727 3.56801 18.4518 3.74709 18.6727 3.74709H19.6909C19.9118 3.74709 20.0909 3.92618 20.0909 4.14709V6.05073C20.0909 6.27165 19.9118 6.45073 19.6909 6.45073H2.30909C2.08818 6.45073 1.90909 6.27165 1.90909 6.05073V4.14709C1.90909 3.92618 2.08818 3.74709 2.30909 3.74709H3.32728C3.54819 3.74709 3.72728 3.56801 3.72728 3.34709V3.238C3.72728 3.01709 3.54819 2.838 3.32728 2.838H1.4C1.17909 2.838 1 3.01709 1 3.238V18.778C1 18.9989 1.17909 19.178 1.4 19.178H20.6C20.8209 19.178 21 18.9989 21 18.778V3.238C21 3.01709 20.8209 2.838 20.6 2.838H18.6727C18.4518 2.838 18.2727 3.01709 18.2727 3.238V3.34709ZM20.0909 17.8689C20.0909 18.0898 19.9118 18.2689 19.6909 18.2689H2.30909C2.08818 18.2689 1.90909 18.0898 1.90909 17.8689V7.78346C1.90909 7.56255 2.08818 7.38346 2.30909 7.38346H19.6909C19.9118 7.38346 20.0909 7.56255 20.0909 7.78346V17.8689ZM6.85455 3.74709C6.63364 3.74709 6.45455 3.56801 6.45455 3.34709V3.238C6.45455 3.01709 6.63364 2.838 6.85455 2.838H15.1455C15.3664 2.838 15.5455 3.01709 15.5455 3.238V3.34709C15.5455 3.56801 15.3664 3.74709 15.1455 3.74709H6.85455ZM4.63637 2.30527C4.63637 2.08436 4.81545 1.90527 5.03637 1.90527H5.14546C5.36637 1.90527 5.54546 2.08436 5.54546 2.30527V4.23255C5.54546 4.45346 5.36637 4.63255 5.14546 4.63255H5.03637C4.81545 4.63255 4.63637 4.45346 4.63637 4.23255V2.30527ZM16.4546 2.30527C16.4546 2.08436 16.6336 1.90527 16.8546 1.90527H16.9637C17.1846 1.90527 17.3637 2.08436 17.3637 2.30527V4.23255C17.3637 4.45346 17.1846 4.63255 16.9637 4.63255H16.8546C16.6336 4.63255 16.4546 4.45346 16.4546 4.23255V2.30527Z" fill="#3D3D3D" stroke="#3D3D3D" stroke-width="0.5"/></svg>
                                    </span>
                                    <span className='text'>Events</span>
                                </Accordion.Header>
                                <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Events</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Organiser</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Gateman</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Venue</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Posts</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Categories</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Sub-Categories</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Support Tickets</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Privacy Policy</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Terms & Conditions</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                    </div>
                </div>
                <div className='side-box'>
                    <div className='heading'>
                        <h6>Promotions & Marketing</h6>
                        <span></span>
                    </div>
                    <div className='menu-dropdown'>
                            
                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2169 2.63077L11.5 1L8.78462 2.63077L5.62819 2.90923L4.3896 5.82769L2 7.90923L2.70996 11L2 14.0908L4.3896 16.1723L5.62819 19.0908L8.78462 19.3692L11.5 21L14.2169 19.3692L17.3718 19.0908L18.6119 16.1723L21 14.0908L20.29 11L21 7.90769L18.6119 5.82769L17.3718 2.90923L14.2169 2.63077Z" stroke="#3D3D3D" stroke-width="1.3"/><path d="M7.93828 14.8462L15.6219 7.15387M10.2434 8.69233C10.2434 9.10036 10.0815 9.49167 9.79327 9.78019C9.50507 10.0687 9.11421 10.2308 8.70664 10.2308C8.29908 10.2308 7.90821 10.0687 7.62002 9.78019C7.33183 9.49167 7.16992 9.10036 7.16992 8.69233C7.16992 8.28431 7.33183 7.89299 7.62002 7.60448C7.90821 7.31596 8.29908 7.15387 8.70664 7.15387C9.11421 7.15387 9.50507 7.31596 9.79327 7.60448C10.0815 7.89299 10.2434 8.28431 10.2434 8.69233ZM16.3902 14.0769C16.3902 14.485 16.2283 14.8763 15.9401 15.1648C15.652 15.4533 15.2611 15.6154 14.8535 15.6154C14.446 15.6154 14.0551 15.4533 13.7669 15.1648C13.4787 14.8763 13.3168 14.485 13.3168 14.0769C13.3168 13.6689 13.4787 13.2776 13.7669 12.9891C14.0551 12.7006 14.446 12.5385 14.8535 12.5385C15.2611 12.5385 15.652 12.7006 15.9401 12.9891C16.2283 13.2776 16.3902 13.6689 16.3902 14.0769Z" stroke="#652669" stroke-width="1.3"/></svg>
                                </span>
                                <span className='text'>Promocode</span>
                            </Link>

                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5964 10.7045C17.5846 10.6659 17.5677 10.6319 17.5473 10.6018C17.7752 9.89252 17.8987 9.13647 17.8987 8.35147C17.8987 4.29153 14.6071 1 10.5472 1C6.48725 1 3.19572 4.29153 3.19572 8.35147C3.19572 9.14521 3.32202 9.90936 3.55479 10.6255C3.54092 10.6498 3.52852 10.6755 3.51973 10.7045L1.04008 18.8771C0.794338 19.6861 1.73104 20.3263 2.42128 19.8452L4.7935 18.1931C5.18096 17.9232 5.72904 18.0783 5.9013 18.4998L6.89448 20.9309C7.2368 21.7689 8.46874 21.715 8.7315 20.8486L10.2944 15.6981C10.3784 15.701 10.4626 15.7029 10.5472 15.7029C10.6391 15.7029 10.7304 15.7006 10.8214 15.6973L12.3842 20.8486C12.6476 21.7149 13.8784 21.7687 14.2212 20.9311L15.2148 18.4998C15.387 18.0782 15.9349 17.9231 16.3227 18.1931L18.6949 19.8452C19.3851 20.3262 20.3218 19.6861 20.076 18.877L17.5964 10.7045ZM8.028 20.6352C7.96653 20.8379 7.65613 20.8514 7.57502 20.6529L6.58184 18.2217C6.22992 17.3605 5.14387 17.0531 4.37335 17.5897L2.00104 19.242C1.8716 19.3322 1.70477 19.2182 1.74349 19.0906L3.95604 11.7984C4.24106 12.2837 4.58489 12.7372 4.97941 13.1518C6.12163 14.4754 7.72789 15.3869 9.5454 15.6346L8.028 20.6352ZM10.1194 14.9536C10.0987 14.9484 10.0775 14.9443 10.0553 14.9427C8.34391 14.8164 6.7752 14.0354 5.63958 12.7774C5.60348 12.7412 5.56799 12.7047 5.53288 12.6679C4.53458 11.5092 3.93088 10.0009 3.93088 8.35147C3.93088 4.69755 6.89327 1.73516 10.5472 1.73516C14.2011 1.73516 17.1635 4.69755 17.1635 8.35147C17.1635 10.1168 16.4721 11.7205 15.3454 12.9069C15.3298 12.9216 15.3144 12.9366 15.2987 12.9513C14.1696 14.1099 12.678 14.8176 11.0594 14.9416C11.038 14.9433 11.0176 14.9472 10.9976 14.9522C10.8487 14.9622 10.6986 14.9678 10.5472 14.9678C10.4034 14.9678 10.2609 14.9627 10.1194 14.9536ZM19.1151 19.2421L16.7427 17.5897C15.9718 17.0532 14.8861 17.3605 14.5342 18.2217L13.5407 20.6528C13.4594 20.8515 13.1493 20.8379 13.0877 20.635L11.5697 15.6318C13.2554 15.3972 14.7582 14.5915 15.8758 13.4159C16.3768 12.9413 16.8112 12.3963 17.1604 11.7996L19.3725 19.0906C19.4113 19.2182 19.2444 19.3322 19.1151 19.2421Z" fill="#3D3D3D" stroke="#3D3D3D" stroke-width="0.4"/><path d="M16.0604 8.35148C16.0604 5.30677 13.5915 2.83789 10.5468 2.83789C7.50209 2.83789 5.0332 5.30677 5.0332 8.35148C5.0332 11.3964 7.50196 13.8651 10.5468 13.8651C13.5916 13.8651 16.0604 11.3964 16.0604 8.35148ZM5.76832 8.35148C5.76832 5.7128 7.90807 3.57305 10.5468 3.57305C13.1854 3.57305 15.3252 5.7128 15.3252 8.35148C15.3252 10.9904 13.1856 13.1299 10.5468 13.1299C7.90794 13.1299 5.76832 10.9904 5.76832 8.35148Z" fill="#652669" stroke="#652669" stroke-width="0.3"/><path d="M10.9144 11.6619L10.9165 11.2817C11.3238 11.2008 11.6914 10.9847 11.961 10.6662C12.4372 10.1032 12.3293 9.24846 11.7444 8.79363L10.9214 8.15328L10.9168 6.15004C11.3494 6.29903 11.6603 6.70928 11.6603 7.19258C11.6603 7.39559 11.8248 7.56014 12.0278 7.56014C12.2309 7.56014 12.3954 7.39559 12.3954 7.19258C12.3954 6.29976 11.759 5.55616 10.9151 5.38976L10.9144 5.04228C10.9139 4.83927 10.7489 4.67506 10.5459 4.67554C10.3429 4.67601 10.1787 4.84095 10.1792 5.04396L10.18 5.39416C9.77989 5.47772 9.41948 5.69215 9.15371 6.00604C8.67773 6.56903 8.78563 7.42376 9.3708 7.87842L10.187 8.51343L10.1899 9.76656L10.1857 10.5179C9.75968 10.3653 9.45484 9.95812 9.45484 9.47968C9.45484 9.27667 9.2903 9.11213 9.08729 9.11213C8.88427 9.11213 8.71973 9.27667 8.71973 9.47968C8.71973 10.3657 9.34685 11.1052 10.1814 11.2789L10.1792 11.6578C10.1781 11.8608 10.3417 12.0263 10.5447 12.0274C10.7477 12.0285 10.9132 11.8649 10.9144 11.6619ZM9.82206 7.29803C9.56124 7.09536 9.51368 6.71893 9.71493 6.48085C9.84092 6.33207 10.0017 6.22089 10.1817 6.15581L10.1849 7.58034L9.82206 7.29803ZM11.293 9.37389C11.5537 9.5766 11.6012 9.95316 11.3998 10.1914C11.2711 10.3435 11.1057 10.4565 10.9208 10.521L10.925 9.76781L10.9234 9.08641L11.293 9.37389Z" fill="#652669" stroke="#652669" stroke-width="0.3"/></svg>
                                </span>
                                <span className='text'>Reward Structure</span>
                            </Link>

                            <Accordion.Item eventKey="9">
                                <Accordion.Header className='menu-items d-flex align-items-center gap-2'>
                                    <span className='icons'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9062 4C20.056 4 20.196 4.02983 20.3262 4.08949C20.4564 4.14915 20.5736 4.22869 20.6777 4.32812C20.7819 4.42756 20.86 4.54356 20.9121 4.67614C20.9642 4.80871 20.9935 4.95455 21 5.11364V16.8864C21 17.0388 20.9707 17.1813 20.9121 17.3139C20.8535 17.4465 20.7754 17.5658 20.6777 17.6719C20.5801 17.7779 20.4661 17.8575 20.3359 17.9105C20.2057 17.9635 20.0625 17.9934 19.9062 18H2.09375C1.94401 18 1.80404 17.9702 1.67383 17.9105C1.54362 17.8509 1.42643 17.7713 1.32227 17.6719C1.2181 17.5724 1.13997 17.4564 1.08789 17.3239C1.03581 17.1913 1.00651 17.0455 1 16.8864V5.11364C1 4.96117 1.0293 4.81866 1.08789 4.68608C1.14648 4.5535 1.22461 4.43419 1.32227 4.32812C1.41992 4.22206 1.53385 4.14252 1.66406 4.08949C1.79427 4.03646 1.9375 4.00663 2.09375 4H19.9062ZM19.75 5.27273H7.25V6.65483C7.46484 6.58191 7.67318 6.54545 7.875 6.54545C8.13542 6.54545 8.37956 6.59517 8.60742 6.6946C8.83529 6.79403 9.03385 6.92992 9.20312 7.10227C9.3724 7.27462 9.50586 7.4768 9.60352 7.70881C9.70117 7.94081 9.75 8.18939 9.75 8.45455C9.75 8.66004 9.71419 8.87216 9.64258 9.09091H19.75V5.27273ZM4.75 8.45455C4.75 8.62689 4.81185 8.77604 4.93555 8.90199C5.05924 9.02794 5.20573 9.09091 5.375 9.09091H6V8.45455C6 8.2822 5.93815 8.13305 5.81445 8.0071C5.69076 7.88116 5.54427 7.81818 5.375 7.81818C5.20573 7.81818 5.05924 7.88116 4.93555 8.0071C4.81185 8.13305 4.75 8.2822 4.75 8.45455ZM7.875 9.09091C8.04427 9.09091 8.19076 9.02794 8.31445 8.90199C8.43815 8.77604 8.5 8.62689 8.5 8.45455C8.5 8.2822 8.43815 8.13305 8.31445 8.0071C8.19076 7.88116 8.04427 7.81818 7.875 7.81818C7.70573 7.81818 7.55924 7.88116 7.43555 8.0071C7.31185 8.13305 7.25 8.2822 7.25 8.45455V9.09091H7.875ZM2.25 5.27273V9.09091H3.60742C3.53581 8.87216 3.5 8.66004 3.5 8.45455C3.5 8.18939 3.54883 7.94081 3.64648 7.70881C3.74414 7.4768 3.8776 7.27462 4.04688 7.10227C4.21615 6.92992 4.41471 6.79403 4.64258 6.6946C4.87044 6.59517 5.11458 6.54545 5.375 6.54545C5.57682 6.54545 5.78516 6.58191 6 6.65483V5.27273H2.25ZM2.25 16.7273H6V11.2685L4.56445 12.7202L3.68555 11.8253L5.11133 10.3636H2.25V16.7273ZM19.75 16.7273V10.3636H8.13867L9.56445 11.8253L8.68555 12.7202L7.25 11.2685V16.7273H19.75Z" fill="#3D3D3D"/><line x1="11" y1="14.35" x2="18" y2="14.35" stroke="#652669" stroke-width="1.3"/></svg>
                                    </span>
                                    <span className='text'>Manage Gift Cards</span>
                                </Accordion.Header>
                                {/* <Accordion.Body> 
                                    <ul className='submenu'>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Ride Tutorials</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='position-relative'>
                                                <span className='cercle-box'></span>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body> */}
                            </Accordion.Item>

                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 14.102H19V11.4898C18.9997 11.2301 18.8942 10.9811 18.7068 10.7974C18.5193 10.6138 18.2651 10.5105 18 10.5102H11.6667V7.89796H13C13.2651 7.89763 13.5193 7.79432 13.7067 7.61069C13.8942 7.42705 13.9997 7.17807 14 6.91837V3.97959C13.9997 3.71989 13.8942 3.47091 13.7067 3.28727C13.5193 3.10363 13.2651 3.00032 13 3H9C8.73489 3.00032 8.48072 3.10363 8.29326 3.28727C8.10579 3.47091 8.00033 3.71989 8 3.97959V6.91837C8.00033 7.17807 8.10579 7.42705 8.29326 7.61069C8.48072 7.79432 8.73489 7.89763 9 7.89796H10.3333V10.5102H4C3.73487 10.5105 3.48069 10.6138 3.29322 10.7974C3.10575 10.9811 3.0003 11.2301 3 11.4898V14.102H2C1.73489 14.1024 1.48072 14.2057 1.29326 14.3893C1.10579 14.573 1.00033 14.8219 1 15.0816V18.0204C1.00033 18.2801 1.10579 18.5291 1.29326 18.7127C1.48072 18.8964 1.73489 18.9997 2 19H5.33333C5.59845 18.9997 5.85261 18.8964 6.04007 18.7127C6.22754 18.5291 6.333 18.2801 6.33333 18.0204V15.0816C6.333 14.8219 6.22754 14.573 6.04007 14.3893C5.85261 14.2057 5.59845 14.1024 5.33333 14.102H4.33333V11.8163H10.3333V14.102H9.33333C9.06822 14.1024 8.81406 14.2057 8.62659 14.3893C8.43913 14.573 8.33366 14.8219 8.33333 15.0816V18.0204C8.33366 18.2801 8.43913 18.5291 8.62659 18.7127C8.81406 18.8964 9.06822 18.9997 9.33333 19H12.6667C12.9318 18.9997 13.1859 18.8964 13.3734 18.7127C13.5609 18.5291 13.6663 18.2801 13.6667 18.0204V15.0816C13.6663 14.8219 13.5609 14.573 13.3734 14.3893C13.1859 14.2057 12.9318 14.1024 12.6667 14.102H11.6667V11.8163H17.6667V14.102H16.6667C16.4016 14.1024 16.1474 14.2057 15.9599 14.3893C15.7725 14.573 15.667 14.8219 15.6667 15.0816V18.0204C15.667 18.2801 15.7725 18.5291 15.9599 18.7127C16.1474 18.8964 16.4016 18.9997 16.6667 19H20C20.2651 18.9997 20.5193 18.8964 20.7067 18.7127C20.8942 18.5291 20.9997 18.2801 21 18.0204V15.0816C20.9997 14.8219 20.8942 14.573 20.7067 14.3893C20.5193 14.2057 20.2651 14.1024 20 14.102ZM9.33333 4.30612H12.6667V6.59184H9.33333V4.30612ZM5 15.4082V17.6939H2.33333V15.4082H5ZM12.3333 15.4082V17.6939H9.66667V15.4082H12.3333ZM19.6667 17.6939H17V15.4082H19.6667V17.6939Z" fill="#3D3D3D"/><rect x="8" y="14" width="6" height="5" rx="1" fill="#652669"/></svg>
                                </span>
                                <span className='text'>MLM Referral Settings</span>
                            </Link>

                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.55829 14.9284L6.16861 12.9925H8.77095L9.38128 14.9284H11.0188L8.41644 7.39674H6.61402L4 14.9284H5.55829ZM7.51004 8.83679L8.46319 11.8826H6.48806L7.44121 8.83679H7.51004ZM13.6899 8.99749C12.3148 8.99749 11.4135 9.95794 11.4135 11.5625V12.435C11.4135 14.0408 12.3031 15 13.6731 15C14.5522 15 15.2599 14.5857 15.4482 13.9906H15.5222V14.9284H17V7H15.4937V9.96296H15.4248C15.1911 9.3666 14.5418 8.99749 13.6899 8.99749ZM14.1925 10.1563C14.9457 10.1563 15.4937 10.7087 15.4937 11.5851V12.3409C15.4937 13.295 14.9794 13.8475 14.2159 13.8475C13.4393 13.8475 12.9537 13.2837 12.9537 12.2806V11.7119C12.9537 10.7137 13.4341 10.1563 14.1925 10.1563Z" fill="#652669"/><path d="M18.5 5.25C18.8315 5.25 19.1495 5.3817 19.3839 5.61612C19.6183 5.85054 19.75 6.16848 19.75 6.5V16.5C19.75 16.8315 19.6183 17.1495 19.3839 17.3839C19.1495 17.6183 18.8315 17.75 18.5 17.75H3.5C3.16848 17.75 2.85054 17.6183 2.61612 17.3839C2.3817 17.1495 2.25 16.8315 2.25 16.5V6.5C2.25 6.16848 2.3817 5.85054 2.61612 5.61612C2.85054 5.3817 3.16848 5.25 3.5 5.25H18.5ZM3.5 4C2.83696 4 2.20107 4.26339 1.73223 4.73223C1.26339 5.20107 1 5.83696 1 6.5L1 16.5C1 17.163 1.26339 17.7989 1.73223 18.2678C2.20107 18.7366 2.83696 19 3.5 19H18.5C19.163 19 19.7989 18.7366 20.2678 18.2678C20.7366 17.7989 21 17.163 21 16.5V6.5C21 5.83696 20.7366 5.20107 20.2678 4.73223C19.7989 4.26339 19.163 4 18.5 4H3.5Z" fill="#3D3D3D"/></svg>
                                </span>
                                <span className='text'>Advertisement Banners</span>
                            </Link>

                            <Link href="" className='menu-items d-flex align-items-center gap-2'>
                                <span className='icons'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.375 9.84615C5.20924 9.84615 5.05027 9.91504 4.93306 10.0377C4.81585 10.1603 4.75 10.3266 4.75 10.5V14.4231C4.75 14.5965 4.81585 14.7628 4.93306 14.8854C5.05027 15.008 5.20924 15.0769 5.375 15.0769H9.125C9.29076 15.0769 9.44973 15.008 9.56694 14.8854C9.68415 14.7628 9.75 14.5965 9.75 14.4231V10.5C9.75 10.3266 9.68415 10.1603 9.56694 10.0377C9.44973 9.91504 9.29076 9.84615 9.125 9.84615H5.375ZM6 13.7692V11.1538H8.5V13.7692H6ZM1 4.61538C1 3.92174 1.26339 3.25651 1.73223 2.76603C2.20107 2.27555 2.83696 2 3.5 2H16C16.663 2 17.2989 2.27555 17.7678 2.76603C18.2366 3.25651 18.5 3.92174 18.5 4.61538V5.92308C19.163 5.92308 19.7989 6.19863 20.2678 6.68911C20.7366 7.17958 21 7.84482 21 8.53846V15.7308C21 16.5978 20.6708 17.4294 20.0847 18.0425C19.4987 18.6556 18.7038 19 17.875 19H4.125C3.2962 19 2.50134 18.6556 1.91529 18.0425C1.32924 17.4294 1 16.5978 1 15.7308V4.61538ZM17.25 4.61538C17.25 4.26856 17.1183 3.93595 16.8839 3.69071C16.6495 3.44547 16.3315 3.30769 16 3.30769H3.5C3.16848 3.30769 2.85054 3.44547 2.61612 3.69071C2.3817 3.93595 2.25 4.26856 2.25 4.61538V15.7308C2.25 16.251 2.44754 16.7499 2.79917 17.1178C3.15081 17.4856 3.62772 17.6923 4.125 17.6923H17.875C18.3723 17.6923 18.8492 17.4856 19.2008 17.1178C19.5525 16.7499 19.75 16.251 19.75 15.7308V8.53846C19.75 8.19164 19.6183 7.85902 19.3839 7.61378C19.1495 7.36854 18.8315 7.23077 18.5 7.23077V15.7308C18.5 15.9042 18.4342 16.0705 18.3169 16.1931C18.1997 16.3157 18.0408 16.3846 17.875 16.3846C17.7092 16.3846 17.5503 16.3157 17.4331 16.1931C17.3158 16.0705 17.25 15.9042 17.25 15.7308V4.61538Z" fill="#3D3D3D"/><path d="M4.75 6.57691C4.75 6.4035 4.81585 6.23719 4.93306 6.11457C5.05027 5.99195 5.20924 5.92307 5.375 5.92307H14.125C14.2908 5.92307 14.4497 5.99195 14.5669 6.11457C14.6842 6.23719 14.75 6.4035 14.75 6.57691C14.75 6.75032 14.6842 6.91663 14.5669 7.03925C14.4497 7.16187 14.2908 7.23076 14.125 7.23076H5.375C5.20924 7.23076 5.05027 7.16187 4.93306 7.03925C4.81585 6.91663 4.75 6.75032 4.75 6.57691ZM11.625 9.84614C11.4592 9.84614 11.3003 9.91503 11.1831 10.0376C11.0658 10.1603 11 10.3266 11 10.5C11 10.6734 11.0658 10.8397 11.1831 10.9623C11.3003 11.0849 11.4592 11.1538 11.625 11.1538H14.125C14.2908 11.1538 14.4497 11.0849 14.5669 10.9623C14.6842 10.8397 14.75 10.6734 14.75 10.5C14.75 10.3266 14.6842 10.1603 14.5669 10.0376C14.4497 9.91503 14.2908 9.84614 14.125 9.84614H11.625ZM11 14.4231C11 14.2497 11.0658 14.0833 11.1831 13.9607C11.3003 13.8381 11.4592 13.7692 11.625 13.7692H14.125C14.2908 13.7692 14.4497 13.8381 14.5669 13.9607C14.6842 14.0833 14.75 14.2497 14.75 14.4231C14.75 14.5965 14.6842 14.7628 14.5669 14.8854C14.4497 15.008 14.2908 15.0769 14.125 15.0769H11.625C11.4592 15.0769 11.3003 15.008 11.1831 14.8854C11.0658 14.7628 11 14.5965 11 14.4231ZM5.375 9.84614C5.20924 9.84614 5.05027 9.91503 4.93306 10.0376C4.81585 10.1603 4.75 10.3266 4.75 10.5V14.4231C4.75 14.5965 4.81585 14.7628 4.93306 14.8854C5.05027 15.008 5.20924 15.0769 5.375 15.0769H9.125C9.29076 15.0769 9.44973 15.008 9.56694 14.8854C9.68415 14.7628 9.75 14.5965 9.75 14.4231V10.5C9.75 10.3266 9.68415 10.1603 9.56694 10.0376C9.44973 9.91503 9.29076 9.84614 9.125 9.84614H5.375ZM6 13.7692V11.1538H8.5V13.7692H6Z" fill="#652669"/></svg>
                                </span>
                                <span className='text'>News</span>
                            </Link>

                    </div>
                </div>
                <div className='side-box'>
                    <div className='heading'>
                        <h6>CMS</h6>
                        <span></span>
                    </div>
                </div>
                </Accordion>
            </div>
        </div>
    </>
  )
}

export default SideBar