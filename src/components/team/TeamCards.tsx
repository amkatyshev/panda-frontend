"use client";
import Image from "next/image";

interface TeamCardsProps {
  img: string;
  name: string;
  profession: string;
}

export default function TeamCards({ img, name, profession }: TeamCardsProps) {
  return (
    <>
      <div className="">
        <Image
          src={img}
          alt="img"
          width={1027}
          height={516}
          className="w-75 h-88.5 lg:w-104 lg:h-124 xl:w-165 xl:h-194"
        />

        <div className="flex-col mt-4 xl:mt-8 xl:mb-5 text-white">
          <p className="text-2xl xl:text-3xl lg:font-extrabold lg:font-archivo mb-2 xl:mb-3">
            {name}
          </p>
          <p className="text-base xl:text-3xl">{profession}</p>
        </div>
      </div>
    </>
  );
}
