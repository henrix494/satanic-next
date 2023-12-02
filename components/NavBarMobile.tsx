import Image from "next/image";
export default function NavBarMobile() {
  return (
    <nav className=" fixed top-0 left-0 p-2 lg:hidden">
      <Image src={"hamburger.svg"} width={40} height={40} alt="mobile menu" />
    </nav>
  );
}
