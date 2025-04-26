'use client';
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

const ClientsOpenions = () => {

  const itemsList = [
    {
      name: "Jonathan Sweeney",
      text: `I love that model. I [used to have to]
                call all around, and I absolutely love
                that model that you could save me the
                time and headache of doing that.`,
      avatar: "./assets/JonathanSweeney.png",
    },
    {
      name: "Barbara Cook",
      text: `I am so happy with your company.
              Ever since my insurer switched to you, everything 
              and everybody I've spoken to has been extremely, 
              extremely pleasant, helpful, and they listen to my
              concerns instead of just saying okay!`,
      avatar: "./assets/BarbaraCook.png",
    },
    {
      name: "Mary Rogers",
      text: `I just want to thank you for the great
              job you did during my transition to
              oxygen. You unraveled all the
              confusion and the new company is
              wonderful.`,
      avatar: "./assets/MaryRogers.png",
    },
  
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 , partialVisibilityGutter:20},
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1  , partialVisibilityGutter:20},
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1  , partialVisibilityGutter:20},
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(itemsList.length);



  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 464) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);


  const [showDots, setShowDots] = useState(true);  


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowDots(true); 
      } else {
        setShowDots(false);  
      }
    };
  
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (

    <div className="w-full mt-5  p-5 md:p-15 bg-[#7D4283]" >
      <div className="container">
        <h1 className="hidden md:block text-white font-Regular text-[24px] md:text-[48.67px] text-center ">Our clients openions</h1>
        <div className="py-12 relative">
          <Carousel
            responsive={responsive}
            infinite
            keyBoardControl 
            partialVisbile
            swipeable
            rewindWithAnimation
            showDots={showDots}
            customTransition="transform 300ms ease-in-out"
            beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
            dotListClass="items-dots-style"
          
            className="static-carousel"
          >
            {itemsList.map((t, index) => {
              const centerIndex = (currentSlide + Math.floor(itemsPerSlide / 2)) % itemsList.length;
              const isCenter = index === centerIndex;
              return (
                <div
                  key={index}
                  className={`bg-[#161616]  p-10 rounded-lg  min-h-[352px] transition-transform duration-300  
                    ${isCenter && showDots ? "" : "scale-90"}
                    ${!showDots ? 'scale-100': ''}
                    `}
                >
                  <div className="block items-center gap-3 mb-4">
                    <img src={t.avatar} alt={t.name} className="w-[64px] h-[60px] " />
                    <h6 className="font-Medium text-white  text-[16px] mt-2">{t.name}</h6>
                  </div>
                  <p className="text-[16px] md:text-[18px] text-white font-Light leading-[27px] ">“{t.text}”</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>




    </div>

  );
};

export default ClientsOpenions;
