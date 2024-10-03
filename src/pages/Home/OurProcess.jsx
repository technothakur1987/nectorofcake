import React, { useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faUtensils,
  faFire,
  faStar,
  faCheckCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurProcess = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const OurProcesscontainer = useRef();

  const stepArray = [
    {
      id: 1,
      image: "https://i.ibb.co/641n4pZ/orderingimage.jpg",
      icon: faClipboardList,
      h3: "Step 1: Order Placement",
      p1: "Choose your favorite cake from our collection and place your order online.",
      p2: "Simply select the flavor, size, and any special customizations to make it uniquely yours!",
    },

    {
      id: 2,
      image: "https://i.ibb.co/MVmb40X/preparationimage.jpg",
      icon: faUtensils,
      h3: "Step 2: Preparation",
      p1: "Our bakers prepare the ingredients and mix them with love.",
      p2: "Using only the freshest ingredients, we ensure every cake is crafted to perfection.",
    },

    {
      id: 3,
      image: "https://i.ibb.co/8mMGXZd/bakingimage.jpg",
      icon: faFire,
      h3: "Step 3: Baking",
      p1: " Once prepared, the cakes are baked to golden perfection.",
      p2: "We monitor the baking process to ensure every cake is moist and  delicious.",
    },

    {
      id: 4,
      image: "https://i.ibb.co/nDxc21m/decoratingimage.jpg",
      icon: faStar,
      h3: "Step 4: Decorating",
      p1: "Our talented decorators add the finishing touches to each cake.",
      p2: " From intricate designs to personalized messages, every detail is  carefully crafted.",
    },

    {
      id: 5,
      image: "https://i.ibb.co/VgMZHgP/qualityimage.jpg",
      icon: faCheckCircle,
      h3: "Step 5: Quality Check",
      p1: "Before delivery, each cake undergoes a thorough quality check.",
      p2: "We ensure that every cake meets our high standards of taste and presentation.",
    },

    {
      id: 6,
      image: "https://i.ibb.co/jMptCkD/deliveryimage.jpg",
      icon: faTruck,
      h3: "Step 6: Delivery",
      p1: "Finally, we deliver your cake right to your doorstep.",
      p2: "Enjoy our delicious creations in the comfort of your home, just in  time for your special occasion.",
    },
  ];
  const { contextSafe } = useGSAP(
    () => {
      /*gsap to heading in our process section*/

      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsapHomeOurProcessClass",

          markers: false,
          start: "0% 95%",
          end: "60% 60%",
          scrub: 3,
        },
      });
      tl4.from(".gsapHomeOurtProcessHeaderClass", {
        x: "-500px",
        ease: "none",
        opacity: 0,
        duration: 1.5,
      });

      // GSAP animations for the process steps
      const steps = [
        {
          class: ".gsapHomeOurtProcessStep1Class",
          textClass: ".gsapHomeOurProcessStep1TextClass",
        },
        {
          class: ".gsapHomeOurtProcessStep2Class",
          textClass: ".gsapHomeOurProcessStep2TextClass",
        },
        {
          class: ".gsapHomeOurtProcessStep3Class",
          textClass: ".gsapHomeOurProcessStep3TextClass",
        },
        {
          class: ".gsapHomeOurtProcessStep4Class",
          textClass: ".gsapHomeOurProcessStep4TextClass",
        },
        {
          class: ".gsapHomeOurtProcessStep5Class",
          textClass: ".gsapHomeOurProcessStep5TextClass",
        },
        {
          class: ".gsapHomeOurtProcessStep6Class",
          textClass: ".gsapHomeOurProcessStep6TextClass",
        },
      ];

      steps.forEach((step, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: step.class,
              markers: false,
              start: "0% 95%",
              end: "50% 59%",
              scrub: 3,
            },
          })
          .from(step.textClass, {
            duration: 2.5,
            ease: "back.in(1.7)",
            y: 250,
            opacity: 0,
          });
      });
    },

    { scope: OurProcesscontainer }
  );
  return (
    <section
      ref={OurProcesscontainer}
      className="min-h-[100vh] bg-[#eece76] border border-t-8 border-[#361513] px-[5vw] py-5 "
    >
      {/* Heading and Intro Paragraph */}

      <div className="gsapHomeOurProcessClass">
        <h2 className="text-[#361513] text-3xl md:text-5xl font-bold mb-5 text-center uppercase gsapHomeOurtProcessHeaderClass">
          Our Cake Journey
        </h2>
        <p className="text-center text-xl text-[#361513] font-bold mb-10 gsapHomeOurtProcessHeaderClass">
          From our kitchen to your doorstep, here’s how we ensure every cake is
          a masterpiece.
        </p>
      </div>

      <div className="container mx-auto space-y-16 ">
        {stepArray.map((step) => {
          return (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg gsapHomeOurtProcessStep${step.id}Class`}
            >
              <div className="md:w-1/2 ">
                <Zoom>
                  <img
                    src={step.image}
                    alt={step.h3}
                    className=" w-[100%] rounded-lg shadow-lg h-[40vh] md:h-[30vh] lg:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500 image-zoom "
                  />
                </Zoom>
              </div>
              <div className="md:w-1/2 px-6 md:px-12 ">
                <h3
                  className={`text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep${step.id}TextClass`}
                >
                  <FontAwesomeIcon icon={step.icon} className="mr-2 text-xl" />
                  {step.h3}
                </h3>
                <p
                  className={`text-xl font-bold text-[#361513] gsapHomeOurProcessStep${step.id}TextClass`}
                >
                  {step.p1}
                </p>
                <p
                  className={`text-xl text-[#361513] font-medium gsapHomeOurProcessStep${step.id}TextClass`}
                >
                  {step.p2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurProcess;
