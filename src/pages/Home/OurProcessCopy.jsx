import React, { useRef } from "react";
import orderingimage from "../../assets/orderingimage.jpg";
import preparationimage from "../../assets/preparationimage.jpg";
import bakingimage from "../../assets/bakingimage.jpg";
import decoratingimage from "../../assets/decoratingimage.jpg";
import qualityimage from "../../assets/qualityimage.jpg";
import deliveryimage from "../../assets/deliveryimage.jpg";
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
      { class: ".gsapHomeOurtProcessStep1Class", textClass: ".gsapHomeOurProcessStep1TextClass" },
      { class: ".gsapHomeOurtProcessStep2Class", textClass: ".gsapHomeOurProcessStep2TextClass" },
      { class: ".gsapHomeOurtProcessStep3Class", textClass: ".gsapHomeOurProcessStep3TextClass" },
      { class: ".gsapHomeOurtProcessStep4Class", textClass: ".gsapHomeOurProcessStep4TextClass" },
      { class: ".gsapHomeOurtProcessStep5Class", textClass: ".gsapHomeOurProcessStep5TextClass" },
      { class: ".gsapHomeOurtProcessStep6Class", textClass: ".gsapHomeOurProcessStep6TextClass" },
    ];

    steps.forEach((step, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: step.class,
          markers: false,
          start: "0% 95%",
          end: "50% 59%",
          scrub: 3,
        },
      }).from(step.textClass, {
        duration: 2.5,
        ease: "back.in(1.7)",
        y: 250,
        opacity:0,
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
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg gsapHomeOurtProcessStep1Class">
          <div className="md:w-1/2 ">
            <Zoom>
              <img
                src={orderingimage}
                alt="Step 1: Order Placement"
                className=" w-[100%] rounded-lg shadow-lg h-[40vh] md:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500 image-zoom "
              />
            </Zoom>
          </div>
          <div className="md:w-1/2 px-6 md:px-12 ">
            <h3 className="text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep1TextClass">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="mr-2 text-xl"
              />
              Step 1: Order Placement
            </h3>
            <p className="text-xl font-bold text-[#361513] gsapHomeOurProcessStep1TextClass">
              Choose your favorite cake from our collection and place your order
              online.
            </p>
            <p className="text-xl text-[#361513] font-medium gsapHomeOurProcessStep1TextClass">
              Simply select the flavor, size, and any special customizations to
              make it uniquely yours!
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg gsapHomeOurtProcessStep2Class">
          <div className="md:w-1/2">
            <Zoom>
              <img
                src={preparationimage}
                alt="Step 2: Preparation"
                className=" w-full rounded-lg shadow-lg h-[40vh] md:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500"
              />
            </Zoom>
          </div>
          <div className="md:w-1/2 px-6 md:px-12">
            <h3 className="text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep2TextClass">
              <FontAwesomeIcon icon={faUtensils} className="mr-2 text-xl" />
              Step 2: Preparation
            </h3>
            <p className="text-xl font-bold text-[#361513] gsapHomeOurProcessStep2TextClass">
              Our bakers prepare the ingredients and mix them with love.
            </p>
            <p className="text-xl text-[#361513] font-medium gsapHomeOurProcessStep2TextClass">
              Using only the freshest ingredients, we ensure every cake is
              crafted to perfection.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg gsapHomeOurtProcessStep3Class">
          <div className="md:w-1/2">
            <Zoom>
              <img
                src={bakingimage}
                alt="Step 3: Baking"
                className=" w-full rounded-lg shadow-lg h-[40vh] md:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500"
              />
            </Zoom>
          </div>
          <div className="md:w-1/2 px-6 md:px-12">
            <h3 className="text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep3TextClass">
              <FontAwesomeIcon icon={faFire} className="mr-2 text-xl" />
              Step 3: Baking
            </h3>
            <p className="text-xl font-bold text-[#361513] gsapHomeOurProcessStep3TextClass">
              Once prepared, the cakes are baked to golden perfection.
            </p>
            <p className="text-xl text-[#361513] font-medium gsapHomeOurProcessStep3TextClass">
              We monitor the baking process to ensure every cake is moist and
              delicious.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="gsapHomeOurtProcessStep4Class flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <Zoom>
              <img
                src={decoratingimage}
                alt="Step 4: Decorating"
                className="w-full rounded-lg shadow-lg h-[40vh] md:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500"
              />
            </Zoom>
          </div>
          <div className="md:w-1/2 px-6 md:px-12">
            <h3 className="text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep4TextClass">
              <FontAwesomeIcon icon={faStar} className="mr-2 text-xl" />
              Step 4: Decorating
            </h3>
            <p className="text-xl font-bold text-[#361513] gsapHomeOurProcessStep4TextClass">
              Our talented decorators add the finishing touches to each cake.
            </p>
            <p className="text-xl text-[#361513] font-medium gsapHomeOurProcessStep4TextClass">
              From intricate designs to personalized messages, every detail is
              crafted with care.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="gsapHomeOurtProcessStep5Class flex flex-col md:flex-row items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <Zoom>
              <img
                src={qualityimage}
                alt="Step 5: Quality Check"
                className="w-full rounded-lg shadow-lg h-[40vh] md:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500"
              />
            </Zoom>
          </div>
          <div className="md:w-1/2 px-6 md:px-12">
            <h3 className="text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep5TextClass">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-xl" />
              Step 5: Quality Check
            </h3>
            <p className="text-xl font-bold text-[#361513] gsapHomeOurProcessStep5TextClass">
              Before delivery, each cake undergoes a thorough quality check.
            </p>
            <p className="text-xl text-[#361513] font-medium gsapHomeOurProcessStep5TextClass">
              We ensure that every cake meets our high standards of taste and
              presentation.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="gsapHomeOurtProcessStep6Class flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 bg-[#f8f1e1] p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <Zoom>
              <img
                src={deliveryimage}
                alt="Step 6: Delivery"
                className="w-full rounded-lg shadow-lg h-[40vh] md:h-[60vh] brightness-[50%] hover:brightness-[70%] transition ease duration-500"
              />
            </Zoom>
          </div>
          <div className="md:w-1/2 px-6 md:px-12">
            <h3 className="text-2xl font-bold mb-4 text-[#361513] uppercase gsapHomeOurProcessStep6TextClass">
              <FontAwesomeIcon icon={faTruck} className="mr-2 text-xl" />
              Step 6: Delivery
            </h3>
            <p className="text-xl font-bold text-[#361513] gsapHomeOurProcessStep6TextClass">
              Finally, we deliver your cake right to your doorstep.
            </p>
            <p className="text-xl text-[#361513] font-medium gsapHomeOurProcessStep6TextClass">
              Enjoy our delicious creations in the comfort of your home, just in
              time for your celebration!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
