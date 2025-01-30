"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const ChatbotIntegration = () => {
  const [integrationSuccess, setIntegrationSuccess] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showTestChatbot, setShowTestChatbot] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState(""); // State to store the website URL

  const chatbotCode = `<script src="https://yourchatbot.com/script.js"></script>`;

  useEffect(() => {
    // Check if there's a "url" query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get("url"); // Get the 'url' query parameter

    if (url) {
      setWebsiteUrl(decodeURIComponent(url)); // Set the website URL if it exists
    }
  }, []);

  // Function to copy code
  const copyToClipboard = () => {
    navigator.clipboard.writeText(chatbotCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Hide message after 2 sec
  };

  // Function to send email
  const sendEmail = () => {
    const subject = encodeURIComponent("Chatbot Integration Instructions");
    const body = encodeURIComponent(
      `Hello,\n\nPlease integrate the chatbot on our website by adding the following script inside the <head> tag:\n\n${chatbotCode}\n\nLet me know if you need any help.\n\nBest regards.`
    );
    window.location.href = `mailto:developer@example.com?subject=${subject}&body=${body}`;
  };

  // Function to handle "Test Chatbot"
  const testChatbot = () => {
    if (!websiteUrl) alert("No URL provided for testing!"); // If no URL, do nothing
    setShowTestChatbot(true);
  };

  return (
    <main className="pt-20 px-6 mx-auto flex flex-col space-y-16">
      {/* Step 1: Test Your Chatbot */}
      <section className="bg-black/50 text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Test Your Chatbot
        </motion.h1>
        <p className="mt-2">Click below to see your chatbot in action!</p>
        <Button
          className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          onClick={testChatbot}
        >
          Launch Test
        </Button>
      </section>

      {/* Step 2: Integrate on Your Website */}
      <section className="bg-black/50 text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Integrate on Your Website
        </motion.h1>
        <p className="mt-2">
          Paste this code in your website’s &lt;head&gt; tag or email it to your
          developer.
        </p>

        {/* Code Display */}
        <div className="bg-gray-800 text-white p-4 mt-4 rounded-md w-full max-w-lg text-left">
          <pre className="whitespace-pre-wrap break-words">{chatbotCode}</pre>
        </div>

        {/* Copy and Email Buttons */}
        <Button
          className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg"
          onClick={copyToClipboard}
        >
          Copy Code
        </Button>
        {copySuccess && <p className="text-green-400 mt-2">Copied!</p>}

        <Button
          className="mt-2 bg-gray-500 hover:bg-gray-600 px-6 py-3 rounded-lg"
          onClick={sendEmail}
        >
          Email Instructions
        </Button>
      </section>

      <section className="bg-black/50 text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Test Integration
        </motion.h1>
        <p className="mt-2">Click below to see your chatbot in action!</p>
        <Button
          className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          onClick={() => setIntegrationSuccess(true)}
        >
          Launch Test
        </Button>
      </section>

      {/* Success UI */}
      {integrationSuccess && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 text-white p-8">
          <Confetti />
          <motion.h1
            className="text-4xl font-bold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            🎉 Integration Successful!
          </motion.h1>
          <p className="mt-2">Your chatbot is now live on your website.</p>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
            Explore Admin Panel
          </Button>
          <Button className="mt-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg">
            Start Chatting
          </Button>
          <button
            className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-lg"
            onClick={() => setIntegrationSuccess(false)}
          >
            ✖
          </button>
        </div>
      )}

      {/* Show the Test Chatbot View */}
      {showTestChatbot && websiteUrl && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
          <div className="w-full h-full">
            <iframe
              src={websiteUrl}
              title="Test Chatbot"
              className="w-full h-full"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: "none",
              }}
            />
            {/* Add a topbar inside the iframe */}
            <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white p-2 text-center">
              Chatbot not working as intended?{" "}
              <a href="#" className="underline">
                Share feedback
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ChatbotIntegration;
