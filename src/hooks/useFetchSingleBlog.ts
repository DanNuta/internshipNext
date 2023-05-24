import axios from "axios";

export async function useFetchSingleBlog<T>(id: number): Promise<T> {
  try {
    const response = await axios.get(`http://localhost:8000/posts/${id}`);
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
