import React, { useState } from "react";

import { Button, Input } from "@/components";
import { patternRegEx, errorInputsRegister } from "@/utils";
import { redirect } from "next/navigation";

async function registerUser(e: FormData) {
  "use server";

  const registerUser = {
    nume: e.get("nume")?.valueOf(),
    prenume: e.get("prenume")?.valueOf(),
    password: e.get("password")?.valueOf(),
    email: e.get("email")?.valueOf(),
  };

  redirect("/");
}

export const Form = () => {
  return (
    <form action={registerUser}>
      <Input type="text" placeholder="Nume" required name="nume" />
      <Input
        type="text"
        placeholder="Prenume"
        pattern="[a-zA-Z]{3,10}"
        title="[a-zA-Z]{3,}"
        required
        name="prenume"
      />
      <Input
        required
        name="password"
        type="password"
        placeholder="Password"
        pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&.]{8,}"
        title="Minim opt caractere, cel puțin o literă, o cifra și un caracter special"
      />
      <Input type="email" required placeholder="Email" name="email" />
      <Button type="submit" title="Submit" />
    </form>
  );
};
