import { Suspense } from "react";
import type { Metadata } from "next";

import { useFetchBlogs } from "@/hooks";
import { AllBlogs } from "@/components";
import { BlogProps } from "@/types";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogPage = async () => {
  const allBlogs: Promise<BlogProps[]> = useFetchBlogs(
    `https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts`
  );

  const blogs = await allBlogs;

  return (
    <div className="max-w-7xl mx-auto w-[95%] ">
      <h1 className="text-[32px] text-clr-primary font-bold mt-10 mb-8 dark:text-card">
        Blogs, {blogs.length}
      </h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-expect-error Server Component */}
        <AllBlogs promise={allBlogs} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
