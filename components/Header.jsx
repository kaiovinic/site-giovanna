"use client";
import React, { useContext } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
// components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseleaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className=" container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* Phone & Email */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseleaveHandler}
              className="flex flex-col lg:flex-row items-center gap-2 h-full xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
            >
              {/* Phone */}
              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>(71) 98125-8539</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2 text-white">
                <IoMdMail />
                <span>giovannaleite15@hotmail.com</span>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseleaveHandler}
              className="hidden xl:block"
            >
              <Socials containerStyles="flex gap-6 text-white " />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto flex items-start justify-between px-6">
        {/* logo */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseleaveHandler}
        >
          <Link href="/">
            <Image
              src="/logo03.png"
              width={100}
              height={50}
              alt="logo"
              priority
            />
          </Link>
        </motion.div>
        {/* mobile */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        {/* mobile nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] z-50 xl:hidden"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        {/* desktop nav */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseleaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
