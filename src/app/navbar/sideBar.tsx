import { AlignJustify, CircleX } from "lucide-react";
import React, { useState } from "react";

const SideBar = () => {
  const [showToggle, setShowToggle] = useState<boolean>(false)

  const handleClick = () => {
    setShowToggle(!showToggle)
    console.log('showToggle', showToggle)
  }


  return (


    <div className="w-full p-10 flex gap-2 justify-between items-center">

      <button className="w-[44px] h-[44px]" onClick={handleClick} ><img src="./assets/Menu-Icon.png" alt="Menu-Icon" /> </button>
      <div>
        <img src="./assets/logo-navbar.png" className="w-[135px] h-[40px]" alt="logo-navbar" />
      </div>
      {showToggle && <div className="w-[95%] fixed left-0 top-0 h-[100vh] shadow-lg p-5 bg-[#161616] block gap-3">
        <div className="w-full text-right">
          <button className="w-[50px] " onClick={handleClick} > <CircleX className="text-[#1d4b60] w-10 h-10  cursor-pointer" /></button>

        </div> 
        <div className="block gap-3 w-full h-full ">
       
            <img src="./assets/logo-navbar.png" className="w-[135px] h-[40px]" alt="logo-navbar" />
          
        <div className=" grid gap-6 mt-6">
            <a className="text-white font-Regular text-[14px] cursor-pointer">
              Home

            </a>
            <a className="text-white font-Regular text-[14px] cursor-pointer">
              About us

            </a>
            <a className="text-white font-Regular text-[14px] cursor-pointer">
              Service

            </a>
            <a className="text-white font-Regular text-[14px] cursor-pointer">
              Branches

            </a>
            <a className="flex text-white font-Regular gap-1 text-[14px] cursor-pointer">
              Jobs

              <span className="bg-[#7D4283] text-[14px]  rounded-[12px] h-[22px] py-[1px] px-[9px]">12</span>
            </a>

        </div>
     
      <div className="mt-4  grid gap-3">
        
      <button className="rounded-[200px] border border-white text-white px-5 py-3 text-[14px] ">Contact us</button> 
            <button className="rounded-[200px] bg-[#7D4283] text-white px-5 py-3 text-[14px]">Join us</button>
      </div>
        </div>
      </div>}

    </div>

  );
};

export default SideBar;
