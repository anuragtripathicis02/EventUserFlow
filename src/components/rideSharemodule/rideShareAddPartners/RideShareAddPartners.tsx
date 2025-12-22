'use client'
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import BasicDetails from './BasicDetails';
import IDProof from './IDProof';
import VehicleDetails from './VehicleDetails';
import LicenceDetails from './LicenceDetails';
import SelfieVerification from './SelfieVerification';
import InsuranceDetails from './InsuranceDetails';
import PayoutBankDetails from './PayoutBankDetails';

import IconTabsStatus1 from '../../../../public/images/icon-success.png'
import IconTabsStatus2 from '../../../../public/images/icon-pending.png'


import Image from "next/image";

const RideShareAddPartners = () => {
  const [selectedTabs, setSelectedTabs] = useState(['first']);

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    const currentIndex = selectedTabs.indexOf(eventKey);
    if (currentIndex === -1) {
      setSelectedTabs([...selectedTabs, eventKey]);
    } else {
      setSelectedTabs(selectedTabs.slice(0, currentIndex + 1));
    }
  };

  return (
    <div className='tabs-rideshare-sec'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" onSelect={handleSelect}>
        <div className='tabs-addrideshare-sec d-md-flex'>
          <div className='tabs-nav-box aside-tab'>
            <Nav variant="pills" className="flex-md-column">
              <Nav.Item>
                <Nav.Link eventKey="first" className={selectedTabs.includes("first") ? 'selected' : ''}>
                  <span className='tabs-num'>1.</span> 
                  <span className='nav-text'>Basic Details</span>
                  <span className='tab-status-icon'>
                      <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/>
                      {/* <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/> */}
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className={selectedTabs.includes("second") ? 'selected' : ''}>
                  <span className='tabs-num'>2.</span> 
                  <span className='nav-text'>ID Proof</span>
                  <span className='tab-status-icon'>
                      {/* <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/> */}
                      <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className={selectedTabs.includes("third") ? 'selected' : ''}>
                  <span className='tabs-num'>3.</span> 
                  <span className='nav-text'>Vehicle Details</span>
                  <span className='tab-status-icon'>
                      {/* <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/> */}
                      <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className={selectedTabs.includes("fourth") ? 'selected' : ''}>
                  <span className='tabs-num'>4.</span> 
                  <span className='nav-text'>Licence Details</span>
                  <span className='tab-status-icon'>
                      {/* <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/> */}
                      <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth" className={selectedTabs.includes("fifth") ? 'selected' : ''}>
                  <span className='tabs-num'>5.</span> 
                  <span className='nav-text'>Selfie Verification</span>
                  <span className='tab-status-icon'>
                      {/* <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/> */}
                      <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth" className={selectedTabs.includes("sixth") ? 'selected' : ''}>
                  <span className='tabs-num'>6.</span> 
                  <span className='nav-text'>Insurance Details</span>
                  <span className='tab-status-icon'>
                      {/* <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/> */}
                      <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh" className={selectedTabs.includes("seventh") ? 'selected' : ''}>
                  <span className='tabs-num'>7.</span> 
                  <span className='nav-text'>Payout Bank Details</span>
                  <span className='tab-status-icon'>
                      {/* <Image src={IconTabsStatus1} alt='' className='ic-none icon-success'/> */}
                      <Image src={IconTabsStatus2} alt='' className='ic-none icon-pending'/>
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className='tabs-details-box flex-grow-1'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                    <BasicDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <IDProof/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <VehicleDetails/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <LicenceDetails/>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <SelfieVerification/>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <InsuranceDetails/>
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <PayoutBankDetails/>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default RideShareAddPartners;