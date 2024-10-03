import React, { useState } from 'react';
import beeflap from "../../assets/beeflap.gif";
import video from "../../assets/video5.mp4";

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='font-Playfair'>
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
          alt="Delicious cake on display"
          className="absolute h-[30%] right-[4%] top-[50%] imagedropfilter z-[14]"
        />
        <img
          src={beeflap}
          alt="Another view of the delicious cake"
          className="absolute h-[30%] left-[5%] top-[50%] imagedropfilter rotateY180 z-[18]"
        />
        <div className="absolute w-full min-h-[13vh] bottom-0 left-0 flex justify-center items-center">
          <h2 className=" text-6xl md:text-9xl font-black text-[#e6ab0b] uppercase text-center">
            Let's connect
          </h2>
        </div>
      </div>
      <div className="min-h-screen bg-[#eece76] px-[5vw] pt-[5vw] pb-[45vw] md:pb-[10vw] flex flex-col md:flex-row">
  {/* Left Side Content */}
  <div className="flex-1 pr-4 mb-8 md:mb-0">
    <h2 className="text-[#361513] text-4xl md:text-5xl font-bold mb-5 uppercase text-center md:text-start">
      About Us
    </h2>
    <p className="text-[#361513] text-lg md:text-xl font-bold leading-6 md:leading-7 text-justify">
      Whether you have questions, feedback, or just want to say hello, feel free to reach out. Your thoughts and opinions are important to us!
    </p>
    <p className="text-[#361513] text-lg md:text-xl font-bold leading-6 md:leading-7 text-justify mt-4">
      At <strong className="font-black">NECTOR OF CAKES</strong>, we value open communication and are committed to providing you with the best experience possible. Don't hesitate to connect with us!
    </p>
  </div>

  {/* Right Side Contact Form */}
  <div className="flex-1 pl-0 md:pl-4">
    <h2 className="text-[#361513] text-4xl md:text-5xl font-bold mb-5 uppercase text-center md:text-start">
      Connect Us
    </h2>
    <form onSubmit={handleSubmit} className="bg-[#f8f1e1] p-4 md:p-6 rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg md:text-xl font-bold leading-6 md:leading-7 text-[#8b4513] mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg md:text-xl font-bold leading-6 md:leading-7 text-[#8b4513] mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg md:text-xl font-bold leading-6 md:leading-7 text-[#8b4513] mb-2">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Message"
          rows="4"
          required
        />
      </div>
      <button type="submit" className="bg-[#8b4513] text-white px-4 py-2 rounded w-full md:w-auto">
        Send Message
      </button>
    </form>
  </div>
</div>

    </div>
  );
}

export default ConnectUs;
