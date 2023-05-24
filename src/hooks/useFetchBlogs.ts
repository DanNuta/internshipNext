import axios from "axios";

export async function useFetchBlogs<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);

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
