import Link from "next/link";

import { Search } from "@/components";
import { Logo } from "@/icons";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 h-[70px] bg-[white] rounded-[10px] max-w-7xl mx-auto my-6">
      <div>
        <h1>
          <Link href="/">
            <Logo />
          </Link>
        </h1>
      </div>

      <ul className="flex items-center gap-x-14">
        <li className="text-base font-semibold text-clr-primary">
          <Link href="/">Home</Link>
        </li>
        <li className="text-base font-semibold text-clr-primary">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="text-base font-semibold text-clr-primary">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Search />
    </nav>
  );
}
