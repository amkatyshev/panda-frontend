"use client";
import Image from "next/image";

interface CardBdsmProps {
  img: string;
  name: string;
  profession: string;
}

export default function CardBdsm({ img, name, profession }: CardBdsmProps) {
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

        <div className="flex mt-4 xl:mt-8 xl:mb-5">
          <Image
            src={`./img/team/slash.svg`}
            alt="slash"
            width={18}
            height={64}
            className="mr-2.5 size-max "
          />

          <div className="flex-col">
            <p className="text-2xl xl:text-3xl lg:font-extrabold lg:font-archivo mb-2 xl:mb-3">
              {name}
            </p>
            <p className="text-base xl:text-3xl">{profession}</p>
          </div>
        </div>
      </div>
    </>
  );
}
