import React from "react";
import { motion } from "framer-motion";

const ChatbotTrainingStatus = ({ isTraining, trainingComplete }) => {
  return (
    <div className="p-8 lg:p-16">
      <div className="w-full p-8 bg-black/50 text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Chatbot Training Status
        </h2>

        {/* Loading Animation */}
        {isTraining && (
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-400"></div>
            <p className="ml-4 text-lg text-gray-300">
              Training in progress...
            </p>
          </motion.div>
        )}

        {/* Training Complete Message */}
        {trainingComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-lg text-green-400 font-semibold">
              ✅ Training Completed Successfully!
            </p>
            <p className="text-gray-300 mt-2">
              Your chatbot is now ready! You can now proceed to the next step.
            </p>
            <button
              onClick={() => (window.location.href = "/integration-testing")}
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Continue to Setup
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChatbotTrainingStatus;
