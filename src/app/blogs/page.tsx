import React, { Suspense } from "react";
import type { Metadata } from "next";

import { useFetchBlogs } from "@/hooks";
import { AllBlogs, Search } from "@/components";
import { BlogProps } from "@/types";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogPage = () => {
  const allBlogs: Promise<BlogProps[]> = useFetchBlogs(
    `http://localhost:8000/posts`
  );

  return (
    <div>
      <h1>blogs</h1>

      <Search />

      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Server Component */}
        <AllBlogs promise={allBlogs} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
