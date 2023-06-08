import { BlogProps } from "@/types";
import { Card, NotFoundPage } from "@/components";

interface AllBlogsProps {
  promise: Promise<BlogProps[]>;
  title?: React.ReactNode;
  stringData?: string;
}

export const AllBlogs = async ({
  promise,
  title,
  stringData,
}: AllBlogsProps) => {
  const blogs = await promise;

  if (!blogs.length) {
    return <NotFoundPage search={`${stringData}`} />;
  }

  return (
    <div>
      {title && (
        <h1 className="text-[22px] sm:text-[36px] text-clr-primary font-bold mt-10 mb-8 dark:text-[white]">
          {title} {blogs.length} {blogs.length > 1 ? "articles" : "article"}
        </h1>
      )}

      <div className="grid grid-cols-1 gap-5  sm:grid-cols-2 md:grid-cols-3 md:mb-20">
        {blogs.length === 0 ? (
          <h1 className="text-[32px] text-clr-primary font-bold mt-10 mb-8 dark:text-card">
            There are no blogs yet
          </h1>
        ) : (
          blogs.map((item) => {
            return <Card key={item._id} {...item} />;
          })
        )}
      </div>
    </div>
  );
};
