import React, { Fragment } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Arrow from '@/components/main/Arrow';
import Bdsm from "@/components/main/Bdsm";
import ChangeReality from '@/components/main/ChangeReality';
import ThisIsOur from '@/components/main/ThisIsOur';
import WeAreACreative from "@/components/main/WeAreACreative";
import Scroll from '@/components/main/Scroll';
import PurpleBtn from '@/components/PurpleBtn';



export default function Main() {
  return (
    <>
      <Header color={false}/>
      <div className="flex justify-center mx-2.5 md:mx-6 lg:mx-22.5 xl:mx-50">
        <div className="container mt-18 md:mt-50 lg:mt-18 xl:mt-17 relative ">
          <div className="flex justify-end">
            <Image
              src={`./img/main/we_know.svg`}
              alt="we_know"
              width={300}
              height={26}
              className="md:w-180 md:h-16 lg:w-177 lg:h-15.5 xl:w-290 xl:h-25"
            />
          </div>

          <div className="absolute flex justify-between items-center sm:top-[20px] md:top-[55px] lg:top-[45px] xl:top-[80px]">
            <ChangeReality />
          </div>

          <div className="flex xl:justify-start sm:justify-end items-center sm:mt-[35px] md:mt-[80px] lg:mt-[78px] xl:mt-[145px]">
            <ThisIsOur />
          </div>

          <div
            className=" md:flex md:items-center" /*mt-6 md:mt-12 lg:mt-8 xl:mt-14*/
          >
            <Image
              src={`./img/main/VOCATION.svg`}
              alt="VOCATION"
              width={301}
              height={54}
              className="md:w-88.5 md:h-15 lg:w-124 lg:h-19 xl:w-196 xl:h-35 col-span-1"
            />
            <div className=" place-self-center mx-8">
              <Arrow />
            </div>
            <div className="sm:mt-3 md:mt-0 place-self-center">
              <PurpleBtn name={"Want change"} />
            </div>
          </div>
        </div>
      </div>
      

      <div className="flex justify-between items-end absolute bottom-0">
        <Bdsm />
      </div>
      <button className="mr-[10px] mb-17 md:mr-6 md:mb-16 lg:mr-15 lg:mb-18.5 xl:mr-12 xl:mb-25 absolute bottom-0 right-0">
        <Scroll />
      </button>
      <div className="absolute bottom-0">
        <WeAreACreative />
      </div>
    </>
  );
}
