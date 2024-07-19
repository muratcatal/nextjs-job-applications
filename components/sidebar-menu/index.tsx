"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen">
      <ul className="p-4 space-y-2">
        <li>
          <Link
            href="/dashboard"
            className={classnames(
              "block py-2.5 px-4 rounded transition duration-200",
              {
                "bg-gray-700": pathname === "/dashboard",
              }
            )}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/applicants"
            className={classnames(
              "block py-2.5 px-4 rounded transition duration-200",
              {
                "bg-gray-700": pathname === "/applicants",
              }
            )}
          >
            Applicants
          </Link>
        </li>
        <li>
          <Link
            href="/applicant"
            className={classnames(
              "block py-2.5 px-4 rounded transition duration-200",
              {
                "bg-gray-700": pathname === "/applicant",
              }
            )}
          >
            New Applicant
          </Link>
        </li>
        <li>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
