import React, { useEffect } from "react";
import ProductHeader from "./ProductHeader";
import coconutleaf from "../../assets/coconutleaf.png";
import beeflap from "../../assets/beeflap.gif";
import HeaderCakeImage from "../../assets/HeaderCakeImage.png";
import video from "../../assets/video5.mp4";

const Product = () => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Heavenly Layers",
      price: "Rs 250 / kg ONLY",
      image: "https://i.ibb.co/rvyKRGM/pr1.png",
      ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Vanilla", "Honey"],
      category: "Birthday Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Buttercream Bliss",
      price: "Rs 450 / kg ONLY",
      image: "https://i.ibb.co/MnNJp19/Pr2.png",
      ingredients: ["Butter", "Sugar", "Cream", "Milk", "Flour", "Honey"],
      category: "Wedding Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Caramel Euphoria",
      price: "Rs 270 / kg ONLY",
      image: "https://i.ibb.co/KyvgCW1/Pr3.png",
      ingredients: [
        "Caramel",
        "Brown Sugar",
        "Butter",
        "Cream",
        "Flour",
        "Honey",
      ],
      category: "Anniversary Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "BlackForest Bliss",
      price: "Rs 480 / kg ONLY",
      image: "https://i.ibb.co/3p3bGRz/Pr4.png",
      ingredients: [
        "Chocolate",
        "Cherries",
        "Whipped Cream",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Birthday Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Charmed Chocolate",
      price: "Rs 390 / kg ONLY",
      image: "https://i.ibb.co/8mLV9R9/Pr5.png",
      ingredients: [
        "Dark Chocolate",
        "Butter",
        "Eggs",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Chocolate Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Delicious Symphony",
      price: "Rs 150 / kg ONLY",
      image: "https://i.ibb.co/GkdvM9z/Pr6.png",
      ingredients: ["Milk", "Flour", "Sugar", "Eggs", "Butter", "Honey"],
      category: "Festival Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Vanilla Dream",
      price: "Rs 220 / kg ONLY",
      image: "https://i.ibb.co/zSVnQzD/vanilla-dream.png",
      ingredients: [
        "Vanilla Extract",
        "Butter",
        "Sugar",
        "Flour",
        "Eggs",
        "Honey",
      ],
      category: "Birthday Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Strawberry Delight",
      price: "Rs 310 / kg ONLY",
      image: "https://i.ibb.co/LNwXQTH/strawberry-delight.png",
      ingredients: [
        "Strawberries",
        "Whipped Cream",
        "Flour",
        "Sugar",
        "Butter",
        "Honey",
      ],
      category: "Anniversary Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Red Velvet Royale",
      price: "Rs 550 / kg ONLY",
      image: "https://i.ibb.co/gDFVr9r/red-velvet.png",
      ingredients: [
        "Cocoa",
        "Buttermilk",
        "Cream Cheese",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Wedding Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Mango Mania",
      price: "Rs 320 / kg ONLY",
      image: "https://i.ibb.co/7NwNkJ1/mango-mania.png",
      ingredients: [
        "Mango Puree",
        "Whipped Cream",
        "Sugar",
        "Flour",
        "Butter",
        "Honey",
      ],
      category: "Birthday Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Lemon Zest",
      price: "Rs 280 / kg ONLY",
      image: "https://i.ibb.co/9qCcHkQ/lemon-zest.png",
      ingredients: ["Lemon Zest", "Butter", "Sugar", "Flour", "Eggs", "Honey"],
      category: "Festival Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Coconut Paradise",
      price: "Rs 400 / kg ONLY",
      image: "https://i.ibb.co/6s5JpK6/coconut-paradise.png",
      ingredients: ["Coconut", "Sugar", "Cream", "Flour", "Butter", "Honey"],
      category: "Wedding Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Orange Burst",
      price: "Rs 300 / kg ONLY",
      image: "https://i.ibb.co/QmQ3j1F/orange-burst.png",
      ingredients: ["Orange Zest", "Butter", "Eggs", "Flour", "Sugar", "Honey"],
      category: "Festival Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Pineapple Fantasy",
      price: "Rs 360 / kg ONLY",
      image: "https://i.ibb.co/Lr6DkYJ/pineapple-fantasy.png",
      ingredients: [
        "Pineapple Chunks",
        "Whipped Cream",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Birthday Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Berry Fusion",
      price: "Rs 410 / kg ONLY",
      image: "https://i.ibb.co/tBWmHvP/berry-fusion.png",
      ingredients: [
        "Blueberries",
        "Raspberries",
        "Cream",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Anniversary Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Nutty Overload",
      price: "Rs 450 / kg ONLY",
      image: "https://i.ibb.co/FwDFZ9f/nutty-overload.png",
      ingredients: ["Almonds", "Cashews", "Walnuts", "Flour", "Sugar", "Honey"],
      category: "Wedding Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Coffee Crumble",
      price: "Rs 290 / kg ONLY",
      image: "https://i.ibb.co/hfN9yTb/coffee-crumble.png",
      ingredients: ["Coffee Beans", "Sugar", "Butter", "Eggs", "Honey"],
      category: "Festival Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Peach Paradise",
      price: "Rs 380 / kg ONLY",
      image: "https://i.ibb.co/Jr8jSbv/peach-paradise.png",
      ingredients: ["Peach Slices", "Whipped Cream", "Flour", "Sugar", "Honey"],
      category: "Anniversary Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Tiramisu Temptation",
      price: "Rs 520 / kg ONLY",
      image: "https://i.ibb.co/XVLYFnv/tiramisu-temptation.png",
      ingredients: ["Coffee", "Mascarpone", "Cocoa", "Sugar", "Flour", "Honey"],
      category: "Wedding Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Hazelnut Heaven",
      price: "Rs 430 / kg ONLY",
      image: "https://i.ibb.co/YBbh7rr/hazelnut-heaven.png",
      ingredients: ["Hazelnuts", "Cocoa", "Butter", "Sugar", "Flour", "Honey"],
      category: "Wedding Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Pumpkin Spice Wonder",
      price: "Rs 310 / kg ONLY",
      image: "https://i.ibb.co/vjVr5Mn/pumpkin-spice-wonder.png",
      ingredients: [
        "Pumpkin Puree",
        "Cinnamon",
        "Nutmeg",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Festival Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Mint Chocolate Madness",
      price: "Rs 370 / kg ONLY",
      image: "https://i.ibb.co/YWRNg1M/mint-chocolate-madness.png",
      ingredients: [
        "Mint Extract",
        "Dark Chocolate",
        "Flour",
        "Sugar",
        "Honey",
      ],
      category: "Birthday Cakes",
      variants: ["Eggless", "With Egg"],
    },
    {
      title: "Almond Delight",
      price: "Rs 340 / kg ONLY",
      image: "https://i.ibb.co/XChXngG/almond-delight.png",
      ingredients: ["Almonds", "Butter", "Sugar", "Flour", "Honey"],
      category: "Anniversary Cakes",
      variants: ["Eggless", "With Egg"],
    },
  ];

  return (
    <div className="font-Playfair">
     {/* <div className="  h-[80vh] w-[100vw] ">
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
                <div className="absolute w-full h-[0vh] top-[0%] left-0 bg-[#e3d0c269]"></div>

        
      </div>  */}

      {/*video*/}

      <div className="shopHeader h-[40vh] md:h-[60vh] w-[100vw] bg-[#8b4513] relative overflow-hidden">
        <video
          src={video}
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[70%]"
        />

        <div className="absolute w-full h-[13vh] top-0 left-0 bg-[#e3d0c269]"></div>
        <img
          src={beeflap}
          alt=""
          className="absolute h-[30%] right-[4%] top-[50%] imagedropfilter  z-[14] "
        />
        <img
          src={beeflap}
          alt=""
          className="absolute h-[30%] left-[5%] top-[50%] imagedropfilter rotateY180 z-[18] "
        />
         <div className="absolute w-full min-h-[13vh] bottom-0 left-0 flex justify-center items-center">
         <h2 className="text-6xl md:text-9xl font-black text-[#e6ab0b] uppercase text-center  ">
         Our Delicacies
        </h2>
         </div>

        
      </div> 

      <div className="min-h-screen bg-[#eece76]">
        {/* Other content */}
        gg
      </div>
    </div>
  );
};

export default Product;
