"use client";
import { useState, useEffect, useCallback } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load token from localStorage on first render
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  // Helper to call backend with refresh logic
  const fetchWithRefresh = useCallback(async (url, opts = {}) => {
    let token = accessToken;

    let res = await fetch(url, {
      ...opts,
      headers: {
        ...(opts.headers || {}),
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    // If token expired → refresh
    if (res.status === 401) {
      const refreshRes = await fetch("/api/auth/refresh", {
        method: "POST",
        credentials: "include",
      });

      if (refreshRes.ok) {
        const data = await refreshRes.json();
        localStorage.setItem("accessToken", data.accessToken);
        setAccessToken(data.accessToken);

        // retry original request
        return fetch(url, {
          ...opts,
          headers: {
            ...(opts.headers || {}),
            Authorization: `Bearer ${data.accessToken}`,
          },
        });
      }
    }

    return res;
  }, [accessToken]);

  // Fetch the logged in user info
  const fetchUser = async (token) => {
    try {
      const res = await fetch("/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        setUser(null);
      } else {
        const data = await res.json();
        setUser(data.user);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Invalid login");
    }

    const data = await res.json();
    localStorage.setItem("accessToken", data.accessToken);

    setAccessToken(data.accessToken);
    await fetchUser(data.accessToken);
    return true;
  };

  // Signup user
  const signup = async (username,email, password) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({username, email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!res.ok) throw new Error("Signup failed");

    return login(username, email, password); // auto-login
  };

  // Logout
  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    localStorage.removeItem("accessToken");
    setUser(null);
    setAccessToken(null);
  };

  return {
    user,
    loading,
    accessToken,
    login,
    signup,
    logout,
    fetchWithRefresh,
  };
}
