"use client";

import Image from "next/image";

function ConnectColor({ color }: { color: boolean }) {
  if (color) {
    return (
      <Image
        src={`./img/Header/strela_yellow.svg`}
        alt="strela"
        width={37}
        height={37}
        className="group-hover:rotate-180 transition-transform"
      />
    );
  }
  return (
    <Image
      src={`./img/Header/strela_white.svg`}
      alt="strela"
      width={37}
      height={37}
      className="group-hover:rotate-180 transition-transform"
    />
  );
}

export default function Header({ color }: { color: boolean }) {
  return (
    <div className="flex justify-center mx-2.5 md:mx-6 lg:mx-22.5 xl:mx-50 h-16 md:h-20 xl:h-21">
      <div className="container w-full xl:h-21 items-center grid grid-cols-2 place-content-center gap-x-5.5">
        <Image
          src={`./img/Header/Logo.svg`}
          alt="logo"
          width={112}
          height={28}
          className="col-start-1 xl:w-48 xl:h-12 md:w-28 md:h-7 xl:w-48 xl:h-12"
        />
        <button
          className="group flex items-center justify-between border-[2px] rounded-full col-start-2 justify-self-end 
          sm:w-40 sm:h-12 md:w-41 md:h-12 lg:w-41 lg:h-12 xl:w-50 xl:h-13"
        >
          <span className="font-normal lg:font-medium font-inter text-xl xl:text-2xl mb-1 ml-4 xl:ml-5">
            Связаться
          </span>

          <div className="mr-1 xl:mr-2">
            <ConnectColor color={color} />
          </div>
        </button>
      </div>
    </div>
  );
}