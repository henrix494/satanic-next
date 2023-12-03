"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ItemsIMGS } from "@/constatns/const";
import Image from "next/image";
export default function FeatureItems() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  let x = useTransform(scrollYProgress, [0, 1], ["15%", "-70%"]);
  return (
    <section className=" relative h-[180vw] max-lg:h-[800vw] bg-neutral-900">
      <div className=" sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 items-center  ">
          {ItemsIMGS.map((item) => {
            return (
              <div className=" w-[40vw] max-lg:w-screen ">
                <Image
                  src={item.src}
                  height={item.height}
                  width={item.width}
                  alt={item.alt}
                  className="   "
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
