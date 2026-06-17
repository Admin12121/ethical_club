"use client";

import ShinyText from "@/components/global/shiny-text";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pb-4">
      <div className="flex flex-col gap-4 max-w-175">
        <svg
          height="24px"
          width="24px"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#737373">
            <path
              d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
              fill="#737373"
              fillOpacity="0.3"
              stroke="none"
            ></path>
            <path
              d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
              fill="none"
              stroke="#737373"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
            ></path>
          </g>
        </svg>
        <div className="flex flex-col gap-2 text-xs">
          <span>
            <ShinyText text="Designed &amp; Made with" duration={2} delay={1} />
            <span className="bg-muted-foreground bg-clip-text text-transparent">
              {" "}
              ❤️
            </span>
          </span>
          <span className="text-muted-foreground flex gap-2">
            <p>
              Cybersecurity Club of Softwarica © {new Date().getFullYear()} |
              All Right Reserved
            </p>
            <span aria-hidden="true">.</span>
            <Link
              className="hover:text-white transition duration-500"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
