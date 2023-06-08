"use client";

import { useState, useLayoutEffect } from "react";

export const CheckDarkMode = () => {
  const [isCheck, setChecked] = useState(false);

  const imgDarkLightMode = isCheck
    ? "after:bg-[url('/moon.svg')]"
    : "after:bg-[url('/dark.svg')]";

  const toggleSwish =
    "absolute flex items-center inset-0 bg-clr-secondary ease-in-out duration-300 dark:bg-[#4B6BFB] rounded-full | after:content-[''] after:w-6 after:h-6 after:bg-[#ffffff] after:flex after:items-center after:justify-center after:absolute after:rounded-full after:bg-no-repeat after:bg-center";

  function toggleDarkMode() {
    const rootHtml = document.querySelector("#html-root") as HTMLHtmlElement;

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
    const dataLocalStorage = localStorage.getItem("darkMode");
    const rootHtml = document.querySelector("#html-root") as HTMLHtmlElement;

    if (dataLocalStorage === null) return;
    const isLocalStorageData = dataLocalStorage === "dark" ? false : true;
    setChecked(isLocalStorageData);

    rootHtml.classList.add(`${dataLocalStorage}`);
  }, []);

  return (
    <label
      onClick={toggleDarkMode}
      className="w-12 h-7 relative cursor-pointer"
      htmlFor="input-dark"
    >
      <span
        className={`${toggleSwish} ${
          isCheck ? "after:left-[2px]" : "after:right-[2px]"
        } ${imgDarkLightMode}`}
      ></span>
    </label>
  );
};
