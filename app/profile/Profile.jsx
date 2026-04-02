"use client";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  const user = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        position: "relative",
      }}
    >
      <img
        src={
          user.picture ||
          `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`
        }
        alt={user.name || "User"}
        className="profile-picture cursor-pointer ease-in-out duration-300 hover:scale-105"
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "100%",
          objectFit: "cover",
          border: "3px solid #20a3ac",
        }}
        onError={(e) => {
          const target = e.target;
          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`;
        }}
        onClick={handleProfileClick}
      />

      {openProfile && (
        <div
          style={{
            textAlign: "center",
            position: "fixed",
            top: "90px",
            right: "20px",
            height: "auto",
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "1rem",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            zIndex: 9999,
            margin: "2px",
            minWidth: "240px",
          }}
        >
          <div
            className="profile-name text-sm"
            style={{
              fontWeight: "600",
              color: "#1a202c",
              marginBottom: "0.5rem",
            }}
          >
            {user.name}
          </div>

          {/* <div className="block w-full h-full">
            <a href="">change password</a>
            <a href="">Logout</a>
          </div> */}
          <ul className="text-xl font-bold text-center cursor-pointer ">
            <li>
              <a
                hfref=""
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Profile
              </a>{" "}
            </li>
            <li>
              <a
                href=""
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Change password
              </a>{" "}
            </li>
            <li>
              <a
                href=""
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Settings
              </a>{" "}
            </li>
            <li>
              <a
                href=""
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Logout
              </a>{" "}
            </li>
          </ul>
          {/* <div
            className="profile-email text-xs"
            style={{ color: "#718096", marginBottom: "0.5rem" }}
          >
            {user.email}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Profile;
