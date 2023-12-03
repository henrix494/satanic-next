import Image from "next/image";
import "./cursor.css";
export default function Hero() {
  return (
    <>
      <Image
        src={"/AA-Logos.png"}
        className="w-screen"
        width={1100}
        height={1100}
        alt="logo"
      />{" "}
      <Image
        src={"/HEXMAS-DESKTOP_1_8b928012-83f3-4727-a91f-0be9285a2a28_1540x.png"}
        className="w-screen max-lg:hidden"
        width={1100}
        height={1100}
        alt="logo"
      />
      <div className="heroFull lg:hidden"></div>
    </>
  );
}
