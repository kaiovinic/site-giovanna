"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";

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
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, esse: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          >
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseleaveHandler}
              className="h1 text-3xl xl:text-5xl"
            >
              Cuidado Personalizado. Realce o Melhor de Você!{" "}
            </motion.h1>
            <motion.p
              className="lead max-w-xl mx-auto"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseleaveHandler}
            >
              Transforme suas curvas com nossos tratamentos de redução de
              medidas personalizados, para resultados visíveis e duradouros!
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button
                className="btn btn-lg"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseleaveHandler}
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5571981258539&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marcar uma Consulta
                </a>
              </motion.button>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseleaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>
          {/* image */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, esse: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseleaveHandler}
              className="hidden xl:flex fixed bottom-0 right-0 
               "
            >
              <Image
                src="/imagem.png"
                alt="Giovanna"
                width={550}
                height={400}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
