import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export const Input = ({ title, ...props }: InputProps) => {
  return (
    <div className="mb-6">
      <label
        className="block mb-[7px] text-xs text-clr-secondary font-semibold"
        htmlFor={props.id}
      >
        {title}
      </label>
      <input
        {...props}
        className=" w-full rounded-lg border-clr-border border-[1px] outline-none focus:border-clr-secondary h-[40px] pl-4"
      />
    </div>
  );
};
