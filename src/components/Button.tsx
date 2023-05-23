import React, { ButtonHTMLAttributes } from "react";

interface BtnProps {
  title: string;
}

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button>{props.title}</button>;
};
