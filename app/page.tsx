import Image from "next/image";
import { sql } from "@vercel/postgres";
import NavbarDesk from "@/components/NavbarDesk";
import NavBarMobile from "@/components/NavBarMobile";
import Hero from "@/components/Hero";
import ManAndWoman from "@/components/ManAndWoman";
export default async function Home() {
  let data =
    await sql`SELECT Image_url FROM poster_images,posters WHERE posters._id = poster_images.Poster_id`;
  const { rows: url } = data;
  url.map((item) => console.log(item.image_url));

  return (
    <>
      <NavbarDesk />
      <NavBarMobile />
      <main>
        {/* {url.map((item, index) => {
          return (
            <Image
              key={index}
              width={100}
              height={100}
              alt="Fuck you"
              src={item.image_url}
            />
          );
        })} */}
        <Hero />
        <ManAndWoman />
      </main>
    </>
  );
}
