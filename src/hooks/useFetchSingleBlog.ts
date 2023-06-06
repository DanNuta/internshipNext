import axios from "axios";

export async function useFetchSingleBlog<T>(id: string): Promise<T> {
  try {
    const response = await axios.get(`${process.env.NEXT_API_POSTS}/${id}`);
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
