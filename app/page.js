"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

const page = () => {
  // console.log(gender);

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-3">
      <h1>logo</h1>
      <ul className="flex gap-4 " >
        <li>
          <Link href="/login">
           login
          </Link>
        </li>
        <li>
          <Link href="/profile">
            profile
          </Link>
        </li>
        <li>
          <Link href="/register">
            Register
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default page;
