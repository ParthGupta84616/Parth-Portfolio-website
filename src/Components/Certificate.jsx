import React, { useEffect, useState, useRef } from 'react';
import CertificateCard from './CertificateCard';
import Python from '../assets/Python.png'; 
import AWS from '../assets/AWS.png'; 
import CTraining from '../assets/CTraining.png'; 
import CyberSecurity from "../assets/CyberSecurity.jpg"
import Energy from "../assets/Energy.png"
import Cpp from "../assets/Cpp.png"
import ReactCertificate from "../assets/React.png"
function Certificate() {

  
  return (
    <>
      <h2 className="text-2xl font-semibold hover:scale-105 transition-all duration-1000">Certificate</h2>
      <div
        className="container px-4 sm:py-5 relative overflow-x-auto"
      >
        <div className="flex gap-4 mt-6 font-medium whitespace-nowrap auto-scroll-container ">
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={Python} title={"Python (Basic)"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={AWS} title={"AWS Builder Online Series"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={CTraining} title={"C Training"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={CyberSecurity} title={"Python (Basic)"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={Energy} title={"Python (Basic)"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={Cpp} title={"Python (Basic)"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={ReactCertificate} title={"Python (Basic)"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
