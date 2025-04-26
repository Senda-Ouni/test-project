'use client';
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Partners = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (

    <div className="w-full md:p-10  container md:mt-15 md:mb-15 mb-5">
      <h1 className="text-white font-Medium text-[48px]  text-center ">Our Partners</h1>
      <div className="mt-10">
        <Carousel
            pauseOnHover
            swipeable

          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1} 
          keyBoardControl={false}
          customTransition="transform 10s linear"  
          transitionDuration={10000}  
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="carousel-card"><img src="./assets/CIB-BANK.png" className="m-auto w-[167px]" alt="" /></div>
          <div className="carousel-card"><img src="./assets/BMW.png" alt=""  className="m-auto w-[52px]" /></div>
          <div className="carousel-card"><img src="./assets/HUAWEI.png" alt=""  className="m-auto w-[102px]" /></div>
          <div className="carousel-card"><img src="./assets/NASA.png" alt=""  className="m-auto w-[91px]" /></div>
        </Carousel>
      </div>
    </div>

  );
};

export default Partners;
