import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import signOut from Firebase
import { auth } from '../firebase/FirebaseConfig'; // Firebase config

const User = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null); // Store user email

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email !== "admin@gmail.com") {
          setUserEmail(user.email); // If email is not admin@gmail.com, set userEmail
        } else {
          // Redirect if the email is admin@gmail.com
          navigate("/Login");
        }
      } else {
        // Redirect to Login if no user is logged in
        navigate("/Login");
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  // If no user email is set yet, display a loading state
  if (!userEmail) {
    return <div>Loading...</div>;
  }

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#361513] bg-opacity-90 flex items-center justify-center z-50 font-Playfair">
      {/* Modal content */}
      <div className="bg-[#f8f1e1] w-[98%] h-[98%] p-8 rounded-lg shadow-lg relative">
        <Link
          to="/"
          className="absolute end-5 top-5 transform transition-transform duration-100 hover:rotate-90"
        >
          <i className="ri-close-line text-[#8b4513] text-4xl font-black "></i>
        </Link>
        <h2>User</h2>
        <p>
          {/* Display user-specific content */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in
          consequatur perspiciatis ipsa tempore, illum corporis obcaecati
          aliquid. Et dolorum nesciunt animi esse quidem beatae deleniti ipsa
          ducimus laudantium, quae impedit vero ipsum debitis...
        </p>
        <button 
          onClick={handleLogout} 
          className="mt-4 px-4 py-2 bg-[#8b4513] text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
