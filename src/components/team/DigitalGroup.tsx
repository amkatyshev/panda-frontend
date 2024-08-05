"use client";
import Image from "next/image";

export default function DigitalGroup() {
  return (
    <div className="relative overflow-hidden bg-white shadow-2xl">
      <div
        className="flex items-center animate-DigGr whitespace-nowrap 
      sm:h-27 md:h-43.75 xl:h-70"
      >
        <span className="sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto uppercase font-archivo font-extrabold sm:text-7xl md:text-8xxl xl:text-58xl">
          DIGITAL
        </span>
        <Image
          src={`./img/team/dot.svg`}
          alt="dot"
          width={80}
          height={80}
          className="sm:size-16 md:size-19.5 sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto "
        />
        <span className="sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto uppercase font-archivo font-extrabold sm:text-7xl md:text-8xxl xl:text-58xl">
          GROUP
        </span>
        <Image
          src={`./img/team/dot.svg`}
          alt="dot"
          width={80}
          height={80}
          className="sm:size-16 md:size-19.5 sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto"
        />
      </div>

      <div className="flex items-center absolute animate-DigGr2 whitespace-nowrap uppercase font-archivo font-extrabold sm:ml-10 sm:text-7xl md:text-8xxl xl:text-58xl">
        <span className="sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto uppercase font-archivo font-extrabold sm:text-7xl md:text-8xxl xl:text-58xl">
          DIGITAL
        </span>
        <Image
          src={`./img/team/dot.svg`}
          alt="dot"
          width={80}
          height={80}
          className="sm:size-16 md:size-19.5 sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto"
        />
        <span className="sm:size-16 md:size-19.5 sm:mx-9 sm:mx-14 lg:mx-4 xl:mx-2.5 my-auto uppercase font-archivo font-extrabold sm:text-7xl md:text-8xxl xl:text-58xl">
          GROUP
        </span>
        <Image
          src={`./img/team/dot.svg`}
          alt="dot"
          width={80}
          height={80}
          className="sm:size-16 md:size-19.5 sm:mx-9 lg:mx-4 xl:mx-2.5 my-auto"
        />
      </div>
    </div>
  );
}
