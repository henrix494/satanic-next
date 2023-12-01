import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Replace 'natan' and 'kov' with the actual names of the tables you want to keep
    const tablesToKeep = ["poster_images", "poster_sizes", "posters"];

    // Fetch all table names from the database
    const result =
      await sql`SELECT Image_url FROM poster_images,posters WHERE posters._id = poster_images.Poster_id`;
    console.log(result.rows);
    return NextResponse.json({ success: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
