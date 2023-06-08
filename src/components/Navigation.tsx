"use client";

import Link from "next/link";
import { useState } from "react";

import { Search, CheckDarkMode } from "@/components";
import { Logo, Bars } from "@/icons";

export function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="max-w-7xl w-[95%] mx-auto relative flex items-center justify-between px-6 h-[70px] bg-[white] rounded-[10px]  dark:bg-dark-color | ">
        <div>
          <h1>
            <Link className="dark:text-[white]" href="/">
              <Logo />
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex md:items-center md:gap-x-14 md:text-base md:font-semibold text-clr-primary dark:text-card | ">
          <li className="hover:text-blue-800">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-800">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-blue-800">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 dark:text-card">
          <Search />
          <CheckDarkMode />
          <div className="md:hidden">
            <Bars onClick={() => setIsMobile((prev) => !prev)} />
          </div>
        </div>
      </nav>

      {isMobile && (
        <ul className="absolute w-full justify-center mt-2  flex items-center gap-x-14 text-base font-semibold text-clr-primary dark:text-card | ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}
