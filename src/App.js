import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

const App = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const motionPath = gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    tl.current = gsap
      .timeline({ duration: 1, ease: "power2.inOut" })
      .to(q(".loader__text--3 h2"), {
        top: 20,
      })
      .to(q(".loader__text--2 h2"), {
        top: 20,
      })
      .to(q(".loader__text--1 h2"), {
        top: 20,
      })
      .to(q(".loader__bg"), {
        height: 0,
      })
      .to(q(".loader"), {
        display: "none",
      });
  }, []);

  return (
    <div className="app" ref={el}>
      <div className="loader flex items-center justify-center text-center h-screen">
        <div className="loader__bg absolute inset-0 bg-black"></div>
        <div className="loader__wrapper h-36">
          <div className="loader__text--1 relative overflow-hidden">
            <h2 className="relative text-white">Nep</h2>
          </div>
          <div className="loader__text--2 relative overflow-hidden">
            <h2 className="relative text-white">Enad's</h2>
          </div>
          <div className="loader__text--3 relative overflow-hidden">
            <h2 className="relative text-white">Portfolio</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
