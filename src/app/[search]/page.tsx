import { Metadata } from "next";
import { Suspense } from "react";

import { blogs } from "@/api";
import { AllBlogs } from "@/components";

import LoadingPage from "../loading";

interface ParamsProps {
  params: {
    search: string;
  };
}

export async function generateMetadata({
  params: { search },
}: ParamsProps): Promise<Metadata> {
  const searchData = await blogs.list("/posts?blogs=", search);

  if (!searchData.length) {
    return {
      title: "Not found this article",
    };
  }

  const stringData = search.replaceAll("%20", " ");

  return {
    title: `${stringData}`,
  };
}

const SearchPage = async ({ params: { search } }: ParamsProps) => {
  const blogsSearch = blogs.list("/posts?blogs=", search);
  const stringData = search.replaceAll("%20", " ");

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <div className="max-w-7xl mx-auto w-[95%]">
          {/* @ts-expect-error Server Component */}
          <AllBlogs
            stringData={stringData}
            title="There were found"
            promise={blogsSearch}
          />
        </div>
      </Suspense>
    </>
  );
};

export default SearchPage;
