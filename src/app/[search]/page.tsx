import React from "react";
import { Metadata } from "next";

import { useSearchParams } from "@/hooks";
import { BlogProps } from "@/types";
import { AllBlogs } from "@/components";

import { NotFoundPage } from "./NotFound";

interface ParamsProps {
  params: {
    search: string;
  };
}

export async function generateMetadata({
  params: { search },
}: ParamsProps): Promise<Metadata> {
  const searchData: BlogProps[] = await useSearchParams(search);

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
  const blogsSearch: Promise<BlogProps[]> = useSearchParams(search);
  const stringData = search.replaceAll("%20", " ");

  const dataBlog = await useSearchParams(search);

  if (!dataBlog.length) {
    return <NotFoundPage search={`${stringData}`} />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-[32px] text-clr-primary font-bold mt-10 mb-8 dark:text-[white]">
        Au fost gasite {dataBlog.length} bloguri pentru termenul{" "}
        <span className="italic">"{stringData}"</span>
      </h1>

      {/* @ts-expect-error Server Component */}
      <AllBlogs promise={blogsSearch} />
    </div>
  );
};

export default SearchPage;
