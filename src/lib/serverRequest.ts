"use server";
import { getSession } from "@/cookies";
import axios, { InternalAxiosRequestConfig, Method } from "axios";

const baseUrl = process.env.BASE_URL;

export async function apiRequest(endPoint: string, method: Method = "GET", data: any = null, customHeaders: HeadersInit = {}) {
  const session = await getSession();
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user?.access_token}`,
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
      return errorData;
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

export const apiRequestAxios = async (path: string | undefined, method: Method, body?: object, headers?: object) => {
  const params: any = {
    baseURL: baseUrl,
  };

  const api = axios.create(params);

  const errorHandler = (error: any) => {
    const statusCode = error.response?.status;

    if (statusCode && statusCode !== 401) {
      // console.error(error)
    } else {
      // clear customer login
    }
    return Promise.reject(error);
  };

  api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error);
  });

  api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // config.headers['X-Auth-Token'] = process.env.NEXT_PUBLIC_ACCESS_TOKEN
      return config;
    },
    (error) => {
      return errorHandler(error);
    }
  );

  try {
    const apiData = await api.request({
      url: path,
      method: method,
      data: body,
      headers: {
        ...headers,
      },
    });
    return apiData.data;
  } catch (error: any) {
    return { error: error?.message || "An unknown error occurred" };
  }
};
