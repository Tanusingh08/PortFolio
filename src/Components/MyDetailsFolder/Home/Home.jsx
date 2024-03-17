import Mypic from "../../../assets/photo.jpg";
import "./Home.css";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function HomePage() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const typed = new Typed(elementRef.current, {
        strings: ["Frontend Developer", "Web Developer", "UI/UX Developer"],
        typeSpeed: 50,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });

      // Clean up function to destroy Typed instance when component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="topest" id="Home">
        <div className="top">
          <div className="innerItems">
            <h2>Hello, It's me</h2>
            <h1>Tanu Singh</h1>
            <h3>And I'm a <span style={{color:'rgb(211, 105, 155)'}} ref={elementRef} /></h3>
          </div>
          <img src={Mypic} alt="Tanu Singh" /> {/* Make sure to replace Mypic with the correct image source */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
