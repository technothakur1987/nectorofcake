import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/FirebaseConfig'; // Adjust the import path as necessary
import { onAuthStateChanged } from 'firebase/auth';
import Logo from '../assets/logo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // State to store the logged-in user's email
  const container = useRef();

  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP(() => {
    let tl = gsap.timeline();
    tl.from('.gsapLogoClass', {
      duration: 1,
      delay: 1,
      y: '20px',
      opacity: 0,
    });

    tl.from('.gsapNavClass1', {
      duration: 0.75,
      y: '20px',
      opacity: 0,
    });
    tl.from('.gsapNavClass2', {
      duration: 0.75,
      y: '20px',
      opacity: 0,
    });
    tl.from('.gsapNavClass3', {
      duration: 0.75,
      y: '20px',
      opacity: 0,
    });
    tl.from('.gsapNavClass4', {
      duration: 0.75,
      y: '20px',
      opacity: 0,
    });
    tl.from('.gsapNavClass41', {
      duration: 0.75,
      y: '20px',
      opacity: 0,
    });
    tl.from('.gsapNavClass5', {
      duration: 0.75,
      y: '20px',
      opacity: 0,
    });
  }, { scope: container });

  // Fetch user email from Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Store the logged-in user's email
      } else {
        setUserEmail(null); // No user is logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div ref={container} className='navbar fixed h-[10vh] z-[17] w-full px-[5vw] pt-5 flex items-center justify-between text-[#361513] font-Playfair text-2xl font-bold bg-[transparent]'>

      {/* Logo */}
      <div><img src={Logo} alt="Logo" className="h-[10vh] gsapLogoClass" /></div>

      {/* Mobile Menu Button */}
      <div className='md:hidden z-50'>
        <button onClick={toggleMobileMenu} className="text-3xl relative z-50">
          <i className={`ri-${isMobileMenuOpen ? 'close-line' : 'menu-line'}`}></i>
        </button>
      </div>

      {/* Desktop Navigation Links (hidden on mobile) */}
      <div className='hidden md:flex items-center gap-8'>
        <NavLink to='/' className='gsapNavClass1'>Home</NavLink>
        <NavLink to='/ProductsPage' className='gsapNavClass2'>Shop</NavLink>
        <NavLink to='/ConnectUs' className='gsapNavClass3'>Connect Us</NavLink>

        {/* Conditional rendering based on user email */}
        {userEmail ? (
          userEmail === "admin@gmail.com" ? (
            <NavLink to='/Admin' className='gsapNavClass4'>Admin</NavLink>
          ) : (
            <NavLink to='/User' className='gsapNavClass41'>Dashboard</NavLink>
          )
        ) : (
          <NavLink to='/Login' className='gsapNavClass4'>Log-In</NavLink>
        )}

        <NavLink to='/SignUp' className='gsapNavClass41'>Sign-In</NavLink>
        <button className='relative gsapNavClass5'>
          <i className="ri-shopping-cart-fill"></i>
          <span className='rounded-full bg-[#e6ab0b] h-[1.5rem] w-[1.5rem] absolute top-[-40%] text-base'>2</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu (with smooth transition) */}
      <div
        className={`absolute top-[12vh] left-0 text-4xl w-full min-h-[100vh] bg-[#f8f1e1] p-5 shadow-lg flex flex-col items-center gap-4 md:hidden z-[20] transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <NavLink to='/' className='gsapNavClass1 mb-8' onClick={toggleMobileMenu}>Home</NavLink>
        <NavLink to='/ProductsPage' className='gsapNavClass2 mb-8' onClick={toggleMobileMenu}>Shop</NavLink>
        <NavLink to='/ConnectUs' className='gsapNavClass3 mb-8' onClick={toggleMobileMenu}>Connect Us</NavLink>

        {/* Mobile Conditional rendering */}
        {userEmail ? (
          userEmail === "admin@gmail.com" ? (
            <NavLink to='/Admin' className='gsapNavClass4 mb-8' onClick={toggleMobileMenu}>Admin</NavLink>
          ) : (
            <NavLink to='/User' className='gsapNavClass41 mb-8' onClick={toggleMobileMenu}>Dashboard</NavLink>
          )
        ) : (
          <NavLink to='/Login' className='gsapNavClass4 mb-8' onClick={toggleMobileMenu}>Log-In</NavLink>
        )}

        <NavLink to='/SignUp' className='gsapNavClass41 mb-8' onClick={toggleMobileMenu}>Sign-In</NavLink>
        <button className='relative gsapNavClass5 mb-8'>
          <i className="ri-shopping-cart-fill"></i>
          <span className='rounded-full bg-[#e6ab0b] h-[1.5rem] w-[1.5rem] absolute top-[-40%] text-base'>2</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
