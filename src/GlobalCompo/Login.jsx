import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('Manual Login:', userCredential.user.email);
      userCredential.user.email === 'admin@gmail.com' ? navigate('/Admin') : navigate('/User');
      toast.success("Login successful!"); // Show success toast
    } catch (error) {
      toast.error(error.message); // Show error toast
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Login:', result.user.email);
      
      toast.success("Google login successful!"); // Show success toast
      setTimeout(()=>{
        navigate('/User');
      },1000)
    } catch (error) {
      toast.error(error.message); // Show error toast
    }
  };

  const handlePasswordReset = async () => {
    if (!formData.email) {
      setError("Please enter your email to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setResetEmailSent(true);
      setError(null);
      toast.success("Password reset email sent!"); // Show success toast
    } catch (error) {
      setError(error.message);
      toast.error(error.message); // Show error toast
    }
  };

  return (
    // Modal wrapper with dark background
    <div className="fixed inset-0 bg-[#361513] bg-opacity-90 flex items-center justify-center z-50 font-Playfair">
      {/* Modal content */}
      <div className="bg-[#f8f1e1] w-full max-w-md p-8 rounded-lg shadow-lg relative">
        <Link to='/' className='absolute end-5 top-5 transform transition-transform duration-100 hover:rotate-180'>
          <i className="ri-close-line text-[#8b4513] text-4xl font-black "></i>
        </Link>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[#8b4513]">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
          
        </form>
        <div className='flex justify-center items-center '>
          <p className=" text-sm text-[#8b4513]">OR</p>
        </div>

        <div className="mb-6 text-center">
          <button 
            onClick={handleGoogleLogin} 
            className="w-full bg-[#8b4513] opacity-[90%] text-[#f8f1e1] py-2 rounded-md hover:opacity-[100%] transition duration-300"
          >
            Sign in with Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#8b4513]">Forgot your password? 
            <button 
              onClick={handlePasswordReset} 
              className="text-indigo-600 hover:underline ml-1"
            >
              Reset it here
            </button>
          </p>
          {resetEmailSent && <p className="text-green-500 text-sm mt-2">Password reset email sent! Check your inbox.</p>}
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-[#8b4513]">New to the site? 
            <Link to="/SignUp" className="text-indigo-600 hover:underline ml-1">Sign up here</Link>
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
