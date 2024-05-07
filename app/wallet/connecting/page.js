"use client";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../assets/logo-icon.png";

export default function page() {
  const navigate = useRouter();
  useEffect(() => {
    setTimeout(() => navigate.push(`/wallet`), 3000);
  }, []);
  return (
    <div className="min-h-[100vh]">
      <div className="max-w-md mx-auto mt-10 w-[90%] bg-[rgba(48,48,48,0.3)] px-6 pt-3 pb-10 rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <h5 className="text-white font-bold">Back</h5>
          <AiOutlineClose className="text-[#FF1E1E] text-2xl" />
        </div>
        <div className="px-5 py-8 rounded-2xl mb-5 border border-[#FFED76] text-[#FFED76] flex md:text-lg">
          <p>Connecting</p>
          <Typewriter
            className="inline "
            options={{
              strings: ["...", "..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="px-5 py-8 rounded-2xl border cursor-pointer border-white/30 flex items-center justify-between">
          <div className="flex flex-col gap-y-10 text-white">
            <h3 className="font-bold text-2xl">Pandoshi</h3>
            <h5>Easy-to-Use browser extension</h5>
          </div>
          <div className="w-[30px] h-[30px]">
            <Image
              width={50}
              height={50}
              src={Logo}
              alt="logo.png"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
