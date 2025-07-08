"use client";
import Link from "next/link";

export default function HeaderPage() {
  return (
    <nav className="flex flex-row-reverse">
      <Link href={`/about`}>About</Link>
      <Link href={`/test`}>Test</Link>
    </nav>
  );
}
