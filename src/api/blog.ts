import { BlogProps } from "@/types";
import { axiosInstance } from "./axios.instance";

export const blogs = {
  one: async (id: string) => {
    try {
      const response = await axiosInstance.get<BlogProps>(`/posts/${id}`);
      if (response.status === 200) {
        const data = response.data;
        return data;
      } else {
        return Promise.reject(response);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },

  list: async (url: string) => {
    try {
      const response = await axiosInstance.get<BlogProps[]>(url);

      if (response.status === 200) {
        const data = response.data;
        return data;
      } else {
        return Promise.reject(response);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },

  searchBlogs: async (search: string) => {
    const url = `/posts?blogs=`;
    try {
      const searchBlogs = await axiosInstance.get<BlogProps[]>(url + search);

      if (searchBlogs.status) {
        const data = searchBlogs.data;
        return data;
      } else {
        return Promise.reject(searchBlogs);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
