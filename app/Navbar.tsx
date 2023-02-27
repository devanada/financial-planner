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
  const token = getCookie("token");

  return (
    <nav className="sticky top-0 z-50 flex min-h-navbar w-full justify-center border-b border-b-dark-2 bg-dark-2">
      <div className="container flex h-full items-center justify-between rounded-b-2xl p-3">
        {/* TODO: Change to logo */}
        <Link href={token ? "/dashboard" : "/"}>Budgee</Link>
        <div className="flex items-center gap-3">
          {token ? (
            <>
              <Link href="/profile">Profile</Link>
              <Link
                href="/register"
                className="rounded-xl border border-dark-3 bg-dark p-2 "
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link
                href="/register"
                className="rounded-xl border border-dark-3 bg-dark p-2 "
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
