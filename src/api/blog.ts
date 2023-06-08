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

  list: async (url: string, search?: string) => {
    try {
      const fullUrl = search ? url + search : url;
      const response = await axiosInstance.get<BlogProps[]>(fullUrl);

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
};
