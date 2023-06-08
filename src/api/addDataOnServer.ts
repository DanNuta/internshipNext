import { axiosInstance } from "./axios.instance";

export async function addDataOnServer<T>(url: string, data: T): Promise<T> {
  try {
    const send = await axiosInstance.post(url, data);
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
