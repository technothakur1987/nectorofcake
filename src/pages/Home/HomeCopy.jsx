import React, { useRef, useEffect } from "react";
import "../../App.css";
import HeaderCakeImage from "../../assets/HeaderCakeImage.png";
import HoneyBee from "../../assets/honeybee.png";
import coconutleaf from "../../assets/coconutleaf.png";
import Blob from "../../assets/blob.svg";
import beeflap from "../../assets/beeflap.gif";
import cupcake from "../../assets/cupcake.png";
import buttercake from "../../assets/buttercake.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurProcess from "./OurProcess";
import MeetTheTeam from "./MeetTheTeam";

const Home = () => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const Homecontainer = useRef();
  const { contextSafe } = useGSAP(
    () => {

      let mm = gsap.matchMedia();

      

   

      mm.add("(min-width: 1024px)", () => {

        let tl = gsap.timeline();
        tl.from(".gspaHomeHeaderTextClass", {
          duration: 1,
          delay: 1,
          x: "-100px",
          opacity: 0,
        });
        tl.from(".gspaHomeBee1Class", {
          duration: 1,
          delay: 0.5,
          x: "300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gspaHomeBee2Class", {
          duration: 1,
          delay: 0.5,
          x: "-300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gsapHomeHeaderCakeClass", {
          duration: 1,
          delay: 0.5,
          x: "-300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gsapHomeHeaderScrollDownClass", {
          duration: 1,
          delay: 0.5,
          y: "20px",
          opacity: 0,
          ease: "none",
        });





      })

      mm.add("(max-width: 1023.98px)", () => {
        let tl = gsap.timeline();
        tl.from(".gspaHomeHeaderTextClass", {
          duration: 1,
          delay: 1,
          x: "-100px",
          opacity: 0,
        });
        tl.from(".gspaHomeBee1Class", {
          duration: 1,
          delay: 0.5,
          x: "300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gspaHomeBee2Class", {
          duration: 1,
          delay: 0.5,
          x: "-300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gsapHomeHeaderCakeClass", {
          duration: 1,
          delay: 0.5,
          x: "-300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gsapHomeHeaderScrollDownClass", {
          duration: 1,
          delay: 0.5,
          y: "20px",
          opacity: 0,
          ease: "none",
        });





      })

      mm.add("(max-width: 767.98px)", () => {

        let tl = gsap.timeline();
        tl.from(".gspaHomeHeaderTextClass", {
          duration: 1,
          delay: 1,
          x: "-100px",
          opacity: 0,
        });
        tl.from(".gspaHomeBee1Class", {
          duration: 1,
          delay: 0.5,
          x: "300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gspaHomeBee2Class", {
          duration: 1,
          delay: 0.5,
          x: "-300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gsapHomeHeaderCakeClass", {
          duration: 1,
          delay: 0.5,
          x: "-300px",
          opacity: 0,
          ease: "none",
        });
        tl.from(".gsapHomeHeaderScrollDownClass", {
          duration: 1,
          delay: 0.5,
          y: "20px",
          opacity: 0,
          ease: "none",
        });





      })

      return () => {
        mm.revert(); // Cleanup matchMedia listeners when the component is unmounted
      };
     

      /*gsap to move cake and bee from header to about us section*/

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsapHomeAboutUsClass",

          markers: false,
          start: "0% 95%",
          end: "60% 60%",
          scrub: 3,
        },
      });
      tl2.to(
        ".gsapHomeHeaderCakeClass",
        {
          top: "108%",

          left: "1.5%",
          ease: "none",
        },
        "aboutus"
      );

      tl2.to(
        ".gspaHomeBee2Class",
        {
          top: "104%",

          ease: "none",
        },
        "aboutus"
      );
      tl2.from(
        ".gsapHomeAboutusTextClass",
        {
          x: "300",
          opacity: 0,
          ease: "none",
        },
        "aboutus"
      );

      /*gsap to move cake and bee from aboutus to our delicacies */
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsapHomeTopDeliClass",
          markers: false,
          start: "0% 95%",
          end: "20% 35%",
          scrub: 3,
        },
      });

      tl3.to(
        ".gsapHomeHeaderCakeClass",
        {
          top: "208%",
          delay: 1,
          duration: 1,
          height: "50%",

          left: "38%",
          ease: "none",
        },
        "ourdel"
      );

      tl3.to(
        ".gspaHomeBee2Class",
        {
          top: "180%",
          delay: 1,
          duration: 1,
          ease: "none",
          left: 0,
        },
        "ourdel"
      );
    },

    { scope: Homecontainer }
  );

  return (
    <div className="font-Playfair w-[100vw] " ref={Homecontainer}>
      {/*Homeheader*/}
      <div className="h-[100vh] w-[100vw] bg-[#8b4513] flex justify-center items-center relative ">
        <h2 className=" text-6xl md:text-9xl font-extrabold text-[#e6ab0b] uppercase text-center absolute z-[14] gspaHomeHeaderTextClass mb-[35vh] md:mb-[0]">
          Nectar of Cakes
        </h2>
        <img
          src={coconutleaf}
          alt=""
          className=" absolute h-[35%] md:h-[100%] right-[0] top-[-10%] imagedropfilter z-[13]"
        />
        <img
          src={HeaderCakeImage}
          alt=""
          className="absolute h-[25%] md:h-[40%] lg:h-[90%] imagedropfilter  z-[16] gsapHomeHeaderCakeClass gsapHomeHeaderCake1Class "
        />
        <div className="gsapHomeHeaderScrollDownClass absolute z-[14] bottom-[0] text-[#e6ab0b] z-[15] animate-bounce hover:animate-none">
          <i className="  ri-scroll-to-bottom-fill  text-7xl text-[#e6ab0b] "></i>
          <span>Scroll To Bottom</span>
        </div>

        <img
          src={beeflap}
          alt=""
          className="absolute h-[12%] md:h-[17%] lg:h-[30%]  left-[75%] top-[12%] imagedropfilter  z-[14] gspaHomeBee1Class"
        />
        <img
          src={beeflap}
          alt=""
          className="absolute h-[12%] md:h-[17%] lg:h-[30%] left-[5%] bottom-[33%] md:bottom-[10%] imagedropfilter rotateY180 z-[18] gspaHomeBee2Class"
        />

        {/*only visisble in mobile */}
        <div className="absolute md:hidden h-[0.25%] bottom-[25%] bg-[#e6ab0b] w-[90vw] left-[5vw]"></div>
        <div className="absolute md:hidden h-[0.25%] bottom-[24%] bg-[#e6ab0b] w-[90vw] left-[5vw]"></div>
        <div className="absolute md:hidden  h-[0.25%] bottom-[23%] bg-[#e6ab0b] w-[90vw] left-[5vw]"></div>
        <div className="absolute md:hidden h-[0.25%] bottom-[22%] bg-[#e6ab0b] w-[90vw] left-[5vw]"></div>
        <div className="absolute md:hidden h-[0.25%] bottom-[21%] bg-[#e6ab0b] w-[90vw] left-[5vw]"></div>
      </div>

      {/*Aboutus*/}
      <div className="h-[120vh] md:h-[100vh] w-[100vw] flex flex-col md:flex-row bg-[#eece76] px-[5vw] gsapHomeAboutUsClass">
        <div className="basis-full bg-red-900 md:basis-1/2 relative h-[50vh] md:h-full">
          <img
            src={Blob}
            alt=""
            className="transform rotate-[231deg] h-[70%] md:h-[75%] absolute bottom-[-6%] "
          />
        </div>
        <div className="basis-full md:basis-1/2 bg-green-900 py-5 md:py-[unset] flex flex-col justify-center items-start gsapHomeAboutusTextClass h-auto md:h-full">
          <h2 className="text-[#361513] text-3xl md:text-5xl font-bold mb-5 transform duration-500 ease-in border-b-4 border-b-[#361513] pb-2 uppercase">
            About Us
          </h2>

          <p className="text-[#361513] text-xl font-bold leading-7 text-justify">
            At <strong className="uppercase text-xl">Nectar Of Cakes</strong>,
            we believe that every celebration deserves a touch of sweetness.
            Specializing in delicious cakes made with the finest ingredients,
            our secret lies in the pure,{" "}
            <strong className="uppercase text-xl">natural honey</strong> we use.
            Each cake is handcrafted with love, ensuring a delightful blend of
            flavors that tantalize your taste buds. Whether you're celebrating a
            birthday, wedding, or any special occasion, our diverse range of
            flavors and beautiful designs will make your event unforgettable.
            Join us in savoring the sweetness of life, one slice at a time!
          </p>
        </div>
      </div>

      {/*top delicacies*/}

      <div className="h-[100vh] w-[100vw] bg-[#eece76] px-[5vw]  flex flex-col gsapHomeTopDeliClass">
        <h2 className="text-[#361513] text-5xl font-bold mb-5 text-center uppercase ">
          Our Top Delicacies
        </h2>
        <div className="flex justify-between flex-grow">
          <div className="bg-[#361513] basis-[30%] rounded-lg relative">
            <img
              src={cupcake}
              alt="cupcake"
              className="imagedropfilter h-[60%] mx-auto w-[110%] "
            />
            <div className="absolute  bottom-[19.5%]">
              <h2 className="text-center text-2xl font-bold text-[#eece76] uppercase ">
                Cup Cake
              </h2>
              <p className="text-center text-xl font-bold text-[#eece76] mx-5 mb-2">
                Strawberry,Vanilla Extract, Honey, Eggs/ EggLess etc
              </p>
            </div>

            <div className="px-5 flex items-end justify-between absolute w-[100%]  bottom-[8%]">
              <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg  py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                Know More
              </button>
              <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg  py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="bg-[#361513] basis-[30%] rounded-lg relative">
            <div className="absolute  bottom-[19.5%]">
              <h2 className="text-center text-2xl font-bold text-[#eece76] uppercase ">
                Chocolate Cake
              </h2>
              <p className="text-center text-xl font-bold text-[#eece76] mx-5 mb-2">
                Chocolate,Vanilla Extract, Honey, Eggs/ EggLess etc
              </p>
            </div>

            <div className="px-5 flex items-end justify-between absolute w-[100%]  bottom-[8%]">
              <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg  py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                Know More
              </button>
              <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg  py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="bg-[#361513] basis-[30%] rounded-lg relative">
            <img
              src={buttercake}
              alt="buttercake"
              className="imagedropfilter h-[59%] mx-auto w-[110%] "
            />
            <div className="absolute  bottom-[19.5%]">
              <h2 className="text-center text-2xl font-bold text-[#eece76] uppercase ">
                Butter Cake
              </h2>
              <p className="text-center text-xl font-bold text-[#eece76] mx-5 mb-2">
                ButterMilk,Vanilla Extract, Honey, Eggs/ EggLess etc
              </p>
            </div>

            <div className="px-5 flex items-end justify-between absolute w-[100%]  bottom-[8%]">
              <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg  py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                Know More
              </button>
              <button className="text-sm font-bold text-[#361513] bg-[#eece76] px-4 rounded-lg  py-2 border border-1 border-[#eece76] hover:bg-[#361513] hover:text-[#eece76] transition duration-500 ease cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-xl font-black bg-[#361513] text-[#eece76] px-4 rounded-lg my-5 py-2 uppercase border border-8 border-[#361513] hover:text-[#361513] hover:bg-[#eece76] transition duration-500 ease cursor-pointer">
            View More
          </button>
        </div>
      </div>

      {/*our process*/}

      <OurProcess />

      {/*Team memebers */}
      <MeetTheTeam />
    </div>
  );
};

export default Home;
