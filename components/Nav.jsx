import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "Sobre",
  },
  {
    href: "/servicos",
    name: "Serviços",
  },
  {
    href: "/contact",
    name: "Contato",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } uppercase`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
