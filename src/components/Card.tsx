import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogProps } from "@/types";
import { DeleteImage, EditImage } from "@/icons";

interface CardProps {
  data: BlogProps;
  onDelete: (id: number) => void;
}

export const Card = ({ data, onDelete }: CardProps) => {
  return (
    <div className="card">
      <div className="image-container">
        <Link className="card__link" href={`blog/${data.id}`}>
          <Image
            alt="img"
            width={200}
            height={200}
            className="image-container__image"
            src={data.linkImage}
          />
        </Link>
        <div
          onClick={(e) => e.preventDefault()}
          className="image-container__btns"
        >
          <button
            /// butontype="neutral"
            // element="img"
            //dimension="default"
            onClick={() => onDelete(data.id)}
          >
            <DeleteImage />
          </button>

          <button
          //butontype="neutral" element="img" dimension="default"
          >
            <Link href={`blog/edit`}>
              <EditImage />
            </Link>
          </button>
        </div>
      </div>

      <Link className="card__link" href={`blog/${data.id}`}>
        <div className="body">
          <div className="body__title">
            <h1 className="body__title-post">{data.title}</h1>
            <p className="body__date-post">{data.date}</p>
          </div>

          <div className="body__description">
            <p className="body__description-title">
              {data.description?.slice(0, 100)}
              {/* {lengthDescription} */}
            </p>
          </div>

          <div className="body__author">
            <p className="body__author-label">
              Author: &nbsp;
              <span className="body__author-info">
                {data.author.name} {data.author.prenume}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
