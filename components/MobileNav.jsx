"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import Socials from "./Socials";

const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "Sobre" },
  { href: "/servicos", name: "Serviços" },
  { href: "/contact", name: "Contato" },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();

  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              pathname === link.href && "border-b-2 border-accent"
            } uppercase max-w-max mx-auto`}
            onClick={() => setMobileNav(false)} // Fecha o modal ao clicar
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
