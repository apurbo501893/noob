"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" }, // Fixed href
  { name: "Resume", href: "/resume" }, // Fixed href
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.href} // Fixed link property
            key={index}
            className={`${
              link.href === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all`} // Fixed conditional className
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
