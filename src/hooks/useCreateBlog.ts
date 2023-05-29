import axios from "axios";

export async function useCreateBlog<T>(url: string, data: T): Promise<T> {
  try {
    const send = await axios.post(url, data);
    if (send.status) {
      const data = await send.data;
      return data as T;
    } else {
      return Promise.reject(send);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}
