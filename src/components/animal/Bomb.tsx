"use client";
import { useState } from "react";
import Image from "next/image";
import dima from "c:/Users/Я/Desktop/panda-frontend-dev/public/img/animal/dima.png";

export default function Bomb() {
  function blockSсroll() {
    document.body.classList.add("overflow-hidden");
    setImg1("opacity-0");
    setImg2("opacity-0");
    setImg3("opacity-100");
    setPrgrBar1("opacity-40");
    setPrgrBar2(
      "opacity-100 sm:animate-progress_sm md:animate-progress_md lg:animate-progress_lg xl:animate-progress_xl"
    );
    setPrgrBar3("opacity-100");
    setPrgrBar4("opacity-60");
    setAnim1(
      "sm:animate-pers1_sm md:animate-pers1_md lg:animate-pers1_lg xl:animate-pers1_xl"
    );
    setAnim2(
      "sm:animate-pers2_sm md:animate-pers2_md lg:animate-pers2_lg xl:animate-pers2_xl"
    );
    setAnim3(
      "sm:animate-pers3_sm md:animate-pers3_md lg:animate-pers3_lg xl:animate-pers3_xl "
    );
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setImg1("");
      setImg2("");
      setImg3("");
      setAnim1("");
      setAnim2("");
      setAnim3("");
      setPrgrBar1("");
      setPrgrBar2("");
      setPrgrBar3("");
      setPrgrBar4("");
    }, 2000);
  }

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [prgrBar1, setPrgrBar1] = useState("");
  const [prgrBar2, setPrgrBar2] = useState("");
  const [prgrBar3, setPrgrBar3] = useState("");
  const [prgrBar4, setPrgrBar4] = useState("");
  const [anim1, setAnim1] = useState("");
  const [anim2, setAnim2] = useState("");
  const [anim3, setAnim3] = useState("");

  return (
    <div
      className="flex space-y-25.5 
    md:space-y-15 lg:space-y-34 xl:space-y-38,25
    md:space-x-1.5 lg:space-x-1 xl:space-x-6 select-none"
    >
      <div
        onClick={blockSсroll}
        className="group relative grid place-items-center relative size-44 lg:size-71 col-start-1 "
      >
        <Image
          src={`./img/animal/Star_2.svg`}
          alt="Star_2"
          width={176}
          height={176}
          className={"lg:w-71 absolute top-0 " + img2}
        />

        <Image
          src={`../img/animal/Star_1.svg`}
          alt="Star_1"
          width={176}
          height={176}
          className={"lg:w-71 absolute group-hover:opacity-0 top-0 " + img1}
        />
        <Image
          src={`./img/animal/Star_3.svg`}
          alt="Star_3"
          width={176}
          height={176}
          className={"lg:w-71 absolute opacity-0 top-0  " + img3}
        />

        <div
          className={
            "opacity-0 sm:w-25 md:w-30 lg:w-45.25 aspect-square rounded-full bg-black absolute inset-0 sm:bottom-3 md:bottom-0 m-auto " +
            prgrBar1
          }
        ></div>
        <div
          className={
            "opacity-0 border-2 md:border-1 sm:w-25 md:w-30 lg:w-45.25 aspect-square rounded-full bg-black absolute inset-0 sm:bottom-3 md:bottom-0 m-auto " +
            prgrBar2
          }
        ></div>
        <div
          className={
            "opacity-0 sm:w-23.75 md:w-29 lg:w-43.75 aspect-square rounded-full bg-gold absolute inset-0 sm:bottom-3 md:bottom-0 m-auto " +
            prgrBar3
          }
        ></div>
        <div
          className={
            "opacity-0 sm:w-23.75 md:w-29 lg:w-43.75 aspect-square rounded-full bg-red_dark absolute inset-0 sm:bottom-3 md:bottom-0 m-auto " +
            prgrBar4
          }
        ></div>

        <Image
          src={`./img/animal/dino.svg`}
          alt="dino"
          width={867}
          height={976}
          className={
            "absolute sm:bottom-196  md:bottom-149 md:left-112 lg:bottom-196 xl:bottom-200 lg:left-180 " +
            anim1
          }
        />
        <Image
          src={dima}
          alt="dima"
          width={287}
          height={650}
          className={
            "absolute sm:bottom-196 md:bottom-149 lg:bottom-170 xl:bottom-196" +
            anim2
          }
        />
        <Image
          src={`./img/animal/horse.svg`}
          alt="horse"
          width={287}
          height={650}
          className={
            "absolute sm:right-37.5 md:right-35 lg:right-124 xl:right-149 sm:top-98 md:top-98 lg:top-50 " +
            anim3
          }
        />
        <Image
          src={`./img/animal/bomb.svg`}
          alt="bomb"
          width={80}
          height={80}
          className={
            "absolute opacity-100 sm:bottom-3 sm:inset-0 md:inset-0 m-auto lg:w-35 " +
            prgrBar4
          }
        />
      </div>
      <Image
        src={`./img/animal/dont_click.svg`}
        alt="dont_click"
        width={134}
        height={134}
        className="size-34"
      />
    </div>
  );
}
