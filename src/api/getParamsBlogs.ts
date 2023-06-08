import { axiosInstance } from "./axios.instance";

import { BlogProps } from "@/types";

export async function getParamsBlogs(search: string): Promise<BlogProps[]> {
  const url = `/posts?blogs=`;

  try {
    const searchBlogs = await axiosInstance.get(url + search);

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
