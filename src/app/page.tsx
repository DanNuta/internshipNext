import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="blog">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePage;
