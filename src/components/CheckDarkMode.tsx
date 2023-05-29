"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const CheckDarkMode = () => {
  const inputDark = useRef<HTMLInputElement>(null);

  function toggleDarkMode() {
    const rootHtml = document.querySelector("#html-root") as HTMLHtmlElement;
    const isChecked = inputDark.current?.checked;

    if (!isChecked) {
      rootHtml.classList.add("dark");
      rootHtml.classList.remove("white");
      localStorage.setItem("darkMode", "dark");
    } else {
      rootHtml.classList.add("white");
      rootHtml.classList.remove("dark");
      localStorage.setItem("darkMode", "white");
    }
  }

  useEffect(() => {
    const dataLocalStorege = localStorage.getItem("darkMode");
    const rootHtml = document.querySelector("#html-root") as HTMLHtmlElement;

    if (dataLocalStorege === null) return;
    rootHtml.classList.add(`${dataLocalStorege}`);
    inputDark.current?.checked;
  }, []);

  return (
    <label
      onClick={toggleDarkMode}
      className="w-12 h-7 relative cursor-pointer"
      htmlFor="input-dark"
    >
      <input
        ref={inputDark}
        id="input-dark"
        type="checkbox"
        className="hidden"
      />
      <span className="absolute left-1 flex items-center inset-0 bg-clr-secondary dark:bg-[#4B6BFB] rounded-full | after:content-imageDarkMode after:w-6 after:h-6 after:bg-[white] after:flex after:items-center after:justify-center"></span>
    </label>
  );
};
