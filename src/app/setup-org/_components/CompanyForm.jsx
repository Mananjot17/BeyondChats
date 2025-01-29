import React, { useState } from "react";

const CompanyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteURL: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formData); // Calls the fetch function in the parent component
    setLoading(false);
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md w-full p-6 rounded-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold">Website URL</label>
          <input
            type="url"
            name="websiteURL"
            value={formData.websiteURL}
            onChange={handleChange}
            placeholder="https://example.com"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Metadata"}
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
