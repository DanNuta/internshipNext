"use client";

import { useState, useLayoutEffect } from "react";

export const CheckDarkMode = () => {
  const [check, setChecked] = useState(false);

  const toggleSwich =
    "absolute flex items-center inset-0 bg-clr-secondary ease-in-out duration-300 dark:bg-[#4B6BFB] rounded-full | after:content-[''] after:w-6 after:h-6 after:bg-[url('/dark.svg')] after:bg-[#ffffff] after:flex after:items-center after:justify-center after:absolute after:rounded-full after:bg-no-repeat after:bg-center";

  function toggleDarkMode() {
    const rootHtml = document.querySelector("#html-root") as HTMLHtmlElement;
    //const isChecked = inputDark.current?.checked;

    setChecked((prev) => {
      if (prev) {
        rootHtml.classList.add("dark");
        rootHtml.classList.remove("white");
        localStorage.setItem("darkMode", "dark");
      } else {
        rootHtml.classList.add("white");
        rootHtml.classList.remove("dark");
        localStorage.setItem("darkMode", "white");
      }

      return !prev;
    });
  }

  useLayoutEffect(() => {
    const dataLocalStorege = localStorage.getItem("darkMode");
    const rootHtml = document.querySelector("#html-root") as HTMLHtmlElement;

    if (dataLocalStorege === null) return;
    const localData = dataLocalStorege === "dark" ? false : true;
    setChecked(localData);

    rootHtml.classList.add(`${dataLocalStorege}`);
  }, []);

  return (
    <label
      onClick={toggleDarkMode}
      className="w-12 h-7 relative cursor-pointer"
      htmlFor="input-dark"
    >
      <span
        className={`${toggleSwich} ${
          check ? "after:left-[2px]" : "after:right-[2px]"
        } `}
      ></span>
    </label>
  );
};
