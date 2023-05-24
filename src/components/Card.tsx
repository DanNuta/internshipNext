import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogProps } from "@/types";

export const Card = ({ ...props }: BlogProps) => {
  return (
    <div className="card">
      <div className="image-container">
        <Link className="card__link" href={`blogs/${props.id}`}>
          <Image
            alt="img"
            width={200}
            height={200}
            className="image-container__image"
            src={props.linkImage}
          />
        </Link>
        <div className="image-container__btns"></div>
      </div>

      <Link className="card__link" href={`blog/${props.id}`}>
        <div className="body">
          <div className="body__title">
            <h1 className="body__title-post">{props.title}</h1>
            <p className="body__date-post">{props.date}</p>
          </div>

          <div className="body__description">
            <p className="body__description-title">
              {props.description?.slice(0, 100)}
              {/* {lengthDescription} */}
            </p>
          </div>

          <div className="body__author">
            <p className="body__author-label">
              Author: &nbsp;
              <span className="body__author-info">
                {props.author.name} {props.author.prenume}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
