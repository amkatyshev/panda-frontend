"use client";

import Image from "next/image";
import dima from "c:/Users/Я/Desktop/panda-frontend-dev/public/img/animal/dima.png";

function blockCkroll() {
  document.body.classList.add("overflow-hidden");
}

function starShow() {
  <div className=""></div>;
}

export default function Bomb() {
  return (
    <div
      onClick={blockCkroll}
      className="flex space-y-25,5 
    md:space-y-15 lg:space-y-34 xl:space-y-38,25
    md:space-x-1.5 lg:space-x-1 xl:space-x-6"
    >
      <div className="group relative grid place-items-center relative size-44 lg:size-71 col-start-1 ">
        <Image
          src={`../img/animal/Star_1.svg`}
          alt="Star_1"
          width={176}
          height={176}
          className="absolute top-0 lg:w-71 group-hover:opacity-0 group-active:opacity-0"
        />
        <Image
          src={`./img/animal/Star_2.svg`}
          alt="Star_2"
          width={176}
          height={176}
          className="absolute top-0 lg:w-71 opacity-0 group-hover:opacity-100 group-active:opacity-0"
        />
        <Image
          onClick={starShow}
          src={`./img/animal/Star_3.svg`}
          alt="Star_3"
          width={176}
          height={176}
          className="absolute top-0 lg:w-71 opacity-0 group-active:opacity-100"
        />

        <div className="opacity-0 group-active:opacity-40 sm:w-[100px] md:w-30 lg:w-45.25 aspect-square rounded-full bg-black absolute inset-0 sm:bottom-3 md:bottom-0 m-auto"></div>
        <div
          className="opacity-0 group-active:opacity-100 border-2 md:border-1 sm:w-[100px] md:w-30 lg:w-45.25 aspect-square rounded-full bg-black absolute inset-0 sm:bottom-3 md:bottom-0 m-auto
          sm:group-active:animate-progress_sm md:group-active:animate-progress_md lg:group-active:animate-progress_lg xl:group-active:animate-progress_xl "
        ></div>

        <div className="opacity-0 group-active:opacity-100 sm:w-[96px] md:w-29 lg:w-43.75 aspect-square rounded-full bg-gold absolute inset-0 sm:bottom-3 md:bottom-0 m-auto"></div>
        <div className="opacity-0 group-active:opacity-60 sm:w-[96px] md:w-29 lg:w-43.75 aspect-square rounded-full bg-red_dark absolute inset-0 sm:bottom-3 md:bottom-0 m-auto"></div>

        <Image
          src={`./img/animal/dino.svg`}
          alt="dino"
          width={867}
          height={976}
          className="absolute hidden sm:bottom-196 sm:left-41 md:bottom-149 md:left-112 lg:bottom-196 xl:bottom-200 lg:left-180 group-active:block
          sm:group-active:animate-pers1_sm md:group-active:animate-pers1_md lg:group-active:animate-pers1_lg xl:group-active:animate-pers1_xl"
        />

        <Image
          src={dima}
          alt="dima"
          width={287}
          height={650}
          className="absolute hidden sm:bottom-196 md:bottom-149 lg:bottom-170 xl:bottom-196  group-active:block 
          sm:group-active:animate-pers2_sm md:group-active:animate-pers2_md lg:group-active:animate-pers2_lg xl:group-active:animate-pers2_xl"
        />

        <Image
          src={`./img/animal/horse.svg`}
          alt="horse"
          width={287}
          height={650}
          className="absolute sm:right-37.5 md:right-35 lg:right-124 xl:right-149 sm:top-98 md:top-98 lg:top-50 group-active:block 
          sm:group-active:animate-pers3_sm md:group-active:animate-pers3_md lg:group-active:animate-pers3_lg xl:group-active:animate-pers3_xl "
        />

        <Image
          src={`./img/animal/bomb.svg`}
          alt="bomb"
          width={80}
          height={80}
          className="absolute sm:bottom-3 sm:inset-0 md:inset-0 m-auto group-active:opacity-60
          lg:w-35"
        />
      </div>
      <Image
        src={`./img/animal/dont_click.svg`}
        alt="dont_click"
        width={134}
        height={134}
        className="size-34"
      />
    </div>
  );
}
