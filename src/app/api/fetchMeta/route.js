import { JSDOM } from "jsdom";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Fetch the website HTML
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }, // Prevent blocking
    });

    if (!response.ok) {
      throw new Error("Failed to fetch the website");
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract metadata
    const title = document.querySelector("title")?.textContent || "No Title";
    const description =
      document.querySelector("meta[name='description']")?.content ||
      "No Description";
    const favicon =
      document.querySelector("link[rel='icon']")?.href ||
      document.querySelector("link[rel='shortcut icon']")?.href ||
      "";

    return new Response(JSON.stringify({ title, description, favicon }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch metadata" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
