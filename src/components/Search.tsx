"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSearch("");
    router.push(`/${search}`);
  }

  return (
    <form className="hidden md:flex" onSubmit={submitData}>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-full bg-[#F4F4F5] text-clr-primary rounded-lg border-[#B5B8C4] border-[1px] outline-none focus:border-clr-secondary h-[40px] pl-4 | dark:bg-[#242535] dark:border-none dark:text-[white]"
      />
    </form>
  );
};
