import Link from "next/link";
import LogoIcon from "./LogoIcon";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all p-1 text-black"
            href="/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Home</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all p-1 text-black"
            href="/blog"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Blog</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all p-1 text-black"
            href="/iletisim"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">iletisim</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all p-1 text-black"
            href="/about"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Hakkımızda</p>
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-center mt-8 space-x-4">
        <Link href="/" rel="noopener noreferrer">
          <LogoIcon />
        </Link>
        {/* <p className="text-neutral-600 dark:text-neutral-200 w-32">
            © {new Date().getFullYear()} MIT Licensed
          </p> */}
      </div>
    </footer>
  );
}
