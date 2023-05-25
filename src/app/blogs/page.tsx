import React, { Suspense } from "react";
import type { Metadata } from "next";

import { useFetchBlogs } from "@/hooks";
import { AllBlogs } from "@/components";
import { BlogProps } from "@/types";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogPage = async () => {
  const allBlogs: Promise<BlogProps[]> = useFetchBlogs(
    `http://localhost:8000/posts`
  );

  const blogs = await allBlogs;

  return (
    <div>
      <h1>Blogs, {blogs.length}</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Server Component */}
        <AllBlogs promise={allBlogs} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
