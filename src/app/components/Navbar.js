"use client"
import Link from "next/link";

export default function Navbar() {
  return (
      <nav className="border-b border-gray-800 sticky top-0 bg-white-900 text-white-100 z-10"
                      style = {{ background: "var(--navbar-background)" }}>
          <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold md:hover:underline">
              <i>grunge hotspot! </i>
          </Link>
              <ul className="flex items-center justify-end space-x-4 text-lg font-larde">
                  <li className="md:hover:underline">
                      <Link href="/blog"> grunge history! </Link>
                  </li>
                  <li className="md:hover:underline">
                      <Link href="/photos"> find a new album! </Link>
                  </li>
              </ul>
          </div>
      </nav>
  );
}