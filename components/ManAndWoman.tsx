"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.css";
export default function ManAndWoman() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovering, setIsHovering] = useState(false);
  const [isHopveringImg, setIsHoveringImg] = useState({
    imgOne: false,
    imgTwo: false,
  });

  const handleMouseMove = (event: any) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  if (typeof window !== undefined) {
    window?.addEventListener("mousemove", handleMouseMove);
  }
  const bodyElement = document.querySelector("body");

  if (bodyElement) {
    if (isHovering) {
      bodyElement.style.cursor = "none";
    } else {
      // Optionally, reset to the default cursor when not hovering
      bodyElement.style.cursor = "";
    }
  }
  return (
    <div
      className="flex justify-center p-12 bg-[#dddbdb] gap-4 image-container"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div
        className="relative overflow-hidden "
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
          className="bg-[white]"
          height={1000}
          width={800}
          alt="Man Shirt"
        />
        <div className="absolute top-[10%] left-1/2 translate-x-[-50%] text-[#ffffff] text-7xl font-bold font-sans">
          <h2>ביגוד גברים</h2>
          <div className="bg-white w-[100%] h-[5px] mt-10"></div>
        </div>
      </div>
      <div className="relative ">
        <Image
          src={"/woman_shirt.jpg"}
          height={1000}
          width={800}
          alt="Woman Shirt"
          className="bg-[white]"
        />
        <div className="absolute top-[10%] left-1/2 translate-x-[-50%] text-[#ffffff] text-7xl font-bold font-sans">
          <h2>ביגוד נשים</h2>
          <div className="bg-white w-[100%] h-[5px] mt-10"></div>
        </div>
      </div>
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
      )}
    </div>
  );
}
