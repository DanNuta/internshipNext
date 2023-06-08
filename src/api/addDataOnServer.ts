import { FormProps } from "@/types";
import { axiosInstance } from "./axios.instance";

export const addDataOnServer = {
  contactMail: async (url: string, data: FormProps) => {
    try {
      const send = await axiosInstance.post(url, data);
      if (send.status) {
        const data = await send.data;
        return data;
      } else {
        return Promise.reject(send);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
