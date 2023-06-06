import axios from "axios";

export async function useCreateBlog<T>(url: string, data: T): Promise<T> {
  console.log(url);
  try {
    const send = await axios({
      method: "post",
      url,
      data,
    });
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
