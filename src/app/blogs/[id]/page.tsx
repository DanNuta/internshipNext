import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { useFetchSingleBlog } from "@/hooks";
import { BlogProps } from "@/types";
import { NotFoundPage } from "@/components";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const blog = (await useFetchSingleBlog(id)) as BlogProps;

  if (!blog.title) {
    return {
      title: `${id}, this user doesn't exist`,
    };
  }
  return {
    title: `${blog.title}`,
  };
}

const BlogIdPage = async ({ params: { id } }: Params) => {
  const blog = (await useFetchSingleBlog(id)) as BlogProps;

  if (!blog.title || id === undefined) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-[800px] mx-auto mt-8 mb-20 w-[95%]">
      {blog && (
        <div>
          <h1 className="text-[34px] text-clr-primary font-semibold mb-5 dark:text-card	">
            {blog.title}
          </h1>

          <div className="flex items-center gap-6  mb-8">
            <p className="text-[14px] text-clr-secondary">
              {blog.author.name} {blog.author.prenume}
            </p>
            <p className="text-[14px] text-clr-secondary">{blog.date}</p>
          </div>

          <div className="h-[200px] mb-3 sm:h-[400px]">
            <Image
              width={500}
              height={500}
              alt="imag"
              src={blog.img}
              className="w-full rounded-lg mb-8 object-cover h-full"
            />
          </div>

          <div>
            <p className="text-[20px] font-normal text-clr-primary dark:text-card">
              {blog.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogIdPage;
