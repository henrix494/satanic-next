"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [test, setTest] = useState();
  useEffect(() => {
    const testData = async () => {
      const data = await fetch("http://localhost:3000/api/create-pets-table");
      const res = await data.json();
      setTest(res.success[0].image_url);
    };
    testData();
  }, []);
  return (
    <main>
      {test ? (
        <Image src={test} width={100} height={100} alt="Fuck off" />
      ) : (
        "Loading"
      )}
    </main>
  );
}
