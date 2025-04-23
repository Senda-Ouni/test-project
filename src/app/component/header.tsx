  import React from "react"; 
 
 const Header = () => {
  
  
 
   return (
   
      <div className="w-full h-[100vh] flex p-10 gap-5">
        <div className="w-full ">
            <h1 className="text-[50px] w-full  text-white font-SemiBold">Transform your business <br/> with our <span className="text-heder-change"> Creative Marketing Solutions!</span></h1> 
            
        </div>
        <div className="hidden md:block "> 
            <img src="./assets/header-1.png" alt="" />
        </div>
      </div>
 
   );
 };
 
 export default Header;
 