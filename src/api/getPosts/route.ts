import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface BlogProps {
  id: number;
  description: string;
  linkImage: string;
  author: {
    name: string;
    prenume: string;
  };
}

const url = "http://localhost:3001/posts/";

export async function GETBlogs(): Promise<BlogProps[]> {
  const data = await axios.get<BlogProps[]>(url);
  const dataFetched = data.data;

  return dataFetched;
}
