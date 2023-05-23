import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps) => {
  return <input {...props} className="border-slate-900 border-2" />;
};
