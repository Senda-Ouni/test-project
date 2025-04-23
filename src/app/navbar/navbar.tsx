import React from "react";

const Navbar = () => {

 


  return (

    <div className="w-full p-10 flex gap-2 justify-between items-center">
      <div>
        <img src="./assets/logo-navbar.png" className="w-[135px] h-[40px]" alt="logo-navbar" />
      </div>
      <div className="flex gap-3 w-[450px] justify-between ">
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
      <div className="flex gap-3">
        <button className="rounded-[200px] border border-white text-white px-5 py-3 text-[14px]">Contact us</button>
        <button className="rounded-[200px] bg-[#7D4283] text-white px-5 py-3 text-[14px]">Join us</button>

      </div>

    </div>

  );
};

export default Navbar;
