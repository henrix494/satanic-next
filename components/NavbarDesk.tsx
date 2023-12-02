"use client";
import navBarItems from "@/constatns/const";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function NavbarDesk() {
  const [scrollPos, setScrollPos] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    if (typeof window !== "undefined") {
      // Add event listener when component mounts
      window.addEventListener("scroll", handleScroll);

      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <nav
      className={` text-xl    h-[40px] items-center text-white    w-full max-lg:hidden fixed top-0  ${
        scrollPos > 5 ? "px-[0%]  " : "px-[15%]"
      }  `}
    >
      <div className="flex justify-between bg-[#1d1e20] p-5 rounded-md  ">
        <div className={`flex gap-5  w-full ${scrollPos > 5 && " px-32"} `}>
          {navBarItems.map((item) => {
            if (item.id <= 4) {
              return (
                <Link key={item.id} href={item.href}>
                  {item.name}
                </Link>
              );
            }
          })}
        </div>
        <div className=" absolute left-1/2 translate-x-[-50%]">
          <p>satan</p>
        </div>
        <div className={`flex gap-5 ${scrollPos > 5 && " px-32"}`}>
          {navBarItems.map((item) => {
            if (item.id > 4) {
              return (
                <Link key={item.id} href={item.href}>
                  {item.name}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}
