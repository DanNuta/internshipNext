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
    <form action={onSubmit}>
      <h1>{title}</h1>
      {children}
    </form>
  );
};
