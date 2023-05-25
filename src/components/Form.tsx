import React, { PropsWithChildren } from "react";

interface FormProps {
  action?: (data: FormData) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
}

export const Form: React.FC<PropsWithChildren<FormProps>> = ({
  action,
  onSubmit,
  children,
  title,
}) => {
  return (
    <div className="flex justify-center items-center h-[100%]">
      <form
        className="w-[380px] bg-clr-primary px-8 py-12 rounded-[10px]"
        onSubmit={onSubmit}
        action={action}
      >
        {title && <h1>{title}</h1>}
        {children}
      </form>
    </div>
  );
};
