import Image from "next/image";
import React from "react";
import Logo from "../assets/logo-icon.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-[98%] md:w-[90%] mx-auto bg-[#1C1D20] px-1 pb-2.5 rounded-b-[2.5rem]">
        <Link
          href="/"
          className="bg-white flex justify-center items-center rounded-b-[2.5rem] py-5 gap-x-2"
        >
          <Image width={90} height={90} alt="" src={Logo} className="w-16" />
          <h1 className="font-extrabold text-4xl font-Anta">Pandoshi</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
