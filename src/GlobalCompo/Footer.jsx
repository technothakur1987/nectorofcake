import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaUpload,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Add your logo image here
import { v4 as uuidv4 } from 'uuid';
import {  toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods




const Footer = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    email: "",
    ingredients: "",
    weight: "",
    date: new Date().toLocaleDateString("en-GB"), // dd-mm-yyyy format
    remarks: "", // Add remarks field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      // Add document to Firestore collection
      await addDoc(collection(fireDB, "customCakeOrder"), formData); 

      // Reset form data
      setFormData({
        id: uuidv4(),
        email: "",
        ingredients: "",
        weight: "",
        date: new Date().toLocaleDateString("en-GB"),
        remarks: "",
      });
      
      // Show success message
      toast.success("We will contact you, please check your email.");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error submitting order. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#8b4513] to-[#b65d19] pt-16 relative font-Playfair text-[#eece76]">
      {/* Center Top Div */}
      <div className="absolute min-h-[20vh] w-[80vw] md:w-[60vw] bg-[#f8f1e1]  top-[-10%] md:top-[-12%]  lg:top-[-23%]  xl:top-[-19%] left-[10vw] md:left-[20vw] rounded-lg shadow-lg flex items-center justify-center p-3">
        <div className="text-center p-6 rounded-lg shadow-lg border-2 border-[#8b4513] border-opacity-50 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffebcc] to-[#ffcc99] opacity-30 rounded-lg"></div>
          <h2 className="relative text-2xl md:text-3xl font-bold text-[#8b4513] z-10">
            We are Awarded Best Service in Bakery 2023
          </h2>
          <p className="relative mt-2 text-lg text-[#b65d19] z-10">
            Bakery Association Of Indore
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#8b4513] rounded-b-lg"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Company Info & Social Media */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-center lg:text-start">Nector of Cake</h3>
          <p className="text-lg text-center lg:text-start">
            Sweetening your life with the goodness of honey!
          </p>

          {/* Address & Phone */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start">
              <FaMapMarkerAlt className="text-2xl mr-2 text-[#eece76]" />
              <span>Dr. Ambedkar Nagar, Madhya Pradesh</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaPhoneAlt className="text-2xl mr-2 text-[#eece76]" />
              <span>+91 8109184732</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaEnvelope className="text-2xl mr-2 text-[#eece76]" />
              <span>info@nectorofcake.com</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 justify-center lg:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f1e1] transform transition-transform hover:scale-125"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f1e1] transform transition-transform hover:scale-125"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f1e1] transform transition-transform hover:scale-125"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f1e1] transform transition-transform hover:scale-125"
            >
              <FaPinterest size={30} />
            </a>
          </div>

          {/* Logo below social media icons */}
          <div className="mt-6">
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 h-auto mx-auto imagedropfilter"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center lg:text-start">Quick Links</h3>
          <ul className="space-y-2 text-center lg:text-start">
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-[#f8f1e1] "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:underline hover:text-[#f8f1e1]"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-[#f8f1e1]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline hover:text-[#f8f1e1]">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div className="bg-[#f8f1e1] p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#8b4513]">
            Find Us Here
          </h2>
          <div className="rounded-lg overflow-hidden h-full">
            <iframe
              title="Google Map"
              className="w-full lg:h-[90%] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.896903623585!2d75.86087401542915!3d22.62358073657645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd350a6b5d67%3A0x93bc7dd9f1480988!2sDr.%20Ambedkar%20Nagar!5e0!3m2!1sen!2sin!4v1683242000001"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Custom Cake Order Form */}
        <div className="bg-[#f8f1e1] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#8b4513]">
            Order Your Custom Cake
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-[#8b4513]">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border focus:outline-none text-[#8b4513] focus:ring-2 focus:ring-[#8b4513] p-2 w-full rounded-md"
                placeholder="Enter your email address"
              />
            </div>

            {/* Ingredients Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-[#8b4513]">
                Ingredients:
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
                className="border focus:outline-none text-[#8b4513] focus:ring-2 focus:ring-[#8b4513] p-2 w-full rounded-md"
                rows="3"
                placeholder="List your ingredients here"
              />
            </div>

            {/* Weight Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-[#8b4513]">
                Weight (kg):
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="border focus:outline-none text-[#8b4513] focus:ring-2 focus:ring-[#8b4513] p-2 w-full rounded-md"
                placeholder="Enter weight in kg"
              />
            </div>

            <button
              type="submit"
              className="bg-[#8b4513] text-white py-2 px-4 font-bold w-full border border-2 rounded-md hover:bg-[#f8f1e1] hover:border-[#8b4513] hover:text-[#8b4513]  transform  duration-500 ease"
            >
              <FaUpload className="inline-block mr-2 mb-1" />
              Submit Order
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-[#f8f1e1] pt-4">
        <p>
          &copy; {new Date().getFullYear()} Nector of Cake. All rights reserved.
        </p>
        <p>
          Made with <span className="text-red-500">♥</span> by Vikram Singh
        </p>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-[0%] right-0 opacity-10 ">
        <img
          src='https://i.ibb.co/jzWLn1Q/Header-Cake-Image.png'
          alt="Cake Background"
          className="w-[08vw] h-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
