import {
  FaSun,
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaListAlt,
} from "react-icons/fa";
import { getCookie, deleteCookie, setCookie } from "cookies-next";
import Link from "next/link";

export default function Navbar() {
  const accessToken = getCookie("access_token");

  return (
    <nav className="sticky top-0 z-50 mb-6 flex min-h-navbar w-full justify-center border-b bg-light dark:border-b-dark-2 dark:bg-dark-2">
      <div className="container flex h-full items-center justify-between rounded-b-2xl p-3">
        <Link href="/" className="bg-dark-2 dark:text-light">
          Home
        </Link>
        <div>Test</div>
      </div>
    </nav>
  );
}
