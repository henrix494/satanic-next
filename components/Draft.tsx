"use client";
import Image from "next/image";
import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import "./cursor.css";
export default function Draft() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHopveringImg, setIsHoveringImg] = useState({
    imgOne: false,
    imgTwo: false,
  });

  const handleMouseMove = (event: any) => {
    setCoords({
      x: event.pageX - 900,
      y: event.clientY,
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove);

    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      if (isHovering) {
        bodyElement.style.cursor = "none";
      } else {
        // Optionally, reset to the default cursor when not hovering
        bodyElement.style.cursor = "";
      }
    }
  }
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  let x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);
  return (
    <section className=" relative h-[300vw] bg-neutral-900">
      <div
        className=" p-12 bg-[#dddbdb]    sticky top-0 flex h-screen items-center overflow-hidden 	"
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        {" "}
        <motion.div style={{ x }} className="flex gap-4 items-center ">
          <div className=" gap-5 flex justify-around  slide ">
            {/* IMG ONE GRP */}
            <div
              className="relative   w-[50vw] max-lg:w-screen   "
              onMouseEnter={() => {
                setIsHoveringImg((prev) => ({
                  ...prev,
                  imgOne: true,
                }));
              }}
              onMouseLeave={() => {
                setIsHoveringImg((prev) => ({ ...prev, imgOne: false }));
              }}
            >
              <Image
                src={"/black_man.jpg"}
                className="bg-[white] w-[40vw] max-lg:w-screen "
                height={1000}
                width={800}
                alt="Man Shirt"
              />
              <div className="absolute top-[10%] left-1/2 translate-x-[-50%] text-[#ffffff] text-7xl font-bold font-sans">
                <h2>ביגוד גברים</h2>
                <div className="bg-white w-[100%] h-[5px] mt-10"></div>
              </div>
            </div>
            <div className="relative w-[40vw] max-lg:w-screen">
              <Image
                src={"/woman_shirt.jpg"}
                height={1000}
                width={800}
                alt="Woman Shirt"
                className="bg-[white] w-[45vw] max-lg:w-screen"
              />
              <div className="absolute top-[10%] left-1/2 translate-x-[-50%] text-[#ffffff] text-7xl font-bold font-sans">
                <h2>ביגוד נשים</h2>
                <div className="bg-white w-[100%] h-[5px] mt-10"></div>
              </div>
            </div>
          </div>{" "}
          <div className=" absolute bottom-0 "></div>
          <div className=" gap-5 flex justify-around  slide ">
            {/* IMG ONE GRP */}
            <div
              className="relative   w-[50vw] max-lg:w-screen   "
              onMouseEnter={() => {
                setIsHoveringImg((prev) => ({
                  ...prev,
                  imgOne: true,
                }));
              }}
              onMouseLeave={() => {
                setIsHoveringImg((prev) => ({ ...prev, imgOne: false }));
              }}
            >
              <Image
                src={"/black_man.jpg"}
                className="bg-[white] w-[40vw] max-lg:w-screen "
                height={1000}
                width={800}
                alt="Man Shirt"
              />
              <div className="absolute top-[10%] left-1/2 translate-x-[-50%] text-[#ffffff] text-7xl font-bold font-sans">
                <h2>ביגוד גברים</h2>
                <div className="bg-white w-[100%] h-[5px] mt-10"></div>
              </div>
            </div>
            <div className="relative w-[40vw] max-lg:w-screen">
              <Image
                src={"/woman_shirt.jpg"}
                height={1000}
                width={800}
                alt="Woman Shirt"
                className="bg-[white] w-[45vw] max-lg:w-screen"
              />
              <div className="absolute top-[10%] left-1/2 translate-x-[-50%] text-[#ffffff] text-7xl font-bold font-sans">
                <h2>ביגוד נשים</h2>
                <div className="bg-white w-[100%] h-[5px] mt-10"></div>
              </div>
            </div>
          </div>{" "}
          {isHovering && (
            <div
              id="cursor"
              className={` fixed  w-[50px] h-[50px] bg-yellow-200  rounded-full ${
                isHopveringImg.imgOne && " imgOneAni"
              }`}
              style={{
                top: coords.y,
                right: window.innerWidth - coords.x,
              }}
            ></div>
          )}{" "}
        </motion.div>
      </div>
    </section>
  );
}
