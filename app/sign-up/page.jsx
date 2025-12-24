"use client";
import React from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handle(e) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await signup(username, email, password);
      router.push("/profile");
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   loginWithRedirect();
  // };

  return (
    <>
      {/* <button 
        onClick={() => loginWithRedirect()} 
        className=" bg-[#86d2dc] text-[#4b4d50] hover:bg-[#79b5bd] transform-fill shadow-lg rounded-lg px-2 py-1 cursor-pointer font-medium  text-lg "
      >
        Log In
      </button> */}
      {/* <Nav /> */}
      <main className=" w-screen flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-cyan-100p-6   ">
        <div className="max-w-md w-full mx-auto p-7 rounded-lg shadow-lg space-y-8">
          <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
          <form onSubmit={handle} className="space-y-4">
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600  px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Creating account..." : "sign-up"}
            </button>
            {err && <p className="text-sm text-red-600">{err}</p>}
            <Link
              href="/"
              className="mt-4 block text-center text-gray-500 hover:underline font-bold "
            >
              Back to Home
            </Link>
          </form>
        </div>
      </main>
    </>
  );
}
