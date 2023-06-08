"use client";

import { useEffect } from "react";

import { Button } from "@/components";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-7xl text-center text-red-700 text-[36px] font-bold mx-auto w-[95%] dark:text-red h-[50vh] flex justify-center items-center flex-col">
      <h2>Something went wrong!</h2>
      <Button
        className="bg-red-500 rounded-2xl p-2 text-white dark:bg-white dark:text-red-700"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
