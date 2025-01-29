"use client";
import { FaRegUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scrolling direction to show/hide the header
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHeaderVisible(false); // Scroll down: hide header
    } else {
      setHeaderVisible(true); // Scroll up: show header
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full shadow-lg transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">BeyondChats</h1>
          <UserButton />
        </div>
      </header>
    </>
  );
};

export default Header;
