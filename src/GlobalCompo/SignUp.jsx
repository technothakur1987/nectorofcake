import React, { useState } from 'react';
import { auth } from '../firebase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Sign up successful ! Plz Login Here"); // Show success toast
      navigate('/Login');
    } catch (error) {
      
      toast.error(error.message); // Show error toast
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Sign up with Google successful!"); // Show success toast
      setTimeout(()=>{
        navigate('/User');
      },1000)
      
    } catch (error) {
      toast.error(error.message); // Show error toast
    }
  };

  return (
    // Modal wrapper with dark background
    <div className="fixed inset-0 bg-[#361513] bg-opacity-90 flex items-center justify-center z-50 font-Playfair ">
      {/* Modal content */}
      <div className="bg-[#f8f1e1] w-full max-w-md p-8 rounded-lg shadow-lg relative">
        <Link to='/' className='absolute end-5 top-5 transform transition-transform duration-100 hover:rotate-180'>
          <i className="ri-close-line text-[#8b4513] text-4xl font-black "></i>
        </Link>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#8b4513]">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]"
            required
            autoComplete="off" 
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]"
            required
            autoComplete="off" 
          />
          <button
            type="submit"
            className="w-full bg-[#8b4513] opacity-[90%] text-[#f8f1e1] py-2 rounded-md hover:opacity-[100%] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center items-center ">
          <p className="text-sm text-[#8b4513]">OR</p>
        </div>

        <div className="mb-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-[#8b4513] opacity-[90%] text-[#f8f1e1] py-2 rounded-md hover:opacity-[100%] transition duration-300"
          >
            Sign up with Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#8b4513]">
            Already have an account? 
            <Link to="/Login" className="text-indigo-600 hover:underline ml-1">Login here</Link>
          </p>
        </div>
      </div>

      {/* Toast Container for displaying notifications */}
      
    </div>
  );
};

export default SignUp;
