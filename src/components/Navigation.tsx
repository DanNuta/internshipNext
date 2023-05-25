import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex items-center px-6 h-[70px] text-card bg-clr-secondary rounded-[10px]">
      <ul className="flex items-center gap-x-14">
        <li className="text-base font-semibold text-clr-primary">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="text-base font-semibold text-clr-primary">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
