"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
export default function Scrolltest() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  let x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section className=" relative h-[300vw] bg-neutral-900">
      <div className=" sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 items-center ">
          <div className="w-[800px] h-[400px] border-2"></div>
          <div className="w-[800px] h-[400px] border-2"></div>
          <div className="w-[800px] h-[400px] border-2"></div>
          <div className="w-[800px] h-[400px] border-2"></div>{" "}
          <div className="w-[800px] h-[400px] border-2"></div>{" "}
        </motion.div>
      </div>
    </section>
  );
}
