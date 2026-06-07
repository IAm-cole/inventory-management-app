"use client"
import React, { useEffect } from 'react';
import { useRouter, useNavigate } from "next/navigation";

import Link from "next/link";
import useAuth from "../hooks/useAuth";


const Logout = () => {
  const router = useRouter();
  const { logout} = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // 1. Call Backend to destroy session/invalidate JWT
        await logout.post('/api/logout'); 
        
     
        
        // 3. Redirect to login
        navigate('/login');
      } catch (error) {
        console.error("Logout failed", error);
        // Still redirect or handle error
       router.push('/login');
      }
    };

    handleLogout();
  }, [router]);

  return <div >
    <button className="p-4 bg-blue-500 rounded-lg" >
        logout
    </button>
    Logging you out...</div>; // Or a loading spinner
};

export default Logout;
