import React, { useEffect, useState, useRef } from 'react';
import CertificateCard from './CertificateCard';
import Python from '../assets/Python.png'; 
import AWS from '../assets/AWS.png'; 
import CTraining from '../assets/CTraining.png'; 
import CyberSecurity from "../assets/CyberSecurity.jpg"
import ADA from "../assets/ADA.png";
import Energy from "../assets/Energy.png";
import Cpp from "../assets/Cpp.png";
// import ADA from "../assets/ADA.png";
import ProblemSolving from "../assets/ProblemSolving.png";
import DaysOfCode from "../assets/DaysOfCode.png";
import ReactCertificate from "../assets/React.png";
import CertificateNameCard from './CertificateNameCard';
function Certificate() {
  const [First, setFirst] = useState(Python)
  const handleClick = (e) => {
    setFirst(e);
  };
  
  return (
    <>
      <h2 className="text-2xl font-semibold hover:scale-105 transition-all duration-1000">Certificate</h2>
      <div
        className="container px-4 sm:py-5 relative overflow-x-auto"
      >
        <div className="flex gap-4 mt-6 font-medium whitespace-nowrap auto-scroll-container ">
       
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={First} title={"Python (Basic)"}/>
          </div>
           <div className="flex-none w-1/2">
            <CertificateCard imgURL={ADA} title={"ADA"}/>
          </div>
          <div className="flex-none w-1/2">
            <CertificateCard imgURL={ProblemSolving} title={"Problem Solving"}/>
          </div> 
           <div className="flex-none w-1/2">
            <CertificateCard imgURL={DaysOfCode} title={"100Days Of Code"}/>
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
      <div className="container m-auto px-4 py-14">
    <h2 className="text-2xl font-semibold hover:scale-105 transition-all duration-700">
        Certificates
    </h2>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 mt-12 w-[80%]">
        <button onClick={() => handleClick(CTraining)}><CertificateNameCard Cirtificate={"C Traning"} /></button>
        <button onClick={() => handleClick(Python)}><CertificateNameCard Cirtificate={"Python {Basic}"} /></button>
        <button onClick={() => handleClick(ReactCertificate)}><CertificateNameCard Cirtificate={"React {Basic}"} /></button>
        <button onClick={() => handleClick(Cpp)}><CertificateNameCard Cirtificate={"Cpp Training"} /></button>
    </div> 
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
        <button onClick={() => handleClick(Energy)}><CertificateNameCard Cirtificate={"Energy Literacy"} /></button>
        <button onClick={() => handleClick(CyberSecurity)}><CertificateNameCard Cirtificate={"Cyber Security"} /></button>
        <button onClick={() => handleClick(AWS)}><CertificateNameCard Cirtificate={"Builder Online Series"} /></button>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
        <button onClick={() => handleClick(ADA)}><CertificateNameCard Cirtificate={"ADA"} /></button>
        <button onClick={() => handleClick(ProblemSolving)}><CertificateNameCard Cirtificate={"Problem Solving"} /></button>
        <button onClick={() => handleClick(DaysOfCode)}><CertificateNameCard Cirtificate={"100Days Of Code"} /></button>
    </div>
</div>

    </>
  );
}

export default Certificate;
