import Link from "next/link";
import React from "react";

const Buttons = ({ text }) => {
  return (
    <Link
      className="relative w-full cursor-pointer group"
      href="/wallet/connecting"
    >
      <div className="group-hover:hidden h-10 bg-[#1C1D20] -mb-11 ml-1 left-1 rounded-lg w-full"></div>
      <div className="rounded-lg bg-[#FFED76] font-semibold px-8 py-1.5 border-[2px] border-[#1C1D20] z-50">
        {text}
      </div>
    </Link>
  );
};

export default Buttons;
