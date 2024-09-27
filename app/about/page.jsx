"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col xl:flex-row items-center h-full w-full justify-between">
          {/* image */}
          <div className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 mt-[200px] xl:mx-0">
            <Image
              src="/image02.png"
              fill
              quality={100}
              priority
              alt="image"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Comprometida com a saúde e beleza da sua pele.
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Cuidados personalizados para uma pele radiante e saudável.
              Descubra soluções sob medida que realçam a beleza natural da sua
              pele.
            </p>
            {/* items */}
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>item 1</div>
              <div>item 2</div>
              <div>item 3</div>
              <div>item 4</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
