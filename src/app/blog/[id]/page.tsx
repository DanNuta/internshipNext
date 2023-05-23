"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import axios from "axios";

import { BlogProps } from "@/types";

const BlogIdPage = ({ params }: any) => {
  const id = params.id as number;

  async function getBlog(id: number): Promise<BlogProps> {
    const blog = await axios.get(`http://localhost:3001/posts/${id}`);
    return blog.data;
  }

  const { data, isLoading } = useQuery([id], () => getBlog(id));

  return (
    <>
      {isLoading && <h1>Loading...</h1>}

      {data && (
        <div>
          <h1>{data?.title}</h1>

          <Image
            width={500}
            height={500}
            alt="imag"
            src={data.linkImage}
          ></Image>
        </div>
      )}
    </>
  );
};

export default BlogIdPage;
