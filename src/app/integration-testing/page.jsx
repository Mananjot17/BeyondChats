"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ChatbotIntegration = () => {
  return (
    <main
      className="min-h-screen pt-20 px-6 mx-auto flex flex-col space-y-24"
      style={{
        backgroundImage:
          'url("https://framerusercontent.com/images/hqWg4zLiKlfr6XakOIYRtdVEQXk.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 1️⃣ Test Your Chatbot */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 mt-24">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-white text-center lg:text-left space-y-6 p-8">
          <div
            className="p-6 rounded-lg "
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Test Your Chatbot
            </motion.h1>
            <p className="text-lg lg:text-xl max-w-lg mt-2">
              See your chatbot in action! Click the button below to launch a
              test version on your website.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Button className="px-8 py-4 text-lg font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg">
            Launch Test
          </Button>
        </div>
      </section>

      {/* 2️⃣ Integrate on Your Website */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-10 mt-24">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-white text-center lg:text-left space-y-6 p-8">
          <div
            className="p-6 rounded-lg "
            style={{
              background:
                "linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Integrate on Your Website
            </motion.h1>
            <p className="text-lg lg:text-xl max-w-lg mt-2">
              Easily add your chatbot by pasting a simple code snippet inside
              your website’s <code>&lt;head&gt;</code> tag.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Button className="px-8 py-4 text-lg font-semibold rounded-lg bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg">
            Integrate Now
          </Button>
        </div>
      </section>

      {/* 3️⃣ Test Your Integration */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 mt-24 mb-24">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-white text-center lg:text-left space-y-6 p-8">
          <div
            className="p-6 rounded-lg "
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Test Your Integration
            </motion.h1>
            <p className="text-lg lg:text-xl max-w-lg mt-2">
              Check if your chatbot has been successfully integrated into your
              website.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Button className="px-8 py-4 text-lg font-semibold rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-lg">
            Test Integration
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ChatbotIntegration;
