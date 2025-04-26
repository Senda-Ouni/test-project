'use client';
import React from "react"; 

const AboutUs = () => {
 
  return (

    <div className="w-full md:mt-5 bg-about-us " id="about-us" >
      <div className="container w-[90%] md:w-[50%]  m-auto min-h-[626px] content-center text-center"> 
        
          
      <h1 className="text-white font-Medium text-[24px] md:text-[48px]  text-center ">About us</h1>
      <p className="text-[#D9D9D9] text-[16px] mt-5 text-left font-Light">
      Welcome to <span className="text-[#7D4283ED]" >Focus Marketing Solutions</span> ! We're a creative team dedicated to driving your business forward with innovative 
      marketing strategies. From digital marketing to social media management, 
      we're here to help you succeed.  <span className="text-[#7D4283ED]" >Let's build something extraordinary together.</span> 
      </p>
     
            <button className="mt-10 rounded-[200px] border border-[#7D4283] text-[#7D4283] px-5 py-3 text-[18px] font-Medium">Read more</button> 
 
    
      </div>
    </div>

  );
};

export default AboutUs;
