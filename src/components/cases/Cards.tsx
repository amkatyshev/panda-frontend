"use client";

import Image from "next/image";


interface CardsProps {
  name_btn: string;
  name: string;
  description: string;
}

export default function Cards({ name_btn, name, description }: CardsProps) {
  return (
    <div className="group flex flex-col mx-1.5">
      <div className="relative group cursor-pointer">
        <Image
          src={`./img/cases/confbar.svg`}
          alt="confbar"
          className="relative group-hover:brightness-75"
          width={750}
          height={800}
        />
        <Image
          src={`./img/cases/strela_ov_card.svg`}
          alt="strela_ov_card"
          className="group absolute inset-0 m-auto opacity-0 group-hover:opacity-100 sm:w-18 md:w-19 lg:w-34"
          width={132}
          height={132}
        />
      </div>

      <p
        className="bg-gold rounded-lg absolute p-2 m-4 md:m-5 lg:m-6 xl:m-8 font-inter font-medium group-hover:opacity-0 max-w-64 md:max-w-76 lg:max-w-112 xl:max-w-170
        sm:text-base 
        md:h-10
        xl:text-2xl xl:h-12 truncate "
      >
        {name_btn}
      </p>
      <h2 className="cursor-pointer text-2xl md:text-4xxl font-archivo uppercase font-extrabold mt-2 lg:mt-4 xl:mt-3">
        {name}
      </h2>
      <h3 className="cursor-default font-inter text-base line-clamp-3">
        {description}
      </h3>
    </div>
  );
}