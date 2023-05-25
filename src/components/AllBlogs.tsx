import { BlogProps } from "@/types";
import { Card } from "@/components";

interface AllBlogsProps {
  promise: Promise<BlogProps[]>;
}

export const AllBlogs = async ({ promise }: AllBlogsProps) => {
  const blogs = await promise;

  return (
    <div className="grid grid-cols-4 gap-5">
      {blogs.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};
