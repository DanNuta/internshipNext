import React, { ButtonHTMLAttributes } from "react";

interface BtnProps {
  title: string;
}

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="bg-btn-color w-full text-white py-4 rounded-[10px] text-base font-semibold text-[white]">
      {props.title}
    </button>
  );
};
