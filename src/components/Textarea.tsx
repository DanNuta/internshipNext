import React, { TextareaHTMLAttributes } from "react";

export const Textarea = ({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className="border-2 border-slate-900" {...props} />;
};
