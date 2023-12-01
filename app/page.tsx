import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {
  let data =
    await sql`SELECT Image_url FROM poster_images,posters WHERE posters._id = poster_images.Poster_id`;
  const { rows: url } = data;
  url.map((item) => console.log(item.image_url));

  return (
    <main>
      {url.map((item) => {
        return (
          <Image width={100} height={100} alt="Fuck you" src={item.image_url} />
        );
      })}
    </main>
  );
}
