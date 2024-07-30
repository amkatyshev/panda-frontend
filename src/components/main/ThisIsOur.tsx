"use client";
import Image from "next/image";

export default function ThisIsOur() {
  return (
    <div
      className="flex items-center xl:justify-start" /*mt-5.5 md:mt-14 lg:mt-9 xl:mt-14*/
    >
      <a className="font-inter justify-between text-base leading-6 hidden xl:block ">
        <p>“Our hearts demand change </p>
        <p>Our eyes demand change In our laughter</p>
        <p>and in our tears and in the throbbing of our veins Change, we are</p>
        <p>waiting for change”</p>
      </a>
      <Image
        src={`./img/main/this_is_our.svg`}
        alt="this_is_our"
        width={290}
        height={30}
        className="sm:hidden md:block md:w-[723px] md:h-[131px] lg:w-[723px] lg:h-[131px] xl:w-[1048px] xl:h-[191px]"
      />
      <Image
        src={`./img/main/this_is_our_sm.svg`}
        alt="this_is_our"
        width={290}
        height={30}
        className="sm:block md:hidden  "
      />
    </div>
  );
}
