import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { useFetchBlogs, useFetchSingleBlog } from "@/hooks";
import { BlogProps } from "@/types";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const blog = (await useFetchSingleBlog(id)) as BlogProps;

  if (!blog.title) {
    return {
      title: `${id}, this user doen't exist`,
    };
  }
  return {
    title: `${blog.title}`,
  };
}

const BlogIdPage = async ({ params: { id } }: Params) => {
  const blog = (await useFetchSingleBlog(id)) as BlogProps;

  if (!blog.title) return notFound();

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
