"use client";
import Image from "next/image";

export default function WeAreACreative() {
  return (
    <div className="relative flex items-center overflow-hidden border-4  w-screen h-9 md:h-10 lg:h-[52px]">
      <div className="flex animate-marquee whitespace-nowrap uppercase font-archivo font-extrabold text-base lg:text-2xl leading-8 py-10">
        <span className="text-4xl mx-4">we are a creative digital agency</span>
        <Image
          src={`./img/main/Star_red_main.svg`}
          alt="Star_red_main"
          width={28}
          height={28}
          className="mx-4"
        />
        <span className="text-4xl mx-4">we are a creative digital agency</span>
        <Image
          src={`./img/main/Star_red_main.svg`}
          alt="Star_red_main"
          width={28}
          height={28}
          className=""
        />
        <span className="text-4xl mx-5 ">
          we are a creative digital agency
        </span>
        <Image
          src={`./img/main/Star_red_main.svg`}
          alt="Star_red_main"
          width={28}
          height={28}
          className="mr-6"
        />
      </div>

      <div className="flex items-center absolute animate-marquee2 whitespace-nowrap uppercase font-archivo font-extrabold text-base lg:text-2xl leading-8">
        <span className="text-4xl mx-4 ml-19.5">
          we are a creative digital agency
        </span>
        <Image
          src={`./img/main/Star_red_main.svg`}
          alt="Star_red_main"
          width={28}
          height={28}
          className=""
        />
        <span className="text-4xl mx-4">we are a creative digital agency</span>
        <Image
          src={`./img/main/Star_red_main.svg`}
          alt="Star_red_main"
          width={28}
          height={28}
          className=""
        />
        <span className="text-4xl mx-4">we are a creative digital agency</span>
        <Image
          src={`./img/main/Star_red_main.svg`}
          alt="Star_red_main"
          width={28}
          height={28}
          className="mx-4"
        />
      </div>
    </div>
  );
}
