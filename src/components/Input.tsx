"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  error?: string;
}

export const Input = ({ title, error, ...props }: InputProps) => {
  return (
    <div className="mb-6 relative">
      <label
        className="block mb-[7px] text-[16px] text-clr-secondary font-semibold"
        htmlFor={props.id}
      >
        {title}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border-clr-border border-[1px] bg-[white] outline-none focus:border-clr-secondary h-[40px] pl-4 | dark:bg-[#242535] dark:outline-none dark:border-none dark:text-[white]"
      />

      {error && <p className="absolute text-red-500">{error}</p>}
    </div>
  );
};
