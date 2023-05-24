import axios from "axios";

import { BlogProps } from "@/types";

export async function useCreateBlog<T>(data: BlogProps): Promise<T> {
  try {
    const send = await axios.post("http://localhost:8000/posts", data);
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
