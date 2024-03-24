"use client";
import React from 'react';
import classes from "./heroSection.module.css";
import useWow from '@/utils/useWow';
export default function HeroSection() {
  const wowRef = useWow();
  return (
    <>
    {
       typeof window !== 'undefined' &&   <section id="home" className={`${classes?.heroSection}`}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className={`${classes?.heroFlex}`}>
                <div className={`${classes?.heroLeft}`}>
                  <div className={`${classes?.headingBody}`}>
                    <h1 className={`${classes?.heading} wow bounceInDown`}>Hi, I'm Venkatesh Thatipamula</h1>
                    <p className={`${classes?.heroDes} wow bounceInLeft`}>As a dedicated <strong className={`${classes?.whiteColor}`}>Software Engineer</strong> with over <strong className={`${classes?.whiteColor}`}>3+ years</strong> of hands-on experience, I bring a deep expertise in Angular,
                      complemented by proficient knowledge in React and Next.js frameworks. My journey in crafting impactful user
                      experiences for Internet/Intranet applications is underpinned by a versatile tech stack, including HTML, CSS,
                      Bootstrap, and JavaScript.
                    </p>
                    <div className={`${classes?.heroBtnFlex} wow bounceInUp`}>
                      <a href="/homepage/Thatipamula_Venkatesh.pdf" download="ThatipamulaVenkatesh.pdf"><button className={`${classes?.heroBtnDown}`}>Download CV</button></a>
                      <a><button className={`${classes?.heroBtnExp}`}>See Experiences</button></a>
                    </div>
                  </div>
                </div>
                <div className={`${classes?.heroRight}`}>
                  <img src='/homepage/heroSection/Photo.png' className={`${classes?.heroImage} wow bounceInRight`} alt='Thatipamula Venkatesh' title='Thatipamula Venkatesh' loading='lazy' width="100%" height="100%" />
                </div>
              </div>
            </div>
          </div>
        </section>
    }
    </>
  );
}