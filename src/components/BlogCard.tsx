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
  return (
    <Link href={`blogs/${_id}`}>
      <div className="group bg-[#fff]  rounded-lg  drop-shadow-md dark:bg-footer-dark ">
        <div className="h-[300px]  transition duration-300 ease-in-out overflow-hidden relative rounded-t-lg ">
          <Image
            alt="img"
            fill
            className="object-cover transition duration-300 ease-in-out group-hover:scale-110"
            src={img}
          />
        </div>

        <div className="flex flex-col justify-between p-6 h-[200px] sm:p-3">
          <div>
            <h1 className="text-clr-primary text-fs-22 mb-2 dark:text-[#fff]">
              {title}
            </h1>
            <p className="text-clr-secondary mb-2">{date}</p>
          </div>

          <p className="text-xs dark:text-[#fff] whitespace-pre-line line-clamp-3">
            {description}
            {/* {description.length > 85 ? "..." : ""} */}
          </p>

          <p>
            <span className="font-bold dark:text-[#fff]">Author: &nbsp;</span>
            <span className="text-clr-secondary mb-2">
              {author.firstName} {author.name}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
