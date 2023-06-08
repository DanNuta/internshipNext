"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Input, Form, Textarea } from "@/components";
import { error } from "@/messages";
import { validate, defaultData } from "@/utils";
import { FormProps } from "@/types";

interface FormPropsClient {
  onSendData: (data: FormProps) => Promise<FormProps>;
}

export const FormClient = ({ onSendData }: FormPropsClient) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const [form, setForm] = useState<FormProps>(defaultData);
  const [errorFrom, setErrorForm] = useState(defaultData);

  const [serverError, setServerError] = useState("");

  function handlerInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errorInput = { ...defaultData };

    const testTel = validate.tel.test(form.tel);
    const testEmail = validate.email.test(form.email);

    errorInput.firstName = form.firstName ? "" : `${error.firstName}`;
    errorInput.lastName = form.lastName ? "" : `${error.lastName}`;
    errorInput.email = testEmail ? "" : `${error.email}`;
    errorInput.tel = testTel ? "" : `${error.tel}`;

    setErrorForm(errorInput);

    const isAnyError =
      !testEmail || !form.firstName || !form.lastName || !testTel;

    if (isAnyError) return;

    setIsPending(true);

    try {
      await onSendData(form);
      router.push("/");
    } catch (e) {
      if (typeof e === "object" && e !== null) {
        const error = e.toString();
        setServerError(error);
      }
      setForm((prev) => {
        return (prev = defaultData);
      });
      setIsPending(false);
    }
    setIsPending(false);
  }

  return (
    <>
      {serverError && (
        <h1 className="text-center text-red-600 text-[20px] mt-2">
          {serverError}
        </h1>
      )}
      <Form title="Contact Us" onSubmit={onSubmit}>
        <Input
          title="First Name"
          id="firstName"
          type="text"
          onChange={handlerInput}
          name="firstName"
          error={errorFrom.firstName}
          value={form.firstName}
        />
        <Input
          title="Last Name"
          id="lastName"
          onChange={handlerInput}
          type="text"
          name="lastName"
          error={errorFrom.lastName}
          value={form.lastName}
        />
        <Input
          title="Email"
          id="email"
          type="email"
          onChange={handlerInput}
          name="email"
          error={errorFrom.email}
          value={form.email}
        />
        <Input
          title="Phone"
          id="tel"
          type="tel"
          onChange={handlerInput}
          name="tel"
          error={errorFrom.tel}
          value={form.tel}
        />
        <Textarea
          name="message"
          id="message"
          onChange={handlerInput}
          title="Message"
          value={form.message}
        />
        <Button
          className="bg-btn-color w-full text-white py-4 rounded-[10px] text-base font-semibold"
          disabled={isPending ? true : false}
        >
          {isPending ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};
