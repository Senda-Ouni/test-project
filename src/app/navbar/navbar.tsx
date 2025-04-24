'use client'; 
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react"; 

const Navbar = () => {

  const router = useRouter(); 
  const [hasScrolled, setHasScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
const handleClick = (link: string) => {
  router.push(link);
}


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); 
  }
};

useEffect(() => {
  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) { 
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  return (

    <div className="w-full bg-[#161616] sticky top-0 transition-transform duration-500 z-3">
      <div className=" p-10 flex gap-2 justify-between items-center container">
      <div>
        <img src="./assets/logo-navbar.png" className="w-[135px] h-[40px]" alt="logo-navbar" />
      </div>
      <div className="flex gap-3 w-[450px] justify-between ">
        <a onClick={() =>scrollToSection('home')} className="text-white font-Regular text-[14px] cursor-pointer">
          Home

        </a>
        <a onClick={() => scrollToSection('about-us')} className="text-white font-Regular text-[14px] cursor-pointer">
          About us

        </a>
        <a onClick={() => scrollToSection('service')} className="text-white font-Regular text-[14px] cursor-pointer">
          Service

        </a>
        <a onClick={() => scrollToSection('branches')}  className="text-white font-Regular text-[14px] cursor-pointer">
          Branches

        </a>
        <a onClick={() => scrollToSection('job')}  className="flex text-white font-Regular gap-1 text-[14px] cursor-pointer">
          Jobs

          <span className="bg-[#7D4283] text-[14px]  rounded-[12px] h-[22px] py-[1px] px-[9px]">12</span>
        </a>
      </div>
      <div className="flex gap-3 md:mr-15 mr-0">
        <button className="rounded-[200px] border border-white text-white px-5 py-3 text-[14px]">Contact us</button>
        <button className="rounded-[200px] bg-[#7D4283] text-white px-5 py-3 text-[14px]">Join us</button>

      </div>
      </div>

    </div>

  );
};

export default Navbar;
