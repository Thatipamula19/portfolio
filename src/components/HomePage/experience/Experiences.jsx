import React from 'react'
import classes from './experiences.module.css';
import SkillsCarousels from './carousels/Carousels';
const Experiences = () => {
  return (
    <section id='skills' className={`${classes?.expSection}`}>
      <div className="row">
        <div className={`col-md-3 col-lg-3 col-12`}>
          <div className={`${classes?.expBody}`}>
            <p className={`${classes?.expDes}`}>3+ years of</p>
            <h1 className={`${classes?.expHead}`}>Experience</h1>
            <p className={`${classes?.expDes}`}>with the most popular ecosystem frontend</p>
          </div>
        </div>
        <div className={`col-md-9 col-lg-9 col-12`}>
          <div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <SkillsCarousels />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
