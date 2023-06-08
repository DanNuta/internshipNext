import { axiosInstance } from "./axios.instance";

export async function getBlogs<T>(url: string): Promise<T> {
  try {
    const response = await axiosInstance.get(url);

    if (response.status) {
      const data = await response.data;
      return data as T;
    } else {
      return Promise.reject(response);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}
