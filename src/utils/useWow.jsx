"use client";
import { useEffect, useRef } from 'react';
// import WOW from 'wowjs';
export default function useWow() {
  const wowRef = useRef(null);

  useEffect(() => {
    if(typeof window !== 'undefined') {
      // window.WOW = require('wowjs');
      // new WOW.WOW().init();
    }
  }, []);

  return wowRef;
}
