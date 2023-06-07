"use client";

import { useState } from "react";

import { Button, Input, Form, Textarea } from "@/components";
import { useCreateBlog } from "@/hooks";
import { error, validate } from "@/messages";

const ContactPage = () => {
  const [pending, setIsPending] = useState(false);

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

    const testTel = validate.tel.test(form.tel);
    const testEmail = validate.email.test(form.email);

    errorInput.nume = form.nume ? "" : `${error.name}`;
    errorInput.prenume = form.prenume ? "" : `${error.prenume}`;
    errorInput.email = testEmail ? "" : `${error.email}`;
    errorInput.tel = testTel ? "" : `${error.tel}`;

    setErrorForm(errorInput);

    const errorAny = !testEmail || !form.nume || !form.prenume || !testTel;

    if (errorAny) return;

    setIsPending(true);
    await useCreateBlog(`${process.env.NEXT_PUBLIC_CONTACT}`, form);

    setIsPending(false);

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
      <Button className="bg-slate-100" disabled={pending ? true : false}>
        {pending ? "Pending" : "Submit"}
      </Button>
    </Form>
  );
};

export default ContactPage;
