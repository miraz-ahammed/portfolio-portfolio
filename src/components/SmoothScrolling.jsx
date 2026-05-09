"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SmoothScrolling({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      root 
      ref={lenisRef} 
      options={{ 
        lerp: 0.1,      
        duration: 1.5,    
        smoothWheel: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;