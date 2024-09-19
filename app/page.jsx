"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image";

const Home = () => {
  const { mouseEnterHandler, mouseleaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          <div className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
            <h1 className="h1">
              Beleza Natural, Cuidado Personalizado. Realce o Melhor de Você!{" "}
            </h1>
          </div>
          {/* image */}
          <div className="flex-1">
            <div className="hidden xl:flex fixed bottom-0">
              <Image
                src="/image01.png"
                alt="Giovanna"
                width={500}
                height={300}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
