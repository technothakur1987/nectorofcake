import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
// import required modules
import { EffectCoverflow, Autoplay, Mousewheel } from "swiper/modules";

const MeetTheTeam = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const teamMembers = [
    { name: "Arav Jain", role: "Our Chef" , image:'https://i.ibb.co/qs5j6xY/Arav-Sharma.jpg'},
    { name: "Diya Patil", role: "Cake Decorator", image:'https://i.ibb.co/NtTB3Xg/portrait-woman-teaching-sign-language-23-2148719688.jpg' },
    { name: "Rohan Iyer", role: "Quality Control", image:'https://i.ibb.co/QvVcLGL/world-earth-day-1276068-15233.jpg' },
    { name: "Priya Verma", role: "Graphic Designer", image:'https://i.ibb.co/K7wWgp5/beautiful-business-woman-wearing-blazer-with-field-background-formally-dressed-ai-generated-image-12.jpg' },
    { name: "Arjun Mehta", role: "Operations Manager", image:'https://i.ibb.co/LSVP3mm/ultrarealistic-portrait-businessman-standing-outdoors-serene-place-high-quality-details-947814-11038.jpg' },
  ];

  const testimonials = [
    {id:1,
      quote:
        "The entire experience was beyond what I expected! Not only was the cake visually stunning, but it was also moist, rich, and flavorful. Every bite was a celebration of taste. This has now become my go-to place for any special occasion.",
      name: "Arav Jain",
      image: "https://i.ibb.co/S6qPvNc/man-wearing-glasses-shirt-with-watch-it-1076783-345.jpg",
    },
    {id:2,
      quote:
        "I ordered the cake for my parents' anniversary, and it was absolutely perfect. The honey infusion added a subtle sweetness that took the flavor to the next level. The presentation was impeccable too. I couldn't have asked for more.",
      name: "Priya Sharma",
      image: "https://i.ibb.co/khMqrnY/photorealistic-lawyer-day-celebration-23-2151053984.jpg",
    },
    {id:3,
      quote:
        "The texture, the flavor, the attention to detail – everything was spot on. I was a little hesitant about trying a honey-flavored cake, but I’m glad I did! It was delicious and everyone at the party loved it.",
      name: "Rajesh Gupta",
      image: "https://i.ibb.co/HPFrMC9/sophisticated-middle-eastern-man-portrait-grey-suit-jacket-blue-background-1143378-8501.jpg",
    },
    {id:4,
      quote:
        "Absolutely in love with the cake I got for my birthday! It was one of the best I've ever had. The honey adds such a unique twist to the traditional flavors, making it unforgettable. I can't recommend it enough!",
      name: "Neha Verma",
      image: "https://i.ibb.co/Fm5DCxr/woman-with-brown-hair-white-shirt-is-posing-photo-1103909-29972.jpg",
    },
    {id:5,
      quote:
        "Every occasion feels more special with their cakes. The honey infusion adds such a delicate sweetness without overpowering the natural flavors. The cake was moist, fresh, and simply delightful. It's safe to say I’m hooked!",
      name: "Sanjay Mehta",
      image: "https://i.ibb.co/gRGnc6s/corporate-man-1122918-709.jpg",
    },
    {id:6,
      quote:
        "Their cakes are an absolute delight! I’ve had many cakes in my life, but this one stands out for the richness of flavor, the freshness, and the unique honey undertone. Can’t wait to try more varieties!",
      name: "Kavita Rao",
      image: "https://i.ibb.co/hRHhrPj/visa-processing-skilled-workers-professionals-717774-170867.jpghttps://randomuser.me/api/portraits/women/3.jpg",
    },
    {id:7,
      quote:
        "This cake was a showstopper at our event! It not only looked amazing but tasted even better. The balance of sweetness was perfect, and the honey brought out the flavors in a way I had never experienced before.",
      name: "Amit Sharma",
      image: "https://i.ibb.co/y4KsWcT/man-suit-glasses-is-posing-photo-984237-67017.jpg",
    },
    {id:8,
      quote:
        "Wow! Just wow. The cake was soft, fluffy, and incredibly delicious. The honey wasn’t too strong, but it added just the right amount of sweetness. I could eat this cake every day! It’s a must-try for all cake lovers.",
      name: "Meera Singh",
      image: "https://i.ibb.co/0tNrjnt/indian-business-women-714173-5382.jpg",
    },
    {id:9,
      quote:
        "I ordered a cake for my wedding anniversary, and it was nothing short of amazing. The flavors blended beautifully, and the honey added a unique touch. My guests were all raving about it!",
      name: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by visiting our Cake Menu section, selecting your cake, and clicking 'Add to Cart'. Follow the checkout process to complete your order.",
    },
    {
      question: "Can I customize a cake?",
      answer:
        "Absolutely! We offer a custom cake form where you can select the size, flavor, and design you want. Feel free to include special requests.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes, we deliver cakes to select locations. During checkout, you can choose between pick-up or delivery and see if your area is covered.",
    },
    {
      question: "How should I store the cakes?",
      answer:
        "We recommend refrigerating cakes to maintain freshness, especially for buttercream or cream-filled cakes. Serve at room temperature for the best taste.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and online bank transfers. You can also pay with cash upon pick-up.",
    },
  ];



  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Close if already open
    } else {
      setOpenQuestion(index); // Open the selected question
    }
  };

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const MeetTheTeamcontainer = useRef();
  const { contextSafe } = useGSAP(
    () => {
      let mm1 = gsap.matchMedia();

      mm1.add("(min-width: 0px) and (max-width: 767.98px)", () => {});

      mm1.add("(min-width: 768px) and (max-width: 1023.98px)", () => {});

      mm1.add("(min-width: 1024px) and (max-width: 1523.98px)", () => {
        /*gsap to appear cake and bee1 and bee2 in topmost section of this page */
        let tl9 = gsap.timeline({
          scrollTrigger: {
            trigger: ".gsapMeetTeam",

            markers: false,
            start: "0% 95%",
            end: "60% 60%",
            scrub: 3,
          },
        });
        tl9.from(
          ".gsapHneyCakeClass",
          {
            duration: 1.5,
            delay: 0.5,
            left: 0,
            opacity: 0,
            ease: "none",
          },
          "first"
        );

        tl9.from(
          ".gsapBee2 ",
          {
            duration: 1.5,
            delay: 0.5,
            left: 0,
            opacity: 0,
            ease: "none",
          },
          "first"
        );
        tl9.from(
          ".gsapBee1 ",
          {
            duration: 1.9,
            delay: 0.5,
            left: "100%",
            opacity: 0,
            ease: "none",
          },
          "first"
        );
      });

      return () => {
        mm1.revert(); // Cleanup matchMedia listeners when the component is unmounted
      };
    },

    { scope: MeetTheTeamcontainer }
  );

  return (
    <div ref={MeetTheTeamcontainer}>
      <section className="bg-[#f8f1e1] py-10 h-[100vh] relative gsapMeetTeam">
        <h2 className="text-center  text-3xl md:text-5xl font-bold text-[#361513] mb-5 uppercase">
          Meet Our Team
        </h2>
        <p className="text-center text-xl text-[#361513] mb-5 md:mb-5 lg :mb-10">
          The talented individuals behind our delicious cakes.
        </p>
        <div className="circle bg-[#eece76] z-[13] ">
          <img
            src='https://i.ibb.co/yWQsPcm/honeycake.png'
            alt="honeycake"
            className="gsapHneyCakeClass h-[70%] imagedropfilterbrown   absolute bottom-[28%] md:bottom-[30%] lg:bottom-[25%] xl:bottom-[30%]  left-[18%] lg:left-[18%]  xl:left-[22.5%]  z-[0] md:z-[13]"
          />
        </div>
        <img
          src='https://i.ibb.co/JnWBS40/coconutleaf.png'
          alt=""
          className=" hidden md:block  absolute md:h-[40%] lg:h-[100%] right-[0] top-[-5%] lg:top-[-10%] imagedropfilterbrown z-[13]"
        />

        <img
          src='https://i.ibb.co/kcgyhPx/beeflap.gif'
          alt="bee"
          className=" gsapBee1 hidden md:block  absolute h-[12%] lg:h-[30%] left-[80%]  top-[0%] lg:top-[-10%] imagedropfilterbrown  z-[20] "
        />
        <img
          src='https://i.ibb.co/kcgyhPx/beeflap.gif'
          alt="bee"
          className=" gsapBee2 absolute block md:hidden lg:block h-[12%] md:h-[30%]  left-[40%] md:left-[0%] bottom-[15%] md:bottom-[45%] imagedropfilterbrown mqrotateY180 rotateY180 z-[0] md:z-[18] "
        />
        {/*myteamdiv*/}
       <div className=" absolute z-[14] h-[50vh] md:h-[70vh] w-full md:w-[100vw] lg:w-[70vw] md:top-[12%] lg:top-[25%] end-0 flex flex-wrap items-center justify-between">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="basis-1/3 h-1/2  flex-grow flex flex-col justify-center items-center py-3 "
            >
              <img
                src={`${member.image}`}
                alt={`${member.name}`}
                className="mb-3 cursor-pointer h-[10vh] md:h-[15vh] lg:h-[20vh] imagedropfilterbrown hover:translate-x-[-2px] rounded-full border border-s-8 border-[#361513] hover:border-e-8 hover:border-s-0 hover:border-[#361513] transform duration-500 ease"
              />
              <h2 className=" text-sm md:text-xl text-center font-bold text-[#361513] uppercase">
                {member.name}
              </h2>
              <h2 className="text-lg text-center font-medium text-[#361513] ">
                ({member.role})
              </h2>
            </div>
          ))}
        </div> 
      </section>
      {/*testinomial*/}

      <div className="relative min-h-[50vh] lg:min-h-[100vh] w-[100vw] bg-[#eece76] py-10 gsapTestinomialsClass ">
         <img
          src='https://i.ibb.co/JnWBS40/coconutleaf.png'
          alt="coconutleaf"
          className="hidden md:block absolute md:h-[50%] lg:h-[100%] left-[0] top-[50%] lg:top-[10%] imagedropfilterbrown z-[13] rotate"
        />

        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#361513] mb-5 uppercase">
          What Our Client Say's
        </h2>
        <p className="text-center text-xl text-[#361513] mb-5 lg:mb-10">
          Hear from our happy customers who have experienced the magic of our
          honey-infused cakes.
        </p>
        <div className="lg:pt-8 mb-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true} // Enable looping
            autoplay={{
              // Enable autoplay with a delay
              delay: 3000, // Delay between slides (in milliseconds)
              disableOnInteraction: true, // Continue autoplay even after interaction
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            mousewheel={true}
            modules={[EffectCoverflow, Autoplay, Mousewheel]} // Include Autoplay module
            className="mySwiper bg-[#8b4513]  rounded-lg md:rounded-none w-[90vw] md:w-[80vw] ms-[5vw] md:ms-[20vw]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="w-full  md:w-[25vw]" key={index}>
                <div className="p-4 text-center">
                  {/* Testimonial Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-[20vw] md:h-[10vw] w-[20vw] md:w-[10vw] object-cover rounded-full mx-auto mb-4 imagedropfilter"
                  />
                  {/* Testimonial Quote */}
                  <p className="text-lg font-medium text-[#eece76] ">
                    "{testimonial.quote}"
                  </p>
                  {/* Testimonial Author */}
                  <h3 className="font-bold text-xl text-[#eece76]  mt-2">
                    — {testimonial.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-[#8b4513] h-[0.25rem] "></div>
        <div className="bg-[#361513] h-[0.25rem] my-1"></div>
        <div className="bg-[#8b4513] h-[0.25rem] "></div>
      </div>

      {/*faq*/}

      <div className="relative min-h-[80vh] md:min-h-[65vh] lg:min-h-[110vh] xl:min-h-[110vh] w-[100vw] bg-[#eece76] gsapfaqClass">
        <div className="max-w-4xl mx-auto  px-5">
          <h2 className="text-center text-5xl font-bold text-[#361513] mb-8 uppercase">
            Faq's
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-[#f8f1e1] border-b border-[#361513] text-[#361513] text-lg font-medium "
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="float-end text-2xl font-medium  text-[#361513]">
                  {openQuestion === index ? (
                    <i className="ri-skip-up-fill"></i>
                  ) : (
                    <i className="ri-skip-down-fill"></i>
                  )}
                </span>
              </button>
              {openQuestion === index && (
                <div className="p-4 text-lg font-medium  text-[#361513] bg-[#f8f1e1] border-l border-r border-b border-[#361513]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
