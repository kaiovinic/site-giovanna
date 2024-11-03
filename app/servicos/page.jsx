"use client";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const { mouseEnterHandler, mouseleaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden  "
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Entregue-se aos nossos tratamentos luxuosos.
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Especialista em redução de medidas
            </p>
            {/* items */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px]  bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3>Drenagem Linfática</h3>
                </div>
                {/* <p className="pl-6 text-[15px]">Limpeza profunda, esfoliação e hidratação para uma tez renovada</p> */}
              </div>
              {/* fim item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px]  bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3>Detox corporal</h3>
                </div>
                {/* <p className="pl-6 text-[15px]">Limpeza profunda, esfoliação e hidratação para uma tez renovada</p> */}
              </div>
              {/* fim item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px]  bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3>Protocolo de emagrecimento</h3>
                </div>
                {/* <p className="pl-6 text-[15px]">Limpeza profunda, esfoliação e hidratação para uma tez renovada</p> */}
              </div>
              {/* fim item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px]  bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3>Protocolo de gordura localizada</h3>
                </div>
                {/* <p className="pl-6 text-[15px]">Limpeza profunda, esfoliação e hidratação para uma tez renovada</p> */}
              </div>
              {/* fim item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px]  bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3>Lipo de papada</h3>
                </div>
                {/* <p className="pl-6 text-[15px]">Limpeza profunda, esfoliação e hidratação para uma tez renovada</p> */}
              </div>
              {/* fim item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px]  bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3>Massagem Relaxante</h3>
                </div>
                {/* <p className="pl-6 text-[15px]">Limpeza profunda, esfoliação e hidratação para uma tez renovada</p> */}
              </div>
              {/* fim item */}
            </div>
            {/* btn */}
            <a
              href="https://api.whatsapp.com/send/?phone=5571981258539&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn mx-auto xl:mx-0">Descubra mais</button>
            </a>
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            className="hidden xl:flex w-[384px] h-[534px] relative"
          >
            <Image
              src={"/image03.jpg"}
              fill
              alt="image"
              quality={100}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
