import React, { PropsWithChildren } from "react";

interface FormProps {
  onSubmit: (data: FormData) => void;
  title?: string;
}

export const Form: React.FC<PropsWithChildren<FormProps>> = ({
  onSubmit,
  children,
  title,
}) => {
  return (
    <div className="flex justify-center items-center h-[100%]">
      <form
        className="w-[380px] bg-clr-primary px-8 py-12 rounded-[10px]"
        action={onSubmit}
      >
        <h1>{title}</h1>
        {children}
      </form>
    </div>
  );
};
