'use client';

import React from "react";
import { BarChartComponant } from "./charts/bar-chart";
import { CercleChartComponant } from "./charts/cercle";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import { ChevronDown, CircleChevronDown } from "lucide-react";

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
              <div className="w-[90%]">
                <BarChartComponant />

              </div>
            </div>
            <div className="col-span-2">
              <CercleChartComponant />

            </div>
          </div>
        </div>

        <div className="mt-40">
          <div className="flex gap-10 justify-between align-center items-center">
            <h3 className="text-white font-SemiBold text-[44px]">News</h3>
            <button className="text-white text-sm font-Light py-3 px-4   rounded-4xl bg-[#7951B3]">View all news</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 mt-30 gap-10 ">
            <div className="col-span-7">
              <div className="w-full grid">
                <div>
                  <img src="./assets/news-1.png" alt="" />
                </div>
                <div className="flex gap-3 mt-7">
                  <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Company</span>
                  <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Contracts</span>
                </div>
                <div className="mt-4">
                  <h6 className="text-white font-Regular text-[32px] leading-[40px]">
                    We specialize in fostering effective partnerships with supportive companies to drive mutual success.
                  </h6>
                  <p className="text-[18px] text-[#646A69] font-Regular mt-5 leading-[26px]">
                    We are committed to building effective partnerships with supporting companies, contributing to
                    the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-span-5">
              <div className="grid gap-5">
                <div className="flex gap-3">
                  <div className="w-[45%]">
                    <img src="./assets/news-2.png" className="w-full" alt="" />
                  </div>


                  <div className="w-[55%] ">
                    <h6 className="text-white text-[24px] font-Medium">We incorporate the formation of public partnerships as a core aspect of our operations. </h6>
                    <div className="flex gap-3 mt-7">
                      <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Company</span>
                      <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Contracts</span>
                    </div>
                  </div>

                </div>
                <div className="flex gap-3">

                  <div className="w-[45%]">
                    <img src="./assets/news-3.png" className="w-full" alt="" />
                  </div>
                  <div className="w-[55%] ">
                    <h6 className="text-white text-[24px] font-Medium lowercase">We incorporate the formation of public partnerships as a core aspect of our operations. </h6>
                    <div className="flex gap-3 mt-7">
                      <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Company</span>
                      <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Contracts</span>
                    </div>
                  </div>

                </div>
                <div className="flex gap-3">
                  <div className="w-[45%]">
                    <img src="./assets/news-4.png" alt="" />
                  </div>
                  <div className="w-[55%] ">
                    <h6 className="text-white text-[24px] font-Medium lowercase">We incorporate the formation of public partnerships as a core aspect of our operations. </h6>
                    <div className="flex gap-3 mt-7">
                      <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Company</span>
                      <span className="text-[#1D1F1E] text-[14px] bg-white rounded-xl px-3 py-1 font-Light"> Contracts</span>
                    </div>
                  </div>

                </div>

              </div>


            </div>
          </div>
        </div>

        <div className="mt-40">

          <div className="grid grid-cols-1 md:grid-cols-12 mt-30 gap-15 ">
            <div className="col-span-7">
              <h3 className="text-white font-Bold text-[66.99px]">Simple pricing
                for your Business</h3>
              <p className="mt-6 text-[18.25px] fon-Light text-white opacity-[68%]">We have several powerful plans to showcase your business and get discovered
                as a creative entrepreneurs. Everything you need.

              </p>
            </div>
            <div className="col-span-5">
              <div className="w-[90%] grid gap-3">

                <Accordion className="accordion-style ">
                  <AccordionSummary className="accordion-style-summary"
                    expandIcon={<ChevronDown className="accordion-style-icon" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h6 className="title-accordion" >Intro</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-accordion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <div className="mt-3 flex gap-4 justify-between text-right">
                      <div>
                      <p className="text-white font-Regular text-[28.3px] mt-5">$<span className="font-Bold">123</span> <span className="opacity-[68%]  text-[23.95px] ">/month</span> </p>

                      </div>
                      <button className="text-[22.81px] text-black font-Medium py-3 px-6 bg-white rounded-lg h-[fit-content]">Try 1 month</button>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-style">
                  <AccordionSummary className="accordion-style-summary"
                    expandIcon={<ChevronDown className="accordion-style-icon" />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h6 className="title-accordion">Base</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    
                    <p className="text-accordion">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                    <div className="mt-3 flex gap-4 justify-between text-right">
                      <div>
                      <p className="text-white font-Regular text-[28.3px] mt-5">$<span className="font-Bold">123</span> <span className="opacity-[68%]  text-[23.95px] ">/month</span> </p>

                      </div>
                      <button className="text-[22.81px] text-black font-Medium py-3 px-6 bg-white rounded-lg h-[fit-content]">Try 1 month</button>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded className="accordion-style">
                  <AccordionSummary className="accordion-style-summary"
                    expandIcon={<ChevronDown className="accordion-style-icon" />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <h6 className="title-accordion">Pro</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-accordion">

                      Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu
                    </p>

                    <div className="mt-3 flex gap-4 justify-between text-right">
                      <div>
                      <p className="text-white font-Regular text-[28.3px] mt-5">$<span className="font-Bold">123</span> <span className="opacity-[68%]  text-[23.95px] ">/month</span> </p>

                      </div>
                      <button className="text-[22.81px] text-black font-Medium py-3 px-6 bg-white rounded-lg h-[fit-content]">Try 1 month</button>
                    </div>
                  </AccordionDetails>

                </Accordion>
                <Accordion className="accordion-style">
                  <AccordionSummary className="accordion-style-summary"
                    expandIcon={<ChevronDown className="accordion-style-icon" />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <h6 className="title-accordion">Enterprise</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-accordion">

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                    <div className="mt-3 flex gap-4 justify-between text-right">
                      <div>
                      <p className="text-white font-Regular text-[28.3px] mt-5">$<span className="font-Bold">123</span> <span className="opacity-[68%]  text-[23.95px] ">/month</span> </p>

                      </div>
                      <button className="text-[22.81px] text-black font-Medium py-3 px-6 bg-white rounded-lg h-[fit-content]">Try 1 month</button>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Branches;
