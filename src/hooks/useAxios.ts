
import axios, { InternalAxiosRequestConfig } from "axios";

type IMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export const useAxios = (useAjax: boolean = false) => {
  let params: any = {
    baseURL: process.env.BASE_URL,
  };

  useAjax &&
    (params = {
      ...params,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });

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

  const requestApi = async (path: string | undefined, method: IMethod, body?: object, headers?: object) => {
    try {
      const apiData = await api.request({
        url: path,
        method: method,
        data: body,
        headers: {
          ...headers
        }
      });
      return { status: true, data: apiData.data }
    } catch (e) {
      return { status: false, data: e }
    }
  };

  return { requestApi };
};
