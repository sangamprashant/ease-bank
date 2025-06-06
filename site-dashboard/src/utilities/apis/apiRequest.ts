import { ENV } from "./../../keys";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

function buildQueryParams(params?: Record<string, string | number>): string {
  if (!params) return "";
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) =>
    query.append(key, String(value))
  );
  return `?${query.toString()}`;
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers = {}, params } = options;

  const url = `${ENV.serverApi}${endpoint}${buildQueryParams(params)}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body && method !== "GET") {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, fetchOptions);

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong");
    throw error;
  }

  return data;
}

// lib/handleApiError.ts
export const errorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "An unknown error occurred";
};
