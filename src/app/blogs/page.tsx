import React from "react";
import Link from "next/link";
import { useFetchBlogs } from "@/hooks";
import { Card } from "@/components";
import { BlogProps } from "@/types";

const BlogPage = async () => {
  const data = (await useFetchBlogs(
    `http://localhost:8000/posts`
  )) as BlogProps[];

  return (
    <div>
      <h1>blogs</h1>

      {data &&
        data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
    </div>
  );
};

export default BlogPage;
