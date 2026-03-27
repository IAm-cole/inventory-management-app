"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import Link from "next/link";

export default function SignUpLogin() {
  const { signup } = useAuth(); //
  const router = useRouter(); //

  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      await signup(data.username, data.email, data.password);
      router.push("/sign-in");
    } catch (error) {
      setErr(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-screen min-h-screen bg-gradient-to-b from-purple-50 to-cyan-100 p-6">
      <div className="max-w-md w-full mx-auto p-7 rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {err && <p className="text-sm text-red-600">{err}</p>}

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-cyan-500 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-cyan-600 transition-colors w-full"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </div>
          <Link
            href="/sign-in"
            className="mt-2 block text-center text-gray-500 hover:underline font-bold text-lg "
          >
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </section>
  );
}

// "use client";

// export default function SignUpLogin() {
//   return (
//     <button
//       onClick={() => {
//         console.log("CLICK WORKED");
//         alert("Button clicked!");
//       }}
//     >
//       Click Me
//     </button>
//   );
// }
