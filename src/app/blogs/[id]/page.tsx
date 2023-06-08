import Image from "next/image";
import { Metadata } from "next";

import { getBlog } from "@/api";
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
  const { title } = (await getBlog(id)) as BlogProps;

  if (!title || id === undefined) {
    return {
      title: `${id}, this user doesn't exist`,
    };
  }
  return {
    title: `${title}`,
  };
}

const BlogIdPage = async ({ params: { id } }: Params) => {
  const { _id, author, date, description, img, title } = (await getBlog(
    id
  )) as BlogProps;

  if (!title || id === undefined) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-[800px] mx-auto mt-8 mb-20 w-[95%]">
      {_id && (
        <div>
          <h1 className="text-[34px] text-clr-primary font-semibold mb-5 dark:text-card	">
            {title}
          </h1>

          <div className="flex items-center gap-6  mb-8">
            <p className="text-[14px] text-clr-secondary">
              {author.name} {author.firstName}
            </p>
            <p className="text-[14px] text-clr-secondary">{date}</p>
          </div>

          <div className="relative h-[200px] mb-3 sm:h-[400px]">
            <Image
              fill
              alt="imag"
              src={img}
              className="w-full h-full rounded-lg mb-8 object-cover"
            />
          </div>

          <p className="text-[20px] font-normal text-clr-primary dark:text-card">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogIdPage;
