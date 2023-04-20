import React from "react";
import Link from "next/link";
import Image from "next/image";
import next13 from "../../public/next13.png";

/* Site/Page files named page.js instead of index.js (previous version) */

const HomePage = () => {
  return (
    <div>
      <Link href={"https://nextjs.org/blog/next-13"} target="_blank">
        <Image src={next13} alt="Next.js 13" className="home-img"></Image>
      </Link>
    </div>
  );
};

export default HomePage;
