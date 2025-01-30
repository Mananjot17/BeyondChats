"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import MetaData from "./MetaData";
import ScrapedPages from "./ScrapedPages";
import ChatbotTrainingStatus from "./ChatbotTrainingStatus";

const CompanyDetails = () => {
  const [metaData, setMetaData] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingComplete, setTrainingComplete] = useState(false);
  const [websiteURL, setWebsiteURL] = useState("");

  const websiteData = [
    {
      id: 1,
      url: "https://example.com",
      page: "Home",
      status: "Scraped",
      last_scraped: "2025-01-28T14:30:00Z",
      data_chunks: 5,
      scraped_data: [
        {
          chunk_id: 101,
          text: "Welcome to Example.com, your go-to platform for modern solutions.",
          source: "Header Section",
          timestamp: "2025-01-28T14:30:05Z",
        },
        {
          chunk_id: 102,
          text: "Our platform offers innovative features to enhance your workflow.",
          source: "Main Content",
          timestamp: "2025-01-28T14:30:10Z",
        },
        {
          chunk_id: 103,
          text: "Sign up today and experience the difference with our AI-powered tools.",
          source: "CTA Section",
          timestamp: "2025-01-28T14:30:15Z",
        },
        {
          chunk_id: 104,
          text: "Trusted by thousands of users worldwide, we bring you the best in tech.",
          source: "Testimonials",
          timestamp: "2025-01-28T14:30:20Z",
        },
        {
          chunk_id: 105,
          text: "Follow us on social media for updates, news, and exclusive offers.",
          source: "Footer",
          timestamp: "2025-01-28T14:30:25Z",
        },
      ],
    },
    {
      id: 2,
      url: "https://example.com/about",
      page: "About",
      status: "Scraped",
      last_scraped: "2025-01-28T14:45:00Z",
      data_chunks: 8,
      scraped_data: [
        {
          chunk_id: 201,
          text: "About Example.com: Founded in 2020, our mission is to simplify workflows.",
          source: "Header Section",
          timestamp: "2025-01-28T14:45:05Z",
        },
        {
          chunk_id: 202,
          text: "Our team consists of industry experts dedicated to bringing innovation to businesses worldwide.",
          source: "Team Section",
          timestamp: "2025-01-28T14:45:10Z",
        },
        {
          chunk_id: 203,
          text: "We believe in technology that empowers individuals and businesses alike.",
          source: "Mission Statement",
          timestamp: "2025-01-28T14:45:15Z",
        },
        {
          chunk_id: 204,
          text: "Our headquarters are located in San Francisco, with regional offices worldwide.",
          source: "Location Section",
          timestamp: "2025-01-28T14:45:20Z",
        },
        {
          chunk_id: 205,
          text: "Join us on our journey to redefine the digital experience.",
          source: "Footer Section",
          timestamp: "2025-01-28T14:45:25Z",
        },
      ],
    },
    {
      id: 3,
      url: "https://example.com/blog",
      page: "Blog",
      status: "In Progress",
      last_scraped: null,
      data_chunks: 0,
    },
    {
      id: 4,
      url: "https://example.com/contact",
      page: "Contact",
      status: "Pending",
      last_scraped: null,
      data_chunks: 0,
    },
    {
      id: 5,
      url: "https://example.com/products",
      page: "Products",
      status: "Scraped",
      last_scraped: "2025-01-28T15:10:00Z",
      data_chunks: 12,
      scraped_data: [
        {
          chunk_id: 501,
          text: "Discover our product line: AI-powered solutions tailored for businesses.",
          source: "Header Section",
          timestamp: "2025-01-28T15:10:05Z",
        },
        {
          chunk_id: 502,
          text: "Our flagship tool, AI Automate, enhances productivity with seamless automation.",
          source: "Product Highlights",
          timestamp: "2025-01-28T15:10:10Z",
        },
        {
          chunk_id: 503,
          text: "Sign up today to access exclusive early-bird discounts!",
          source: "CTA Section",
          timestamp: "2025-01-28T15:10:15Z",
        },
        {
          chunk_id: 504,
          text: "See what our customers are saying about our cutting-edge tools.",
          source: "Testimonials",
          timestamp: "2025-01-28T15:10:20Z",
        },
      ],
    },
  ];

  const fetchMetaData = async ({ websiteURL }) => {
    if (!websiteURL) return;
    setWebsiteURL(websiteURL);
    try {
      const response = await fetch(`/api/fetchMeta?url=${websiteURL}`);
      const data = await response.json();
      setMetaData(data);
      setIsTraining(true);

      // Simulate chatbot training process (e.g., API call to train model)
      setTimeout(() => {
        setTrainingComplete(true);
        setIsTraining(false);
      }, 5000); // Simulate 5 seconds of training
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col lg:flex-row ">
        {/* Left Section: Heading & Description */}
        <div className="lg:w-1/2 flex justify-center items-center p-8 lg:p-16 text-white">
          <div className="p-8 rounded-lg bg-black bg-opacity-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
                Get Your Chatbot Ready to Rock!
              </h1>
              <p className="text-lg lg:text-xl mb-6 max-w-lg text-center lg:text-left">
                Enter your website details and let us do the magic! We will
                fetch your site data, analyze it, and train your AI-powered
                chatbot.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 flex flex-col p-6 lg:p-16 justify-center items-center">
          <CompanyForm onSubmit={fetchMetaData} />
        </div>
      </div>

      {/* Metadata Display */}
      {metaData && (
        <>
          <MetaData metaData={metaData} />
          <ScrapedPages websiteData={websiteData} />
          <ChatbotTrainingStatus
            isTraining={isTraining}
            trainingComplete={trainingComplete}
            websiteURL={websiteURL}
          />
        </>
      )}
    </div>
  );
};

export default CompanyDetails;
