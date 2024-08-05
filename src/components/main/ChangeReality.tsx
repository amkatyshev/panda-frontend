"use client";
import Image from "next/image";

export default function ChangeReality() {
  return (
    <div className="">
      <Image
        src={`./img/main/CHANGE_REALITY_sm.svg`}
        alt="CHANGE_REALITY"
        width={315}
        height={40}
        className="sm:block md:hidden"
      />
      <Image
        src={`./img/main/CHANGE_REALITY_md.svg`}
        alt="CHANGE_REALITY"
        width={757}
        height={95}
        className="hidden md:block lg:hidden"
      />
      <Image
        src={`./img/main/CHANGE_REALITY_lg.svg`}
        alt="CHANGE_REALITY"
        width={1034}
        height={101}
        className="hidden lg:block xl:hidden"
      />
      <Image
        src={`./img/main/CHANGE_REALITY_xl.svg`}
        alt="CHANGE_REALITY"
        width={1592}
        height={202}
        className=" hidden xl:block "
      />
    </div>
  );
}
