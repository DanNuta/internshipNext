import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogProps } from "@/types";

export const Card = ({
  description,
  _id,
  date,
  img,
  title,
  author,
}: BlogProps) => {
  const lengthDescription = description.length > 100 ? "..." : "";
  return (
    <div className=" group bg-[#fff]  rounded-lg  drop-shadow-md dark:bg-footer-dark ">
      <div className="h-[300px]  transition duration-300 ease-in-out overflow-hidden relative rounded-t-lg ">
        <Link className="" href={`blogs/${_id}`}>
          <Image
            alt="img"
            width={200}
            height={300}
            className="w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
            src={img}
            style={{ height: "100%" }}
          />
        </Link>
      </div>

      <Link className="" href={`blogs/${_id}`}>
        <div className=" flex flex-col justify-between p-6 h-[200px] sm:p-3">
          <div className="">
            <h1 className="text-clr-primary text-fs-22 mb-2 dark:text-[#fff]">
              {title}
            </h1>
            <p className="text-clr-secondary mb-2">{date}</p>
          </div>

          <div className="">
            <p className="text-xs dark:text-[#fff]">
              {description?.slice(0, 85)}
              {lengthDescription}
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold dark:text-[#fff]">Author: &nbsp;</span>
              <span className="text-clr-secondary mb-2">
                {author.prenume} {author.name}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
