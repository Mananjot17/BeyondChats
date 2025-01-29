"use server";

export async function fetchMetaData(url) {
  try {
    const response = await fetch(`https://api.example.com/meta?url=${url}`);
    if (!response.ok) throw new Error("Failed to fetch metadata");
    return await response.json();
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
}
