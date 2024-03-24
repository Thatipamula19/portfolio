"use client";
import React, { useState } from 'react';
import classes from './navbar.module.css';
export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [mobAnimation, setMobAnimation] = useState(false);
const handelClose = ()=>{
  setMobAnimation(true);
  setTimeout(()=>{
    setOpenNav(false);
  },400)
}
const handleClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <header className={`${classes?.header}`}>
      <nav className={`${classes?.navbar}`}>
        <div className={`${classes?.web_nav}`}>
          <ul className={`${classes?.nav_list}`}>
            <li className={` ${classes?.nav_item}`}>
              <a href="/" className={`${classes?.nav_link}`}>Home</a>
            </li>
            <li className={`${classes?.nav_item}`}>
              <a href="#skills" onClick={handleClick.bind(this, "skills")} className={`${classes?.nav_link}`}>Skills</a>
            </li>
            <li className={`${classes?.nav_item}`}>
              <a href="#proExp" onClick={handleClick.bind(this, "proExp")} className={`${classes?.nav_link}`}>Experience</a>
            </li>
            <li className={`${classes?.nav_item}`}>
              <a href="#contact" onClick={handleClick.bind(this, "contact")} className={`${classes?.nav_link}`}>Contact</a>
            </li>
          </ul>
        </div>
        <div className={`${openNav ? `${classes?.mob_nav}` : `${classes?.mob_nav_close}`}`}>
          <div className={`${classes?.mob_side_nav} fadeInDown ${mobAnimation ? `${classes?.mob_side_nav_close} fadeOutUp` : ''}`}>
            <a onClick={handelClose}>
            <span className={`${classes?.mob_close_icon}`}>X </span>
            </a>
            <ul className={`${classes?.mob_nav_list}`}>
              <li className={` ${classes?.mob_nav_item}`}>
                <a href="/" className={`${classes?.mob_nav_link}`}>Home</a>
              </li>
              <li className={`${classes?.mob_nav_item}`}>
                <a href="#skills" onClick={handleClick.bind(this, "skills")} className={`${classes?.mob_nav_link}`}>Skills</a>
              </li>
              <li className={`${classes?.mob_nav_item}`}>
                <a href="#proExp" onClick={handleClick.bind(this, "proExp")} className={`${classes?.mob_nav_link}`}>Experience</a>
              </li>
              <li className={`${classes?.mob_nav_item}`}>
                <a href="#contact" onClick={handleClick.bind(this, "proExp")} className={`${classes?.mob_nav_link}`}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <a onClick={() => {setOpenNav(true);setMobAnimation(false)}}>
        <span className={`${classes?.mob_icon}`}>☰ </span>
        </a>
      </nav>
    </header>
  );
}