import React, { useState } from "react";
import ImageWheel from "./ImageWheel";
import Accordation from "./Accordation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.to("#section-1", {
      y: 1000,
      rotate: 10,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#section-1",
        scroller: "body",
        scrub: 0.2,
        start: "top top",
        end: "bottom 20%",
        onEnter: () => {
          console.log("GSAP is entered");
          document.getElementById("section-1").style.zIndex = -50;
        },
        onLeave: () => {
          console.log("GSAP is leaved");
        },
      },
    });

    gsap.to("#scroll-text", {
      x: -1000,
      scrollTrigger: {
        trigger: "#scroll-text",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
      },
    });

    gsap.to("#section-2", {
      x: 0,
      scrollTrigger: {
        trigger: "#scroll-text",
        scroller: "body",
      },
    });

    gsap.to(".rotate-star", {
      rotate: -360,
      scrollTrigger: {
        trigger: ".rotate-star",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
      },
    });
  });

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="scroll-text"
      className="w-40 max-md:w-30 max-sm:w-20 inline-block bottom-10 rotate-star"
      viewBox="0 0 480 480"
    >
      <path
        d="M480 210H352l110.9-64-30-52L322 158l64-110.8-52-30L270 128V0h-60v128L146 17.2l-52 30L158 158 47.2 94l-30 52L128 210H0v60h128L17.2 334l30 52L158 322 94 432.9l52 30L210 352v128h60V352l64 110.9 52-30L322 322l110.9 64 30-52L352 270h128v-60z"
        fill="#000000"
      ></path>
    </svg>
  );

  return (
    <div className="main overflow-hidden" id="top">
      <div
        id="section-1"
        className="section-1 bg-(--white) p-4 w-full h-screen grid content-between -z-50"
      >
        <div className="nav flex justify-between min-lg:mx-20">
          <h3 className="text-4xl">SQUIRREL</h3>
          <div className="nav-icon w-10 h-10">
            <img src="/burger-icon.svg" alt="HamBurger" />
          </div>
        </div>
        <div className="heading leading-none">
          <h1 className="text-[25vw] p-10 text-center">
            SQUIRREL<span className="text-7xl align-top">&copy;</span>
          </h1>
        </div>
        <div className="bottom-bar flex justify-between min-lg:mx-20">
          <h3 className="text-base max-sm:text-[14px] font-(family-name:--satoshi)">
            HARYANA, INDIA
          </h3>
          <h3 className="text-base max-sm:text-[14px] font-(family-name:--satoshi)">
            SOFTWARE COMPANY
          </h3>
          <h3 className="text-base max-sm:text-[14px] font-(family-name:--satoshi)">
            SINCE 2021
          </h3>
        </div>
        <div className="absolute inset-0">
          <ImageWheel />
        </div>
      </div>
      <div id="section-2" className="section-2 bg-(--white) z-10">
        <div className="px-2 scrolling-text bg-(--purple) overflow-x-hidden flex items-center gap-10 max-md:gap-6 max-sm:gap-4">
          <h3
            id="scroll-text"
            className="text-nowrap text-[14rem] max-lg:text-[10rem] max-md:text-[8rem] max-md:pt-8 max-sm:pt-6 max-sm:text-[6rem] pt-10 leading-none "
          >
            CRAFTING VISUAL STORIES
          </h3>
          <span>{star}</span>
          <h3
            id="scroll-text"
            className="text-nowrap text-[14rem] max-lg:text-[10rem] max-md:text-[8rem] max-md:pt-8 max-sm:pt-6 max-sm:text-[6rem] pt-10 leading-none "
          >
            CRAFTING VISUAL STORIES
          </h3>
        </div>
        <div className="about mt-40 flex flex-col items-center">
          <div className="img-container">
            <div className="container w-80 h-80 max-sm:w-40 max-sm:h-40 max-md:w-50 max-md:h-50 max-lg:h-60 max-lg:w-60 bg-red-700">
              <img src="./1.jpg" className="object-cover" alt="image" />
            </div>
          </div>
          <h1 className="text-[8rem] max-sm:text-[3rem] max-md:text-[5rem] max-lg:text-[7rem] max-lg:w-[80%] w-1/2 pt-8 text-balance text-center leading-none">
            WHERE BRANDING GOES BEYOND VISUALS
          </h1>
          <p className="text-[1.125rem] w-1/2 max-md:w-full font-(family-name:--satoshi) text-balance text-center">
            We strive to be more than just a digital agency; we are architects
            of narratives, sculptors of impressions, and catalysts for your
            brand's journey toward distinction.
          </p>
          <div className="button flex items-center gap-3 px-6 py-3 bg-(--purple) mt-5">
            <h3 className="text-[1.875rem] leading-none pt-2">ABOUT US</h3>
            <div className="bg-black w-15 h-15 grid place-items-center text-white text-2xl font-(family-name:--satoshi)">
              &uarr;
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 bg-(--white) w-full min-h-screen flex max-md:flex-col pt-20">
        <div className="left w-1/2 max-md:w-full flex justify-center max-md:justify-start max-md:p-6 items-center">
          <h1 className="text-center text-9xl max-lg:text-8xl max-sm:text-5xl max-sm:pt-15 max-md:text-7xl sticky">
            OUR SERVICES
          </h1>
        </div>
        <div className="right w-1/2 max-md:w-full relative overflow-y-auto">
          <Accordation />
        </div>
      </div>
      <div className="section-4 bg-(--white) grid place-items-center w-full min-h-screen overflow-hidden">
        <div className="about flex flex-col items-center">
          <h1 className="text-[8rem] max-sm:text-[3rem] max-md:text-[5rem] max-lg:text-[7rem] w-[80%] pt-8 text-balance text-center leading-none">
            LET'S BUILD SOMETHING AMAZING
          </h1>
          <p className="text-[1.125rem] w-[80%] max-md:w-full font-(family-name:--satoshi) text-balance text-center">
            We strive to be more than just a digital agency; we are architects
            of narratives, sculptors of impressions, and catalysts for your
            brand's journey toward distinction.
          </p>
          <div className="button flex items-center gap-3 px-6 py-3 bg-(--purple) mt-5">
            <h3 className="text-[1.875rem] leading-none pt-2">GET IN TOUCH</h3>
            <div className="bg-black w-15 h-15 grid place-items-center text-white text-2xl font-(family-name:--satoshi)">
              &uarr;
            </div>
          </div>
        </div>
        {/* <div className="images absolute">
          <div className="bg-red-900 absolute left-60 w-80 h-80"></div>
          <div className="bg-red-300 absolute right-60 w-80 h-80 z-20"></div>
          <div className="bg-red-500 w-80 h-80 z-10"></div>
        </div> */}
      </div>
      <div className="footer w-full h-1/2 text-(--white) bg-(--black) flex justify-center">
        <div className="footer-container w-[80%] mt-40">
          <h1 className="text-7xl">SQUIRREL</h1>
          <h1 className="text-2xl font-(family-name:--satoshi) text-zinc-500 mb-2 max-sm:mb-4">
            We build your dreams.
          </h1>
          <div className="flex mb-10 max-sm:flex-col-reverse">
            <div className="left-footer w-1/2 flex max-sm:mt-5 items-end">
              <a href="#top">
                <div className="arrow-top w-25 h-25 max-sm:w-15 max-sm:h-15 max-sm:text-xl font-(family-name:--satoshi) bg-transparent border-2 border-zinc-500 rounded-full grid place-items-center text-4xl">
                  &uarr;
                </div>
              </a>
            </div>
            <div className="right-footer w-1/2 max-sm:w-full flex">
              <div className="nav-links text-4xl max-sm:text-3xl">
                <ul>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      HOME
                    </li>
                  </a>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      ABOUT
                    </li>
                  </a>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      CONTACT
                    </li>
                  </a>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      PROJECT
                    </li>
                  </a>
                </ul>
              </div>
              <div className="social-links font-(family-name:--satoshi) w-full flex justify-end text-2xl max-sm:text-xl text-end">
                <ul>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      INSTAGRAM
                    </li>
                  </a>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      FACEBOOK
                    </li>
                  </a>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      LINKEDIN
                    </li>
                  </a>
                  <a href="">
                    <li className="hover:text-zinc-500 duration-500 mb-4 max-sm:mb-2">
                      X
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="break-line w-full h-px bg-zinc-700 mb-10"></div>
          <div className="credit font-(family-name:--satoshi) text-base text-zinc-600 mb-10 flex justify-between max-sm:flex-col max-sm:text-center">
            <div className="left ">
              <a href="#">
                <h2 className="">
                  DEVELOPED BY{" "}
                  <span className="font-medium text-(--white)">SQUIRREL</span>
                </h2>
              </a>
            </div>
            <div className="right flex gap-4 max-sm:justify-center">
              <a href="#">
                <h2>STYLE GUIDE</h2>
              </a>
              <a href="#">
                <h2>LICENSES</h2>
              </a>
              <a href="#">
                <h2>CHANGE LOG</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
