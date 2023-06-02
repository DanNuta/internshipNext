import axios from "axios";

export async function useCreateBlog<T>(url: string, data: T): Promise<T> {
  try {
    const send = await axios({
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST",
      },
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
