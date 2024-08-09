"use client";
import Image from "next/image";

export default function Photos() {
  return (
    <>
      <div className="flex justify-center">
        <div className="absolute sm:w-66 sm:h-43.75 md:w-109 md:h-77 lg:w-158 lg:h-104 xl:w-276 xl:h-194 bg-gray -rotate-8 shadow-2xl"></div>
        <div className="absolute sm:w-66 sm:h-43.75 md:w-109 md:h-77 lg:w-158 lg:h-104 xl:w-276 xl:h-194 bg-gray rotate-7 shadow-2xl"></div>
        <div className="absolute sm:w-66 sm:h-43.75 md:w-109 md:h-77 lg:w-158 lg:h-104 xl:w-276 xl:h-194 bg-gray_light rotate-15 shadow-2xl"></div>
        <div className="absolute">
          <Image
            src={"../../../public/img/team/photo_card.png"}
            alt="photo"
            width={630}
            height={650}
            className="sm:w-66 sm:h-43.75 md:w-109 md:h-77 lg:w-158 lg:h-112 xl:w-276 xl:h-194   "
          />
        </div>
      </div>
    </>
  );
}
