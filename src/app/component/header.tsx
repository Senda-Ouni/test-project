import React from "react";

const Header = () => {



  return (

    <div className="w-full md:min-h-[100vh] min-h-[80vh] grid grid-cols-1 md:grid-cols-12 p-5 md:p-10 gap-5 container">
      <div className="w-full grid content-between col-span-7 ">
        <div className="w-full md:w-[86%] ">

          <h1 className="text-[32px]  md:text-[50px]  text-center md:text-left text-white font-SemiBold">Transform your business  with our <span className="text-heder-change"> Creative Marketing Solutions!</span></h1>
          <p className="text-[16px] text-center md:text-left font-Regular text-white mt-5 leading-[26px]">Welcome to Focus Marketing Solutions! We're a creative team dedicated to driving your business forward with innovative marketing
            strategies. From digital marketing to social media management, we're here to help you succeed. Let's build something extraordinary together</p>

          <div className="grid md:flex gap-3 mt-7 flex-wrap">
            <button className="rounded-[200px] bg-[#7D4283] text-white px-5 py-3 text-[16px] font-Medium">Join us</button>
            <button className="rounded-[200px] border border-white text-white px-5 py-3 text-[16px] font-Medium">Contact us</button>

          </div>
        </div>
          <div className="hidden md:block mt-15  effect-picture relative w-[488px] ">
            <img src="./assets/header-2.png" className="" alt="" />

          </div>
      </div>
      <div className="hidden md:block col-span-5  ">
        <div>
        <img src="./assets/header-1.png" alt="" />


        </div>
        <div className=" effect-picture relative w-[312px] ">
        <img src="./assets/header-3.png" className="mt-4" alt="" />

        </div>
      </div>
    </div>

  );
};

export default Header;
