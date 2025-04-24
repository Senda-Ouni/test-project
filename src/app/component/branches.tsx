'use client';
import React from "react";

const Branches = () => {

  return (

    <div className="w-full container p-10 mb-10 mt-5" id="branches"> 
      <div className=" ">
        <div className="flex gap-2 w-full border-b border-b-[#D9DEDD] items-center  pb-3">
          <img src="./assets/Dot.png" className="w-[8px] h-[8px]" alt="" />
          <p className="text-[14px] text-[#7D4283] font-Regular">The company's philosophy</p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 mt-5 ">
          <div className="col-span-4">
            <div className="w-[80%]">
              
            <h2 className="font-Medium text-[#7D4283] text-[62px] leading-[75px]">
            We bear the responsibility of developing the sector.
            </h2>
            <p className="text-[#646A69] text-[24px] font-Light mt-5 leading-[36px]">
            Elevate your brand with our comprehensive marketing solutions, 
            including Digital Marketing, Content Creation, and Social Media Strategy. 
            Enhance visibility through expert SEO and PPC management, 

            </p>
            </div>
          </div>
           <div className="col-span-2">
            <div className="grid content-between h-full">
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">1,200+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                  Clients
                </p>
              </div>
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">20+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                Branches
                </p>
              </div>
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">200+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                Number of Employees
                </p>
              </div>
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">315+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                Sales Representative
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-50">
          <h3 className="text-white font-SemiBold text-[24px]">Our charts</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 mt-5 ">
          <div className="col-span-4">
            <div className="w-[80%]">
              
               
            </div>
          </div>
           <div className="col-span-2">
            <div className="grid content-between h-full">
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">1,200+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                  Clients
                </p>
              </div>
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">20+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                Branches
                </p>
              </div>
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">200+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                Number of Employees
                </p>
              </div>
              <div className="">
                <h6 className="text-white text-[48px] font-SemiBold">315+</h6>
                <p className="tex-[18px] font-Medium text-[#646A69]">
                Sales Representative
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>

      </div>
    </div>

  );
};

export default Branches;
