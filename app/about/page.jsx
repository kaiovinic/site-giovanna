"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import StartItem from "@/components/StartItem";

const About = () => {
  const { mouseEnterHandler, mouseleaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col xl:flex-row items-center h-full w-full justify-between">
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 mt-[200px] xl:mx-0"
          >
            <Image
              src="/image02.png"
              fill
              quality={100}
              priority
              alt="image"
              className="object-contain"
            />
          </motion.div>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
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
              <div>
                <StartItem countNum={4} text={"Anos no Mercado"} />
              </div>
              <div>
                <StartItem
                  countNum={1}
                  countText={"K+"}
                  text={"Clientes Satisfeitos!"}
                />
              </div>
              <div>
                <StartItem
                  countNum={97}
                  countText={"%"}
                  text={"Produtos Naturais"}
                />
              </div>
            </div>
            {/* button */}
            <a
              href="https://api.whatsapp.com/send/?phone=5571981258539&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn mx-auto xl:mx-0">Contate-me</button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
