import { Metadata } from "next";

import { useFetchBlogs } from "@/hooks";
import { BlogProps } from "@/types";
import { AllBlogs } from "@/components";

export const metadata: Metadata = {
  title: "Meta Blog",
};

const HomePage = async () => {
  const allBlogs: Promise<BlogProps[]> = useFetchBlogs(
    "https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts"
  );

  const blogs = (await useFetchBlogs(
    "https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts"
  )) as BlogProps[];

  const blog = blogs[0];
  return (
    <div>
      <main className="max-w-7xl w-[95%] mx-auto my-12 h-[450px] relative rounded-lg">
        <img
          className="absolute w-full h-full object-cover rounded-xl z-0 "
          src={`${blog.img}`}
        />

        <div className="text-[white] absolute bottom-10 left-10">
          <h1 className="text-[32px] font-semibold mb-6">{blog.title}</h1>
          <div className="flex items-center gap-5">
            <p className="font-medium text-[16px]">
              {blog.author.name} {blog.author.prenume}
            </p>
            <p className="font-medium text-[16px]">{blog.date}</p>
          </div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto w-[95%] ">
        <h1 className="font-bold text-[24px] text-clr-primary mb-8 dark:text-card">
          Latest Post
        </h1>

        {/* @ts-expect-error Server Component */}
        <AllBlogs promise={allBlogs} />
      </div>

      <div className=" my-40 flex items-center justify-center text-center flex-col text-card h-[450px] w-full bg-[url('https://i2-prod.mirror.co.uk/incoming/article26324741.ece/ALTERNATES/s615b/0_GettyImages-1238736128.jpg')] bg-no-repeat bg-cover bg-center ">
        <h1 className="font-bold text-[36px] mb-3">
          Richird Norton photorealistic rendering as real photos
        </h1>
        <p className="font-normal text-[16px]">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <p className="font-normal text-[16px]">08.08.2021</p>
      </div>
    </div>
  );
};

export default HomePage;
