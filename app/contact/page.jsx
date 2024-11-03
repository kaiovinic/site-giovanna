"use client";
import { motion } from "framer-motion";
import { useContext } from "react";

import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const { mouseEnterHandler, mouseleaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-72 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center "
          >
            <h3 className="h3 mb-8 text-center xl:text-left">
              Contato para informações
            </h3>
            {/* items */}
            <div className="flex flex-col gap-12  items-start">
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px] ">
                  <IoLocationOutline className=" w-full h-full " />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Endereço</h4>
                  <p className="leading-relaxed">
                    Edifício Profissional Center 2501,sala 1122 -
                    <br />
                    Av. Antônio Carlos Magalhães, Salvador-BA
                  </p>
                </div>
              </div>
              {/* fim item */}

              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px] ">
                  <FaWhatsapp className=" w-full h-full " />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Contato</h4>
                  <div className="pt-1 flex-1">
                    <p>Whatsap: (71) 98125-8539</p>
                  </div>
                </div>
              </div>
              {/* fim item */}

              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px] ">
                  <MdOutlineEmail className=" w-full h-full " />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Endereço de email</h4>
                  <div className="flex flex-col gap-1">
                    <p>giovannaleite15@hotmail.com</p>
                  </div>
                </div>
              </div>
              {/* fim item */}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1"
          >
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0 mb-10">
              <h3 className="h3 mb-8 text-center">Entre em contato</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
