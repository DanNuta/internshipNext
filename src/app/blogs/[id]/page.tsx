import React from "react";

import Image from "next/image";

import { useFetchSingleBlog } from "@/hooks";
import { BlogProps } from "@/types";

type Params = {
  params: {
    id: string;
  };
};

const BlogIdPage = async ({ params: { id } }: Params) => {
  const paramsId = id;
  const blog = (await useFetchSingleBlog(paramsId)) as BlogProps;

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
