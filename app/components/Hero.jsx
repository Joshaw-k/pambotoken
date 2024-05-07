import Image from "next/image";
import React from "react";
import Logo from "../assets/hero-image-5.png";
import Buttons from "./Buttons";
import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="w-[98%] md:w-[90%] mx-auto text-center py-6">
      <h2 className="font-[1000] text-6xl mb-5 md:text-[6rem] text-center text-[#1C1D20] font-Anta">
        Pandoshi
      </h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="">
          <div className="w-fit mx-auto">
            <svg
              class="panda"
              viewBox="0 0 319.01019 223.16049"
              preserveAspectRatio="xMinYMin"
            >
              <g transform="translate(27.242913,-815.78013)" id="layer1">
                <g id="g4222">
                  <path
                    style={{
                      opacity: 1,
                      fill: "#ffffff",
                      "fill-opacity": 1,
                      stroke: "#000000",
                      "stroke-width": 3,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                      "stroke-dasharray": "none",
                      "stroke-opacity": 1,
                    }}
                    d="M 123.47579,99.788805 C 70.999645,100.27156 30.49513,134.00241 20.460938,171.45117 c -0.07341,0.32753 -0.144371,0.65567 -0.212891,0.98438 l 253.980473,68.05468 c 0.11178,-0.31762 0.22116,-0.63598 0.32812,-0.95507 -3.37938,-52.83531 -33.56103,-114.78104 -103.72772,-133.58228 -15.74793,-4.21933 -31.58286,-6.309538 -47.35313,-6.164075 z"
                    transform="translate(0,752.36216)"
                    id="path4138"
                  ></path>
                  <ellipse
                    style={{
                      opacity: 1,
                      fill: "#000000",
                      "fill-opacity": 1,
                      stroke: "none",
                      "stroke-width": 10,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                      "stroke-dasharray": "none",
                      "stroke-opacity": 1,
                    }}
                    id="path4149"
                    cx="359.91046"
                    cy="868.42615"
                    rx="16.725821"
                    ry="8.973033"
                    transform="matrix(0.96291738,0.26979644,-0.24822638,0.96870205,0,0)"
                  ></ellipse>
                  <g id="g4175" transform="translate(-0.67264574,12.107623)">
                    <ellipse
                      transform="matrix(0.96592583,-0.25881905,0.25881905,0.96592583,0,0)"
                      ry="21.524664"
                      rx="27.746635"
                      cy="896.90204"
                      cx="-139.17584"
                      id="path4161"
                      style={{
                        opacity: 1,
                        fill: "#000000",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                    ></ellipse>
                    <circle
                      r="5"
                      cy="911.15143"
                      cx="96.47982"
                      id="path4167"
                      style={{
                        opacity: 1,
                        fill: "#ffffff",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                    ></circle>
                  </g>
                  <g id="g4171" transform="translate(15.134529,15.470851)">
                    <ellipse
                      style={{
                        opacity: 1,
                        fill: "#000000;",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "4",
                        "stroke-dasharray": "none;",
                        "stroke-opacity": 1,
                      }}
                      id="ellipse4165"
                      cx="-770.41119"
                      cy="536.63788"
                      rx="27.746635"
                      ry="21.524664"
                      transform="matrix(-0.70710678,-0.70710678,-0.70710678,0.70710678,0,0)"
                    ></ellipse>
                    <circle
                      style={{
                        opacity: 1,
                        fill: "#ffffff",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                      id="circle4169"
                      cx="154.66368"
                      cy="929.31287"
                      r="5"
                    ></circle>
                  </g>
                  <path
                    style={{
                      opacity: 1,
                      fill: "#000000",
                      "fill-opacity": 1,
                      stroke: "none",
                      "stroke-width": 11.11824894,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                      "stroke-dasharray": "none",
                      "stroke-opacity": 1,
                    }}
                    d="m 112.08398,815.78013 a 25,25 0 0 0 -24.999996,25 25,25 0 0 0 5.550782,15.69336 c 9.663184,-2.68167 19.991444,-4.22245 30.841794,-4.32227 3.57198,-0.0329 7.14581,0.0548 10.72266,0.25 a 25,25 0 0 0 2.88476,-11.62109 25,25 0 0 0 -25,-25 z"
                    id="path4145"
                  ></path>
                  <path
                    style={{
                      opacity: 1,
                      fill: "#000000",
                      "fill-opacity": 1,
                      stroke: "none",
                      "stroke-width": 15,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                      "stroke-dasharray": "none",
                      "stroke-opacity": 1,
                    }}
                    d="m 240.91992,862.11607 a 25,25 0 0 0 -24.01562,18.125 c 12.0605,8.90778 22.04335,19.50643 30.12695,31.09179 a 25,25 0 0 0 18.88867,-24.21679 25,25 0 0 0 -25,-25 z"
                    id="path4198"
                  ></path>
                </g>
              </g>
              <g transform="translate(27.242913,-63.41797)" id="layer2">
                <g class="panda__paw panda__paw--left" id="g4567">
                  <g
                    id="g4258"
                    transform="translate(-198.57651,-806.06781)"
                    style={{ opacity: 1 }}
                  >
                    <path
                      id="path4260"
                      d="m 228.90463,923.66963 a 36.827354,21.356503 79.346212 0 0 -2.13086,0.21289 36.827354,21.356503 79.346212 0 0 -14.17968,40.14062 36.827354,21.356503 79.346212 0 0 5.02148,15.24024 l 33.16992,8.88867 a 36.827354,21.356503 79.346212 0 0 3.78516,-32.02539 36.827354,21.356503 79.346212 0 0 -25.66602,-32.45703 z"
                      style={{
                        opacity: 1,
                        fill: "#000000",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                    ></path>
                    <circle
                      style={{
                        opacity: 1,
                        fill: "#ffaaaa",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                      id="circle4262"
                      cx="231.88249"
                      cy="951.51636"
                      r="10"
                    ></circle>
                    <circle
                      style={{
                        opacity: 1,
                        fill: "#ffaaaa",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                      id="circle4264"
                      cx="227.71193"
                      cy="934.75916"
                      r="2.5"
                    ></circle>
                    <circle
                      r="2.5"
                      cy="936.18604"
                      cx="236.51112"
                      id="circle4266"
                      style={{
                        opacity: 1,
                        fill: "#ffaaaa",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                    ></circle>
                    <circle
                      style={{
                        opacity: 1,
                        fill: "#ffaaaa",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 15,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": 4,
                        "stroke-dasharray": "none",
                        "stroke-opacity": 1,
                      }}
                      id="circle4268"
                      cx="220.57744"
                      cy="940.46674"
                      r="2.5"
                    ></circle>
                  </g>
                  <g
                    id="g4472"
                    transform="matrix(0.94277935,-0.3334173,0.3334173,0.94277935,-41.21949,7.0330013)"
                  >
                    <g transform="translate(0,-0.11890809)" id="g4444">
                      <rect
                        style={{
                          opacity: 1,
                          fill: "#66ff00",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                        id="rect4440"
                        width="17.122164"
                        height="8.0175457"
                        x="-2.4852705"
                        y="143.95575"
                      ></rect>
                      <rect
                        y="149.0688"
                        x="-2.4852705"
                        height="2.9044979"
                        width="17.122164"
                        id="rect4442"
                        style={{
                          opacity: 1,
                          fill: "#55d400",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                      ></rect>
                    </g>
                    <g transform="translate(17.722023,-0.11890809)" id="g4448">
                      <rect
                        y="143.95575"
                        x="-2.4852705"
                        height="8.0175457"
                        width="17.122164"
                        id="rect4450"
                        style={{
                          opacity: 1,
                          fill: "#66ff00",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                      ></rect>
                      <rect
                        style={{
                          opacity: 1,
                          fill: "#55d400",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                        id="rect4452"
                        width="17.122164"
                        height="2.9044979"
                        x="-2.4852705"
                        y="149.0688"
                      ></rect>
                    </g>
                    <g id="g4454" transform="translate(35.344023,-0.11890809)">
                      <rect
                        style={{
                          opacity: 1,
                          fill: "#66ff00",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                        id="rect4456"
                        width="17.122164"
                        height="8.0175457"
                        x="-2.4852705"
                        y="143.95575"
                      ></rect>
                      <rect
                        y="149.0688"
                        x="-2.4852705"
                        height="2.9044979"
                        width="17.122164"
                        id="rect4458"
                        style={{
                          opacity: 1,
                          fill: "#55d400",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                      ></rect>
                    </g>
                    <g transform="translate(52.966023,-0.11890809)" id="g4460">
                      <rect
                        y="143.95575"
                        x="-2.4852705"
                        height="8.0175457"
                        width="17.122164"
                        id="rect4462"
                        style={{
                          opacity: 1,
                          fill: "#66ff00",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                      ></rect>
                      <rect
                        style={{
                          opacity: 1,
                          fill: "#55d400",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                        id="rect4464"
                        width="17.122164"
                        height="2.9044979"
                        x="-2.4852705"
                        y="149.0688"
                      ></rect>
                    </g>
                    <g id="g4466" transform="translate(70.588023,-0.11890809)">
                      <rect
                        style={{
                          opacity: 1,
                          fill: "#66ff00",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                        id="rect4468"
                        width="17.122164"
                        height="8.0175457"
                        x="-2.4852705"
                        y="143.95575"
                      ></rect>
                      <rect
                        y="149.0688"
                        x="-2.4852705"
                        height="2.9044979"
                        width="17.122164"
                        id="rect4470"
                        style={{
                          opacity: 1,
                          fill: "#55d400",
                          "fill-opacity": 1,
                          stroke: "none",
                          "stroke-width": 3,
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 4,
                          "stroke-dasharray": "none",
                          "stroke-opacity": 1,
                        }}
                      ></rect>
                    </g>
                  </g>
                </g>
              </g>
              <g transform="translate(27.242913,-63.41797)" id="layer3"></g>

              <g
                class="panda__paw panda__paw--right-down panda__paw--hidden"
                transform="translate(13.322665,0)"
                id="g4910"
              >
                <path
                  transform="translate(13.920248,-63.41797)"
                  id="path4285"
                  d="m 188.60288,260.96193 c -0.47928,-0.53664 -0.90823,-1.10833 -1.28523,-1.71292 -6.23832,-10.00994 8.64616,-29.03536 19.95817,-37.60325 7.44973,-5.64254 18.49428,-8.77936 27.39901,-5.94343 7.63111,2.43031 16.0875,9.72596 16.21034,17.73378 0.16488,10.74817 -10.49332,17.89554 -21.01735,24.45862 -16.05208,10.00416 -33.88888,11.32996 -41.26494,3.0672 z"
                  style={{
                    display: "inline",
                    opacity: 1,
                    fill: "#000000",
                    "fill-opacity": 1,
                    stroke: "none",
                    "stroke-width": 15,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 4,
                    "stroke-dasharray": "none",
                    "stroke-opacity": 1,
                  }}
                ></path>
                <rect
                  ry="2.3734527"
                  y="76.925354"
                  x="277.33405"
                  height="15.596974"
                  width="4.7469053"
                  id="rect4862"
                  style={{
                    opacity: 1,
                    fill: "#ff2a2a",
                    "fill-opacity": 1,
                    stroke: "none",
                    "stroke-width": 3,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 4,
                    "stroke-dasharray": "none",
                    "stroke-opacity": 1,
                  }}
                  transform="matrix(0.87020846,0.49268371,-0.49268371,0.87020846,0,0)"
                ></rect>
                <rect
                  transform="matrix(0.32671656,0.94512237,-0.94512237,0.32671656,0,0)"
                  style={{
                    opacity: 1,
                    fill: "#ff2a2a",
                    "fill-opacity": 1,
                    stroke: "none",
                    "stroke-width": 3,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 4,
                    "stroke-dasharray": "none",
                    "stroke-opacity": 1,
                  }}
                  id="rect4864"
                  width="4.7469053"
                  height="15.596974"
                  x="248.64572"
                  y="-121.71169"
                  ry="2.3734527"
                ></rect>
                <rect
                  transform="matrix(0.99835797,-0.05728312,0.05728312,0.99835797,0,0)"
                  style={{
                    opacity: 1,
                    fill: "#ff2a2a",
                    "fill-opacity": 1,
                    stroke: "none",
                    "stroke-width": 3,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 4,
                    "stroke-dasharray": "none",
                    "stroke-opacity": 1,
                  }}
                  id="rect4866"
                  width="4.7469053"
                  height="15.596974"
                  x="203.8541"
                  y="219.75934"
                  ry="2.3734527"
                ></rect>
              </g>
            </svg>
          </div>
          <div className="bg-[#1C1D20] px-0.5 pt-0.5 pb-4 rounded-t-[2.5rem] rounded-b-[2.5rem]">
            <div className="bg-[#FFA98D] max-w-[80rem] px-5 md:px-10 lg:px-20 pb-16 rounded-[2.5rem]">
              <h2 className="font-bold text-4xl py-7 font-Anta">
                Presale has Ended! 🎉
              </h2>
              <div>
                <p className="pb-3">
                  <span className="font-bold">Pandoshi</span>'s Presale has
                  officially concluded, and we couldn't have achieved this
                  without you! A massive thank you to each and every one of our
                  investors for believing in us. As we move forward, make sure
                  to follow our social media channels to stay updated on the
                  project, including product launches and our listings on both
                  CEX and DEX platforms.
                </p>
                <p className="pb-3">
                  Meanwhile, we ask investors to double-check their token
                  amounts on our leaderboard and notify us through our social
                  media channels or email at:{" "}
                  <span className="font-bold">info@pandoshi.com</span> if any
                  discrepancies are found. The tokens will be airdropped to the
                  same wallet used for purchase before we list on exchanges, so
                  there's no need to worry about not receiving your tokens.
                  Please refrain from requesting token transfers to a different
                  wallet, as we will not accommodate such requests. The
                  adventure is just beginning!🚀
                </p>
                <p>
                  <span className="font-bold">NOTE:</span> Please be aware that
                  there will not be a Claim phase. Should any individual or
                  website suggest otherwise, it is an attempt to scam you.
                </p>
              </div>
              <div className="grid gap-y-6 mt-6">
                <Link
                  href="https://etherscan.io/token/0x60A109c9aeeB38AD7E033B561F1CF7B356A64F2A"
                  className="flex items-center justify-center gap-x-1 hover:text-slate-300"
                >
                  <h5 className="font-bold">TOKEN ADDRESS</h5>
                  <RiExternalLinkFill className="text-2xl" />
                </Link>
                <Buttons text={"Check Eligibility"} />
                <Buttons text={"Claim $PAMBO"} />
              </div>
            </div>
          </div>
        </div>
        <Image
          width={600}
          height={600}
          alt=""
          src={Logo}
          className="w-[100rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
