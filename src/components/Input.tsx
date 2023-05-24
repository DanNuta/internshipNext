import React, { InputHTMLAttributes } from "react";

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="border-slate-900 border-2" />;
};
