import { Metadata } from "next";

import { getParamsBlogs } from "@/api";
import { BlogProps } from "@/types";
import { AllBlogs, NotFoundPage } from "@/components";

interface ParamsProps {
  params: {
    search: string;
  };
}

export async function generateMetadata({
  params: { search },
}: ParamsProps): Promise<Metadata> {
  const searchData: BlogProps[] = await getParamsBlogs(search);

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
  const blogsSearch: Promise<BlogProps[]> = getParamsBlogs(search);
  const stringData = search.replaceAll("%20", " ");

  const dataBlog = await getParamsBlogs(search);

  if (!dataBlog.length) {
    return <NotFoundPage search={`${stringData}`} />;
  }

  return (
    <div className="max-w-7xl mx-auto w-[95%]">
      <h1 className="text-[22px] sm:text-[36px] text-clr-primary font-bold mt-10 mb-8 dark:text-[white]">
        They were found {dataBlog.length} blogs for the term{" "}
        <span className="italic">"{stringData}"</span>
      </h1>

      {/* @ts-expect-error Server Component */}
      <AllBlogs promise={blogsSearch} />
    </div>
  );
};

export default SearchPage;
