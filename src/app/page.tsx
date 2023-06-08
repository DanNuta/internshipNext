import { Metadata } from "next";

import { getBlogs } from "@/api";
import { BlogProps } from "@/types";
import { AllBlogs, Main, BannerSX } from "@/components";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Meta Blog",
};

const HomePage = async () => {
  const allBlogs: Promise<BlogProps[]> = getBlogs(`/posts`);
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Main promise={allBlogs} />

      <div className="max-w-7xl mx-auto w-[95%] ">
        <h1 className="font-bold text-[24px] text-clr-primary mb-8 dark:text-card">
          Latest Posts
        </h1>

        {/* @ts-expect-error Server Component */}
        <AllBlogs promise={allBlogs} />
      </div>

      <BannerSX />
    </div>
  );
};

export default HomePage;
