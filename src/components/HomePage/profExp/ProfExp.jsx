"use client";
import React, { useState } from 'react'
import classes from './profExp.module.css';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import ProfExpTab from './profExpTab/ProfExpTab';
import EducationTab from './educationTab/EducationTab';
const ProfExp = () => {
    const [fillActive, setFillActive] = useState('ProfExp');

    const handleFillClick = (value) => {
      if (value === fillActive) {
        return;
      }
  
      setFillActive(value);
    };
  return (
      <section id="proExp" className={`${classes?.profSection}`}>
          <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                  <MDBTabs className={`mb-3 ${classes?.profTab} `}>
                      <MDBTabsItem>
                          <MDBTabsLink className={`${classes?.profTabs} ${fillActive == 'ProfExp' ? classes?.profTabsActive : ''}`} onClick={() => handleFillClick('ProfExp')} active={fillActive === 'ProfExp'}>
                              Professional Experience
                          </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                          <MDBTabsLink className={`${classes?.profTabs} ${fillActive == 'Education' ? classes?.profTabsActive : ''}`} onClick={() => handleFillClick('Education')} active={fillActive === 'Education'}>
                              Education
                          </MDBTabsLink>
                      </MDBTabsItem>
                  </MDBTabs>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
              <MDBTabsContent>
                      <MDBTabsPane open={fillActive === 'ProfExp'}>
                        <ProfExpTab />
                      </MDBTabsPane>
                      <MDBTabsPane open={fillActive === 'Education'}>
                        <EducationTab />
                      </MDBTabsPane>
                  </MDBTabsContent>
              </div>
          </div>
      </section>
  )
}

export default ProfExp
