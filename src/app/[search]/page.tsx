import React from "react";
import { Metadata } from "next";

import { useSearchParams } from "@/hooks";
import { BlogProps } from "@/types";
import { AllBlogs } from "@/components";

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

  if (!dataBlog.length)
    return <h1>{`${search}`} - Nu exista asa tip de blog</h1>;
  return (
    <div>
      <h1>
        Au fost gasite {dataBlog.length} bloguri pentru termenul {stringData}
      </h1>

      {/* @ts-expect-error Server Component */}
      <AllBlogs promise={blogsSearch} />
    </div>
  );
};

export default SearchPage;
