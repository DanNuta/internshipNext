import Link from "next/link";

interface NotFoundProps {
  search: string;
}

export const NotFoundPage = ({ search }: NotFoundProps) => {
  return (
    <div className="max-w-7xl h-[44vh] mx-auto flex items-center justify-center flex-col mb-8 dark:text-card">
      <h1 className="text-[24px] font-normal mb-8">
        We apologize, but no such article was found{" "}
        <span className="italic">{search}</span>
      </h1>

      <p>
        Start from{" "}
        <Link className="underline underline-offset-2" href="/">
          home page
        </Link>
      </p>
    </div>
  );
};
