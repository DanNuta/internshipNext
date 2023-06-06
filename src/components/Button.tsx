import React, { ButtonHTMLAttributes } from "react";

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="bg-btn-color w-full text-white py-4 rounded-[10px] text-base font-semibold"
    >
      {props.children}
    </button>
  );
};
