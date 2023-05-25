"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button } from "@/components";

export const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSearch("");
    router.push(`/${search}`);
  }

  return (
    <form onSubmit={submitData}>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
};
