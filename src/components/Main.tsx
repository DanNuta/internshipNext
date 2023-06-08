import Image from "next/image";

import { BlogProps } from "@/types";

interface MainProps {
  promise: Promise<BlogProps[]>;
}

export const Main = async ({ promise }: MainProps) => {
  const data = await promise;
  const { author, date, img, title } = data[0];

  return (
    <main className=" max-w-7xl w-[95%] mx-auto my-12 h-[450px] relative rounded-lg">
      <Image
        className="w-full h-full object-cover rounded-xl z-0 "
        fill
        src={img}
        alt="header images"
      />

      <div className="text-[white] absolute bottom-10 left-10">
        <h1 className="text-[32px] font-semibold mb-6">{title}</h1>
        <div className="flex items-center gap-5">
          <p className="font-medium text-[16px]">
            {author.name} {author.firstName}
          </p>
          <p className="font-medium text-[16px]">{date}</p>
        </div>
      </div>
    </main>
  );
};
