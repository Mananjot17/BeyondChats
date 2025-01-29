"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-right">
      <button
        onClick={() => alert("Proceeding to the next step...")}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Next Step
      </button>
    </footer>
  );
};

export default Footer;
