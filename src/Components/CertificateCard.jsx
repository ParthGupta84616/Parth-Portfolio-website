import React from 'react';

function CertificateCard({imgURL,title}) {
  return (
    <div className="w-full  rounded-2xl flex items-center justify-center p-2 border-gray-300 border-2"> 
      <div className=""><img src={imgURL} alt="Python Certificate" className=" rounded-2xl hover:scale-105 transition-all duration-1000v" />
      {/* <h1 className='text-center p-2 text-xl font-bold font-serif text-gray-600'>{title} </h1>  */}
      </div>
      
    </div>
    
  );
}

export default CertificateCard;
