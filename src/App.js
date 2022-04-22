import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const App = () => {
  
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline( { ease: "power2.inOut" } )
      .to(q(".loader_line--1"), {
        opacity: 1,
        delay: 1,
      })
      .to(q(".loader_line--2"), {
        duration: 1,
        opacity: 1
      })
      .to(q(".loader_line--1, .loader_line--2"), {
        duration: 1,
        height: '100%'
      })
      .to(q(".loader_line--3"), {
        duration: 1,
        opacity: 1
      })
      .to(q(".loader_line--3"), {
        duration: 1,
        rotate: -40,
        left: 62,
        bottom: -22
      })
}, []);


  return (
    <div className='app' ref={el}>
      <div className='loader flex items-center justify-center text-center h-screen'>
        <div className='loader_bg absolute inset-0 bg-black'></div>
        <div className='loader_wrap relative h-60'>
          <div className='loader_line loader_line--1 absolute top-0 left-0 border-4 border-white rounded-full w-12 h-12 opacity-0'></div>
          <div className='loader_line loader_line--2 absolute bottom-0 right-0 border-4 border-white rounded-full w-12 h-12 opacity-0'></div>
          <div className='loader_line loader_line--3 absolute bottom-0 right-0 border-4 border-white rounded-full w-12 h-full opacity-0'></div>
        </div>
      </div>
    </div>
  );
}
 
export default App;

