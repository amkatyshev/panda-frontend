import React, { Fragment } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Bomb from "@/components/animal/Bomb";
import SeeAll from '@/components/animal/SeeAll';

import panda from "c:/Users/Я/Desktop/panda-frontend-dev/public/img/animal/panda.png";

export default function Team() {
  return (
    <>
      <Header color={false} />
      <div className="flex justify-center">
        <div
          className="container mt-8 md:mt-7.5
            lg:mt-22.5 xl:mt-45.25 
            mx-2.5 md:mx-6 lg:mx-22.5 xl:mx-50"
        >
          <div className="relative">
            <h1
              className=" font-archivo font-black leading-14 
              text-5xxll md:text-5xxxl xl:text-8xxl  
              "
            >
              Animal friendly
            </h1>
            <Image
              src={panda}
              alt="panda"
              className="absolute -top-3 left-19.5 select-none
                sm:size-17
                md:left-19.5 md:size-22 md:-top-6
                xl:left-42.5 xl:size-39 xl:-top-15 "
            />
          </div>
          <div className="mt-5 xl:mt-10">
            <a className="mt-5 leading-6 font-inter text-base">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
              мы использовали небезизвестный универсальный код речей. Текст
              генерируется абзацами случайным образом от двух до десяти
              предложений в абзаце, что позволяет сделать текст более
              привлекательным и живым для визуально-слухового восприятия.
            </a>
          </div>

          <div className="md:grid grid-cols-2">
            <div className="md:mt-13 lg:mt-4 xl:mt-22.5 col-start-1 flex justify-center">
              <Bomb />
            </div>

            <div className="col-start-2 flex-col justify-self-center">
              <a
                className="text-4 leading-6 font-inter md:w-98 lg:w-124 xl:w-188
                md:mt-4 xl:mt-5"
              >
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленного текста
                рыбы на русском языке, а начинающему оратору отточить навык
                публичных выступлений в домашних условиях. При создании
                генератора мы использовали небезизвестный универсальный код
                речей. Текст генерируется абзацами случайным образом от двух до
                десяти предложений в абзаце, что позволяет сделать текст более
                привлекательным и живым для визуально-слухового восприятия.
              </a>

              <div className="md:grid justify-items-end select-none">
                <SeeAll />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
