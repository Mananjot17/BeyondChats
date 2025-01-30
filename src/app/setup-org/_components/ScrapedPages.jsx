import React, { useState } from "react";

const ScrapedPages = ({ websiteData }) => {
  const [expandedPage, setExpandedPage] = useState(null);

  const toggleExpand = (id) => {
    setExpandedPage(expandedPage === id ? null : id);
  };

  return (
    <div className="px-8 lg:px-16 mt-8">
      <div className="p-5 bg-black/50 rounded-lg">
        <h1 className="text-4xl text-white text-center my-6">
          Scraped Pages, Lets train your chat buddy!!
        </h1>
        <ul className="text-white space-y-4">
          {websiteData.map((webpage) => (
            <li key={webpage.id} className="cursor-pointer">
              <div className="p-4 bg-gray-800 rounded-md">
                <h2 className="text-lg font-semibold">{webpage.page}</h2>
                <p className="text-sm text-gray-300">URL: {webpage.url}</p>
                <p>
                  Status: <span className="font-medium">{webpage.status}</span>
                </p>
                <p>Last Scraped: {webpage.last_scraped || "Not Yet Scraped"}</p>
                <p>Data Chunks: {webpage.data_chunks}</p>

                {webpage.scraped_data && webpage.scraped_data.length > 0 && (
                  <button
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    onClick={() => toggleExpand(webpage.id)}
                  >
                    {expandedPage === webpage.id ? "Hide Data" : "View Data"}
                  </button>
                )}

                {expandedPage === webpage.id && webpage.scraped_data && (
                  <div className="mt-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">
                      Scraped Data:
                    </h3>
                    <ul className="space-y-2">
                      {webpage.scraped_data.map((chunk) => (
                        <li
                          key={chunk.chunk_id}
                          className="p-3 bg-gray-700 rounded-md"
                        >
                          <p className="text-sm">
                            <strong>Source:</strong> {chunk.source}
                          </p>
                          <p className="text-gray-300">{chunk.text}</p>
                          <p className="text-xs text-gray-400">
                            Timestamp:{" "}
                            {new Date(chunk.timestamp).toLocaleString()}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrapedPages;
