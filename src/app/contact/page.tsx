"use client";
import { useState } from "react";
import { Metadata } from "next";

import { Button, Input, Form, Textarea } from "@/components";
import { useCreateBlog } from "@/hooks";
import { inputError, inputRegEx } from "@/utils";

export const metadata: Metadata = {
  title: "Contact",
};

export const ContactPage = () => {
  const [form, setForm] = useState({
    nume: "",
    prenume: "",
    email: "",
    tel: "",
    message: "",
  });

  const [errorFrom, setErrorForm] = useState({
    nume: "",
    prenume: "",
    email: "",
    tel: "",
  });

  function handlerInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errorInput = {
      nume: "",
      prenume: "",
      email: "",
      tel: "",
    };

    errorInput.nume = form.nume ? "" : `${inputError.name}`;
    errorInput.prenume = form.prenume ? "" : `${inputError.prenume}`;
    errorInput.email = inputRegEx.email.test(form.email)
      ? ""
      : `${inputError.email}`;

    errorInput.tel = inputRegEx.tel.test(form.tel) ? "" : `${inputError.tel}`;

    setErrorForm(errorInput);

    const testTel = inputRegEx.tel.test(form.tel);
    const testEmail = inputRegEx.email.test(form.email);

    const errorAny = !testEmail || !form.nume || !form.prenume || !testTel;
    if (errorAny) return;

    await useCreateBlog("http://localhost:8001/contact", form);

    window.location.href = "/";
  }

  return (
    <Form title="Contact Us" onSubmit={onSubmit}>
      <Input
        title="Nume"
        id="nume"
        type="text"
        onChange={handlerInput}
        name="nume"
        error={errorFrom.nume}
      />
      <Input
        title="First Name"
        id="prenume"
        onChange={handlerInput}
        type="text"
        name="prenume"
        error={errorFrom.prenume}
      />
      <Input
        title="Email"
        id="email"
        type="email"
        onChange={handlerInput}
        name="email"
        error={errorFrom.email}
      />
      <Input
        title="Telefon"
        id="tel"
        type="tel"
        onChange={handlerInput}
        name="tel"
        error={errorFrom.tel}
      />
      <Textarea
        name="message"
        id="message"
        onChange={handlerInput}
        title="Message"
      />
      <Button type="submit" title="Submit" />
    </Form>
  );
};

export default ContactPage;
