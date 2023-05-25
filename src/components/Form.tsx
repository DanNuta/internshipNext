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
    <div className="flex justify-center items-center h-[85vh]">
      <form
        className="w-[380px] bg-[white] px-8 py-12 rounded-[10px]"
        onSubmit={onSubmit}
        action={action}
      >
        {title && (
          <h1 className="text-[24px] mb-4 font-bold text-clr-primary	">
            {title}
          </h1>
        )}
        {children}
      </form>
    </div>
  );
};
