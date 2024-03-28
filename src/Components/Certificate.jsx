import React, { useEffect, useState } from 'react'
import CertificateCard from './CertificateCard'
import Python from '../assets/Python.png'; 
import AWS from '../assets/AWS.png'; 
import CTraining from '../assets/CTraining.png'; 

function Certificate() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.body.style.overflowY = 'hidden'; // Prevent window scrolling
    // document.body.style.marginLeft= `10px`;
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    document.body.style.overflowY = ''; // Re-enable window scrolling
  };
  
  useEffect(() => {
    const container = document.getElementById('scrollContainer');

    const handleScroll = (event) => {
      container.scrollLeft += event.deltaY * 2;
    };

    if (isHovered) {
      container.addEventListener('wheel', handleScroll);
    } else {
      container.removeEventListener('wheel', handleScroll);
    }

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [isHovered]);
  return (
    <>
    <h2 className="text-2xl font-semibold hover:scale-105 transition-all duration-1000">Certificate</h2>
    <div
      className="container  px-4 sm:py-5 relative overflow-x-auto"
      id="scrollContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
  
  <div className="flex gap-8 mt-6 font-medium whitespace-nowrap">
    <div className="flex-none w-1/2">
      <CertificateCard imgURL={Python} title={"Python (Basic)"}/>
    </div>
    <div className="flex-none w-1/2">
      <CertificateCard imgURL={Python} title={"Python (Basic)"}/>
    </div>
    <div className="flex-none w-1/2">
      <CertificateCard imgURL={Python} title={"Python (Basic)"}/>
    </div>
    <div className="flex-none w-1/2">
      <CertificateCard imgURL={Python} title={"Python (Basic)"}/>
    </div>
    <div className="flex-none w-1/2">
      <CertificateCard imgURL={Python} title={"Python (Basic)"}/>
    </div>
  </div>
</div>

    </>

  )
}

export default Certificate