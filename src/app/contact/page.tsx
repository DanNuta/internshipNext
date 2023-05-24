import { redirect } from "next/navigation";

import { Button, Input, Form, Textarea } from "@/components";
import { checkData } from "@/utils";
import { useCreateBlog } from "@/hooks";

const ContactPage = () => {
  async function contactUs(data: FormData) {
    "use server";

    const name = data.get("nume")?.valueOf();
    const prenume = data.get("prenume")?.valueOf();
    const email = data.get("email")?.valueOf();
    const tel = data.get("tel")?.valueOf();
    const message = data.get("message")?.valueOf();

    const checkName = checkData(name);
    const checkPrenume = checkData(prenume);
    const checkEmail = checkData(email);
    const checkTel = checkData(tel);
    const checkMessage = checkData(message);

    if (checkName || checkPrenume || checkEmail || checkTel || checkMessage)
      return;

    const contactObj = {
      name,
      prenume,
      email,
      tel,
      message,
    };

    await useCreateBlog("http://localhost:8001/contact", contactObj);
    redirect("/");
  }

  return (
    <form action={contactUs}>
      <Input type="text" placeholder="Name" name="nume" />
      <Input type="text" placeholder="Prenume" name="prenume" />
      <Input type="email" placeholder="Email" name="email" />
      <Input type="tel" placeholder="Nr de telefon" name="tel" />
      <Textarea name="message" />
      <Button type="submit" title="Submit" />
    </form>
  );
};

export default ContactPage;
