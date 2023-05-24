import React, { Suspense } from "react";

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
          return (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Card key={item.id} {...item} />
            </Suspense>
          );
        })}
    </div>
  );
};

export default BlogPage;
