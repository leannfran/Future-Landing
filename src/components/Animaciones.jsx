import React from 'react';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';


const AnimatedContainer = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const container = document.getElementById('animated-container');
      if (container.getBoundingClientRect().top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <Element name="animated-container">
        <div className={`container ${isVisible ? 'animate-fade animate-ease-in-out animate-normal animate-fill-forwards' : ''}`}>
          {children}
        </div>
      </Element>
    );
  };

  export default AnimatedContainer