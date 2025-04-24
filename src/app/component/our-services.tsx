'use client';
import React from "react";

const OurServices = () => {

  return (

    <div className="w-full mt-5  container p-15" id="service">

      <h1 className="text-[#F1F1F1] font-Medium text-[42px]  text-center ">Our services</h1>
      <p className="text-center text-[#646A69] text-[18px] font-Regular">ransforming your online presence with innovative digital strategies</p>

      <div className="mt-35 grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="card-service grid">
          <img src="./assets/video-making.png" className="w-[152px] m-auto" alt="" />
          <h6 className="text-white font-Medium text-center mt-6">Video Making </h6>
          <p className="text-[#646A69] text-center mt-1">Random content </p>


        </div>
        <div className="card-service grid">
          <img src="./assets/branding.png" className="w-[152px]  m-auto" alt="" />
          <h6 className="text-white font-Medium text-center mt-6">Branding </h6>
          <p className="text-[#646A69] text-center mt-1">Random content to fill the blank space</p>


        </div>
        <div className="card-service grid">
          <img src="./assets/Marketingstrategy.png" className="w-[152px]  m-auto" alt="" />
          <h6 className="text-white font-Medium text-center mt-6">Marketing strategy </h6>
          <p className="text-[#646A69] text-center mt-1">Random content to fill the blank space </p>


        </div>

      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="card-service grid">
          <img src="./assets/Email-Marketing.png" className="w-[152px] m-auto" alt="" />
          <h6 className="text-white font-Medium text-center mt-6">Email Marketing </h6>
          <p className="text-[#646A69] text-center mt-1">Random content </p>


        </div>
        <div className="card-service grid">
          <img src="./assets/SocialMediaManaging.png" className="w-[152px] m-auto" alt="" />
          <h6 className="text-white font-Medium text-center mt-6">Social Media Managing </h6>
          <p className="text-[#646A69] text-center mt-1">Random content to fill the blank space</p>


        </div>
        <div className="card-service grid">
          <img src="./assets/ContentWriting.png " className="w-[152px] m-auto" alt="" />
          <h6 className="text-white font-Medium text-center mt-6">Content Writing </h6>
          <p className="text-[#646A69] text-center mt-1">Random content to fill the blank space </p>


        </div>

      </div> 
    </div>

  );
};

export default OurServices;
