"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { useFetchSingleBlog } from "@/hooks";
import { BlogProps } from "@/types";

const BlogIdPage = async ({ params }: any) => {
  const id = params.id as number;
  const blog = (await useFetchSingleBlog(id)) as BlogProps;

  return (
    <>
      <h1>{id}</h1>
      {blog && (
        <div>
          <h1>{blog?.title}</h1>

          <Image
            width={500}
            height={500}
            alt="imag"
            src={blog.linkImage}
          ></Image>
        </div>
      )}
    </>
  );
};

export default BlogIdPage;
