import Link from "next/link";

import { Search, CheckDarkMode } from "@/components";
import { Logo } from "@/icons";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 h-[70px] bg-[white] rounded-[10px] max-w-7xl mx-auto my-6 dark:bg-dark-color ">
      <div>
        <h1>
          <Link className="dark:text-[white]" href="/">
            <Logo />
          </Link>
        </h1>
      </div>

      <ul className="flex items-center gap-x-14 text-base font-semibold text-clr-primary dark:text-card">
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

      <div className="flex items-center gap-10">
        <Search />
        <CheckDarkMode />
      </div>
    </nav>
  );
}
