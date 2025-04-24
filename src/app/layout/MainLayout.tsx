'use client';

import React, { useEffect, useState } from 'react';
 import Footer from '../footer/page';
import Navbar from '../navbar/navbar';
import SideBar from '../navbar/sideBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
 const [showWebVersion, setShowWebVersion] = useState<boolean>(true)




useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setShowWebVersion(false);
    } else {
      setShowWebVersion(true);
    }
  }; 
 
  window.addEventListener("resize", handleResize);
 
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);



  return (
    <div className="min-h-screen flex flex-col bg-[#161616] " id='home'>
      <main className="flex-grow">
      {showWebVersion ? <Navbar /> : <SideBar />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;