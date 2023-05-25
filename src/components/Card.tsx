import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogProps } from "@/types";

export const Card = ({ ...props }: BlogProps) => {
  const lengthDescription = props.description.length > 100 ? "..." : "";
  return (
    <div className=" group bg-card  rounded-lg  drop-shadow-md ">
      <div className="h-[300px]  transition duration-300 ease-in-out overflow-hidden relative rounded-t-lg ">
        <Link className="" href={`blogs/${props.id}`}>
          <Image
            alt="img"
            width={200}
            height={300}
            className="w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
            src={props.linkImage}
            style={{ height: "100%" }}
          />
        </Link>
      </div>

      <Link className="" href={`blogs/${props.id}`}>
        <div className=" flex flex-col justify-between p-6 h-[200px]">
          <div className="">
            <h1 className="text-clr-primary text-fs-22 mb-2">{props.title}</h1>
            <p className="text-clr-secondary mb-2">{props.date}</p>
          </div>

          <div className="">
            <p className="">
              {props.description?.slice(0, 100)}
              {lengthDescription}
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold">Author: &nbsp;</span>
              <span className="text-clr-secondary mb-2">
                {props.author.name} {props.author.prenume}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
