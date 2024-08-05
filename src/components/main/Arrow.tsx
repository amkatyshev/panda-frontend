"use client";
import Image from "next/image";

export default function Arrow() {
  return (
    <div className="">
      <Image
        src={`./img/main/arrow_md.svg`}
        alt="arrow"
        width={110}
        height={36}
        className="hidden md:block lg:hidden"
      />

      <Image
        src={`./img/main/arrow_lg.svg`}
        alt="arrow"
        width={299}
        height={52}
        className="hidden lg:block xl:hidden"
      />

      <Image
        src={`./img/main/arrow_xl.svg`}
        alt="arrow"
        width={299}
        height={52}
        className="hidden xl:block"
      />
    </div>
  );
}
