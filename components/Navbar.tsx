import navBarItems from "@/constatns/const";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex  text-2xl justify-between px-[15%] bg-black text-[white] h-[100px] items-center  ">
      <div className="flex gap-5">
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
      <div className="flex gap-5">
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
    </nav>
  );
}
