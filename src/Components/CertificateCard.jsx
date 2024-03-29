import React from 'react';

function CertificateCard({imgURL,title}) {
  return (
    <div className="w-full  rounded-2xl flex items-center justify-center p-2 border-gray-300 border-2 h-full"> 
      <div className="">
        <img src={imgURL} alt="Python Certificate" className=" rounded-2xl hover:scale-105 transition-all duration-1000v" />
      
      </div>
      
    </div>
    
  );
}

export default CertificateCard;
