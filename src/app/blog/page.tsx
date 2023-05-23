import React from "react";
import Link from "next/link";

const BlogPage = async () => {
  return (
    <div>
      <h1>blogs</h1>

      <nav>
        <ul>
          <li>
            <Link href={``}>First blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogPage;
