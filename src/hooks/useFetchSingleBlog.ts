import axios from "axios";

export async function useFetchSingleBlog<T>(id: string): Promise<T> {
  try {
    const response = await axios.get(
      `https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts/${id}`
    );
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
