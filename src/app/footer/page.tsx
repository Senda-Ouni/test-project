'use client'
import React from "react";

const Footer = () => {


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div>
      <div className="min-h-[500px]"></div>
    <footer className="h-200px w-full relative z-10 bg-footer" >
      <div className="container px-5 md:px-15 py-15">
        <div className="md:p-10">
          <h2 className="text-white font-SemiBold text-[24px] text-center md:text-left md:text-[46px]">What are you waiting for?</h2>
          <p className="text-white font-Light text-[16px] md:text-[24px] text-center md:text-left">Register now to get the best delivery experience for you and your <br /> clients in Iraq!</p>

          <div className="mt-10 grid md:flex gap-3">
            <input className="bg-white font-Regular text-[18px] p-4 rounded-4xl min-w-[90%] md:min-w-[349px]" placeholder="Your email" />
            <button className="bg-[#161616] text-white px-7 py-4 font-Regular text-[18px] rounded-4xl" >register now</button>
          </div>
        </div>

        <div className="mt-20 md:mt-30 min-h-[350px]">
          <div className="grid  grid-cols-12 gap-5 ">
            <div className="col-span-12 md:col-span-2">
              <img src="./assets/logo-navbar.png" className="w-[135px] h-[40px]" alt="logo-navbar" />

            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="grid grid-cols-2">
                <div className="">

                  <p className="text-white text-[16px] font-Regular ">The company</p> 
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light cursor-pointer mt-4"
                    onClick={() => scrollToSection('about-us')} >Who are we </p>
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light cursor-pointer mt-4"
                    onClick={() => scrollToSection('service')} >Services</p>
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light flex gap-2 cursor-pointer mt-4"
                    onClick={() => scrollToSection('job')} >Jobs
                    <span className="bg-black  text-[14px]  rounded-[12px] h-[22px] py-[1px] px-[9px] cursor-pointer">12</span>
                  </p>
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light cursor-pointer mt-4"
                    onClick={() => scrollToSection('branches')} >Branches</p>
                </div>

                <div className="block"> 
                  <p className="text-white text-[16px] font-Regular ">Help center</p>
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light cursor-pointer mt-4"  >Common questions </p>
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light cursor-pointer mt-4" >Contact us</p>
                  <p className="text-[#FFFFFFCC] text-[16px] font-Light cursor-pointer mt-4" >Register as merchant   </p>
                
                </div>

              </div>


            </div>
            <div className="col-span-12 md:col-span-4 ">
              <div className="w-full md:justify-items-end">
                
              <img src="./assets/Facebook.png" alt="" className="max-w-[256px]"/>
              <img src="./assets/Instagram.png" alt="" className="max-w-[256px]  mt-4"/>
              <img src="./assets/LinkedIn.png" alt="" className="max-w-[256px]  mt-4"/>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[70%] mx-auto md:w-full text-center md:mt-0 mt-10 ">
        <span className="text-[#FFFFFFCC] text-[14px] font-Light ">© 2024 Leader Express Delivery Company. All rights reserved.</span>

        </div>
      </div>

      {/* <Customizer  /> */}
    </footer>
    </div>

  );
};

export default Footer;
