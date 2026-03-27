"use client";
import React from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("Component mounted");

  const handle = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      await signup(data.username, data.email, data.password);
      router.push("/dashboard/inventory-management");

      console.log("Signup successful, navigating to dashboard...");
    } catch (error) {
      setErr(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }

    return (
      <>
        <main className=" w-screen flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-cyan-100 p-6   ">
          <div className="max-w-md w-full mx-auto p-7 rounded-lg shadow-lg space-y-8">
            <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
            <form onSubmit={handle} className="space-y-4">
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Username"
                type="text"
                name="username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />

              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Email"
                type="email"
                name="email"
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
                onClick={() => console.log("BUTTON CLICKED")}
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600  px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign-up"}
              </button>
              {err && <p className="text-sm text-red-600">{err}</p>}
              <Link
                href="/login"
                className="mt-4 block text-center text-gray-500 hover:underline font-bold "
              >
                Already have an account? Log in
              </Link>
            </form>
          </div>
        </main>
      </>
    );
  };
}
