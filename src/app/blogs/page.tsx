import { Suspense } from "react";
import type { Metadata } from "next";

import { blogs as backBlogs } from "@/api";
import { AllBlogs } from "@/components";
import { BlogProps } from "@/types";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogPage = async () => {
  const allBlogs = backBlogs.list(`/posts`);

  const blogs = await allBlogs;

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="max-w-7xl mx-auto w-[95%] ">
          <h1 className="text-[32px] text-clr-primary font-bold mt-10 mb-8 dark:text-card">
            Blogs, {blogs.length}
          </h1>

          {/* @ts-expect-error Server Component */}
          <AllBlogs promise={allBlogs} />
        </div>
      </Suspense>
    </>
  );
};

export default BlogPage;
