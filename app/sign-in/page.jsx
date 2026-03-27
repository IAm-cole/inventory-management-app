// pages/login.js
"use client";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

import { useRouter } from "next/navigation";

import Link from "next/link";

export default function LoginPage() {
  // const { loginWithRedirect } = useAuth0();

  const { login } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handle(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    console.log("Login attempt with:", data); // Debug log

    try {
      await login(email, password);
      router.push("/inventory/inventory-management");
    } catch (error) {
      setError(
        error.message ||
          "Login failed. Please check your credentials and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   loginWithRedirect();
  // };

  {
    /* <button 
        onClick={() => loginWithRedirect()} 
        className=" bg-[#86d2dc] text-[#4b4d50] hover:bg-[#79b5bd] transform-fill shadow-lg rounded-lg px-2 py-1 cursor-pointer font-medium  text-lg "
      >
        Log In
      </button> */
  }
  {
    /* <Nav /> */
  }

  return (
    <main className=" w-screen flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-cyan-100 p-6   ">
      <div className="max-w-md w-full mx-auto p-7 rounded-lg shadow-lg space-y-6">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handle} className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Password"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-cyan-600 transition-colors w-full"
            disabled={loading}
            onClick={() => console.log("btn clicked")}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-sm text-red-600">{error.message}</p>}
          <div className="flex justify-between">
            <Link
              href="/verify-email"
              className="mt-2 block text-center text-gray-500 hover:underline font-bold "
            >
              forgot password?
            </Link>
            <Link
              href="/signup-login"
              className="mt-2 block text-center text-gray-500 hover:underline font-bold "
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
