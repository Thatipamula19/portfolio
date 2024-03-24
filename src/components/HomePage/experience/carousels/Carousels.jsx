"use client";
import dynamic from "next/dynamic";
import React from 'react';
import classes from './carousels.module.css';
import { skillsDetails } from "@/services/app.constans";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {ssr: false});
const SkillsCarousels = () => {
    const skills = skillsDetails;
    const carouselOptions = {
        loop: false,
        items: 2.5,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        smartSpeed: 450,
        navText: ["<div class='nav-btn best_left'></div>", "<div class='nav-btn best_right'></div>"],
        dots: true,
        margin: 10,
        responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 2
          },
          1100: {
            items: 2.5
        }
          },
      };
    return (
        <OwlCarousel className="ln_bestteachers wow bounceInDown delay-4s" {...carouselOptions}>
            {
                skills.map((skill, index) =>( 
                    <div key={index} className="item">
                        <div className={`${classes?.card} animate__animated animate__fadeInDown animate__delay-0.5s`}>
                            <div className={`${classes?.cardBody}`}>
                                <img src={skill?.logo} alt="Angular" className={`${classes?.cardLogo}`}/>
                                <h1 className={`${classes?.heading}`}>{skill?.skill}</h1>
                            </div>
                        </div>
                    </div>
                ))
            }
        </OwlCarousel>
    )
}

export default SkillsCarousels