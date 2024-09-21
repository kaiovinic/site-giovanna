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
          <div className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
            <h1 className="h1 text-3xl xl:text-5xl">
              Cuidado Personalizado. Realce o Melhor de Você!{" "}
            </h1>
            <p className="lead max-w-xl mx-auto">
              Transforme suas curvas com nossos tratamentos de redução de
              medidas personalizados, para resultados visíveis e duradouros!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <button className="btn btn-lg">Marcar uma Consulta</button>
              <div>
                <ModalVideo />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex-1">
            <div className="hidden xl:flex fixed bottom-0">
              <Image
                src="/imagem.png"
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
