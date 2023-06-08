import { Suspense } from "react";
import type { Metadata } from "next";

import { blogs as backBlogs } from "@/api";
import { AllBlogs } from "@/components";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogPage = async () => {
  const allBlogs = backBlogs.list(`/posts`);

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="max-w-7xl mx-auto w-[95%] ">
          {/* @ts-expect-error Server Component */}
          <AllBlogs title="Blogs, " promise={allBlogs} />
        </div>
      </Suspense>
    </>
  );
};

export default BlogPage;
