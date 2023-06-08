import { Metadata } from "next";
import { Suspense } from "react";

import { blogs } from "@/api";
import { AllBlogs, Main, BannerSX } from "@/components";

import LoadingPage from "./loading";

export const metadata: Metadata = {
  title: "Meta Blog",
};

const HomePage = async () => {
  const allBlogs = blogs.list(`/posts`);
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
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
      </Suspense>
    </>
  );
};

export default HomePage;
