import React from "react";

const MetaData = ({ metaData }) => {
  return (
    <div className="p-8 lg:p-16">
      <div className="w-full p-8 bg-black/50 text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Website Metadata, First step towards automation!!
        </h2>
        <p>
          <strong>Title:</strong> {metaData.title || "N/A"}
        </p>
        <p>
          <strong>Description:</strong> {metaData.description || "N/A"}
        </p>
        {metaData.favicon && (
          <div className="mt-4 flex items-center gap-4">
            <span className="text-lg">Favicon:</span>
            <img src={metaData.favicon} alt="Favicon" className="w-10 h-10" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MetaData;
