import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
}

export const Textarea = ({ title, ...props }: TextareaProps) => {
  return (
    <div className="w-full mb-6">
      <label
        className="block mb-[7px] text-[16px] text-clr-secondary font-semibold"
        htmlFor={props.id}
      >
        {title}
      </label>
      <textarea
        className="w-full rounded-lg border-clr-border border-[1px] outline-none focus:border-clr-secondary h-[40px] pl-4 | dark:bg-[#242535] dark:border-none dark:text-card"
        {...props}
      />
    </div>
  );
};
