"use client";
import React, { useContext } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";

const Footer = () => {
  const { mouseEnterHandler, mouseleaveHandler } = useContext(CursorContext);

  return (
    <footer className=" w-full bg-accent-100 xl:bg-transparent">
      <div className="bg-secondary-100 mb-4 xl:mb-[30px] xl:h-[50px] py-4 xl:py-0">
        <div className=" container mx-auto h-full">
          <div className="flex items-center justify-center h-full">
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseleaveHandler}
              className="flex flex-col lg:flex-row items-center gap-2 h-full xl:gap-6 w-full justify-center xl:w-auto xl:justify-normal"
            >
              <div className="text-[16px] max-sm:text-[12px] text-white   mb-[2rem] md:mb-0">
                <p>
                  &copy; {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.linkedin.com/in/kaioviniciussilva/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <span>KAIO VINICIUS </span>
                  </a>
                  - Todos os direitos reservados.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
