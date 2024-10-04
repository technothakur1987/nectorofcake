 const testimonials = [
    {
      name: "Aditi Sharma",
      image: "https://i.ibb.co/19rW9bs/aditi.jpg",
      message:
        "The birthday cake was absolutely delicious! It was a hit at the party. Thank you!",
    },
    {
      name: "Ravi Kumar",
      image: "https://i.ibb.co/cbdzDxk/ravikumar.webp",
      message: "The cake was stunning and tasted amazing. Everyone loved it!",
    },
    {
      name: "Priya Patel",
      image: "https://i.ibb.co/rckrFky/priyapatel.jpg",
      message:
        "Thank you for making my daughter's birthday so special with that beautiful cake!",
    },
    {
      name: "Arjun Reddy",
      image: "https://i.ibb.co/C744gkW/arjunreddy.jpg",
      message:
        "The cake was beyond my expectations. The design and flavor were perfect!",
    },
    {
      name: "Neha Gupta",
      image: "https://i.ibb.co/m9gZJNt/neha-gupta.jpg",
      message:
        "Amazing service and an even more amazing cake! Will definitely order again.",
    },
    {
      name: "Vikram Singh",
      image: "https://i.ibb.co/B6gCPSG/my.png",
      message:
        "Incredible cake with great attention to detail. My guests were impressed!",
    },
    {
      name: "Ishita Verma",
      image: "https://i.ibb.co/DrNxJhv/Ishita-Verma.jpg",
      message:
        "A perfect cake for our celebration. Beautiful and delicious. Highly recommend!",
    },
    {
      name: "Rajesh Joshi",
      image: "https://i.ibb.co/gt4V7Q4/Rajesh-Joshi.jpg",
      message:
        "The cake exceeded all our expectations. Beautifully decorated and tasted fantastic!",
    },
    {
      name: "Sanya Mehta",
      image: "https://i.ibb.co/ZS5bZ2n/Sanya-Mehta.jpg",
      message:
        "The cake was the highlight of our party. Excellent service and delicious!",
    },
    {
      name: "Manish Agarwal",
      image: "https://i.ibb.co/8Y73V6y/Manish-Agarwal.jpg",
      message:
        "Outstanding cake and service. The custom design was exactly what I wanted!",
    },
  ];


  import React, { useEffect } from "react";
import ProductHeader from "./ProductHeader";
import coconutleaf from "../../assets/coconutleaf.png";
import beeflap from "../../assets/beeflap.gif";
import HeaderCakeImage from "../../assets/HeaderCakeImage.png";
import video from '../../assets/video1.mp4'

const Product = () => {
  
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: 'Heavenly Layers',
      price: 'Rs 250 / kg ONLY',
      image: 'https://i.ibb.co/rvyKRGM/pr1.png',
      ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla', 'Honey'],
      category: 'Birthday Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Buttercream Bliss',
      price: 'Rs 450 / kg ONLY',
      image: 'https://i.ibb.co/MnNJp19/Pr2.png',
      ingredients: ['Butter', 'Sugar', 'Cream', 'Milk', 'Flour', 'Honey'],
      category: 'Wedding Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Caramel Euphoria',
      price: 'Rs 270 / kg ONLY',
      image: 'https://i.ibb.co/KyvgCW1/Pr3.png',
      ingredients: ['Caramel', 'Brown Sugar', 'Butter', 'Cream', 'Flour', 'Honey'],
      category: 'Anniversary Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'BlackForest Bliss',
      price: 'Rs 480 / kg ONLY',
      image: 'https://i.ibb.co/3p3bGRz/Pr4.png',
      ingredients: ['Chocolate', 'Cherries', 'Whipped Cream', 'Flour', 'Sugar', 'Honey'],
      category: 'Birthday Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Charmed Chocolate',
      price: 'Rs 390 / kg ONLY',
      image: 'https://i.ibb.co/8mLV9R9/Pr5.png',
      ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Flour', 'Sugar', 'Honey'],
      category: 'Chocolate Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Delicious Symphony',
      price: 'Rs 150 / kg ONLY',
      image: 'https://i.ibb.co/GkdvM9z/Pr6.png',
      ingredients: ['Milk', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Honey'],
      category: 'Festival Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Vanilla Dream',
      price: 'Rs 220 / kg ONLY',
      image: 'https://i.ibb.co/zSVnQzD/vanilla-dream.png',
      ingredients: ['Vanilla Extract', 'Butter', 'Sugar', 'Flour', 'Eggs', 'Honey'],
      category: 'Birthday Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Strawberry Delight',
      price: 'Rs 310 / kg ONLY',
      image: 'https://i.ibb.co/LNwXQTH/strawberry-delight.png',
      ingredients: ['Strawberries', 'Whipped Cream', 'Flour', 'Sugar', 'Butter', 'Honey'],
      category: 'Anniversary Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Red Velvet Royale',
      price: 'Rs 550 / kg ONLY',
      image: 'https://i.ibb.co/gDFVr9r/red-velvet.png',
      ingredients: ['Cocoa', 'Buttermilk', 'Cream Cheese', 'Flour', 'Sugar', 'Honey'],
      category: 'Wedding Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Mango Mania',
      price: 'Rs 320 / kg ONLY',
      image: 'https://i.ibb.co/7NwNkJ1/mango-mania.png',
      ingredients: ['Mango Puree', 'Whipped Cream', 'Sugar', 'Flour', 'Butter', 'Honey'],
      category: 'Birthday Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Lemon Zest',
      price: 'Rs 280 / kg ONLY',
      image: 'https://i.ibb.co/9qCcHkQ/lemon-zest.png',
      ingredients: ['Lemon Zest', 'Butter', 'Sugar', 'Flour', 'Eggs', 'Honey'],
      category: 'Festival Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Coconut Paradise',
      price: 'Rs 400 / kg ONLY',
      image: 'https://i.ibb.co/6s5JpK6/coconut-paradise.png',
      ingredients: ['Coconut', 'Sugar', 'Cream', 'Flour', 'Butter', 'Honey'],
      category: 'Wedding Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Orange Burst',
      price: 'Rs 300 / kg ONLY',
      image: 'https://i.ibb.co/QmQ3j1F/orange-burst.png',
      ingredients: ['Orange Zest', 'Butter', 'Eggs', 'Flour', 'Sugar', 'Honey'],
      category: 'Festival Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Pineapple Fantasy',
      price: 'Rs 360 / kg ONLY',
      image: 'https://i.ibb.co/Lr6DkYJ/pineapple-fantasy.png',
      ingredients: ['Pineapple Chunks', 'Whipped Cream', 'Flour', 'Sugar', 'Honey'],
      category: 'Birthday Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Berry Fusion',
      price: 'Rs 410 / kg ONLY',
      image: 'https://i.ibb.co/tBWmHvP/berry-fusion.png',
      ingredients: ['Blueberries', 'Raspberries', 'Cream', 'Flour', 'Sugar', 'Honey'],
      category: 'Anniversary Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Nutty Overload',
      price: 'Rs 450 / kg ONLY',
      image: 'https://i.ibb.co/FwDFZ9f/nutty-overload.png',
      ingredients: ['Almonds', 'Cashews', 'Walnuts', 'Flour', 'Sugar', 'Honey'],
      category: 'Wedding Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Coffee Crumble',
      price: 'Rs 290 / kg ONLY',
      image: 'https://i.ibb.co/hfN9yTb/coffee-crumble.png',
      ingredients: ['Coffee Beans', 'Sugar', 'Butter', 'Eggs', 'Honey'],
      category: 'Festival Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Peach Paradise',
      price: 'Rs 380 / kg ONLY',
      image: 'https://i.ibb.co/Jr8jSbv/peach-paradise.png',
      ingredients: ['Peach Slices', 'Whipped Cream', 'Flour', 'Sugar', 'Honey'],
      category: 'Anniversary Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Tiramisu Temptation',
      price: 'Rs 520 / kg ONLY',
      image: 'https://i.ibb.co/XVLYFnv/tiramisu-temptation.png',
      ingredients: ['Coffee', 'Mascarpone', 'Cocoa', 'Sugar', 'Flour', 'Honey'],
      category: 'Wedding Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Hazelnut Heaven',
      price: 'Rs 430 / kg ONLY',
      image: 'https://i.ibb.co/YBbh7rr/hazelnut-heaven.png',
      ingredients: ['Hazelnuts', 'Cocoa', 'Butter', 'Sugar', 'Flour', 'Honey'],
      category: 'Wedding Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Pumpkin Spice Wonder',
      price: 'Rs 310 / kg ONLY',
      image: 'https://i.ibb.co/vjVr5Mn/pumpkin-spice-wonder.png',
      ingredients: ['Pumpkin Puree', 'Cinnamon', 'Nutmeg', 'Flour', 'Sugar', 'Honey'],
      category: 'Festival Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Mint Chocolate Madness',
      price: 'Rs 370 / kg ONLY',
      image: 'https://i.ibb.co/YWRNg1M/mint-chocolate-madness.png',
      ingredients: ['Mint Extract', 'Dark Chocolate', 'Flour', 'Sugar', 'Honey'],
      category: 'Birthday Cakes',
      variants: ['Eggless', 'With Egg'],
    },
    {
      title: 'Almond Delight',
      price: 'Rs 340 / kg ONLY',
      image: 'https://i.ibb.co/XChXngG/almond-delight.png',
      ingredients: ['Almonds', 'Butter', 'Sugar', 'Flour', 'Honey'],
      category: 'Anniversary Cakes',
      variants: ['Eggless', 'With Egg'],
    }
  ];
  

  return (
    <div className="font-Playfair">
      {/* <div className=" pb-[0vh] h-[50vh] w-[100vw] ">
        <ProductHeader />

        <img
          src={beeflap}
          alt=""
          className="absolute h-[30%] left-[85%] top-[10%] imagedropfilter  z-[14] gspaHomeBee1Class"
        />
        <img
          src={beeflap}
          alt=""
          className="absolute h-[30%] left-[0%] top-[10%] imagedropfilter rotateY180 z-[18] gspaHomeBee2Class"
        />

        
      </div> */}

      {}

      <div className="shopHeader h-[50vh] w-[100vw] bg-[#8b4513] relative ">
        <video src={video} loop autoPlay className="absolute w-full h-full"></video>


      </div>

      <div className="min-h-screen bg-[#eece76]">
        {/* Other content */}
        gg
      </div>
    </div>
  );
};

export default Product;


task to do 
1. properly chaeck and apply filter functions here 
2. make a product  details page 
3. cart functionality 
