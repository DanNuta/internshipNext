import axios from "axios";
import { BlogProps } from "@/types";

export async function useSearchParams(search: string): Promise<BlogProps[]> {
  const url = "http://localhost:8000/posts?q=";

  try {
    const searchBlogs = await axios.get(url + search);

    if (searchBlogs.status) {
      const data = (await searchBlogs.data) as BlogProps[];
      return data;
    } else {
      return Promise.reject(searchBlogs);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}
