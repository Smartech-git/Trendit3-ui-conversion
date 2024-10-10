"use server";

const baseUrl = process.env.SERVER_URL;

export async function apiRequest(endPoint: string, method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET", data: any = null, customHeaders: HeadersInit = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...customHeaders,
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (data && method !== "GET") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${baseUrl}/${endPoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      return errorData
    }
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error: any) {
    return { error: error.message || "An unknown error occurred" };
  }
}
