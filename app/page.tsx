import Image from "next/image";
import { sql } from "@vercel/postgres";
import NavbarDesk from "@/components/NavbarDesk";
import NavBarMobile from "@/components/NavBarMobile";
import Hero from "@/components/Hero";
import Draft from "@/components/Draft";
import Scrolltest from "@/components/Scrolltest";
import FeatureItems from "@/components/FeatureItems";
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
        {/* <Draft /> */}
        {/* <Scrolltest /> */}
        <FeatureItems />
        <div className="h-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          aliquam magni quibusdam odit pariatur voluptatum recusandae reiciendis
          sint reprehenderit. Aut facere eaque explicabo adipisci facilis.
          Placeat suscipit odit dolorum exercitationem!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi
          eligendi magni illum tempore distinctio aut veniam, facere est aperiam
          commodi, nostrum labore minima ut numquam! Amet eaque quisquam
          perferendis.
        </div>
      </main>
    </>
  );
}
