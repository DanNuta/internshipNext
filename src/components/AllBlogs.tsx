import { BlogProps } from "@/types";
import { Card } from "@/components";

interface AllBlogsProps {
  promise: Promise<BlogProps[]>;
}

export const AllBlogs = async ({ promise }: AllBlogsProps) => {
  const blogs = await promise;

  return (
    <div className="grid grid-cols-1 gap-5  sm:grid-cols-2 md:grid-cols-3 md:mb-20">
      {blogs.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};
