"use client";

import ShinyText from "@/components/global/shiny-text";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <Link href="/" className="flex items-center gap-2 py-4">
          <Image
            src="/images/ethical.png"
            alt="Cybersecurity Club of Softwarica"
            width={100}
            height={50}
          />
        </Link>
      </div>
    </header>
  );
}
