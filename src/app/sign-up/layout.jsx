"use client";
import React from "react";
import { motion } from "framer-motion";

const RegisterLayout = ({ children }) => {
  return (
    <div className=" flex flex-col lg:flex-row ">
      {/* Left Section: Heading & Description */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 text-white">
        <div
          className="p-8 rounded-lg"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Heading Animation */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
              Join BeyondChats
            </h1>

            {/* Description Animation */}
            <p className="text-lg lg:text-xl mb-6 max-w-lg text-center lg:text-left">
              Revolutionize the way you interact with your audience. Build
              intelligent, engaging, and responsive chatbots to streamline
              communication, enhance customer experiences, and drive growth for
              your business!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="lg:w-1/2 flex justify-center items-center p-6 lg:p-16">
        {children}
      </div>
    </div>
  );
};

export default RegisterLayout;
